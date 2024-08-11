import { Input, Typography, Flex, Empty, Grid } from "antd";
import { css } from "@emotion/react";
import MainImage from '../assets/main-image.png'
import { useLazyGetMoviesQuery } from "src/shared/api";
import { MovieCardsList } from "./MovieCardsList";
import { useEffect } from "react";
import { APP_NAME } from "src/shared/models";
import { Footer } from "src/widgets/footer";

const { Title } = Typography
const { Search } = Input;
const { useBreakpoint } = Grid


export const HomePage: React.FC = () => {
  const [refetch, { data, isLoading }] = useLazyGetMoviesQuery()
  const { sm, lg, md } = useBreakpoint()

  useEffect(() => {
    if (document.title !== APP_NAME) {
      document.title = APP_NAME
    }
  }, [])

  return (
    <div css={css`
      width: ${md ? '900px' : '100%'};
      margin: 0 auto;
      padding: 12px;
    `}>
      <Flex
        align="center"
        justify="center"
        vertical
        css={css`
          margin: 0 auto;
          margin-bottom: 60px !important;
      `}>
        <img
          src={MainImage}
          loading="lazy"
          css={css`
            width: ${sm ? '500px' : '100%'};
            height: ${sm ? '400px' : '280px'};
            object-fit: cover;
        `} />

        <Title
          level={sm ? 1 : 3}
          css={css`
            margin-bottom: 24px !important;
            line-height: 1 !important;
        `}>
          Поиск любимых фильмов и сериалов
        </Title>

        <Search
          size="large"
          onSearch={(value) => refetch(value)}
          loading={isLoading}
          css={css`
            margin-bottom: 24px;
          `}
        />

        {data && data?.docs ?
          <MovieCardsList
            moviesList={data?.docs}
            showIncreasedCards={sm}
          /> :
          <Empty
            description={
              <Typography.Text css={css`
                opacity: 50%;
              `}>
                Фильмов по запросу нет
              </Typography.Text>
            } />}
      </Flex >

      <Footer />
    </div >
  )
};
