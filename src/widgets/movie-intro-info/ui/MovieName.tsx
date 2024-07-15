import { css } from "@emotion/react";
import { Typography } from "antd";
import type { Breakpoints } from "src/shared/models";
import { getMovieNameFontSize } from "../lib/getMovieNameFontSize";

const { Title } = Typography

interface IMovieNameProps {
  name?: string;
  breakpoint: Breakpoints;
}

export const MovieName: React.FC<IMovieNameProps> = ({ name, breakpoint }) => {
  return (
    <>
      <Title css={css`
        font-size: ${getMovieNameFontSize(breakpoint)}!important;
        line-height: 1 !important;
        margin-bottom: 8px !important;
      `}>
        {name ?? ''}
      </Title>
    </>
  )
}