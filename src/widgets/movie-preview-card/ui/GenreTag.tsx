import { css } from "@emotion/react";
import { getStrWithUCFirstChar } from "../lib/getStrWithUCFirstChar";

interface IGentreTagProps {
  genreName: string;
}

export const GenreTag: React.FC<IGentreTagProps> = ({ genreName }) => {
  return (
    <div css={css`
      border: 1px solid #434343;
      width: fit-content;
      padding: 8px;
      border-radius: 8px;
      color: #c0c0c0;
      font-size: 12px;
      font-weight: 400 !important;
    `}>
      {getStrWithUCFirstChar(genreName)}
    </div>
  )
}