import React from 'react';

const About = () => {
  return (
    <div
      name='about'
      className='w-full h-screen 
    bg-gradient-to-b
      from-gray-800 to-black text-white'
    >
      <div
        className='max-w-screen-lg p-4 mx-auto flex
      flex-col justify-center '
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>
        <p className='text-xl mt-20'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
          veritatis! Quidem nisi itaque, aut ab amet modi adipisci tempora
          necessitatibus sapiente perferendis unde odit excepturi, ipsam esse
          minus beatae consectetur officiis quasi nesciunt, delectus aliquam
          ipsum! Voluptatum porro reprehenderit, sequi sint fuga tempore quis
          rem quia adipisci mollitia dignissimos magnam.
        </p>

        <br />

        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          similique, nobis doloremque reiciendis assumenda, architecto, ipsam
          deleniti possimus at veniam sequi atque vero modi expedita culpa
          corporis fuga neque asperiores. Provident hic temporibus est a, dicta
          quas nobis odit blanditiis eum. Repellendus harum pariatur atque?
          Distinctio consequatur facilis cum optio!
        </p>
      </div>
    </div>
  );
};

export default About;
