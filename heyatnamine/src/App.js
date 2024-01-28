import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import WithAction from "./WithAction";
import CallToActionWithVideo from "./CallToActionWithVideo";
import SplitWithImage from "./SplitWithImage";
import WithSpeechBubbles from "./WithSpeechBubbles";
import ThreeTierPricing from "./ThreeTierPricing";

const App = () => {
  return (
    <ChakraProvider>
      <WithAction />
      <CallToActionWithVideo />
      <SplitWithImage />
      <WithSpeechBubbles />
      <ThreeTierPricing />
    </ChakraProvider>
  );
};

export default App;
