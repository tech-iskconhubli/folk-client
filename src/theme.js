
import { extendTheme } from "@chakra-ui/react";
const colors = {
  col: {
    primary:"##f5f5f5",
    secondary: "#DF8C38",
    text: "#B66009",
    300: "#a6adff",
   
  },
};
const fonts = {
  heading: "'Abel', sans-serif",
  body: "'Poppins', sans-serif",
  forms:"muli"
};

console.log(colors.col.text)

const theme = extendTheme({ colors, fonts });

export default theme;
