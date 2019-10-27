import React, { ChangeEvent } from 'react';

import { StyledInput, StyledButton, StyledForm, InputCase, StyledLabel } from './FormStyle';

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
    <StyledForm>
      <InputCase>
        {/* <StyledLabel htmlFor='searchInput'> Website url </StyledLabel> */}
        <StyledInput id='searchInput' type='text' value={url} onChange={changeUrl} />
      </InputCase>
      <StyledButton type='submit' onClick={scraper}>
        Scrap
      </StyledButton>
    </StyledForm>
  );
};

export default Form;
