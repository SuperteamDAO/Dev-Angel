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
                    borderColor: "rgba(0,0,0,0.4)"
                }
            }
        }
    };
}
