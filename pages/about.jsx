import React from "react";
// import {Link} from "next/link"
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
 Link,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
const About = () => {
  return (
    <div style={{ marginTop: "20px" }}>
 <Center>
 <Box
        // maxW={"320px"}
        w={{base:"1xl",md:"3xl",lg:"4xl"}}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={"https://avatars.githubusercontent.com/u/107981893?v=4"}
          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: "green.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          Md Jawed Hussain
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          @mdjawedh022
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          Full-stack Developer | FOSS | JavaScript | Typescript | NodeJS | Deno
          | ReactJS | HTML | CSS | Chakra-UI | MUI
          {/* <Link href={'#'} color={'blue.400'}>
            #tag
          </Link>{' '}
          me in your posts */}
        </Text>

        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            _focus={{
              bg: "gray.200",
            }}
          >
         <Link href={'https://drive.google.com/file/d/1m5GgisAbX7FWCvIzTYzc-8tLL-hUtOYO/view?usp=sharing'}>Resume</Link>
          </Button>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
          >
           <Link href={"https://github.com/mdjawedh022"}>Follow</Link>
          </Button>
        </Stack>
      </Box>
      </Center>
      <Center>
      <Box
         w={{base:"1xl",md:"3xl",lg:"4xl"}}
      
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        mt={4}
        textAlign={"center"}
        
      >
        <Button spacing={3}>HTML</Button>
        <Button m={2}>CSS</Button>
        <Button>Javascript</Button>
        <Button m={2}>React.JS</Button>
        <Button>Redux</Button>
        <Button m={2}>Typescript</Button>
        <Button>Next.JS</Button>
      </Box>
      </Center>
    </div>
  );
};

export default About;
