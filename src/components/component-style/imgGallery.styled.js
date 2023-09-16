import styled from '@emotion/styled';

export const ImageGalleryConatiner = styled.ul`
 display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const GalleryItem = styled.li`
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const GalleryItemImg = styled.img`
  width: 100%;
  max-height: 224px;
  object-fit: cover;

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
      transform: scale(1.03);
    box-shadow: 2px 8px 10px 4px rgba(173, 173, 173, 0.8);
    -webkit-box-shadow: 2px 8px 10px 4px rgba(173, 173, 173, 0.8);
    -moz-box-shadow: 2px 8px 10px 4px rgba(173, 173, 173, 0.8);
  }
`;