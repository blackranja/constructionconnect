import React, { useState, useEffect } from 'react';

function SlidingHero() {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      image: 'https://source.unsplash.com/random/1920x1080',
      title: 'Slide 1',
      description: 'This is the first slide.',
    },
    {
      image: 'https://source.unsplash.com/random/1920x1080',
      title: 'Slide 2',
      description: 'This is the second slide.',
    },
    {
      image: 'https://source.unsplash.com/random/1920x1080',
      title: 'Slide 3',
      description: 'This is the third slide.',
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${slideIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full">
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl font-bold">{slide.title}</h1>
              <p className="text-lg">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full bg-white cursor-pointer ${index === slideIndex ? 'bg-blue-500' : ''}`}
            onClick={() => setSlideIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default SlidingHero;
