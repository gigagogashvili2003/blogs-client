type JustifyAlignCommon = 'center' | 'flex-start' | 'flex-end';

export type FlexDirection = 'column' | 'column-rever' | 'row' | 'row-reverse';
export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';
export type FlexJustify = 'space-between' | 'space-around' | JustifyAlignCommon;
export type FlexAlign = 'stretch' | 'baseline' | JustifyAlignCommon;

export interface IFlex {
    $direction?: FlexDirection;
    $wrap?: FlexWrap;
    $justify?: FlexJustify;
    $align?: FlexAlign;
    $columnGap?: string;
    $rowGap?: string;
    $gap?: string;
    width?: string;
    height?: string;
    margin?: string;
}
