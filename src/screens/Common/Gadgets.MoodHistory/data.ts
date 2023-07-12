import {IMoodHistory} from './types';

const DATA: IMoodHistory[] = [
  {
    id: 1,
    datetime: 'Today - Tuesday, June 6, 2023',
    history: [
      {id: 1, label: 'fun', time: '8:00 PM', icon: ''},
      {id: 2, label: 'fun / excited', time: '8:00 PM', icon: ''},
      {id: 3, label: 'boring / relaxed', time: '8:00 PM', icon: ''},
      {id: 4, label: 'stressed / confident ', time: '8:00 PM', icon: ''},
    ],
  },
  {
    id: 2,
    datetime: 'Yesterday - Monday, June 5, 2023',
    history: [
      {id: 1, label: 'fun', time: '8:00 PM', icon: ''},
      {id: 2, label: 'fun / excited', time: '8:00 PM', icon: ''},
      {id: 3, label: 'boring / relaxed', time: '8:00 PM', icon: ''},
    ],
  },
  {
    id: 3,
    datetime: 'Sunday, June 4, 2023',
    history: [
      {id: 1, label: 'fun', time: '8:00 PM', icon: ''},
      {id: 2, label: 'fun / excited', time: '8:00 PM', icon: ''},
      {id: 3, label: 'boring / relaxed', time: '8:00 PM', icon: ''},
      {id: 4, label: 'stressed / confident ', time: '8:00 PM', icon: ''},
    ],
  },
];

export default DATA;
