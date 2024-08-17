import { css } from "@emotion/react"
import { Typography, Space } from "antd"
import { MovieParameter } from "./MovieParameter";
import { Genre } from "src/shared/models";
import { getGenresString } from "../lib/getGenresString";

const { Title } = Typography

interface IMovieParametersProps {
  year?: number | null;
  slogan?: string | null;
  genres?: Genre[] | null;
}

export const MovieParameters: React.FC<IMovieParametersProps> = ({
  year,
  slogan,
  genres
}) => {
  return (
    <>
      <Title
        level={3}
        css={css`
            margin-bottom: 12px !important;
        `}>
        О фильме
      </Title>

      <Space direction="vertical" size={16}>
        <MovieParameter title={'Год производства'} value={year} />
        <MovieParameter title={'Слоган'} value={`"${slogan}"`} />
        <MovieParameter title={'Жанр'} value={getGenresString(genres)} />
      </Space>
    </>
  )
}