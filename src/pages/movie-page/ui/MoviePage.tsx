import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { css } from '@emotion/react';
import { useLazyGetMovieByTitleIdQuery } from 'src/shared/api';
import { Space, Grid, Spin, Flex, Typography } from 'antd';
import { useContainerWidth } from 'src/shared/lib';
import { Backdrop } from './Backdrop';
import { Header } from 'src/widgets/header';
import { MovieIntroInfo } from 'src/widgets/movie-intro-info';
import { MovieDescription } from './MovieDescription';
import { WatchingBlock } from 'src/widgets/watching-block';
import { ActorsBlock } from 'src/widgets/actors-block';
import { getActors } from '../lib/getActors';

const { useBreakpoint } = Grid
const { Title } = Typography

export const MoviePage: React.FC = () => {
  const { titleId } = useParams();
  const [refetch, { data, isLoading, isSuccess }] = useLazyGetMovieByTitleIdQuery()
  const { width } = useContainerWidth()
  const { md } = useBreakpoint()

  useEffect(() => {
    if (titleId) {
      refetch(Number(titleId))
    }
  }, [titleId])

  return (
    <>
      {isSuccess && <div css={css`
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
            ratingValue={data?.rating?.kp}
          />
        </Backdrop>

        <div css={css`
        width: 100%;
        padding: 0 12px;
      `}>
          <div css={css`
          width: ${width};
          margin: 0 auto;
          margin-bottom: 80px;
        `}>
            <Space
              direction='vertical'
              size={32}
              css={css`
              width: 100%;
          `}>
              <MovieDescription
                descriptionText={data?.description}
                css={css`
                width: ${md ? '80%' : '100%'};
                display: block;
            `} />

              <WatchingBlock
                movieName={data?.name}
                year={data?.year}
                kpId={data?.id}
                watchResources={data?.watchability?.items}
                css={css`
                  width: 100%;
              `} />

              <ActorsBlock actors={getActors(data?.persons)} />
            </Space>
          </div>
        </div>
      </div>}

      {isLoading && <Flex
        vertical
        align='center'
        justify='center'
        css={css`
          position: fixed;
          z-index: 1000;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100vw;
      `}>
        <Spin tip='Loading' size='large' css={css`
          margin-bottom: 12px;
        `} />
        <Title level={5}>Загружаем данные о тайтле</Title>
      </Flex>}
      { }
    </>
  )
};
