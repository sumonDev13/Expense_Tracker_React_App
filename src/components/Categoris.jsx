import React from 'react';
import { CiHome } from 'react-icons/ci';
import { CgGames, CgFileDocument } from 'react-icons/cg';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { AiFillCar } from 'react-icons/ai';
import { BsKey, BsCameraVideo } from 'react-icons/bs';

const Categoris = () => {
  const categories = [
    {
      icon: <CiHome />,
      category: 'Home',
      id: 1,
    },
    {
      icon: <AiFillCar />,
      category: 'Gas',
      id: 2,
    },
    {
      icon: <BsKey />,
      category: 'Security',
      id: 3,
    },
    {
      icon: <BsCameraVideo />,
      category: 'Videos',
      id: 4,
    },
    {
      icon: <CgGames />,
      category: 'Games',
      id: 5,
    },
    {
      icon: <CgFileDocument />,
      category: 'Papers',
      id: 6,
    },
    {
      icon: <HiOutlineShoppingCart />,
      category: 'Shops',
      id: 7,
    },
    {
      icon: <AiFillCar />,
      category: 'Travel',
      id: 8,
    },
    {
      icon: <AiFillCar />,
      category: 'Service',
      id: 9,
    },
  ];
  return (
    <div className="categories-section">
      <h4 className="subheading">Categories</h4>

      <div className="categoris-container">
        {categories.map((category) => (
          <div>
            {category.icon}
            <span>{category.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categoris;
