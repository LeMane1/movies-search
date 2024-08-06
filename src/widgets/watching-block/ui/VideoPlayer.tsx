import { useState, useEffect } from "react"
import { css } from "@emotion/react"
import { Grid } from "antd";

const { useBreakpoint } = Grid

const regExp = /<iframe.*>.*<\/iframe>/g

interface IVideoPlayerProps {
  name?: string;
  year?: number;
  kpId?: number;
  className?: string;
}

export const VideoPlayer: React.FC<IVideoPlayerProps> = ({
  name, year, kpId, className
}) => {
  const [scriptHtml, setScriptHtml] = useState('')
  const { xs } = useBreakpoint()

  useEffect(() => {
    if (name && year && kpId) {
      fetch(
        `//pleer.videoplayers.club/get_player?w=610%&h=370&type=widget&players=videocdn,apicollaps,hdvb,alloha,kodik,iframe,trailer,torrent&bt_s=b_r:6;b_h:40;b_w:100;b_c:F6FF58;b_bg:428BCA;b_f:11;&kp_id=${kpId}&data_title=${name}&year=${year}&tti=AIzaSyAAWctSBmXp8fr8cQ7I80tCDGbI6OxAQ9A`
      )
        .then(res => res.text())
        .then(data => {
          const match = data.match(regExp)
          if (match) {
            return setScriptHtml(match[1])
          }
        })
    }
  }, [])

  return (
    <div className={className}>
      <div
        className="uitools"
        id="uitools"
        dangerouslySetInnerHTML={{ __html: scriptHtml }}
        css={css`
          height: fit-content;
          width: 100%;
          aspect-ratio: 16 / 9;
          background-image: url('//pleer.videoplayers.club/web/img/loader.gif');
          background-repeat: no-repeat;
          background-position: center;
          background-color: #323232;
        `}></div >
    </div>
  )
}