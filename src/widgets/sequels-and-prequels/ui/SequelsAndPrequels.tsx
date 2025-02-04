import { Typography, Flex } from "antd"
import { css } from "@emotion/react"
import { SimilarMovie } from "src/shared/models"
import { MovieCard } from "src/entities/movie-card"

const { Title } = Typography

interface ISequelsAndPrequelsProps {
  titles?: SimilarMovie[] | null;
}

export const SequelsAndPrequels: React.FC<ISequelsAndPrequelsProps> = ({
  titles
}) => {
  return (
    <>
      <Title
        level={3}
        css={css`
            margin-bottom: 12px !important;
        `}>
        Сиквелы и приквелы
      </Title>

      <Flex
        align="flex-start"
        css={css`
          overflow-x: auto;
          scrollbar-width: none;
          padding: 8px 0px;
      `}>
        {titles && titles.length > 0 ? titles.map(title => (
          <MovieCard key={title.id} movie={title} css={css`
            flex-shrink: 0;
            margin-right: 24px;
          `} />
        )) : <p>Нет актеров</p>}
      </Flex>
    </>
  )
}