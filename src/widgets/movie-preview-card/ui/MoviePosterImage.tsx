import { css } from '@emotion/react';
import PlaceholderImage from '../assets/movie-poster-placeholder.png';

interface IMoviePosterImageProps {
  imageUrl: string | null;
  showIncreasedImage?: boolean;
}

export const MoviePosterImage: React.FC<IMoviePosterImageProps> = ({
  imageUrl,
  showIncreasedImage = true
}) => {
  return (
    <>
      <img
        css={css`
          height: ${showIncreasedImage ? '300px' : '150px'};
          width: ${showIncreasedImage ? '200px' : '100px'};
          border-radius: 8px;
          object-fit: cover;
          margin-right: 16px;
          filter: invert(${imageUrl ? 0 : 1});
        `}
        src={imageUrl ? imageUrl : PlaceholderImage}
        loading='lazy'
      />
    </>
  )
}