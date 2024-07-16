import { Input, Typography, Flex, Empty, Grid } from "antd";
import { useContainerWidth } from "src/shared/lib";
import { css } from "@emotion/react";
import MainImage from '../assets/main-image.png'
import { useLazyGetMoviesQuery } from "src/shared/api";
import { MovieCardsList } from "./MovieCardsList";

const { Title } = Typography
const { Search } = Input;
const { useBreakpoint } = Grid


export const HomePage: React.FC = () => {
  const { width } = useContainerWidth()
  const [refetch, { data, isLoading }] = useLazyGetMoviesQuery()
  const { sm, lg } = useBreakpoint()

  return (
    <div css={css`
      width: ${width};
      margin: 0 auto;
      padding: 12px;
    `}>
      <Flex
        align="center"
        justify="center"
        vertical
        css={css`
          width: ${lg ? '70%' : '100%'};
          margin: 0 auto;
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
          /> : <Empty />}
      </Flex >
    </div >
  )
};
