// components/TopGuides.tsx
import React from 'react';
import GuideCard from './GuideCard';

const TopGuides: React.FC = () => {
  const guides = [
    {
      name: 'Ahmed',
      title: 'Heritage expert',
      languages: 'العربية, English',
      reviews: 6,
      rate :5,
      image: '/images/blog/Pyramids.jpg', // Update with actual image path
    },
    {
      name: 'Nesreen',
      title: 'Your guide Nana',
      languages: 'English',
      reviews: 19,
      rate :5,
      image: '/images/blog/Pyramids.jpg', // Update with actual image path
    },
    {
      name: 'Moustafa',
      title: 'Egyptologist',
      languages: 'English, Русский, العربية',
      reviews: 42,
      rate :5,
      image: '/images/blog/Pyramids.jpg', // Update with actual image path
    },
  ];

  return (
    <div className="flex justify-center flex-wrap">
      {guides.map((guide, index) => (
        <GuideCard
          key={index}
          rate={guide.rate}
          name={guide.name}
          title={guide.title}
          languages={guide.languages}
          reviews={guide.reviews}
          image={guide.image}
        />
      ))}
    </div>
  );
};

export default TopGuides;
