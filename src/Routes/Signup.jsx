import {Button, Flex, FormControl, FormLabel, Image, Input, Spinner, Text, useToast} from "@chakra-ui/react"
import { Link, Navigate } from "react-router-dom"
import LoginSideBox from "../Components/LoginSideBox"
import axios from "axios"
import { useState } from "react";

const userSignup = ({email, password, name}) => {
    let res = axios.post("https://reqres.in/api/register", {
        id : `lumen5${email}`,
        email : email,
        password : password,
        name: name,
    });
    return res
  };


export default function Signup(){

    const [loading, setLoading] = useState(false)
    const toast = useToast();

    const handleSignup = () =>{
        setLoading(true)
      let email = document.getElementById("signupEmail").value;
      let password = document.getElementById("signupPassword").value;
      let name = document.getElementById("signupName").value;
      userSignup({email, password, name})
        .then((res)=>{
            setLoading(false)
            toast({
                title: 'Signup Successful !',
                description: "Dive into the world of video editing now.",
                status: 'success',
                duration: 5000,
                isClosable: true,
              });

            }
        ). catch((err) =>{
            console.log(err)
            setLoading(false)
            toast({
                title: 'Signup Failed ! ',
                description: "Please try again.",
                status: 'error',
                duration: 5000,
                isClosable: true,
              }) 
            }
        )
    }
  


    return (
        <Flex w="100%" h="100vh" >
            <LoginSideBox />
            <Flex w="66%" direction="column" alignItems="center">
                <Text fontWeight='800' fontSize="4xl"> Get started with a free account </Text>
                <FormControl w="70%" mt="40px">

                    <FormLabel fontWeight="400" mt="20px">FULL NAME</FormLabel>
                    <Input id="signupName" type='text' border="none" borderBottom="1px solid grey" borderRadius="0" />

                    <FormLabel fontWeight="400" mt="20px">WORK EMAIL</FormLabel>
                    <Input id="signupEmail" type='email' border="none" borderBottom="1px solid grey" borderRadius="0" />

                    <FormLabel fontWeight="400" mt="20px">PASSWORD</FormLabel>
                    <Input id="signupPassword" type='password' border="none" borderBottom="1px solid grey" borderRadius="0" />

                    { loading ?
                            <Button w="100%" m="40px 0px" p="25px 20px" color="white" bg="#5846f5" variant='solid' borderRadius="30px" _hover={{bg:"#4636c5"}}><Spinner /></Button>    
                            : <Button onClick={()=>{handleSignup()}} w="100%" m="40px 0px" p="25px 20px" color="white" bg="#5846f5" variant='solid' borderRadius="30px" _hover={{bg:"#4636c5"}}>Create Account</Button>  

                    }


                </FormControl>
                <Text w="66%" textAlign="left" fontSize="lg">Already have a Lumen5 account? <Link to="/login" style={{color:"blue", textDecoration:"underline"}}> Log in</Link></Text>
                <Text w="66%" p="10px 0" textAlign="left" fontSize="xs" color="grey">By clicking “Create account” I agree to Lumen5’s Terms of Use and Privacy Policy .</Text>
            </Flex>
        </Flex>
    )
}