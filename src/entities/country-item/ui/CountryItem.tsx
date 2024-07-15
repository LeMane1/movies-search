import type { Country } from "src/shared/models"
import { Typography } from "antd";
import { css } from "@emotion/react";

const { Title } = Typography

interface ICountryItemProps {
  country: Country;
}

export const CountryItem: React.FC<ICountryItemProps> = ({
  country
}) => {
  return (
    <>
      <Title
        level={5}
        css={css`
          opacity: 40%;
          font-weight: 500 !important;
      `}>
        {country.name}
      </Title>
    </>
  )
}