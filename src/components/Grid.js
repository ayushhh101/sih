import React from 'react';
import '../componentscss/Grid.css';

import { Link } from 'react-router-dom';

const Grid = () => {
  // Array containing image sources and their descriptions
  const plants = [
    {
      src: 'plant 1.jpg',
      name: 'Aloe Vera',
      description: 'Aloe Vera - A succulent plant known for its medicinal and skin healing properties.',
    },
    {
      src: 'plant 2.jpg',
      name: 'Basil',
      description: 'Basil - A herb widely used in cooking and traditional medicine.',
    },
    {
      src: 'plant 3.jpg',
      name: 'Lavender',
      description: 'Lavender - Known for its calming scent and use in essential oils.',
    },
    {
      src: 'plant 3.jpg',
      name: 'Mint',
      description: 'Mint - A fragrant herb often used in beverages and desserts.',
    },
    {
      src: 'plant 3.jpg',
      name: 'Rosemary',
      description: 'Rosemary - An aromatic herb commonly used in cooking and herbal medicine.',
    },
    {
      src: 'plant 1.jpg',
      name: 'Aloe Vera',
      description: 'Aloe Vera - A succulent plant known for its medicinal and skin healing properties.',
    },
    {
      src: 'plant 2.jpg',
      name: 'Basil',
      description: 'Basil - A herb widely used in cooking and traditional medicine.',
    },
    {
      src: 'plant 3.jpg',
      name: 'Lavender',
      description: 'Lavender - Known for its calming scent and use in essential oils.',
    },
    {
      src: 'plant 3.jpg',
      name: 'Mint',
      description: 'Mint - A fragrant herb often used in beverages and desserts.',
    },
    {
      src: 'plant 3.jpg',
      name: 'Rosemary',
      description: 'Rosemary - An aromatic herb commonly used in cooking and herbal medicine.',
    },
    {
      src: 'plant 3.jpg',
      name: 'Mint',
      description: 'Mint - A fragrant herb often used in beverages and desserts.',
    },
    {
      src: 'plant 3.jpg',
      name: 'Rosemary',
      description: 'Rosemary - An aromatic herb commonly used in cooking and herbal medicine.',
    },

  ];

  return (
    <>
    {/* <Navbar/> */}
      <div className="header">
        <h1>VIRTUAL GARDEN</h1>
      </div>
      <div className="logomain">
        <div className="logocontainer">
          {plants.map((plant, index) => (
            <div className="images" key={index}>
              <img src={plant.src} alt={`Plant ${index + 1}`} />
              <div className="text-overlay">
                <h3 className="plant-name">{plant.name}</h3>
                <p className="plant-description">{plant.description}</p>
                <Link to='/blender'><button className="btn">Know More Info</button></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Grid;
