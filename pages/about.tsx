import React, { useEffect } from 'react';
import Meta from '../components/Meta';

const about = () => {
  useEffect(() => {
    console.log('about componentDidMount');
  }, []);
  console.log('Render about');

  return (
    <div>
      <Meta title="About" />
      <h1>About</h1>
    </div>
  );
};

export default about;
