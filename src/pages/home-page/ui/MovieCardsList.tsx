import { Space, Skeleton } from "antd"
import { css } from "@emotion/react";
import { lazy, Suspense } from 'react';
import type { IPreviewMovie } from "src/shared/models"
// import { MoviePreviewCard } from "src/widgets/movie-preview-card";

const MoviePreviewCard = lazy(() => import('src/widgets/movie-preview-card'))

interface IMovieCardsListProps {
  moviesList: IPreviewMovie[];
  showWideCards?: boolean;
  showIncreasedCards?: boolean;
}

export const MovieCardsList: React.FC<IMovieCardsListProps> = ({
  moviesList,
  showWideCards = false,
  showIncreasedCards = true
}) => {
  return (
    <>
      <Space
        direction="vertical"
        size={16}
        css={css`
          width: ${showWideCards ? '100%' : '70%'};
      `}>
        {moviesList && moviesList.map((movie: IPreviewMovie) => (
          <Suspense fallback={<Skeleton active />} key={movie.id}>
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