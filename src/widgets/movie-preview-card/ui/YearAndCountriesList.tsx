import { Space, Typography } from "antd";
import { css } from "@emotion/react";
import { CountryItem } from "./CountryItem";
import type { Country } from "src/shared/models";

const { Title } = Typography

interface IYearAndCountriesListProps {
  movieYear: number | null;
  countries: Country[] | null;
}

const ListDivider = () => {
  return (
    <span
      css={css`
        font-weight: 500;
        opacity: 18%;
        font-size: 20px;
    `}>·</span>
  )
}

export const YearAndCountriesList: React.FC<IYearAndCountriesListProps> = ({
  movieYear,
  countries
}) => {
  return (
    <>
      <Space
        wrap
        split={<ListDivider />}
        size={[8, 4]}
        css={css`
          width: 100%;
          margin-bottom: 8px;
        `}>

        <Title
          level={5}
          css={css`
            opacity: 40%;
            font-weight: 500 !important;
        `}>
          {movieYear}
        </Title>

        <Space
          wrap
          size={[6, 2]}
        >
          {countries && countries.map((country: Country) => (
            <CountryItem country={country} />
          ))}
        </Space>
      </Space>
    </>
  )
}