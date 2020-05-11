/* ------------------------------------------------------ */
/*                     React Component                    */
/* ------------------------------------------------------ */
const Stats = ({ stats }) => {
  const statMap = {
    hp: 'HP',
    speed: 'Speed',
    attack: 'Attack',
    defense: 'Defense',
    specialAttack: 'Special Attack',
    specialDefense: 'Special Defense'
  };

  return (
    <>
      <div className='ui piled padded segment'>
        <h1 className='ui large header'>Statistics</h1>
        <div className='ui divided list'>
          {Object.keys(statMap).map((key) => (
            <div className='item' key={key}>
              <p className='ui horizontal large label'>{statMap[key]}</p>
              {stats[key]}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

/* ------------------------------------------------------ */
/*                         Export                         */
/* ------------------------------------------------------ */
export default Stats;
