
import { extendTheme } from "@chakra-ui/react";
const colors = {
  col: {
    primary:"#f5f5f5", //white smoke color
    secondary: "#DF8C38", // light orange
    text: "#B66009", // dark orange
    300: "#a6adff",
   
  },
};
const fonts = {
  heading: "'Abel', sans-serif",
  body: "'Poppins', sans-serif",
  forms:"muli"
};


const theme = extendTheme({ colors, fonts });

export default theme;
