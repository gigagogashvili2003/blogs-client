const common = {};

const dark = {};

const light = {
    ACTIVE_BG_COLOR: '#FF5480',
    BODY_BG_COLOR: '#F9F9FB',

    BLACK_COLOR: '#000000',
    WHITE_COLOR: '#ffffff',
    DEFAULT_FONT_COLOR: '#111210',
    SECONDARY_TEXT_COLOR: '#9B9B9B;',
};

export const themes = {
    dark: { ...common, ...dark },
    light: { ...common, ...light },
};
