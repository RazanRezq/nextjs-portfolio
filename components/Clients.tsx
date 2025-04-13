import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { testimonials } from '@/data';

function Clients() {
  return (
    <section className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from <span className="text-purple">satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center">
        <div className="relative flex h-[50vh] flex-col items-center overflow-hidden rounded-md antialiased md:h-[30rem]">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}

export default Clients;
