import { Typography, Flex, Space } from "antd";
import type { Person } from "src/shared/models"
import { PersonCard } from "src/entities/person-card";
import { css } from "@emotion/react";

const { Title } = Typography

interface IActorsBlockProps {
  actors?: Person[] | null;
}

export const ActorsBlock: React.FC<IActorsBlockProps> = ({ actors }) => {
  return (
    <>
      <Title level={3}
        css={css`
          margin-bottom: 12px !important;
        `}>
        В ролях
      </Title>

      <Flex
        align="flex-start"
        css={css`
          overflow-y: scroll;
      `}>
        {actors && actors.length > 0 ? actors.map(actor => (
          <PersonCard person={actor} css={css`
            flex-shrink: 0;
            margin-right: 24px;
          `} />
        )) : <p>Нет актеров</p>}
      </Flex>
    </>
  )
}