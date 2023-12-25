import { moodColor } from '../../data/moods';

const moodsColor = moodColor;

function SecondaryMoods({ moods }) {
  return (
    <li className="mb-4 mt-4 flex list-none flex-wrap gap-3 ">
      {moods.map((mood) => {
        return (
          <ul
            className={`flex items-center justify-center rounded-full ${
              moodsColor[`${mood}`]
            }  pl-4 pr-4 text-white drop-shadow-sm`}
            key={mood}
          >
            {mood}
          </ul>
        );
      })}
    </li>
  );
}

export default SecondaryMoods;
