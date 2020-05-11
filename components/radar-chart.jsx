/* ------------------------------------------------------ */
/*                         Import                         */
/* ------------------------------------------------------ */
/* ---------------------- external ---------------------- */
import RadarChart from 'react-svg-radar-chart';

/* ------------------------------------------------------ */
/*                     React Component                    */
/* ------------------------------------------------------ */
const Chart = ({ stats, color = 'blue' }) => {
  const data = [
    {
      data: {
        hp: stats.hp / 255,
        attack: stats.attack / 165,
        defense: stats.defense / 230,
        speed: stats.speed / 160,
        specialAttack: stats.specialAttack / 154,
        specialDefense: stats.specialDefense / 230
      },
      meta: {
        color: color
      }
    }
  ];

  const captions = {
    hp: 'Health Points',
    attack: 'Attack',
    defense: 'Defense',
    speed: 'Speed',
    specialAttack: 'Special Attack',
    specialDefense: 'Special Defense'
  };

  return <RadarChart captions={captions} data={data} size={350} />;
};

/* ------------------------------------------------------ */
/*                         Export                         */
/* ------------------------------------------------------ */
export default Chart;
