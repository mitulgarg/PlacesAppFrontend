import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Sobha Silicon Oasis',
    description: 'Apartment on Hosa road!',
    imageUrl:
      'https://teja12.kuikr.com/is/a/c/430x200/gallery_images/original/563a4e21811eb.jpg',
    address: 'Hosa Rd, Doddanagamangala Village, Pragathi Nagar, Basapura, Bengaluru, Karnataka 560100',
    location: {
      lat: 12.868158978230857,
      lng: 77.66120749553716
    },
    creator: 'u2'
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
