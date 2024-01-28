import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import WithAction from './WithAction'
import CallToActionWithVideo from "./CallToActionWithVideo";
import SplitWithImage from "./SplitWithImage";

const App = () => {
  return (
    <ChakraProvider>
      <WithAction />
      <CallToActionWithVideo />
      <SplitWithImage />
    </ChakraProvider>
  );
};

export default App;
