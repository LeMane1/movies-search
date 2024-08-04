import { css } from "@emotion/react"
import { useContainerWidth } from "src/shared/lib"
import { Typography, Flex, Grid } from "antd"
import Lottie from "lottie-react";
import cameraLottie from '../assets/camera-lottie.json'
import { APP_NAME } from "src/shared/models";
import { useNavigate } from "react-router-dom";

const { Title } = Typography
const { useBreakpoint } = Grid

export const Header: React.FC = () => {
  const { width } = useContainerWidth()
  const { md } = useBreakpoint()
  const navigate = useNavigate()

  return (
    <div css={css`
      width: 100%;
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
        <button
          onClick={() => {
            navigate('/movies-search')
          }}
          css={css`
            display: flex;
            align-items: center;
            background: transparent;
            border: none;
            &:hover{
              cursor: pointer;
            }
            height: 100%;
            width: fit-content;
            padding: ${md ? '0px' : '4px 8px'};
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
            {APP_NAME}
          </Title>

          <Lottie animationData={cameraLottie} loop={true} css={css`
            width: ${md ? '32px' : '24px'};
            height: ${md ? '32px' : '24px'};
          `} />
        </button>
      </div>
    </div>
  )
}