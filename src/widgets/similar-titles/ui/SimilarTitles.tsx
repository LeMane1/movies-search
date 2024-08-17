import { Typography, Row, Col } from "antd"
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
    <>
      <Title
        id="videoPlayerTitle"
        level={3}
        css={css`
            margin-bottom: 12px !important;
        `}>
        Из этой тематики
      </Title>

      <Row gutter={[16, 16]} css={css`
        width: 100%;
      `}>
        {titles && titles?.length > 0 && titles.map(title => (
          <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={6}>
            <MovieCard key={title.id} movie={title} css={css`
              margin: 0 auto;
            `} />
          </Col>
        ))}
      </Row>
    </>
  )
}