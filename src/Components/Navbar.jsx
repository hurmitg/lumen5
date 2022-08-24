import { Link, NavLink } from "react-router-dom";
// import styles from "./Navbar.module.css";
import { Box, Button, Center, Flex, Image, Spacer, Text } from "@chakra-ui/react";
const links = [
  {
    path: "/",
    title: "Home"
  },
  {
    path: "/contact",
    title: "Contact"
  },
  {
    path: "/about",
    title: "About"
  },
  {
    path: "/users",
    title: "Users"
  }
];
function Navbar() {

    return (
        <Flex position="sticky" top="-20px" bg="white" w="100%" p="20px 10% 10px 10%" direction="row" h="18vh" justifyContent="space-between" alignItems="center" zIndex="100">

            <Flex h="60%" >
              <Image h="100%" src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-color-default.svg"/>
            </Flex>

            <Flex fontSize="large" h="65%" justifyContent="space-between" alignItems="center">
              <Text m="15px">Pricing</Text>
              <Text m="15px">Enterprise</Text>
              <Button m="10px" p="25px 20px" colorScheme='blue' color="#5846f5" borderRadius="30px"  variant='outline'>Login</Button> 
              <Button m="10px" p="25px 20px" color="white" bg="#5846f5" variant='solid' borderRadius="30px">Sign Up</Button>
            </Flex>

            
        </Flex>
    )



//   return (
//     <div>
//       {links.map((link) => (
//         <NavLink
//           // style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
//           className={({ isActive }) =>
//             isActive ? styles.active : styles.default
//           }
//           key={link.path}
//           to={link.path}
//         >
//           {link.title}
//         </NavLink>
//       ))}
//       <IsLoggedIn />
//     </div>
//   );
}

export default Navbar;
