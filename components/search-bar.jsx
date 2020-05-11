/* ------------------------------------------------------ */
/*                         Import                         */
/* ------------------------------------------------------ */
/* ---------------------- external ---------------------- */
import { useState } from 'react';
import { connect } from 'react-redux';
/* ---------------------- internal ---------------------- */
import { setFilterPokemonsInput } from '@/redux/actions/pokemon.actions';

/* ------------------------------------------------------ */
/*                     React Component                    */
/* ------------------------------------------------------ */
const SearchBar = ({ setFilterPokemonsInput }) => {
  const [input, setInput] = useState('');

  const handleChange = async (event) => {
    setInput(event.target.value);
    setFilterPokemonsInput(event.target.value);
  };

  return (
    <div className='ui icon input'>
      <input
        type='text'
        placeholder='Search...'
        value={input}
        onChange={handleChange}
      />
      <i aria-hidden='true' className='search icon'></i>
    </div>
  );
};

/* ------------------------------------------------------ */
/*                         Export                         */
/* ------------------------------------------------------ */
export default connect(null, { setFilterPokemonsInput })(SearchBar);
