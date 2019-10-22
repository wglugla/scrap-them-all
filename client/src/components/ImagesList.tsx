import React from 'react';

interface ImageObj {
  src: string;
}

interface Props {
  list: Array<ImageObj>;
}

const ImagesList = (props: Props) => {
  const { list } = props;
  return (
    <div>
      <h1> Images </h1>
      <ul>
        {list.map((image, i) => (
          <li key={i}>
            <img src={image.src} alt='' />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImagesList;
