import React from 'react';

// Import your custom sections
import Hero from './Hero';
import Earth from './Earth';
import Sketch from './Sketch';

import Footer from './Footer';

// Define an array with your custom sections
const sections = [
  { id: 1, component: <Hero /> },
  { id: 2, component: <Earth /> },
  { id: 3, component: <Sketch /> },

  { id: 4, component: <Footer /> },
];

function Slider () {
  return (
  
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {sections.map((section) => (
        <div
        key={section.id}
        className="h-screen flex items-center justify-center snap-start"
        >
          {section.component}
        </div>
      ))}
    </div>
   
  );
}

export default Slider;
