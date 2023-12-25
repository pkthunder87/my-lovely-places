const fakeEntries = [
  {
    id: 22,
    date: '05/12/2002',
    location: 'Regal Cinema',
    location_type: 'Theatre',
    position: {
      lat: 52.53586782505711,
      lng: 13.376933665713324,
    },
    user: 'Jenny_Waller',

    primary_mood: 'entertained',
    secondary_moods: ['Fear'],
    entry_text: 'Went to watch the new horror movie. It was terrifying!',
  },
  {
    id: 23,
    date: '12/23/2005',
    location: 'Retail Store',
    location_type: 'store',
    position: {
      lat: 38.727881642324164,
      lng: -9.140900099907554,
    },
    user: 'Amy_Crocker',

    primary_mood: 'Boredom',
    secondary_moods: [],
    entry_text: 'Had a fairly boring day at work. Hardly any customers.',
  },
  {
    id: 24,
    date: '02/14/2023',
    location: 'Les Freres Heureux',
    location_type: 'Restaurant',
    position: {
      lat: 40.46635901755316,
      lng: -3.7133789062500004,
    },
    user: 'Leslie_Miller',

    primary_mood: 'romantic',
    secondary_moods: ['surprise', 'happy'],
    entry_text: 'My boyfriend proposed!',
  },
];

export default fakeEntries;
