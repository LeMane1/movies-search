import type { Person } from "src/shared/models"
import { css } from "@emotion/react";
import { Typography, Flex, Card } from "antd";

const { Title } = Typography

interface IPersonCardProps {
  person?: Person | null;
  className?: string;
}

export const PersonCard: React.FC<IPersonCardProps> = ({
  person,
  className
}) => {
  return (
    <>
      <Flex
        vertical
        justify="center"
        align="center"
        className={className}
        css={css`
          width: 120px;
        `}
      >
        <img
          src={person?.photo}
          css={css`
            width: 120px;
            height: 170px;
            border-radius: 8px;
            margin-bottom: 8px;
        `} />
        <Title css={css`
          font-size: 14px !important;
          margin-bottom: 4px !important;
          word-break: break-word;
          text-align: center;
        `}>
          {person?.name}
        </Title>
        <Title css={css`
          font-size: 12px !important;
          opacity: 60%;
          font-weight: 500 !important;
          word-break: break-word;
          text-align: center;
        `}>
          {person?.description}
        </Title>
      </Flex>
    </>
  )
}