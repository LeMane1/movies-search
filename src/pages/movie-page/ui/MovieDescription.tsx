import { css } from "@emotion/react"
import { Typography } from "antd";

const { Text } = Typography

interface IMovieDescritionProps {
  descriptionText: string | undefined;
  className?: string;
}

export const MovieDescription: React.FC<IMovieDescritionProps> = ({
  descriptionText,
  className
}) => {
  return (
    <Text
      className={className}
      css={css`
        font-size: 14px;
        opacity: 70%;
    `}>
      {descriptionText}
    </Text>
  )
}