import { Divider, Typography } from "antd"
import { css } from "@emotion/react"

const { Text } = Typography

export const Footer: React.FC = () => {
  return (
    <>
      <Divider />
      <Text css={css`
        font-size: 14px !important;
        opacity: 40% !important;
      `}>
        Киномания, 2024. Данный проект является образовательным и создан исключительно в обучающих целях без присваивания коммерческой выгоды. Все права принадлежат правообладателям.
      </Text>
    </>
  )
}