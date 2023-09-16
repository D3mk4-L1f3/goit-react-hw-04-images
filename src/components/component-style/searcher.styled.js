import styled from '@emotion/styled';

export const SearcherWrapper = styled.header({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '80px',
  padding: '10px 0',
  marginBottom: '20px',
  backgroundColor: 'rgba(8, 70, 218, 0.6)',
  position: 'relative',
});

export const SearchForm = styled.form`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  justify-content: center;
  max-width: 350px;
  background-color: beige;
  opacity: 0.4;
  position: fixed;
  top: 5;
  z-index: 1;
  border-radius: 10px;
  overflow: hidden;
  &:hover {
    opacity: 1;
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const SearchFormInput = styled.input`
  font-size: 28px;
  text-align: center;
  width: 100%;
  background-color: beige;
  border: none;
  &:focus {
  outline: transparent;
  border: none;
  }
  &::placeholder {
    font-size: 20px;
  }
`;

export const SearchFormButton = styled.button`
  padding: 15px;
  cursor: pointer;
  border: none;
  background-color: beige;

  &:hover {
    opacity: 1;}
  &:focus {
    outline: transparent;
  }
`;

export const SearchFormButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

