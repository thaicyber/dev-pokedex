/* ------------------------------------------------------ */
/*                         Import                         */
/* ------------------------------------------------------ */
/* ---------------------- external ---------------------- */
import { connect } from 'react-redux';
import ScrollUpButton from 'react-scroll-up-button';

/* ---------------------- internal ---------------------- */
import {
  getPokemonsRequested,
  showMorePokemons
} from '@/redux/actions/pokemon.actions';
import {
  selectIsLoading,
  selectPage,
  filteredPokemons
} from '@/redux/selectors/pokemon.selectors';
import Card from '@/components/card';

/* ------------------------------------------------------ */
/*                     React Component                    */
/* ------------------------------------------------------ */
const IndexPage = ({ isLoading, filteredPokemons, page, showMorePokemons }) => {
  // render dimmer loader if is loading (true by default)
  if (isLoading) {
    return (
      <div className='ui active inverted dimmer'>
        <div className='ui text loader'>Loading...</div>
      </div>
    );
  }

  // message if search returns empty list
  if (filteredPokemons.length === 0) {
    return (
      <div className='ui negative message'>
        <div className='header'>Sorry no pokemon found</div>
        <p>Try again!</p>
      </div>
    );
  }

  // infinite scroll
  const handleScroll = React.useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.getElementById('__next').offsetHeight
    )
      return;
    if (page > 15) return;
    showMorePokemons();
  }, [showMorePokemons, page]);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      <ScrollUpButton />
      <div className='ui grid'>
        {filteredPokemons.map(({ order, name, imageURL, types }) => (
          <Card key={order} name={name} imageURL={imageURL} types={types} />
        ))}
      </div>
    </>
  );
};

/* ------------------------------------------------------ */
/*        Next.js Server-Side Client-Side Rendering       */
/* ------------------------------------------------------ */
IndexPage.getInitialProps = async (props) => {
  // get store from context (Redux wrapper)
  const { store } = props.ctx;

  // run saga if empty state (SSR and CSR)
  if (!store.getState().pokemonReducer.pokemons.length) {
    store.dispatch(getPokemonsRequested());
  }

  return {};
};

/* ------------------------------------------------------ */
/*           Access to Redux Store (Client-Side)          */
/* ------------------------------------------------------ */
const mapStateToProps = (state) => ({
  filteredPokemons: filteredPokemons(state),
  page: selectPage(state),
  isLoading: selectIsLoading(state)
});

/* ------------------------------------------------------ */
/*                         Export                         */
/* ------------------------------------------------------ */
export default connect(mapStateToProps, { showMorePokemons })(IndexPage);
