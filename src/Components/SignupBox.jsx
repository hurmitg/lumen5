import { Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function SignupBox (){
     return (
        <Flex direction="column" m="5vh 0vh" p="0% 12%" color="white" justifyContent="center" alignItems="center" w="80vw" h="70vh" borderRadius="15px" overflow="hidden" backgroundImage="url('https://storage.googleapis.com/lumen5-site-images/website-assets/cta-bg.png')" backgroundPosition="center" backgroundRepeat="no-repeat">
                <Text fontWeight="700" fontSize="4xl">Join 800,000+ companies that are using Lumen5 to tell their stories.</Text>
                <Text fontWeight="600" p="30px 80px"  fontSize="xl">Lumen5 is a video creation software that helps marketers, publishers, and brands create video content in a breeze, without any technical expertise.</Text>

                <Link to="/signup">
                    <Button m="10px" p="25px 20px" color="#5846f5" bg="white" variant='solid' borderRadius="30px">Sign Up Free</Button>
                </Link>
            </Flex>
     )
}