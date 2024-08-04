import { css } from "@emotion/react"
import { Space } from "antd"
import { GenreTag } from "src/entities/genre-tag"
import type { Genre } from 'src/shared/models/types'

interface IGenresListProps {
  genres?: Genre[] | null;
  className?: string;
}

export const GenresList: React.FC<IGenresListProps> = ({ genres, className }) => {
  return (
    <>
      <Space
        wrap
        className={className}
        css={css`
          width: 100%;
      `}>
        {genres && genres.length > 0 ? genres.map(genre => (
          <GenreTag genreName={genre.name} key={genre.name} />
        )) : ''}
      </Space>
    </>
  )
}