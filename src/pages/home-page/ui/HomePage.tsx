import { Input, Typography, Flex, Grid, Empty } from "antd";
import { useContainerWidth } from "src/shared/lib";
import { css } from "@emotion/react";
import MainImage from '../assets/main-image.png'
import { useLazyGetMoviesQuery } from "src/shared/api";
// import { test } from './test'
import { MovieCardsList } from "./MovieCardsList";

const { useBreakpoint } = Grid;
const { Title } = Typography
const { Search } = Input;

export const HomePage: React.FC = () => {
  const containerWidth = useContainerWidth()
  const { md, sm } = useBreakpoint()
  const [refetch, { data, isLoading }] = useLazyGetMoviesQuery()
  return (
    <div css={css`
      width: ${containerWidth};
      margin: 0 auto;
      padding: 12px;
    `}>
      <Flex
        align="center"
        justify="center"
        wrap
        css={css`
          flex-direction: row-reverse;
          margin-bottom: 24px;
      `}>
        <img
          src={MainImage}
          loading="lazy"
          css={css`
            width: ${sm ? '500px' : '100%'};
            height: ${sm ? '400px' : '280px'};
            object-fit: cover;
        `} />
        <div>
          <Title
            level={sm ? 1 : 3}
            css={css`
              margin-bottom: 24px !important;
              line-height: 1 !important;
          `}>Поиск любимых фильмов и сериалов</Title>
          <Search
            size="large"
            onSearch={(value) => refetch(value)}
            loading={isLoading}
          />
        </div>
      </Flex>

      {data && data?.docs ? <MovieCardsList
        moviesList={data?.docs}
        showWideCards={!md}
        showIncreasedCards={sm}
      /> : <Empty />}
    </div>
  )
};
