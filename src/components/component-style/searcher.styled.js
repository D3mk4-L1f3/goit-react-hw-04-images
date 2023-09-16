import styled from '@emotion/styled';

export const SearchbarConatiner = styled.header({
  top: 0,
  left: 0,
  position: 'sticky',
  zIndex: 1100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '64px',
  paddingRight: '24px',
  paddingLeft: '24px',
  paddingTop: '12px',
  paddingBottom: '12px',
  color: '#fff',
  backgroundColor: '#3f51b5',
});

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  max-height: 60px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;

  &:hover {
    opacity: 1;
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: 1px 6px 8px 2px rgba(173, 173, 173, 0.8);
    -webkit-box-shadow: 1px 6px 8px 2px rgba(173, 173, 173, 0.8);
    -moz-box-shadow: 1px 6px 8px 2px rgba(173, 173, 173, 0.8);
  }
`;


export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
    cursor: pointer;
      transform: scale(1.03);
    box-shadow: 1px 6px 8px 2px rgba(173, 173, 173, 0.8);
    -webkit-box-shadow: 1px 6px 8px 2px rgba(173, 173, 173, 0.8);
    -moz-box-shadow: 1px 6px 8px 2px rgba(173, 173, 173, 0.8);
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

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 45px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
`;