import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Grid, Flex, Typography, Space } from "antd"
import { useContainerWidth } from 'src/shared/lib';
import { MovieName } from './MovieName';
import { TopRatingLabel } from 'src/entities/top-rating-label';
import { GenresList } from './GenresList';
import { DurationTime } from './DurationTime';
import { Country, Genre } from "src/shared/models/types";
import { CountryList } from "./CountryList";
import { KpRating } from "src/entities/kp-rating";
import { WatchButton } from "src/features/watch-button";

const { useBreakpoint } = Grid
const { Title } = Typography

const Box = styled.div<{ md: boolean | undefined }>`
  position: ${props => (props.md ? 'absolute' : 'relative')};
  z-index: 1;
  top: 0;
  left: 0;
  width: ${props => (props.md ? '100%' : '100%')};
  height: 100%;
  padding: 0px 12px;
  margin-bottom: ${props => (props.md ? '0px' : '12px')};
`

interface IMovieIntroInfoProps {
  movieName?: string;
  alternativeName?: string;
  top250?: number;
  year?: number;
  duration?: number;
  ageRating?: number;
  genres?: Genre[];
  countries?: Country[];
  ratingValue?: number;
}

export const MovieIntroInfo: React.FC<IMovieIntroInfoProps> = ({
  movieName,
  alternativeName,
  top250,
  year,
  duration,
  ageRating,
  genres,
  countries,
  ratingValue
}) => {

  const { breakpoint, width } = useContainerWidth()
  const { md } = useBreakpoint()

  return (
    <Box md={md}>
      <div
        css={css`
          width: ${width};
          height: 100%;
          margin: 0 auto;
      `}>
        <Flex
          vertical
          wrap
          justify='center'
          css={css`
            margin-top: -40px;
            height: 100%;
            width: ${md ? '50%' : '100%'};
        `}>
          <MovieName name={movieName} breakpoint={breakpoint} />

          <Title
            level={5}
            css={css`
              font-weight: 400 !important;
              opacity: 60%;
              margin-bottom: 8px !important;
          `}>
            {alternativeName}
          </Title>

          <Space
            wrap
            align='center'
            css={css`
              margin-bottom: 8px;
          `}>
            <KpRating ratingValue={ratingValue} />

            {top250 && <TopRatingLabel place={top250} />}

            <Title level={5} css={css`
              opacity: 70%;
            `}>
              {year}
            </Title>

            <DurationTime duration={duration} />

            <Title level={5} css={css`
              opacity: 70%;
            `}>
              {`${ageRating}+`}
            </Title>
          </Space>

          <Space wrap css={css`
            margin-bottom: 12px;
          `}>
            <CountryList countries={countries} />
          </Space>

          <GenresList genres={genres} css={css`
            margin-bottom: 16px;
          `} />

          <WatchButton />
        </Flex>
      </div>
    </Box>
  )
}