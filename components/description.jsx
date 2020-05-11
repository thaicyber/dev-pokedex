/* ------------------------------------------------------ */
/*                         Import                         */
/* ------------------------------------------------------ */
/* ---------------------- internal ---------------------- */
import { capitalizeArray, colorMap, capitalize } from '@/helpers';

/* ------------------------------------------------------ */
/*                     React Component                    */
/* ------------------------------------------------------ */
const Description = ({ order, name, types, abilities, height, weight }) => {
  return (
    <>
      <div className='ui piled padded segment'>
        <h1 className={`ui large ${colorMap[types[0]]} header`}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
          <p className='sub header'>Pokemon n°{order}</p>
        </h1>
        <p className='ui grey ribbon label'>Types</p>
        <p></p>
        {types.map((type) => (
          <p key={type} className={`ui label ${colorMap[type]}`}>
            {capitalize(type)}
          </p>
        ))}
        <p></p>
        <p className='ui grey ribbon label'>Abilities</p>
        <p></p>
        {capitalizeArray(abilities).join(', ')}
        <p></p>
        <p className='ui grey ribbon label'>Characteristics</p>
        <p></p>
        Height: {height}dm <br /> Weight: {weight}hg
        <p></p>
      </div>
    </>
  );
};

// =========================================================
// Export
// =========================================================
export default Description;
