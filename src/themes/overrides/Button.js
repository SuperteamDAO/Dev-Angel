// ==============================|| OVERRIDES - BUTTON ||============================== //

export default function Button(theme) {
    const disabledStyle = {
        '&.Mui-disabled': {
            backgroundColor: theme.palette.grey[200]
        }
    };

    return {
        MuiButton: {
            defaultProps: {
                disableElevation: true
            },
            styleOverrides: {
                root: {
                    fontWeight: 400,
                    backgroundColor: '#000',
                    borderRadius: '10px',
                    background: 'transparent',
                    color: '#000',
                    fontFamily: 'Avenir Next',
                    boxShadow: '0 0 6px 0 rgba(157, 96, 212, 0.5)',
                    border: 'solid 3px transparent',
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, #78e4ff, #ff48fa)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'content-box, border-box',
                    '&:hover': {
                        border: 'solid 3px transparent',
                        boxShadow: '2px 1000px 1px #fff inset',
                    }
                },
                contained: {
                    ...disabledStyle
                },
                outlined: {
                    ...disabledStyle
                }
            }
        }
    };
}
