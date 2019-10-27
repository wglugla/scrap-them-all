import React, { MouseEvent, useState } from 'react';
import './App.css';
import { StyledTitle, StyledHeader, Container } from './styled';

import Form from './components/Form/Form';
import ImagesList from './components/ImagesList';

const App: React.FC = () => {
  const [fetched, setFetched] = useState(false);
  const [list, setList] = useState([]);
  const [url, setUrl] = useState('https://www.wp.pl');

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
    <>
      <Container>
        <StyledHeader>
          <StyledTitle> The easiest way to scrap images from website </StyledTitle>
        </StyledHeader>
        <Form url={url} setUrl={setUrl} scraper={scrapWebsite} />
      </Container>
      {fetched && <ImagesList list={list} />}
    </>
  );
};

export default App;
