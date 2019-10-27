import React, { useEffect } from 'react';
import Masonry from 'react-masonry-component';
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

// const masonryOptions = {
//   columnWidth: 100,
//   percentPosition: true,
//   fitWidth: true,
//   gutter: 2
// };

// const StyledMasonry = styled(Masonry)`
//   margin: 2rem auto;
// `;

// const ImagesList = (props: Props) => {
//   const { list } = props;

//   const childElements = list.map((image, i) => (
//     <li key={i} className='image-element-class'>
//       <img src={image.src} alt='' />
//     </li>
//   ));

//   return (
//     <StyledMasonry
//       className={'masonry-gallery'}
//       elementType={'ul'}
//       options={masonryOptions}
//       disableImagesLoaded={false}
//       updateOnEachImageLoad={false}
//     >
//       {childElements}
//     </StyledMasonry>
//   );
// };

const ImagesList = (props: Props) => {
  const { list } = props;

  useEffect(() => {
    const macyInstance = Macy({
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
