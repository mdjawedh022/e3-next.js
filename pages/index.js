import React from "react";
import About from "./about";
import { Box, Flex } from "@chakra-ui/react";
import Skill from "./skill";
import Project from "./project";

const index = () => {
  return (
    <div>
      <Flex w={"95%"} m={"auto"} gap={5} alignItems={"center"}>
        <Box w={"md"}>
          <About />
          <Skill />
        </Box>
        <Box></Box>
      </Flex>
      {/* <Project/> */}
    </div>
  );
};

export default index;
