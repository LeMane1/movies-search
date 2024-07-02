import { css } from "@emotion/react"
import { Space } from "antd"
import { GenreTag } from "./GenreTag"
import type { Genre } from 'src/shared/models/types'

interface IGenresListProps {
  genres: Genre[] | null;
}

export const GenresList: React.FC<IGenresListProps> = ({ genres }) => {
  return (
    <>
      <Space
        wrap
        css={css`
              width: 100%;
              margin-bottom: 12px;
          `}>
        {genres && genres.map(genre => (<GenreTag genreName={genre.name} />))}
      </Space>
    </>
  )
}