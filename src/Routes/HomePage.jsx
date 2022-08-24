import { AspectRatio, 
            Box, 
            Button, 
            Center, 
            Flex, 
            Grid, 
            GridItem, 
            Image, 
            Spacer, 
            Stack, 
            Text } from "@chakra-ui/react";
            import HoverVideoPlayer from 'react-hover-video-player';
import { Link } from "react-router-dom";


export default function HomePage(){

    const reviews = [
        {
            review : "“With the traditional agency, the time is usually about one week. But with Lumen5, it’s cut down from weeks to hours.”",
            name : "Michelle Hsiao",
            designation : "Visual Content Director at Siemens AG"
        },
        {
            review : "“Lumen5 is especially helpful for business people who don't have the technical experience to make their own videos.”",
            name : "Peter Lovegrove",
            designation : "Media Relations and Content Manager"
        },
        {
            review : "“Thanks to Lumen5, we have been able to cut down on the time and costs related to video making.”",
            name : "Adrian Ngo",
            designation : "Global Advertising and Sponsorships"
        },
        
    ]

    return (
        <Flex direction="column" w="100%" alignItems="center">
          
            <Flex m="30px 0px" w="80%" >
                <Flex direction="column" w="40%" textAlign="left" alignItems="flex-start" justifyContent="space-between">
                    <Text fontWeight="700" fontSize='4xl'>Video maker built to supercharge your content strategy</Text>
                    <Text fontSize='3xl'>Easily make videos for content marketing, thought leadership, and brand awareness in a snap.</Text>
                    <Button m="10px" p="30px 20px" color="white" bg="#5846f5" variant='solid' borderRadius="30px">Sigun Up Free</Button>
                </Flex>
                <Spacer/>
                <Image w="50%" src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-hero.png" />
            </Flex>

            <Flex bg="#fafafb" p="20px 0px" w="100%" m="30px 0px" direction="column" alignItems="center">

                <Text fontSize='3xl'>Over 6 million videos created by thousands of businesses</Text>

                <Flex w="85%" p="30px 0px">
                    <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-salesforce-color.png" />
                    <Spacer />
                    <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-pwc-color.png" />
                    <Spacer />
                    <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-siemens-color1.png" />
                    <Spacer />
                    <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-kpmg-color.png" />
                    <Spacer />
                    <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-merk-color.png" />
                    <Spacer />
                    <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sap-color.png" />
                    <Spacer />
                    <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-mitsubishi-color.png" />
                    <Spacer />
                    <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-cisco-color.png" />
                    <Spacer />
                </Flex>

            </Flex>

            <Text fontWeight="700" fontSize='4xl'>Captivating video templates</Text>
            <Text fontWeight="600" fontSize='xl' p="15px 0px">Drag and drop. No experience required.</Text>
            <Grid templateRows='repeat(3, 1fr)' p="30px" w="90%" templateColumns='repeat(3, 1fr)' gap="30px 20px">
                
                <GridItem h="95%" borderRadius="10px" overflow="hidden">
                    <HoverVideoPlayer border="1px solid"
                        videoSrc="https://storage.googleapis.com/lumen5-site-images/prev_tracer.mp4"
                        pausedOverlay={
                            <Image src="https://storage.googleapis.com/lumen5-site-images/tb_tracer.png"  objectFit="cover" />
                        }
                    />
                </GridItem>
                
                <GridItem  h="95%" borderRadius="10px" overflow="hidden">
                    <HoverVideoPlayer border="1px solid"
                        videoSrc="https://storage.googleapis.com/lumen5-site-images/prev_billow.mp4"
                        pausedOverlay={
                            <Image src="https://storage.googleapis.com/lumen5-site-images/tb_billow.png"  objectFit="cover" />
                        }
                    />
                </GridItem>
                
                <GridItem  h="95%" borderRadius="10px" overflow="hidden">
                    <HoverVideoPlayer border="1px solid"
                        videoSrc="https://storage.googleapis.com/lumen5-site-images/prev_vertex.mp4"
                        pausedOverlay={
                            <Image src="https://storage.googleapis.com/lumen5-site-images/tb_vertex.png"  objectFit="cover" />
                        }
                    />
                </GridItem>
                
                <GridItem  h="95%" borderRadius="10px" overflow="hidden">
                    <HoverVideoPlayer border="1px solid"
                        videoSrc="https://storage.googleapis.com/lumen5-site-images/prev_circuit.mp4"
                        pausedOverlay={
                            <Image src="https://storage.googleapis.com/lumen5-site-images/tb_circuit.png" objectFit="cover" />
                        }
                    />
                </GridItem>
                
                <GridItem  h="95%" borderRadius="10px" overflow="hidden">
                    <HoverVideoPlayer border="1px solid"
                        videoSrc="https://storage.googleapis.com/lumen5-site-images/prev_vault.mp4"
                        pausedOverlay={
                            <Image src="https://storage.googleapis.com/lumen5-site-images/tb_vault2.png" objectFit="cover" />
                        }
                    />
                </GridItem>
                
                <GridItem  h="95%" borderRadius="10px" overflow="hidden">
                    <HoverVideoPlayer border="1px solid"
                        videoSrc="https://storage.googleapis.com/lumen5-site-images/prev_notice.mp4"
                        pausedOverlay={
                            <Image src="https://storage.googleapis.com/lumen5-site-images/tb_notice.png" objectFit="cover" />
                        }
                    />
                </GridItem>
                
                <GridItem  h="95%" borderRadius="10px" overflow="hidden">
                    <HoverVideoPlayer border="1px solid"
                        videoSrc="https://storage.googleapis.com/lumen5-site-images/flux_prev.mp4"
                        pausedOverlay={
                            <Image src="https://storage.googleapis.com/lumen5-site-images/flux_tn.png"  objectFit="cover" />
                        }
                    />
                </GridItem>
                
                <GridItem  h="95%" borderRadius="10px" overflow="hidden">
                    <HoverVideoPlayer border="1px solid"
                        videoSrc="https://storage.googleapis.com/lumen5-site-images/unity_prev.mp4"
                        pausedOverlay={
                            <Image src="https://storage.googleapis.com/lumen5-site-images/unity_tn.png" objectFit="cover" />
                        }
                    />
                </GridItem>
                
                <GridItem  h="95%" borderRadius="10px" overflow="hidden">
                    <HoverVideoPlayer border="1px solid"
                        videoSrc="https://storage.googleapis.com/lumen5-site-images/looper_prev.mp4"
                        pausedOverlay={
                            <Image src="https://storage.googleapis.com/lumen5-site-images/looper_tn.png"  objectFit="cover" />
                        }
                    />
                </GridItem>

            </Grid>

            <Flex m="30px 0px" p="0% 10%" bg="#fafafb" w="100%"  alignItems="center">
                
                <Image h="80vh" src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-content.png" />
                <Spacer/>

                <Flex direction="column" w="40%" textAlign="left" alignItems="flex-start" justifyContent="space-between" p="40px 0px">
                    <Text fontWeight="700" fontSize='4xl' p="20px 0px">Transform blog posts into videos with A.I.</Text>
                    <Text p="20px 0px" fontSize='lg'>Starting from a blank page is hard — and with Lumen5, you don’t have to. Our AI-powered technology helps you storyboard your ideas, fit your content to a layout, and find music and visuals that enhance your message.</Text>
                    <Link color="blue" to="/signup"><Text color="blue" fontSize="md"> Get started for free →</Text></Link>

                    <Box p="20px 0px" w="100%" borderBottom="1px solid grey"></Box>

                    <Flex direction="column" w="80%" m="30px 0px">
                        <Text p="20px 0px" fontSize="sm">“Lumen5 has enabled us to create more videos and drive more traffic, while having more time to invest in other projects.”</Text>

                        <Flex p="20px 0px" w="100%" justifyContent="space-between" alignItems="center">
                            <Image w="50px" h="50px" borderRadius="full" src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-drew-s.jpg"/>
                            <Box>
                                <Text p="5px 0px"><b>Drew Sykes, </b>Social Media Director</Text>
                                <Image w="90px" src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-nc-red.png"/>                            
                            </Box>
                        </Flex>

                    </Flex>
                </Flex>
                
                
            </Flex>


        </Flex>
    )
}