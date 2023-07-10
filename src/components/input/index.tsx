import { FC } from '@/types';
import { IInput } from './input-interface';
import { InputStyled } from './input-styled';

export const Input: FC<IInput> = (props) => {
    const { ...rest } = props;

    return <InputStyled {...rest} />;
};
