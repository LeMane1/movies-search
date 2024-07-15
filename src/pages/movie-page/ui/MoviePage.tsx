import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { css } from '@emotion/react';
import { useLazyGetMovieByTitleIdQuery } from 'src/shared/api';
import { Typography, Flex, Grid } from 'antd';
import { useContainerWidth } from 'src/shared/lib';
import { test } from './test'
import { Backdrop } from './Backdrop';
import { Header } from 'src/widgets/header';
import { MovieIntroInfo } from 'src/widgets/movie-intro-info';
import { MovieDescription } from './MovieDescription';
import { WatchingLinksBlock } from 'src/widgets/watching-links-block';

const { Title } = Typography
const { useBreakpoint } = Grid

export const MoviePage: React.FC = () => {
  const { titleId } = useParams();
  const [refetch, { data }] = useLazyGetMovieByTitleIdQuery()
  const { width } = useContainerWidth()
  const { md } = useBreakpoint()

  useEffect(() => {
    if (titleId) {
      refetch(Number(titleId))
    }
  }, [titleId])

  return (
    <div css={css`
      position: relative;
    `}>
      <Header />
      <Backdrop
        image={data?.backdrop?.url}
      >
        <MovieIntroInfo
          movieName={data?.name}
          alternativeName={data?.alternativeName}
          top250={data?.top250}
          year={data?.year}
          duration={data?.movieLength}
          ageRating={data?.ageRating}
          genres={data?.genres}
          countries={data?.countries}
        />
      </Backdrop>

      <div css={css`
        width: 100%;
        padding: 0 12px;
      `}>
        <div css={css`
          width: ${width};
          margin: 0 auto;
        `}>
          <Flex wrap justify='space-between'>
            <MovieDescription
              descriptionText={data?.description}
              css={css`
                margin-bottom: 24px;
                width: ${md ? '80%' : '100%'};
            `}
            />

            <WatchingLinksBlock
              watchResources={data?.watchability?.items}
              css={css`
                /* flex: ${md ? '0 1 content' : '0 1 100%'}; */
                width: 100%;
            `}
            />
          </Flex>
        </div>
      </div>
    </div>
  )
};
