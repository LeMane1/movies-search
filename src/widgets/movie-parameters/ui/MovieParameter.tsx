import { Typography, Flex } from "antd";
import { css } from "@emotion/react";

const { Title } = Typography

interface IMovieParameter {
  title?: string | null;
  value?: string | number | null;
  className?: string;
}

export const MovieParameter: React.FC<IMovieParameter> = ({
  title,
  value,
  className
}) => {
  return (
    <>
      <Flex align="center" className={className} wrap>
        <Title css={css`
          font-size: 12px !important;
          font-weight: 500 !important;
          opacity: 60%;
          min-width: 160px;
          width: 160px;
        `}>
          {title}
        </Title>
        <Title css={css`
          font-size: 12px !important;
          opacity: 90%;
        `}>
          {value}
        </Title>
      </Flex>
    </>
  )
}