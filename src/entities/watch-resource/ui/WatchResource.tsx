import { Item } from "src/shared/models"
import { css } from "@emotion/react";
import { Flex, Typography } from "antd";

const { Title } = Typography

interface IWatchResourceProps {
  resource?: Item;
  className?: string;
}

export const WatchResource: React.FC<IWatchResourceProps> = ({ resource, className }) => {
  return (
    <>
      <a href={resource?.url} target="_blanc">
        <Flex align="center" css={css`
          padding: 8px;
          border-radius: 8px;
          &:hover{
            cursor: pointer;
            background-color: #282828;
          }
        `}>
          <img
            src={resource?.logo?.url}
            css={css`
              width: 50px;
              height: 50px;
              margin-right: 8px;
              border-radius: 8px;
          `} />

          <Title css={css`
            font-size: 12px !important;
            font-weight: 500 !important;
            word-break: break-word !important;
          `}>
            {resource?.name}
          </Title>
        </Flex>
      </a>
    </>
  )
}