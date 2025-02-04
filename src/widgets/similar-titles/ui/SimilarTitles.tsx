import { Typography, Flex } from "antd"
import { css } from "@emotion/react"
import { MovieCard } from "src/entities/movie-card"
import { SimilarMovie } from "src/shared/models"

const { Title } = Typography

interface ISimilarTitlesProps {
  titles?: SimilarMovie[] | null;
}

export const SimilarTitles: React.FC<ISimilarTitlesProps> = ({
  titles
}) => {
  return (
    <div css={css`
      
    `}>
      <Title
        id="videoPlayerTitle"
        level={3}
        css={css`
            margin-bottom: 12px !important;
        `}>
        Из этой тематики
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
    </div>
  )
}