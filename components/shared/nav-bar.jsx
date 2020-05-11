/* ------------------------------------------------------ */
/*                         Import                         */
/* ------------------------------------------------------ */
/* ---------------------- external ---------------------- */
import Link from 'next/link';
import { useRouter } from 'next/router';
/* ---------------------- internal ---------------------- */
import SearchBar from '@/components/search-bar';

/* ------------------------------------------------------ */
/*                     React Component                    */
/* ------------------------------------------------------ */
const NavBar = () => {
  const router = useRouter();

  return (
    <div className='ui stackable secondary inverted teal menu'>
      <Link href='/'>
        <a className='ui small header item'>Welcome!</a>
      </Link>

      <div className='right menu'>
        <Link href='/pokemons'>
          <a className='item'>Pokemons</a>
        </Link>

        {router.pathname === '/pokemons' && (
          <div className='item'>
            <SearchBar />
          </div>
        )}
      </div>
    </div>
  );
};

/* ------------------------------------------------------ */
/*                         Export                         */
/* ------------------------------------------------------ */
export default NavBar;
