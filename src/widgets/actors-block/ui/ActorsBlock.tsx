import { Typography } from "antd";
import type { Person } from "src/shared/models"
import { PersonCard } from "src/entities/person-card";
import { css } from "@emotion/react";
import { CollectionsCarousel } from "src/widgets/collections-carousel";

const { Title } = Typography

interface IActorsBlockProps {
  actors?: Person[] | null;
}

export const ActorsBlock: React.FC<IActorsBlockProps> = ({ actors }) => {
  return (
    <div
      id="actors-block-container"
      css={css`
        background-color: #222222;
        padding-top: 20px;
        padding-bottom: 20px;
        border-radius: 8px;
        position: relative;
    `}>
      <Title level={3}
        css={css`
          margin-bottom: 12px !important;
          padding-left: 20px;
          padding-right: 20px;
        `}>
        В ролях
      </Title>

      <CollectionsCarousel
        wrapperId="actors-block-container"
        hasRelativePosition={false}
      >
        {actors && actors.length > 0 ? actors.map(actor => (
          <PersonCard person={actor} css={css`
              flex-shrink: 0;
              margin-right: 8px;
            `} />
        )) : <p>Нет актеров</p>}
      </CollectionsCarousel>
    </div>
  )
}