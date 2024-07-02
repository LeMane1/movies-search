import { theme } from 'antd';

const { darkAlgorithm } = theme;

export const mainColor = '#5065F6'
export const textColor = '#181818'
export const mainDarkBg = '#202022'
export const layoutDarkBg = '#18181A'

export const themeData = {
  token: {
    colorPrimary: mainColor,
    colorLink: 'white',
    borderRadius: 8
  },
  components: {
    Button: {
      colorPrimary: mainColor,
      algorithm: darkAlgorithm,
    },
    Layout: {
      headerPadding: '0 16px',
      headerBg: mainDarkBg,
      bodyBg: layoutDarkBg,
      footerBg: layoutDarkBg,
      siderBg: 'transparent',
      lightSiderBg: 'transparent',
      algorithm: darkAlgorithm
    },
    Typography: {
      titleMarginBottom: 0,
      titleMarginTop: 0
    }
  },
  algorithm: darkAlgorithm,
}