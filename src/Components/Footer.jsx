import { Flex, Grid, Image, Text } from "@chakra-ui/react";


export default function Footer(){

    return (
        <>
        <Flex mt="5vh" bg="#24282f" p="5% 10%" color="white" h="75vh" w="100%" justifyContent="space-between">
            <Flex w="18%" direction="column" justifyContent="flex-start">
                <Image w="60%" src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-white.png"/>
                <Text textAlign="left" mt="20px" fontSize="sm">Lumen5 combines powerful A.I. with a simple drag-and-drop interface to help you create professional video content in minutes.</Text>
            </Flex>

            <Flex w="65%" h="80%" color="#c8cbd9" justifyContent="space-between">
                <Grid templateColumns='repeat(1, 1fr)'>
                    <Text color="white" mb="25px" fontSize="sm" textAlign="left">EXPLORE</Text> 
                    <Text textAlign="left">About</Text>
                    <Text textAlign="left">Features</Text>
                    <Text textAlign="left">Careers</Text>
                    <Text textAlign="left">LinkedIn</Text>
                    <Text textAlign="left">Support</Text>
                    <Text textAlign="left">Product updates</Text>
                </Grid>
                <Grid templateColumns='repeat(1, 1fr)'>
                    <Text color="white" mb="25px" fontSize="sm" textAlign="left">VIDEO TOOLS</Text>
                    <Text textAlign="left">Add Text to Video</Text>
                    <Text textAlign="left">Cut Video</Text>
                    <Text textAlign="left">Merge Video</Text>
                    <Text textAlign="left">Compress Video</Text>
                    <Text textAlign="left">Resize Video</Text>
                    <Text textAlign="left">See all</Text>
                </Grid>
                <Grid templateColumns='repeat(1, 1fr)'>
                    <Text color="white" mb="25px" fontSize="sm" textAlign="left">VIDEO CREATORS</Text> 
                    <Text textAlign="left">Video Editor</Text>
                    <Text textAlign="left">Photo Video Maker</Text>
                    <Text textAlign="left">Facebook Video Maker</Text>
                    <Text textAlign="left">YouTube Intro Maker</Text>
                    <Text textAlign="left">Instagram Video Maker</Text>
                    <Text textAlign="left">See all</Text>
                </Grid>
            </Flex>

        </Flex>

        <Flex color="white" p="0 7%" w="100%" bg="#1b1b1b" h="12vh" alignItems="center" justifyContent="space-between">
            <Text>Copyright © 2022 Lumen5</Text>
            <Text>Terms of Use & Privacy Policy</Text>
        </Flex>
            </>
    )
}