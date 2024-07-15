import { css } from "@emotion/react"
import { Flex, Typography } from 'antd'
import WreathLeftGold from '../assets/wreath-left-gold.svg'
import WreathRightGold from '../assets/wreath-right-gold.svg'

const { Title } = Typography

interface ITopRatingLabelProps {
  place: number;
}

export const TopRatingLabel: React.FC<ITopRatingLabelProps> = ({ place }) => {
  return (
    <>
      <Flex align="center" justify="center">
        <img
          src={WreathLeftGold}
          css={css`
          width: 16px;
          height: 24px;
          margin-right: 4px;
          opacity: 80%;
        `}
          loading="lazy"
        />

        <Flex
          vertical
          justify="center"
          align="center"
          css={css`
            margin-right: 4px;
        `}>
          <Title level={5} css={css`
            color: #ffd60a !important;
          `}>
            Топ 250
          </Title>

          <Title css={css`
            font-size: 12px !important;
            color: #ffd60a !important;
          `}>
            {`${place} место`}
          </Title>
        </Flex>
        <img
          src={WreathRightGold}
          css={css`
          width: 16px;
          height: 24px;
          opacity: 80%;
        `}
          loading="lazy"
        />
      </Flex>
    </>
  )
}