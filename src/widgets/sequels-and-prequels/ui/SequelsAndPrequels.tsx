import { Typography } from "antd"
import { css } from "@emotion/react"
import { SimilarMovie } from "src/shared/models"
import { MovieCard } from "src/entities/movie-card"
import { CollectionsCarousel } from "src/widgets/collections-carousel"

const { Title } = Typography

interface ISequelsAndPrequelsProps {
  titles?: SimilarMovie[] | null;
}

export const SequelsAndPrequels: React.FC<ISequelsAndPrequelsProps> = ({
  titles
}) => {
  return (
    <div id="sequels-and-prequels-titles-block">
      <Title
        level={3}
        css={css`
            margin-bottom: 12px !important;
        `}>
        Сиквелы и приквелы
      </Title>

      <CollectionsCarousel
        wrapperId="sequels-and-prequels-titles-block"
        paddingVertical={8}
        paddingHorizontal={0}
        cardWidth={210}
      >
        {titles && titles.length > 0 ? titles.map(title => (
          <MovieCard
            key={title.id}
            movie={title}
            css={css`
              flex-shrink: 0;
              margin-right: 24px;
          `} />
        )) : <p>Нет актеров</p>}
      </CollectionsCarousel>
    </div>
  )
}