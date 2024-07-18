import { css } from '@emotion/react'
import type { IPreviewMovie } from 'src/shared/models';
import { Flex, Typography } from 'antd';
import { GenresList } from './GenresList';
import { KpRating } from 'src/entities/kp-rating';
import { MoviePosterImage } from './MoviePosterImage';
import { YearAndCountriesList } from './YearAndCountriesList';
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography

const cardButtonStyle = css`
  width: 100%;
  text-align: left;
  border: none;
  padding: 16px;
  border-radius: 8px;
  background-color: #1a1a1a;
  &:hover{
    cursor: pointer;
    background-color: #202020;
  }
`

interface IMoviePreviewCardProps {
  className?: string;
  movieInfo: IPreviewMovie;
  showIncreasedCard?: boolean;
}

export const MoviePreviewCard: React.FC<IMoviePreviewCardProps> = ({
  className,
  movieInfo,
  showIncreasedCard = true
}) => {

  const navigate = useNavigate();

  return (
    <button
      className={className}
      onClick={() => navigate(`/movies-search/about/${movieInfo.id}`)}
      css={cardButtonStyle}>
      <Flex>
        <MoviePosterImage
          imageUrl={movieInfo?.poster?.previewUrl}
          showIncreasedImage={showIncreasedCard}
        />

        <div css={css`
          flex-grow: 1;
        `}>
          <Flex justify='space-between'>
            <div>
              <Title css={css`
                opacity: 40%;
                font-size: 12px !important;
                font-weight: 400 !important;
                margin-bottom: 0 !important;
              `}>
                {movieInfo.alternativeName}
              </Title>

              <Title
                level={showIncreasedCard ? 3 : 4}
                css={css`
                  line-height: 1.2 !important;
                `}
              >
                {movieInfo.name}
              </Title>
            </div>
            <KpRating
              ratingValue={movieInfo?.rating?.kp}
              css={css`
                flex-shrink: 0;
                margin-left: 8px;
              `}
            />
          </Flex>

          <YearAndCountriesList
            movieYear={movieInfo.year}
            countries={movieInfo?.countries}
          />

          <GenresList genres={movieInfo.genres} />

          <Text css={css`
            opacity: 60%;
            line-height: 1 !important;
            font-size: 14px;
          `}>
            {movieInfo.shortDescription}
          </Text>
        </div>
      </Flex>
    </button>
  )
}
