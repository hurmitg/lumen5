import {Button, Flex, FormControl, FormLabel,Input, Spinner, Text, useToast} from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
import LoginSideBox from "../Components/LoginSideBox";
import { useContext } from "react";
import {AuthContext} from "../Context/AuthContext";
import axios from "axios"
import { useState } from "react";

const userLogin = ({email, password}) => {
    let res = axios.post("https://reqres.in/api/login", {
        id : `lumen5${email}`,
        email : email,
        password : password,
    });
    return res
  };

  

export default function Login(){

    const {loginUser, isAuth} = useContext(AuthContext);
    const [loading, setLoading] = useState(false)
    const toast = useToast();


    const handleLogin = () =>{
        setLoading(true)
      let email = document.getElementById("inputEmail").value;
      let password = document.getElementById("inputPassword").value;
      userLogin({email, password})
        .then((res)=>{
            loginUser(email, res.token, "Free")
            setLoading(false)
            toast({
                title: 'Login Successful !',
                description: "Dive into the world of video editing now.",
                status: 'success',
                duration: 5000,
                isClosable: true,
              }) 
            }
        ). catch((err) =>{
            console.log(err)
            setLoading(false)
            toast({
                title: 'Invalid Credentials ! ',
                description: "Please try again.",
                status: 'error',
                duration: 5000,
                isClosable: true,
              }) 
            }
        )
    }
  
    if(isAuth) {
      return <Navigate to="/dashboard/all" />
    } 

    return (
            <Flex w="100%" h="100vh" >
                <LoginSideBox />
                <Flex w="66%" direction="column" alignItems="center">

                    <Text w="66%" textAlign="left" p="10px 0" fontWeight='800' fontSize="4xl">Welcome back!</Text>
                    
                    <FormControl w="70%" mt="40px" >

                        <FormLabel fontWeight="400" mt="20px">WORK EMAIL</FormLabel>
                        <Input id="inputEmail" type='text' border="none" borderBottom="1px solid grey" borderRadius="0" />

                        <FormLabel fontWeight="400" mt="20px">PASSWORD</FormLabel>
                        <Input id="inputPassword" type='password' border="none" borderBottom="1px solid grey" borderRadius="0" />
                        
                        { loading ?
                            <Button w="100%" m="40px 0px" p="25px 20px" color="white" bg="#5846f5" variant='solid' borderRadius="30px" _hover={{bg:"#4636c5"}}><Spinner /></Button>    
                            : <Button onClick={()=>{handleLogin()}} w="100%" m="40px 0px" p="25px 20px" color="white" bg="#5846f5" variant='solid' borderRadius="30px" _hover={{bg:"#4636c5"}}>Log In</Button>  

                        }
                                              

                    </FormControl>

                    <Text w="66%" textAlign="left">
                        Need a Lumen5 account? 
                        <Link to="/signup" style={{color:"blue", textDecoration:"underline"}}>Create an Account
                        </Link>
                    </Text>

                </Flex>
            </Flex>
    ) 
}