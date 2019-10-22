import React, { ChangeEvent } from 'react';

export interface Props {
  scraper: (e: React.MouseEvent) => void;
  url: string;
  setUrl: (val: string) => void;
}

const Form = (props: Props) => {
  const { scraper, url, setUrl } = props;

  const changeUrl = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUrl(value);
  };

  return (
    <form>
      <input type='text' value={url} onChange={changeUrl} />
      <button type='button' onClick={scraper}>
        Scrap
      </button>
    </form>
  );
};

export default Form;
