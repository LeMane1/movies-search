import { useRef } from "react";
import { Typography, Flex, Button, Grid } from "antd";
import type { Person } from "src/shared/models"
import { PersonCard } from "src/entities/person-card";
import { css } from "@emotion/react";
import {LeftOutlined, RightOutlined} from '@ant-design/icons'

const { Title } = Typography
const { useBreakpoint } = Grid

interface IActorsBlockProps {
  actors?: Person[] | null;
}

export const ActorsBlock: React.FC<IActorsBlockProps> = ({ actors }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { xs } = useBreakpoint()

  const scroll = (direction: "left" | "right") => {
    const cardWidth = 128
    let visibleCards = 0
    const actorsBlock = document.querySelector('#actors-block-container')

    if (actorsBlock && actorsBlock.clientWidth){
      visibleCards = Math.ceil(actorsBlock.clientWidth / cardWidth)
    }

    if (scrollRef.current) {
      const scrollAmount = cardWidth * visibleCards

      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      id="actors-block-container"
      css={css`
        background-color: #222222;
        padding-top: 16px;
        padding-bottom: 16px;
        border-radius: 8px;
        position: relative;
    `}>
      <Title level={3}
        css={css`
          margin-bottom: 12px !important;
          padding-left: 16px;
          padding-right: 16px;
        `}>
        В ролях
      </Title>

      <Button
        shape="circle"
        icon={<LeftOutlined />}
        size={xs ? 'middle' : 'large'}
        css={css`
          position: absolute;
          left: ${xs ? '-10px' : '-20px'};
          top: 44%;
          z-index: 1000;
        `}
        onClick={() => scroll("left")}
      />

      <Button
        shape="circle"
        size={xs ? 'middle' : 'large'}
        icon={<RightOutlined />}
        css={css`
          position: absolute;
          right: ${xs ? '-10px' : '-20px'};
          top: 44%;
          z-index: 1000;
        `}
        onClick={() => scroll("right")}
      />

      <Flex
        ref={scrollRef}
        align="flex-start"
        css={css`
          overflow-x: auto;
          scrollbar-width: none;
          padding: 0px 12px;
      `}>
        {actors && actors.length > 0 ? actors.map(actor => (
          <PersonCard person={actor} css={css`
            flex-shrink: 0;
            margin-right: 8px;
          `} />
        )) : <p>Нет актеров</p>}
      </Flex>
    </div>
  )
}