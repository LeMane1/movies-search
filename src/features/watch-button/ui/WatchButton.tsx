import { css } from "@emotion/react"
import { Button } from "antd"

export const WatchButton: React.FC = () => {

  const scrollToVideoPlayer = () => {
    const videoPlayerTitle = document.getElementById('videoPlayerTitle')
    videoPlayerTitle?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <>
      <Button
        size="large"
        type="primary"
        onClick={scrollToVideoPlayer}
        css={css`
              width: fit-content;
              font-weight: 600 !important;
              padding: 20px !important;
              font-size: 16px;
      `}>
        Смотреть онлайн
      </Button>
    </>
  )
}