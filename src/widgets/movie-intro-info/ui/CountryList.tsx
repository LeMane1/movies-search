import { css } from "@emotion/react"
import { Typography, Space } from "antd"
import { Country } from "src/shared/models"

const { Title } = Typography

interface CountryListProps {
  countries?: Country[]
}

export const CountryList: React.FC<CountryListProps> = ({
  countries
}) => {
  return (
    <>
      <Space wrap size={[8, 2]}>
        {countries && countries.length > 0 ? countries.map(country => (
          <Title level={5} css={css`
            opacity: 70%;
          `}>
            {country.name}
          </Title>
        )) : ''}
      </Space>
    </>
  )
}