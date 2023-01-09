import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Project from "./project";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar/>
    
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
