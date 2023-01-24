import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GlobalStyles } from "@mui/material";

// project import
import Palette from './palette';
import Typography from './typography';
import CustomShadows from './shadows';
import componentsOverride from './overrides';

// ==============================|| DEFAULT THEME - MAIN  ||============================== //

export default function ThemeCustomization({ children }) {
    const theme = Palette('light', 'default');

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const themeTypography = Typography(`'Public Sans', sans-serif`);
    const themeCustomShadows = useMemo(() => CustomShadows(theme), [theme]);

    const themeOptions = useMemo(
        () => ({
            breakpoints: {
                values: {
                    xs: 0,
                    sm: 768,
                    md: 1024,
                    lg: 1266,
                    xl: 1536
                }
            },
            direction: 'ltr',
            mixins: {
                toolbar: {
                    minHeight: 60,
                    paddingTop: 8,
                    paddingBottom: 8
                }
            },
            palette: theme.palette,
            customShadows: themeCustomShadows,
            typography: themeTypography
        }),
        [theme, themeTypography, themeCustomShadows]
    );

    const themes = createTheme(themeOptions);
    themes.components = componentsOverride(themes);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes}>
                <CssBaseline />
                <GlobalStyles
                    styles={{
                        body: { 
                            backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)",
                            height: '100vh',
                            /* Center and scale the image nicely */
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundAttachment: 'fixed',

                            // background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
                            // backgroundImage: "linear-gradient( 95.2deg, rgba(173,252,234,1) 26.8%, rgba(192,229,246,1) 64% )"
                        },
                    }}
                />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

ThemeCustomization.propTypes = {
    children: PropTypes.node
};
