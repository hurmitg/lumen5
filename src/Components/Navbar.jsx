import { Link, NavLink } from "react-router-dom";
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
const links = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/contact",
    title: "Contact",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/users",
    title: "Users",
  },
];
function Navbar() {
  return (
    <Flex
      position="sticky"
      top="-20px"
      bg="white"
      w="100vw"
      p="20px 5% 10px 5%"
      direction={["column", "row"]}
      justifyContent="space-between"
      alignItems="center"
      zIndex="100"
    >
      <Flex h="60%">
        <Link to="/">
          <Image
            h="100%"
            src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-color-default.svg"
          />
        </Link>
      </Flex>

      <Flex
        fontSize="large"
        h="65%"
        justifyContent={["space-around","space-between"]}
        alignItems="center"
        flexWrap="wrap"
      >
        <Link to="/pricing">
          <Text m="15px">Pricing</Text>
        </Link>
        <Link to="/enterprise">
          <Text m="15px">Enterprise</Text>
        </Link>
        <Link to="/login ">
          <Button
            m="10px"
            p="25px 20px"
            colorScheme="blue"
            color="#5846f5"
            borderRadius="30px"
            variant="outline"
            _hover={{ bg: "#5846f5", color: "white" }}
          >
            Login
          </Button>
        </Link>
        <Link to="/signup">
          <Button
            m="10px"
            p="25px 20px"
            color="white"
            bg="#5846f5"
            variant="solid"
            borderRadius="30px"
            _hover={{ bg: "#4636c5" }}
          >
            Sign Up
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Navbar;
