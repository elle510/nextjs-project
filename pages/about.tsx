import React, { useEffect } from 'react';
import Head from 'next/head';

const about = () => {
  useEffect(() => {
    console.log('about componentDidMount');
  }, []);
  console.log('Render about');

  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <h1>About</h1>
    </div>
  );
};

export default about;
