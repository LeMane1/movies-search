import { css } from "@emotion/react"
import { useContainerWidth } from "src/shared/lib"
import { Typography, Flex, Grid } from "antd"
import Lottie from "lottie-react";
import cameraLottie from '../assets/camera-lottie.json'

const { Title } = Typography
const { useBreakpoint } = Grid

export const Header: React.FC = () => {
  const { width } = useContainerWidth()
  const { md } = useBreakpoint()

  return (
    <div css={css`
      width: 100%;
      /* height: 60px; */
      position: absolute;
      z-index: 100;
      padding: 0 12px;
    `}>
      <div
        css={css`
          width: ${width};
          margin: 0 auto;
          height: 100%;
      `}>
        <Flex
          align="center"
          css={css`
            height: 100%;
            width: fit-content;
            padding: 4px 8px;
            backdrop-filter: blur(${md ? '0' : '20px'});
            background-color: rgba(255, 255, 255, ${md ? 0 : 0.6});
            border-radius: 8px;
            margin-top: 8px;
          `}
        >
          <Title css={css`
            font-size: ${md ? '24px' : '16px'} !important;
            margin-right: ${md ? '12px' : '8px'};
            color: ${md ? '#e6e6e6' : '#555555'} !important;
          `}>
            Movies Search
          </Title>

          <Lottie animationData={cameraLottie} loop={true} css={css`
            width: ${md ? '32px' : '24px'};
            height: ${md ? '32px' : '24px'};
          `} />
        </Flex>
      </div>
    </div>
  )
}