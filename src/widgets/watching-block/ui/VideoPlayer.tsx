import { useState, useEffect } from "react"
import { css } from "@emotion/react"
import { getVideoPlayer } from "../api/getVideoPlayer";

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

  useEffect(() => {
    getVideoPlayer(name, year, kpId)
      .then(script => setScriptHtml(script))
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    getVideoPlayer(name, year, kpId)
      .then(script => setScriptHtml(script))
  }, [name, year, kpId])

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
          background-color: #1b1b1b;
        `}></div >
    </div>
  )
}