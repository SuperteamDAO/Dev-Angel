// ==============================|| OVERRIDES - CARD CONTENT ||============================== //

export default function Alert(theme) {
    return {
        MuiAlert: {
            styleOverrides: {
                root: {
                    backgroundColor: 'none',
                    background: 'none',
                    backdropFilter: 'none'
                }
            }
        }
    };
}
