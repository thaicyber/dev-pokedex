/* ------------------------------------------------------ */
/*                         Import                         */
/* ------------------------------------------------------ */
/* ---------------------- external ---------------------- */
import { connect } from 'react-redux';
/* ---------------------- internal ---------------------- */
import { getPokemonRequested } from '@/redux/actions/pokemon.actions';
import {
  selectIsLoading,
  selectSelectedPokemon
} from '@/redux/selectors/pokemon.selectors';
import { colorMap } from '@/helpers';
import Description from '@/components/description';
import RadarChart from '@/components/radar-chart';
import Stats from '@/components/stats';

/* ------------------------------------------------------ */
/*                     React Component                    */
/* ------------------------------------------------------ */
const ShowPage = ({ isLoading, selectedPokemon }) => {
  // render dimmer loader if is loading (true by default)
  if (isLoading) {
    return (
      <div className='ui active inverted dimmer'>
        <div className='ui text loader'>Loading...</div>
      </div>
    );
  }

  const {
    order,
    name,
    types,
    abilities,
    height,
    weight,
    imageURL,
    stats
  } = selectedPokemon;

  return (
    <>
      <div className='ui grid'>
        <div className='sixteen wide mobile height wide tablet height wide computer middle aligned center aligned column'>
          <div className='ui image'>
            <img
              src={imageURL}
              alt='pokemon image'
              style={{ height: '300px' }}
            />
          </div>
        </div>

        <div className='sixteen wide mobile height wide tablet height wide computer middle aligned column'>
          <Description
            order={order}
            name={name}
            types={types}
            abilities={abilities}
            height={height}
            weight={weight}
          />
        </div>
      </div>

      <div className='ui grid'>
        <div className='sixteen wide mobile height wide tablet height wide computer middle aligned center aligned column'>
          <RadarChart stats={stats} color={colorMap[types[0]]} />
        </div>

        <div className='sixteen wide mobile height wide tablet height wide computer middle aligned column'>
          <Stats stats={stats} />
        </div>
      </div>
    </>
  );
};

/* ------------------------------------------------------ */
/*        Next.js Server-Side Client-Side Rendering       */
/* ------------------------------------------------------ */
ShowPage.getInitialProps = async (props) => {
  // get store and query from context (Redux wrapper)
  const {
    store,
    query: { name }
  } = props.ctx;

  // run saga if 1) empty state (SSR) or 2) state changed (CSR)
  if (
    !store.getState().pokemonReducer.selectedPokemon ||
    store.getState().pokemonReducer.selectedPokemon.name !== name
  ) {
    store.dispatch(getPokemonRequested(name));
  }

  return {};
};

/* ------------------------------------------------------ */
/*           Access to Redux Store (Client-Side)          */
/* ------------------------------------------------------ */
const mapStateToProps = (state) => ({
  selectedPokemon: selectSelectedPokemon(state),
  isLoading: selectIsLoading(state)
});

/* ------------------------------------------------------ */
/*                         Export                         */
/* ------------------------------------------------------ */
export default connect(mapStateToProps)(ShowPage);
