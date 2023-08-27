import { FC } from '@/types';
import { CircleIconStyled } from './CricleIcon.styled';
import { ICircleIcon } from './CircleIcon.types';

const CircleIcon: FC<ICircleIcon> = (props) => {
    const { children, ...rest } = props;

    return <CircleIconStyled {...rest}>{children}</CircleIconStyled>;
};

export default CircleIcon;
