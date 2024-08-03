import { css } from "@emotion/react"
import { Grid } from "antd"

const { useBreakpoint } = Grid

interface IBackdropProps {
  image?: string | null;
  className?: string;
  children?: React.ReactNode
}

export const Backdrop: React.FC<IBackdropProps> = ({
  image,
  children,
  className
}) => {
  const { md, xxl } = useBreakpoint()
  return (
    <div
      className={className}
      css={css`
        width: fit-content;
        height: fit-content;
        position: relative;
    `}>
      <div css={css`
        position: relative;
        width: 100%;
        height: 100%;
        &:after{
            content: '';
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: block;
            position: absolute;
            background-image:
              ${md ? 'linear-gradient(80deg, rgba(20,20,20,1) 25%, rgba(20,20,20,0.8) 38%, rgba(93,236,11,0) 62%)' : 'none'},
              linear-gradient(0deg, rgba(20,20,20,1) 13%, rgba(20,20,20,0.67) 31%, rgba(93,236,11,0) 50%);
            background-position: 0 0, 0 0;
          }
      `}>
        <img
          src={image ?? ''}
          css={css`
            width: 100vw;
            height: ${xxl ? '60vh' : 'fit-content'};
            object-fit: cover;
            aspect-ratio: 16 / 9;
      `} />
      </div>
      {children}
    </div>
  )
}