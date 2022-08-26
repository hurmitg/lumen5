import {Button, Flex, FormControl, FormLabel, Image, Input, Text} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import LoginSideBox from "../Components/LoginSideBox"

export default function Signup(){
    return (
        <Flex w="100%" h="100vh" >
            <LoginSideBox />
            <Flex w="66%" direction="column" alignItems="center">
                <Text fontWeight='800' fontSize="4xl"> Get started with a free account </Text>
                <FormControl w="70%" mt="40px">
                    <FormLabel fontWeight="400" mt="20px">FULL NAME</FormLabel>
                    <Input type='email' border="none" borderBottom="1px solid grey" borderRadius="0" />
                    <FormLabel fontWeight="400" mt="20px">WORK EMAIL</FormLabel>
                    <Input type='text' border="none" borderBottom="1px solid grey" borderRadius="0" />
                    <FormLabel fontWeight="400" mt="20px">PASSWORD</FormLabel>
                    <Input type='password' border="none" borderBottom="1px solid grey" borderRadius="0" />
                    <Button w="100%" m="40px 0px" p="25px 20px" color="white" bg="#5846f5" variant='solid' borderRadius="30px" _hover={{bg:"#4636c5"}}>Create Account</Button>
                </FormControl>
                <Text w="66%" textAlign="left" fontSize="lg">Already have a Lumen5 account? <Link to="/login" style={{color:"blue", textDecoration:"underline"}}> Log in</Link></Text>
                <Text w="66%" p="10px 0" textAlign="left" fontSize="xs" color="grey">By clicking “Create account” I agree to Lumen5’s Terms of Use and Privacy Policy .</Text>
            </Flex>
        </Flex>
    )
}