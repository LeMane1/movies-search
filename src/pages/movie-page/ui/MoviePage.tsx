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
import { APP_NAME } from 'src/shared/models';
import { Footer } from 'src/widgets/footer';
import { SimilarTitles } from 'src/widgets/similar-titles';
import { SequelsAndPrequels } from 'src/widgets/sequels-and-prequels';
import { MovieParameters } from 'src/widgets/movie-parameters';

const { useBreakpoint } = Grid
const { Title } = Typography

export const MoviePage: React.FC = () => {
  const { titleId } = useParams();
  const [refetch, { data, isLoading, isSuccess, isFetching }] = useLazyGetMovieByTitleIdQuery()
  const { width } = useContainerWidth()
  const { md } = useBreakpoint()

  useEffect(() => {
    if (titleId) {
      refetch(Number(titleId))
    }
  }, [titleId])

  useEffect(() => {
    if (data?.name) {
      document.title = data?.name ? `${data?.name} / ${APP_NAME}` : `${APP_NAME}`;
    }
  }, [data?.name])

  return (
    <>
      {isSuccess && !(isLoading || isFetching) && <div css={css`
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
            logo={data?.logo}
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
                margin-bottom: 32px;
            `}>
              <MovieDescription
                descriptionText={data?.description}
                css={css`
                  width: ${md ? '80%' : '100%'};
                  display: block;
              `} />

              <MovieParameters
                year={data?.year}
                slogan={data?.slogan}
                genres={data?.genres}
              />

              <WatchingBlock
                movieName={data?.name}
                year={data?.year}
                kpId={data?.id}
                watchResources={data?.watchability?.items}
                css={css`
                  width: 100%;
              `} />

              <ActorsBlock actors={getActors(data?.persons)} />

              {
                data &&
                data?.sequelsAndPrequels &&
                data?.sequelsAndPrequels.length > 0 &&
                <SequelsAndPrequels titles={data?.sequelsAndPrequels} />
              }

              {
                data &&
                data?.similarMovies &&
                data?.similarMovies?.length > 0 &&
                < SimilarTitles titles={data?.similarMovies} />
              }
            </Space>
            <Footer />
          </div>
        </div>
      </div>}

      {(isLoading || isFetching) && <Flex
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
    </>
  )
};
