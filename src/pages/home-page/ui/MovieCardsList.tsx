import { Space, Skeleton } from "antd"
import { css } from "@emotion/react";
import { lazy, Suspense } from 'react';
import type { IPreviewMovie } from "src/shared/models"

const MoviePreviewCard = lazy(() => import('src/widgets/movie-preview-card'))

interface IMovieCardsListProps {
  moviesList: IPreviewMovie[];
  showIncreasedCards?: boolean;
}

export const MovieCardsList: React.FC<IMovieCardsListProps> = ({
  moviesList,
  showIncreasedCards = true
}) => {
  return (
    <>
      <Space
        direction="vertical"
        size={16}
        css={css`
          width: 100%;
      `}>
        {moviesList && moviesList.map((movie: IPreviewMovie) => (
          <Suspense
            key={movie.id}
            fallback={<Skeleton active />}
          >
            <MoviePreviewCard
              movieInfo={movie}
              showIncreasedCard={showIncreasedCards}
            />
          </Suspense>
        ))}
      </Space>
    </>
  )
}