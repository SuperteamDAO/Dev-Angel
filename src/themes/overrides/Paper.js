// ==============================|| OVERRIDES - LIST ITEM ICON ||============================== //

export default function Paper(theme) {
    return {
        MuiPaper: {
            styleOverrides: {
                root: {
                    // backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)"
                    background: "rgba(0,0,0,0.2)",
                    backdropFilter: "blur(10px)",
                    "-webkit-backdrop-filter": "blur(10px)",
                    // border: "1px solid",
                    "&.expert-card": {
                        fontWeight: 400,
                        borderRadius: '10px',
                        color: '#FFF',
                        fontFamily: 'Avenir Next',
                        // boxShadow: '0 0 6px 0 rgba(157, 96, 212, 0.5)',
                        border: 'solid 3px transparent',
                        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, #d9afd9, #97d9e1)',
                        backgroundOrigin: 'border-box',
                        backgroundClip: 'content-box, border-box',
                        boxShadow: '2px 1000px 1px rgba(0,0,0,0.6) inset',    
                        '.MuiTypography-root': {
                            color: '#FFF',
                        }
                    }
                }
            }
        }
    };
}
