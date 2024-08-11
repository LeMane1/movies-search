import { SimilarMovie } from "src/shared/models"
import { css } from "@emotion/react"
import { Typography, Flex } from "antd"
import { KpRating } from "src/entities/kp-rating";
import { useNavigate } from "react-router-dom";

const { Title } = Typography

interface IMovieCard {
  movie?: SimilarMovie | null;
  className?: string;
}

export const MovieCard: React.FC<IMovieCard> = ({ movie, className }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/movie/${movie?.id}`)}
      className={className}
      css={css`
        display: block;
        width: 200px;
        height: 280px;
        border: none;
        padding: 0;
        background: none;
        border-radius: 8px;
        overflow: hidden;
        position: relative;
        transition: all .1s ease-in-out;
        &:hover{
          transform: scale(1.1, 1.1);
          transition: all .2s ease-in-out;
          cursor: pointer;
        }
        &:hover > #description{
          opacity: 1;
          transition: all .3s ease-in-out;
        }
    `}>
      <img
        src={movie?.poster?.previewUrl ?? ''}
        loading="lazy"
        css={css`
          width: 100%;
          height: 100%;
          margin-bottom: 8px;
          object-fit: cover;
      `} />

      <Flex
        id="description"
        vertical
        justify="flex-end"
        css={css`
          transition: all .1s ease-in-out;
          opacity: 0;
          position: absolute;
          bottom: 0;
          padding: 8px !important;
          width: 100%;
          height: 100%;
          background: linear-gradient(0deg, rgba(0,0,0,1) 24%, rgba(65,64,27,0) 77%);
      `}>
        <Title
          css={css`
            font-size: 14px !important;
            margin-bottom: 4px !important;
            word-break: break-word;
            text-align: center;
        `}>
          {movie?.name}
        </Title>
        <Title
          css={css`
            font-size: 12px !important;
            opacity: 60%;
            font-weight: 500 !important;
            word-break: break-word;
            text-align: center;
        `}>
          {movie?.alternativeName}
        </Title>
      </Flex>

      <div css={css`
        position: absolute;
        top: 8px;
        right: 8px;
        backdrop-filter: blur(10px);
        background-color: rgba(92, 92, 92, 0.3);
        border-radius: 4px;
        padding: 4px 8px;
      `}>
        <KpRating ratingValue={movie?.rating?.kp} />
      </div>
    </button>
  )
}