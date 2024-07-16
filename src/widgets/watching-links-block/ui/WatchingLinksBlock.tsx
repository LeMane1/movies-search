import { css } from "@emotion/react"
import { Typography, Col, Row } from "antd"
import { WatchResource } from "src/entities/watch-resource";
import { Item } from "src/shared/models"

const { Title } = Typography

interface WatchingLinksBlockProps {
  watchResources?: Item[];
  className?: string;
}

export const WatchingLinksBlock: React.FC<WatchingLinksBlockProps> = ({
  watchResources,
  className
}) => {
  return (
    <div
      className={className}
      css={css`
        background-color: #212123;
        padding: 16px;
        border-radius: 8px;
    `}>
      <Title level={3} css={css`
        margin-bottom: 12px !important;
      `}>
        Где можно посмотреть
      </Title>

      {/* <Flex wrap> */}
      <Row gutter={[12, 12]}>
        {watchResources && watchResources.length > 0 ? watchResources.map(resource => (

          <Col xs={12} sm={12} md={10} lg={8} xl={6}>
            <WatchResource key={resource.name} resource={resource} />
          </Col>

        )) : <p>{'Тайтл нигде не доступен;('}</p>}
      </Row>
      {/* </Flex> */}
    </div>
  )
}