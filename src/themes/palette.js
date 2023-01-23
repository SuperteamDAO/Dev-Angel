// material-ui
import { createTheme } from '@mui/material/styles';

// third-party
import { presetPalettes } from '@ant-design/colors';

// project import
import ThemeOption from './theme';

// ==============================|| DEFAULT THEME - PALETTE  ||============================== //

const Palette = (mode) => {
    const colors = presetPalettes;

    const greyPrimary = [
        '#262626',
        '#262626',
        '#262626',
        '#262626',
        '#262626',
        '#262626',
        '#262626',
        '#262626',
        '#262626',
        '#262626',
        '#262626'
    ];
    const greyAscent = ['#262626', '#262626', '#262626', '#262626'];
    // const greyConstant = ['#fafafb', '#e6ebf1'];
    const greyConstant = ['#696969', '#696969'];

    colors.grey = [...greyPrimary, ...greyAscent, ...greyConstant];

    const paletteColor = ThemeOption(colors);

    return createTheme({
        palette: {
            mode,
            common: {
                black: '#000',
                white: '#fff'
            },
            ...paletteColor,
            text: {
                primary: paletteColor.grey[700],
                secondary: paletteColor.grey[500],
                disabled: paletteColor.grey[400]
            },
            action: {
                disabled: paletteColor.grey[300]
            },
            divider: paletteColor.grey[200],
            background: {
                paper: paletteColor.grey[0],
                default: paletteColor.grey.A50
            },
        }
    });
};

export default Palette;
