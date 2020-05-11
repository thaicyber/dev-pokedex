/* ------------------------------------------------------ */
/*                          Impot                         */
/* ------------------------------------------------------ */
/* ---------------------- external ---------------------- */
import Link from 'next/link';

/* ------------------------------------------------------ */
/*                     React Component                    */
/* ------------------------------------------------------ */
const Footer = () => (
  <footer
    style={{
      backgroundColor: 'rgba(200, 200, 200, 0.2)',
      marginTop: '2rem',
      paddingBottom: '2rem'
    }}
  >
    <div className='ui center aligned grid'>
      <div className='sixteen wide mobile five wide tablet five wide computer column'>
        <h6 className='ui small header'>Quick Nav</h6>
        <div className='ui list'>
          <div className='item'>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </div>
          <div className='item'>
            <Link href='/pokemons'>
              <a>Pokemons</a>
            </Link>
          </div>
        </div>
      </div>

      <div className='sixteen wide mobile five wide tablet five wide computer column'>
        <h6 className='ui small header'>Follow Me</h6>
        <div className='ui list'>
          <div className='item'>
            <a href='https://github.com/Hubiwan/dev-pokedex' target='_blank'>
              <i className='ui github icon'></i> Github
            </a>
          </div>
          <div className='item'>
            <a
              href='https://www.linkedin.com/in/hubert-kuoch-05064762/?originalSubdomain=fr'
              target='_blank'
            >
              <i className='ui linkedin icon'></i> Linkedin
            </a>
          </div>
        </div>
      </div>

      <div className='sixteen wide mobile five wide tablet five wide computer column'>
        <h6 className='ui small header'>Contact</h6>
        <address>
          <strong>Hubert K.</strong>
          <br />
          <i className='envelope icon'></i>
          <a href='mailto:hubiwan.dev@gmail.com'>Send Me an Email</a>
        </address>
      </div>
    </div>
    <p className='ui center aligned tiny grey header'>2020. Made by Hubiwan.</p>
  </footer>
);

// =========================================================
// Export
// =========================================================
export default Footer;
