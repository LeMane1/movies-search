import { css } from "@emotion/react"
import { Typography, Col, Row, Flex, Space } from "antd"
import { WatchResource } from "src/entities/watch-resource";
import { Item } from "src/shared/models"
import { VideoPlayer } from "./VideoPlayer";

const { Title } = Typography

interface WatchingLinksBlockProps {
  movieName?: string;
  year?: number;
  kpId?: number;
  watchResources?: Item[];
  className?: string;
}

export const WatchingBlock: React.FC<WatchingLinksBlockProps> = ({
  watchResources,
  movieName,
  year,
  kpId,
  className
}) => {
  return (
    <div
      className={className}
    >

      <Flex vertical>
        <Title level={3} css={css`
          margin-bottom: 12px !important;
        `}>
          Cмотреть онлайн
        </Title>

        <VideoPlayer
          name={movieName}
          year={year}
          kpId={kpId}
          css={css`
            margin-bottom: 24px;
        `} />
      </Flex>

      <Flex vertical>
        <Title level={3} css={css`
            margin-bottom: 12px !important;
          `}>
          Другие площадки
        </Title>

        <Row gutter={[16, 16]}>
          {watchResources && watchResources.length > 0 ? watchResources.map(resource => (
            <Col xs={12} sm={12} md={10} lg={8} xl={6}>
              <WatchResource key={resource.name} resource={resource} />
            </Col>
          )) : <p css={css`
                  margin-left: 8px;
                `}>{'Тайтл нигде не доступен'}</p>}
        </Row>
      </Flex>
    </div>
  )
}