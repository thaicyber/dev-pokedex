/* ------------------------------------------------------ */
/*                         Import                         */
/* ------------------------------------------------------ */
/* ---------------------- external ---------------------- */
import { connect } from 'react-redux';
// import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import ScrollUpButton from 'react-scroll-up-button';

/* ---------------------- internal ---------------------- */
import { getPokemonsRequested } from '@/redux/actions/pokemon.actions';
import {
  selectIsLoading,
  filteredPokemons
} from '@/redux/selectors/pokemon.selectors';
import Card from '@/components/card';

/* ------------------------------------------------------ */
/*                     React Component                    */
/* ------------------------------------------------------ */
const IndexPage = ({ isLoading, pokemons }) => {
  // render dimmer loader if is loading (true by default)
  if (isLoading) {
    return (
      <div className='ui active inverted dimmer'>
        <div className='ui text loader'>Loading...</div>
      </div>
    );
  }

  // message if search returns empty list
  if (pokemons.length === 0) {
    return (
      <div className='ui negative message'>
        <div className='header'>Sorry no pokemon found</div>
        <p>Try again!</p>
      </div>
    );
  }

  return (
    <>
      <ScrollUpButton />
      <div className='ui grid'>
        {pokemons.map(({ order, name, imageURL, types }) => (
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
  pokemons: filteredPokemons(state),
  isLoading: selectIsLoading(state)
});

/* ------------------------------------------------------ */
/*                         Export                         */
/* ------------------------------------------------------ */
export default connect(mapStateToProps)(IndexPage);
