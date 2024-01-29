import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import WithAction from "./WithAction";
import CallToActionWithVideo from "./CallToActionWithVideo";
import SplitWithImage from "./SplitWithImage";
import WithSpeechBubbles from "./WithSpeechBubbles";
import ThreeTierPricing from "./ThreeTierPricing";
import LargeWithAppLinksAndSocial from "./LargeWithAppLinksAndSocial";

// Define your custom theme object
const theme = extendTheme({
  // Your theme configuration goes here
  // Example:
  colors: {
    primary: "#3182ce",
    secondary: "#4a5568",
  },
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Montserrat, sans-serif",
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <WithAction />
      <CallToActionWithVideo />
      <SplitWithImage />
      <WithSpeechBubbles />
      <ThreeTierPricing />
      <LargeWithAppLinksAndSocial />
    </ChakraProvider>
  );
};

export default App;
