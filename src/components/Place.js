import React from 'react';
import './Place.css';

export const ListOfPlaces = [
  {
    id: 1,
    src: 'https://www.advantour.com/img/kazakhstan/taraz1.jpg',
    name: 'Айша Биби',
  },
  {
    id: 2,
    src:
      'https://storage.yvision.kz/images/user/theyakov/rcn7kMogvHzz1WTy7ofDJwyi73dE76.jpg',
    name: 'Карахан',
  },
  {
    id: 3,
    src:
      'https://dostoprimechatelnosti-m.ru/wp-content/uploads/2017/05/teer145.jpg',
    name: 'Тектурмас',
  },
  {
    id: 4,
    src:
      'https://dostoprimechatelnosti-m.ru/wp-content/uploads/2017/05/meerk_t199.jpg',
    name: 'Мерке – древнее святилище',
  },
  {
    id: 5,
    src:
      'https://dostoprimechatelnosti-m.ru/wp-content/uploads/2017/05/pam_aar.jpg',
    name: 'Музей – заповедник «Памятники Древнего Тараза»',
  },
  {
    id: 6,
    src:
      'https://dostoprimechatelnosti-m.ru/wp-content/uploads/2017/05/pam_aar.jpg',
    name: 'Музей – заповедник «Памятники Древнего Тараза»',
  },
];

const Place = ({ srcOfImg, name }) => {
  return (
    <div className="container">
      <img src={srcOfImg} alt="place" className="photo" />
      <h3 className="name-of-place">{name}</h3>
      <p className="desciption-of-place">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat,
        eos, nulla deserunt aspernatur consequuntur porro natus autem nam
        tempora officiis tempore sequi.
      </p>
    </div>
  );
};

export default Place;
