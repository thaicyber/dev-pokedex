/* ------------------------------------------------------ */
/*                         Import                         */
/* ------------------------------------------------------ */
/* ---------------------- external ---------------------- */
import Link from 'next/link';
/* ---------------------- internal ---------------------- */
import { colorMap, capitalize } from '@/helpers';

/* ------------------------------------------------------ */
/*                     React Component                    */
/* ------------------------------------------------------ */
const Card = ({ name, imageURL, types }) => (
  <div className='sixteen wide mobile height wide tablet four wide computer column'>
    <Link href='/pokemons/[name]' as={`/pokemons/${name}`}>
      <div className={`ui fluid link ${colorMap[types[0]]} card`}>
        <div className='center aligned content'>
          <h2 className={`ui ${colorMap[types[0]]} header`}>
            {capitalize(name)}
          </h2>
          <div className='image'>
            <img
              src={imageURL}
              alt='pokemon image'
              style={{ maxWidth: '10em' }}
            />
          </div>
        </div>
      </div>
    </Link>
  </div>
);

/* ------------------------------------------------------ */
/*                         Export                         */
/* ------------------------------------------------------ */
export default Card;
