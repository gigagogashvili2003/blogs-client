type ButtonType = 'primary' | 'text';
type ButtonFontSize = '12px' | '14px' | '16px' | '18px' | '20px' | '24px' | '28px';
type BtnType = 'button' | 'submit' | 'reset';

export interface IButton
    extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    type: BtnType;
    buttonType: ButtonType;
    isLoading: boolean;
    fontSize: ButtonFontSize;
    disabled: boolean;
    onClick: () => void;
    className: string;
    padding: string;
    margin: string;
    text: string;
}

export type IStyledButtonType = Partial<IButton>;
