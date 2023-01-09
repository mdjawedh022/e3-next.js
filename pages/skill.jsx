import React from 'react'
import {Box,Text,useColorModeValue,} from "@chakra-ui/react"
const Skill = () => {
  return (
    <div>
      <Box w={"100%"}
      
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={6}
      mt={4}
      
      textAlign={"center"} >
      
      <h2 style={{fontWeight:"bold"}}>1.Full Stack Web Developer</h2>
       <Text>july 2022- present</Text> <br />

       <h2 style={{fontWeight:"bold"}}>2.B.sc (Chemistry)</h2>

       <Text>july 2017- july 2020</Text>
       
      </Box>
    </div>
  )
}

export default Skill;
