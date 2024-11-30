import React from 'react';
import Card from './components/Card';
import './index.css';

import image1 from './assets/illustration-five-stars.webp';
import image2 from './assets/illustration-multiple-platforms.webp';
import image3 from './assets/illustration-consistent-schedule.webp';
import image4 from './assets/illustration-schedule-posts.webp';
import image5 from './assets/illustration-grow-followers.webp';
import image6 from './assets/illustration-audience-growth.webp';
import image7 from './assets/illustration-create-post.webp';
import image8 from './assets/illustration-ai-content.webp';

const App = () => {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-4 gap-4 border-4 lg:text-sm">
      
      <Card 
        title="Create and schedule content quicker." 
        fontClass="DMSans text-sm md:text-base lg:text-lg" 
        bgColor="bg-yellow-100"
        image={image7} 
        className="row-span-4"
        disposition="bottom"
      />
      
      <Card 
        title="Social Media 10x Faster"
        textColor="text-white" 
        content="Over 4,000 5-star reviews" 
        bgColor="bg-purple-500"
        image={image1}
        className="col-start-2 col-span-2 row-span-3"
        disposition="bottom"
      />
      
      <Card 
        title="Schedule to social media" 
        content="Optimize post timings to publish content at the perfect time for your audience" 
        bgColor="bg-purple-100" 
        image={image4}
        className="col-start-4 col-span-1 row-span-4"
        disposition="between"
      />
     
      <Card 
        title="Manage Multiple accounts and platforms" 
        bgColor="bg-white-500"
        image={image2} 
        className="col-start-2"
        disposition="bottom"
      />
      
      <Card 
        title="Maintain a consistent posting schedule"  
        bgColor="bg-yellow-500"
        image={image3}
        className="col-start-3 col-span-1" 
        disposition="bottom"
      />
      
      <Card 
        title="Write your content using AI"  
        bgColor="bg-blue-100"
        image={image8} 
        className="col-start-1 row-span-1 col-span-1" 
        disposition="bottom"
      />
      
      <Card 
        title=">56%" 
        content="Best strategies for 2024" 
        bgColor="bg-white-500"
        image={image6}
        disposition="bottom"
      />
    
      <Card 
        title="Grow followers with non-stop content."
        textColor="text-white"  
        bgColor="bg-purple-500"
        image={image5}
        className="col-start-3 col-span-2"
        disposition="left"
      />

    </div>
  );
};

export default App;
