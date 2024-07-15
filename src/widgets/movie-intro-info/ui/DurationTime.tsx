import { css } from "@emotion/react"
import { Typography } from "antd"
import { getDuration } from "../lib/getDuration";

const { Title } = Typography

interface IDurationTimeProps {
  duration?: number;
}

export const DurationTime: React.FC<IDurationTimeProps> = ({ duration }) => {
  return (
    <>
      <Title level={5} css={css`
        opacity: 70%;
      `}>
        {duration ? getDuration(duration) : ''}
      </Title>
    </>
  )
}