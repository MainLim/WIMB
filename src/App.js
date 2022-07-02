import React, { useState, useCallback } from 'react';
import VideoList from './components/VideoList';
import Categories from './components/Categories';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <VideoList category={category} />
    </>
  );
};

export default App;
