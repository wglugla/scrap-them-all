import React, { useEffect } from 'react';
import styled from 'styled-components';

const Macy = require('macy');

interface ImageObj {
  src: string;
}

interface Props {
  list: Array<ImageObj>;
}

const StyledList = styled.ul`
  width: 80%;
  margin: 0 auto;
  padding: 0;
  list-style-type: none;
`;

const StyledImg = styled.img`
  max-width: 100%;
  border: 1px solid #c4c4c4;
  padding: 1rem;
  box-sizing: border-box;
`;

const ImagesList = (props: Props) => {
  const { list } = props;

  useEffect(() => {
    Macy({
      container: '.container',
      mobileFirst: true,
      columns: 1,
      breakAt: {
        400: 2,
        700: 3,
        1100: 4
      },
      margin: 10
    });
  }, []);

  const childElements = list.map((image, i) => (
    <li key={i} className='image-element-class'>
      <StyledImg src={image.src} alt='' />
    </li>
  ));

  return <StyledList className='container'>{childElements}</StyledList>;
};

export default ImagesList;
