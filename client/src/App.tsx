import React, { MouseEvent, useState } from 'react';
import './App.css';

import Form from './components/Form';
import ImagesList from './components/ImagesList';

const App: React.FC = () => {
  const [fetched, setFetched] = useState(false);
  const [list, setList] = useState([]);
  const [url, setUrl] = useState('https://www.google.pl');

  const scrapWebsite = async (e: MouseEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/?url=${url}`);
      const data = await response.json();
      console.log(data);
      setList(data);
      setFetched(true);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='App'>
      <Form url={url} setUrl={setUrl} scraper={scrapWebsite} />
      {fetched && <ImagesList list={list} />}
    </div>
  );
};

export default App;
