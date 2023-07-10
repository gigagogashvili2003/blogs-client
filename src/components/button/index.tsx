import { FC } from '@/types';
import { IButton } from './button-interface';
import { ButtonStyled } from './button-styled';

const Button: FC<IButton> = (props) => {
    const {
        fontSize,
        isLoading,
        type,
        children,
        buttonType,
        disabled,
        onClick,
        className,
        margin,
        padding,
        text,
        ...rest
    } = props;

    return (
        <ButtonStyled
            padding={padding}
            text={text}
            margin={margin}
            isLoading={isLoading}
            disabled={disabled}
            fontSize={fontSize}
            className={className}
            buttonType={buttonType}
            type={type}
            onClick={onClick}
            {...rest}
        ></ButtonStyled>
    );
};

export default Button;
