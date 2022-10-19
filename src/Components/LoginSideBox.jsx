    import { Flex, Image, Text } from "@chakra-ui/react";
    import { Link } from "react-router-dom";


    export default function LoginSideBox(){
        return (
            <Flex w={["100%", "100%", "33%"]} h="100%" p="10px 10px 10px 45px" color="white" alignItems="flex-start" justifyContent={["space-around","space-around","space-between"]} textAlign="left" direction="column" backgroundImage="url('https://storage.googleapis.com/lumen5-site-images/website-assets/login-bg3.png')" backgroundPosition="center" backgroundRepeat="no-repeat">

                    <Link style={{width:"100%"}} to="/"><Image w="40%" src="https://storage.googleapis.com/lumen5-site-images/L5-logo/logo-white_266x156.png" /></Link>
                    <Text fontSize="5xl" w="90%" mb="10px" display={["none", "block", "block"]} fontWeight="600">Supercharge your content strategy</Text>
                    <Text fontSize="3xl" display={["none", "block", "block"]} fontWeight="400">Join 800,000+ brands creating videos with Lumen5</Text>
                    <Flex w="90%" display={["none", "flex", "flex"]} justifyContent="space-between">
                        <Image w="25%" h="80%" src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-seimens-white.png " />
                        <Image w="25%" src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sf-white.png " />
                    </Flex>
                </Flex>   
        )
    }