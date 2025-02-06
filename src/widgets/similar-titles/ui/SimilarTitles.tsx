import { Typography } from "antd"
import { css } from "@emotion/react"
import { MovieCard } from "src/entities/movie-card"
import { SimilarMovie } from "src/shared/models"
import { CollectionsCarousel } from "src/widgets/collections-carousel"

const { Title } = Typography

interface ISimilarTitlesProps {
  titles?: SimilarMovie[] | null;
}

export const SimilarTitles: React.FC<ISimilarTitlesProps> = ({
  titles
}) => {
  return (
    <div id="similar-titles-block">
      <Title
        id="videoPlayerTitle"
        level={3}
        css={css`
            margin-bottom: 12px !important;
        `}>
        Из этой тематики
      </Title>

      <CollectionsCarousel
        wrapperId="similar-titles-block"
        paddingVertical={8}
        paddingHorizontal={0}
        cardWidth={210}
      >
        {titles && titles.length > 0 ? titles.map(title => (
          <MovieCard key={title.id} movie={title} css={css`
              flex-shrink: 0;
              margin-right: 24px;
            `} />
        )) : <p>Нет актеров</p>}
      </CollectionsCarousel>
    </div>
  )
}