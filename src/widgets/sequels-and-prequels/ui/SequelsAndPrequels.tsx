import { Typography } from "antd"
import { css } from "@emotion/react"

const { Title } = Typography

export const SequelsAndPrequels: React.FC = () => {
  return (
    <>
      <Title
        id="videoPlayerTitle"
        level={3}
        css={css`
            margin-bottom: 12px !important;
        `}>
        Сиквелы и приквелы
      </Title>
    </>
  )
}