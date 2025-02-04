import { css } from "@emotion/react";

interface IMovieLogo {
  url?: string | null;
}

export const MovieLogo: React.FC<IMovieLogo> = ({ url }) => {
  return (
    <>
      {url && <img src={url} css={css`
        width: fit-content;
        height: fit-content;
      `} />}
    </>
  )
}