
import { extendTheme } from "@chakra-ui/react";
const colors = {
  col: {
    50: "#f5f7ff",
    100: "#e4eaff",
    200: "#c5ccff",
    300: "#a6adff",
    400: "#858eff",
    500: "#646fff",
    600: "#525bd6",
    700: "#4047ad",
    800: "#2e3484",
    900: "#1c205b",
  },
};
const fonts = {
  heading: "'Abel', sans-serif",
  body: "'Actor', sans-serif",
};

const theme = extendTheme({ colors, fonts });

export default theme;
