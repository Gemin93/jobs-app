import { extendTheme } from "@chakra-ui/react";

// const colors = {
//   primary: "#1a365d",
//   primaryAccent: "#ffffff",
// };
// const styles = {
//   global: {
//     "html, body": {
//       height: "100%",
//       bg: "gray.50",
//     },

//     "#_next": { height: "100%", bg: "gray.50" },
//   },
// };

const theme = extendTheme({
  colors: {
    primary: "#1a365d",
    primaryAccent: "#ffffff",
  },
  styles: {
    global: {
      "html, body": {
        height: "100%",
        bg: "gray.50",
      },

      "#_next": { height: "100%", bg: "gray.50" },
    },
  },
});

export { theme };
