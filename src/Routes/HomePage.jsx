import { AspectRatio, 
            Avatar, 
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
import Footer from "../Components/Footer";
import ImageTextCard from "../Components/ImageTextCard";
import SignupBox from "../Components/SignupBox";

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

    const cards = [
        {
            left : true,
            image : "https://storage.googleapis.com/lumen5-site-images/website-assets/image-content.png",
            heading : "Transform blog posts into videos with A.I.",
            content : "Starting from a blank page is hard — and with Lumen5, you don’t have to. Our AI-powered technology helps you storyboard your ideas, fit your content to a layout, and find music and visuals that enhance your message.",
            link : "Get started for free →",
            linkAdress : "/signup",
            review : 
                {
                    content : "“Lumen5 has enabled us to create more videos and drive more traffic, while having more time to invest in other projects.”",
                    avatar :  "https://storage.googleapis.com/lumen5-site-images/website-assets/image-drew-s.jpg",
                    name : "Drew Sykes, ",
                    post : "Social Media Director",
                    brand : "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-nc-red.png"
                },
    
        },
        {
            left : false,
            image : "https://storage.googleapis.com/lumen5-site-images/website-assets/image-media.png",
            heading : "Content library with millions of stock photos & videos",
            content : "The Lumen5 media library gives you easy access to millions of photos, video clips, and audio files, so you always have the elements you need to create the perfect video.",
            link : " View plans →",
            linkAdress : "/pricing",
            review : 
                {
                    content : "“We promoted our downloadable study on top PPC skills for 2019 on social media using a short video created in Lumen5 in just 30 minutes, and decreased cost per download by 5x!”",
                    avatar : "https://storage.googleapis.com/lumen5-site-images/website-assets/image-julia-o.jpg",
                    name : "Julia Olennikova, ",
                    post : "Product Marketing Manager",
                    brand : "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-semrush.png"
                },
    
        }
    ]

    return (
        <Flex direction="column" w="100%" mt="30px" alignItems="center">
          
            <Flex m="30px 0px" w="70%" >
                <Flex direction="column" w="40%" textAlign="left" alignItems="flex-start" justifyContent="space-between">
                    <Text fontWeight="700" fontSize='4xl'>Video maker built to supercharge your content strategy</Text>
                    <Text w="80%" fontSize='xl'>Easily make videos for <b> content marketing, thought leadership, and brand awareness </b> in a snap.</Text>
                    <Link to="/signup"><Button m="10px" p="30px 20px" color="white" bg="#5846f5" variant='solid' borderRadius="30px">Sigun Up Free</Button></Link>
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

            <ImageTextCard
                data={cards[0]} 
                key={1234} />

            <ImageTextCard
                data={cards[1]} 
                key={1234} />


            
            <SignupBox />
            <Footer />
        </Flex>
    )
}










// https://storage.googleapis.com/lumen5-site-images/website-assets/cta-bg.png