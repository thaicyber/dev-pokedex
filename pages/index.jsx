/* ------------------------------------------------------ */
/*                         Import                         */
/* ------------------------------------------------------ */
/* ---------------------- external ---------------------- */
import Link from 'next/link';
/* ---------------------- internal ---------------------- */
import { getPokemonsRequested } from '@/redux/actions/pokemon.actions';

/* ------------------------------------------------------ */
/*                     React Component                    */
/* ------------------------------------------------------ */
const HomePage = () => (
  <>
    <h1 className='ui center aligned header'>Welcome on My PokeDex!</h1>

    <div className='ui piled segment'>
      <h4 className='ui grey header'>Hello young dev-trainer!</h4>
      <p>
        Welcome on my PokeDex! If you land on this page, it probably means that
        you've already spent a lot of time looking for a way to combine cool dev
        features such as <strong>React.js</strong>, <strong>Redux</strong>,{' '}
        <strong>Express.js</strong> and <strong>Next.js</strong> to keep the
        best of all worlds in one stack!
      </p>
      <p>
        If you're only a Pokemon fan and just missclicked, it's completely fine!
        I invite you to check nice pokemon pictures and stats{' '}
        <strong>
          <Link href='/pokemons'>
            <a>here!</a>
          </Link>
        </strong>
      </p>
      <div className='ui negative message'>
        <div className='header'>Disclaimer</div>
        <p>
          The purpose of this website is solely to provide a working example
          combining the frameworks/libraries mentioned above to anyone new and
          interested to make them work together
        </p>
        <p>
          I do not pretend in any case to provide the best integration nor code
          refactoring - those are quite subjective anyway - but only a decent
          starting basis
        </p>
      </div>
      <p>
        After disclaimer time, please find below the details of the stack used
        as well as a link to my{' '}
        <strong>
          <a href='https://github.com/Hubiwan/dev-pokedex'></a>repo
        </strong>
      </p>
    </div>

    <div className='ui centered cards'>
      <div className='raised card'>
        <div className='content'>
          <div className='ui center aligned teal header'>Front End</div>
          <div className='ui list'>
            <div className='item'>
              <i className='right triangle icon'></i>
              <div className='content'>
                The front end is based of course on{` `}
                <strong>
                  <a href='https://fr.reactjs.org/' target='_blank'>
                    React.js
                  </a>
                </strong>
                , the well-known JavaScript component-based UI framework created
                by Facebook
              </div>
            </div>
            <div className='item'>
              <i className='right triangle icon'></i>
              <div className='content'>
                In order to manage the app state, I use{` `}
                <strong>
                  <a href='https://redux.js.org/' target='_blank'>
                    Redux
                  </a>
                </strong>
                . I just find it easier to track "what's going on" with just
                pure Javascript functions and the Redux DevTools extension works
                very well
              </div>
            </div>
            <div className='item'>
              <i className='right triangle icon'></i>
              <div className='content'>
                I also use{` `}
                <strong>
                  <a href='https://redux-saga.js.org/' target='_blank'>
                    Redux Saga
                  </a>
                </strong>
                {` `}
                to separate side effect logic from the rest of the app thanks to
                generators
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='raised card'>
        <div className='content'>
          <div className='ui center aligned teal header'>Back End</div>
          <div className='ui list'>
            <div className='item'>
              <i className='right triangle icon'></i>
              <div className='content'>
                <strong>
                  <a href='https://nextjs.org/' target='_blank'>
                    Next.js
                  </a>
                </strong>
                : an amazing framework which facilitates server-side rendering
                with React.js and allows fast data pre-fetching
              </div>
            </div>
            <div className='item'>
              <i className='right triangle icon'></i>
              <div className='content'>
                <strong>
                  <a href='https://expressjs.com/' target='_blank'>
                    Express.js
                  </a>
                </strong>
                {` `} server: a standard middleware-based framework for{' '}
                <strong>
                  <a href='https://nodejs.org/' target='_blank'>
                    Node.js
                  </a>
                </strong>{' '}
                - to gandle REST API requests from client. I tried recently
                {` `}
                <strong>
                  <a href='https://www.apollographql.com/' target='_blank'>
                    Apollo
                  </a>
                </strong>
                {` `}server which is also great, but I find it less intuitive
                for the moment
              </div>
            </div>
            <div className='item'>
              <i className='right triangle icon'></i>
              <div className='content'>
                Data are managed by{` `}
                <strong>
                  <a href='https://www.mongodb.com/' target='_blank'>
                    MongoDB
                  </a>
                </strong>
                /
                <strong>
                  <a href='https://mongoosejs.com/' target='_blank'>
                    Mongoose
                  </a>
                </strong>
                {` `}(NoSQL cloud database/library)
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='raised card'>
        <div className='content'>
          <div className='ui center aligned teal header'>Other</div>
          <div className='ui list'>
            <div className='item'>
              <i className='right triangle icon'></i>
              <div className='content'>
                All Pokemon related information come from{` `}
                <strong>
                  <a href='https://pokeapi.co/' target='_blank'>
                    PokéAPI
                  </a>
                </strong>
                , the most complete base on pokemon out there
              </div>
            </div>
            <div className='item'>
              <i className='right triangle icon'></i>
              <div className='content'>
                <strong>
                  <a href='https://semantic-ui.com/' target='_blank'>
                    Semantic UI
                  </a>
                </strong>
                {` `} is a very useful UI library which allows to quickly mark
                up pages and components with predefined classes
              </div>
            </div>
            <div className='item'>
              <i className='right triangle icon'></i>
              <div className='content'>
                Finally, I would like to mention the use of{` `}
                <strong>
                  <a
                    href='https://www.npmjs.com/package/gensync'
                    target='_blank'
                  >
                    gensync
                  </a>
                </strong>
                {` `} module which is critical in this stack to ensure {` `}
                <strong>
                  <a href='https://redux-saga.js.org/' target='_blank'>
                    Redux Saga
                  </a>
                </strong>
                {` `}compatibility with Javascript {` `}
                <strong>
                  <a
                    href='https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/async_function'
                    target='_blank'
                  >
                    Async/Await
                  </a>
                </strong>
                {` `}functions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

/* ------------------------------------------------------ */
/*        Next.js Server-Side Client-Side Rendering       */
/* ------------------------------------------------------ */
// run saga to fetch all pokemons as soon as home page is requested
HomePage.getInitialProps = async (props) => {
  // get store from context (Redux wrapper)
  const { store } = props.ctx;

  // run saga if empty state (SSR and CSR)
  if (!store.getState().pokemonReducer.pokemons.length) {
    store.dispatch(getPokemonsRequested());
  }

  return {};
};

/* ------------------------------------------------------ */
/*                         Export                         */
/* ------------------------------------------------------ */
export default HomePage;
