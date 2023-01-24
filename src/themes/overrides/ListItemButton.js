// ==============================|| OVERRIDES - BUTTON ||============================== //

export default function ListItemButton(theme) {
    return {
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        borderRight: "2px solid #333333",
                        backgroundColor: "none !important",
                        background: "rgba(0,0,0,0.2) !important",
                        backdropFilter: "blur(10px) !important",
                        "-webkit-backdrop-filter": "blur(10px) !important",
                        '.MuiTypography-root': {
                            color: "#ccc !important",
                        },
                        '.anticon': {
                            color: "#ccc !important",
                        }    
                    },
                    '&.Mui-selected': {
                        background: "rgba(0,0,0,0.2) !important",
                        backdropFilter: "blur(10px) !important",
                        "-webkit-backdrop-filter": "blur(10px) !important",    
                        borderRight: "2px solid #333333 !important",
                        color: "#CCC !important",
                        '.MuiTypography-root': {
                            fontWeight: 800,
                            color: "#FFF !important",
                        },
                        '.anticon': {
                            color: "#FFF !important",
                        }    
                    },
                    '.MuiTypography-root': {
                        color: "#333 !important",
                    },
                    '.anticon': {
                        color: "#333 !important",
                    }
                },
            }
        }
    };
}
