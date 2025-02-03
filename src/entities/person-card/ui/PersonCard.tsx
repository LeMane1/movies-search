import type { Person } from "src/shared/models"
import { css } from "@emotion/react";
import { Typography, Flex } from "antd";

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
          :hover{
            cursor: pointer;
          }
          &:hover #person-image{
            transform: scale(1.08);
            opacity: 1;
            transition: all .2s ease-in-out;
            transform-origin: center;
            }
        `}
      >
        <div css={css`
          overflow: hidden;
          width: 100px;
          height: 150px;
          border-radius: 10px;
          margin-bottom: 8px;
        `}>
          <img
            loading="lazy"
            id="person-image"
            src={person?.photo}
            css={css`
              width: 100%;
              height: 100%;
              object-fit: cover;
              opacity: .8;
              transition: all .2s ease-in-out;
          `} />
        </div>

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