import { useRef, useEffect } from "react";
import { Flex } from "antd"
import { SwitchButton } from "src/features/switch-button"
import { css } from "@emotion/react";

interface ICollectionsCarouselProps {
  children: React.ReactNode;
  wrapperId: string;
  paddingVertical?: number;
  paddingHorizontal?: number;
  hasRelativePosition?: boolean;
  cardWidth?: number;
}

export const CollectionsCarousel: React.FC<ICollectionsCarouselProps> = ({
  children,
  wrapperId,
  paddingVertical = 8,
  paddingHorizontal = 8,
  hasRelativePosition = true,
  cardWidth = 128
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const getVisibleCardsNumber = (): number => {
    const actorsBlock = document.querySelector(`#${wrapperId}`)

    if (actorsBlock && actorsBlock.clientWidth) {
      return Math.floor(actorsBlock.clientWidth / cardWidth)
    }

    return 0
  }

  const scroll = (direction: "left" | "right", cardWidth: number) => {
    const visibleCards = getVisibleCardsNumber()

    if (scrollRef.current) {
      const scrollAmount = cardWidth * visibleCards

      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const makeFinishScroll = () => {
      let timer = 0
      return function (event: Event) {
        if (timer) {
          clearTimeout(timer)
        }

        timer = setTimeout(() => {
          const target = event.target as HTMLElement

          if (target.scrollLeft % cardWidth !== 0) {
            scrollRef?.current?.scrollTo({
              left: target.scrollLeft - (target.scrollLeft % cardWidth),
              behavior: "smooth",
            });
          }
        }, 800)
      }
    }

    const finishScroll = makeFinishScroll()

    scrollRef.current?.addEventListener('scroll', finishScroll)

    return () => scrollRef.current?.removeEventListener('scroll', finishScroll)
  }, [])

  return (
    <div css={css`
      position: ${hasRelativePosition ? 'relative' : ''};
    `}>
      <SwitchButton
        direction="left"
        onClick={() => scroll("left", cardWidth)}
      />

      <SwitchButton
        direction="right"
        onClick={() => scroll("right", cardWidth)}
      />

      <Flex
        ref={scrollRef}
        align="flex-start"
        css={css`
          overflow-x: scroll;
          scrollbar-width: none;
          padding: ${paddingVertical}px ${paddingHorizontal}px;
      `}>
        {children}
      </Flex>
    </div>
  )
}