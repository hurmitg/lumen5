import { Avatar, Box, Button, Flex, Icon, Image, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { BellIcon } from '@chakra-ui/icons'
import { Link, NavLink, useParams } from "react-router-dom";
import styled from "./Dashboard.module.css";
import VideoGrid from "../Components/VideoGrid";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";


export function DashboardNav(){
  
  let localUser = JSON.parse(localStorage.getItem("user")) || {};
  const {logoutUser, sub, email} = useContext(AuthContext);
  let localSub = JSON.parse(localStorage.getItem("sub")) || sub;
  return (
    <Flex h="12vh" w="100%" p="20px" borderBottom="1px solid #dddee6" alignItems="center" justifyContent="space-between">
    <Link to="/dashboard/all"><Image src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-color-default.svg" /></Link>
    <Flex alignItems="center">
    <Link to="/pricing"><Button p="15px 20px" colorScheme='blue' color="#5846f5" borderRadius="30px"  variant='outline' _hover={{bg:"#5846f5", color : "white"}}>{localSub || sub}</Button> </Link>

    <Box h="10vh" m="0 20px" borderRight="1px solid #dddee6" ></Box>
    
    <BellIcon w="25px" h="25px" mr="20px" />  

    <Menu>
      <MenuButton>
        <Avatar w="30px" h="30px"></Avatar>
      </MenuButton>
      <MenuList>
        <MenuItem _hover={{backgroundColor:"white"}}>{localUser.email || email}</MenuItem>
        <MenuItem onClick={logoutUser}>Log out</MenuItem>    
      </MenuList>
    </Menu>

    </Flex>
</Flex>
  )
}

export default function Dashboard (){



    const params = useParams();

    const links = [
        {
          path: "/dashboard/all",
          title: "All Videos"
        },
        {
          path: "/dashboard/saved",
          title: "Saved Templates"
        },
        {
          path: "/dashboard/templates",
          title: "Instant Videos"
        },
        
      ];

    


    return (
        <>
        
        <DashboardNav />
        <Flex h="88vh" w="100%" > 

            <Flex w="20%" borderRight="1px solid #dddee6" direction="column" >
                {links.map((link) => (
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? styled.active: styled.default
                      }
                      to={link.path}
                      key={link.title}
                    >
                      {link.title}
                    </NavLink>
                ))} 
            </Flex>

            <Flex w="80%" bg="#f0f0f4">

              {params.page=="all" ? 
                  <>
                    <Flex w="100%" bg="#f0f0f4" 
                    justifyContent="center"
                      backgroundImage={"url('https://storage.googleapis.com/lumen5-site-images/brand_kit_empty_state.png')"} 
                      backgroundPosition="center" backgroundRepeat="no-repeat">
                      <Text w="100%" p="20px 0" fontSize="3xl" textAlign="center">You have not created any videos yet.</Text>
                    </Flex> 
                  </> 
                  : params.page=="saved" ? 
                      <>
                        <Flex w="100%" bg="#f0f0f4" 
                          justifyContent="center"
                          backgroundImage={"url('https://liferay-support.zendesk.com/hc/article_attachments/360037579711/empty_state.gif')"} 
                          backgroundPosition="center" backgroundRepeat="no-repeat">
                           <Text w="100%" p="20px 0" fontSize="3xl" textAlign="center">Your saved items will appear here</Text>
                        </Flex> 
                      </> 
                      : <>
                          <Flex direction="column" alignItems="center" w="100%" h="100%" overflowY="scroll">
                          <Text p="20px 0 0" textDecor="underline" fontWeight="600" fontSize="3xl">See what others are doing with Lumen5</Text>
                            <VideoGrid />
                          </Flex>
                        </>}
            </Flex>






              

        </Flex>


        </>
    )
}