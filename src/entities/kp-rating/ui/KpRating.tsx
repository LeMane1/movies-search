import { Typography } from "antd";
import { css } from "@emotion/react";
import { getRatingColor } from "../lib/getRatingColor";
import { getRoundedRatingValue } from "../lib/getRoundedRatingValue";

const { Title } = Typography

interface IKpRatingProps {
  ratingValue?: number | null;
  className?: string
}

export const KpRating: React.FC<IKpRatingProps> = ({
  ratingValue,
  className
}) => {
  return (
    <>
      <Title
        className={className}
        css={css`
          font-size: 24px !important;
          font-weight: 500;
          color: ${getRatingColor(Number(getRoundedRatingValue(ratingValue)))} !important;
          opacity: ${ratingValue ? '100%' : '40%'};
      `}>
        {ratingValue ? getRoundedRatingValue(ratingValue) : '—'}
      </Title>
    </>
  )
}