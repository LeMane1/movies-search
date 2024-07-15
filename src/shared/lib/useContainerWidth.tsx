import { Grid } from "antd"
import type { IContainerParameters } from "../models/types";

const { useBreakpoint } = Grid;

export const useContainerWidth = (): IContainerParameters => {
  const { xxl, xl, lg, md, sm, xs } = useBreakpoint();
  if (xxl) {
    return {
      breakpoint: 'xxl',
      width: '1200px'
    }
  } else if (xl) {
    return {
      breakpoint: 'xl',
      width: '1200px'
    }
  } else if (lg) {
    return {
      breakpoint: 'lg',
      width: '992px'
    }
  } else if (md) {
    return {
      breakpoint: 'md',
      width: '768px'
    }
  } else if (sm) {
    return {
      breakpoint: 'sm',
      width: '576px'
    }
  } else if (xs) {
    return {
      breakpoint: 'xs',
      width: '100%'
    }
  } else {
    return {
      breakpoint: 'none',
      width: '100%'
    }
  }
}