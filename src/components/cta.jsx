import React from 'react';
import Social from '../pages/social';

const CTA = () => {

  return (
    <section className='cta'>
      <p className='cta-text'>
        Have a project in mind?<br className='sm:block hidden' />
        Let's build something great together!
      </p>
      <div className='flex flex-col gap-3 justify-center items-center'>
        <Social />
      </div>
    </section>
  );
};

export default CTA;
