import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Grid } from 'antd';
import { css } from '@emotion/react';

const { useBreakpoint } = Grid

type SwitchButtonDirection = 'left' | 'right'

interface ISwitchButtonProps {
  direction: SwitchButtonDirection,
  onClick: () => void,
}

export const SwitchButton: React.FC<ISwitchButtonProps> = ({
  direction,
  onClick
}) => {
  const { xs } = useBreakpoint()

  return (
    <>
      <Button
        shape="circle"
        icon={direction === 'left' ? <LeftOutlined /> : <RightOutlined />}
        size={xs ? 'middle' : 'large'}
        css={css`
          position: absolute;
          left: ${direction === 'left' ? xs ? '-10px' : '-20px' : ''};
          right: ${direction === 'right' ? xs ? '-10px' : '-20px' : ''};
          top: 44%;
          z-index: 1000;
        `}
        onClick={() => onClick()}
      />
    </>
  )
}