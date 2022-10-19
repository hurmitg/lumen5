import { Avatar, Box, Button, Flex, Grid, GridItem, Image, Spacer, Text } from "@chakra-ui/react";
import { useContext } from "react";
import HoverVideoPlayer from 'react-hover-video-player';
import { Link } from "react-router-dom";
import BrandAd from "../Components/BrandAd";
import Footer from "../Components/Footer";
import ImageTextCard from "../Components/ImageTextCard";
import Navbar from "../Components/Navbar";
import SignupBox from "../Components/SignupBox";
import VideoGrid from "../Components/VideoGrid";
import { AuthContext } from "../Context/AuthContext";
import { EnterpriseCards, EnterpriseVideoData } from "../Data/data";
import { DashboardNav } from "./Dashboard";


export default function Enterprise(){

    
    const {isAuth} = useContext(AuthContext);

    return ( 
        <>
        { isAuth ? <><DashboardNav /></> : <Navbar />}

        <Flex p="30px 15%" bg="#24282f" direction={["column", "row"]}  color="white" m="30px 0px" w="100%" >
                <Flex direction="column"  w={["90%", "40%"]} textAlign={["center", "left"]} pb="20px" alignItems={[ "center", "flex-start" ]} justifyContent="space-between">

                    <Text fontWeight="700" fontSize='4xl' m="20px 0">
                        Create engaging videos at scale while keeping on brand.
                    </Text>

                    <Text w="80%" fontSize='xl' m="20px 0">
                        Lumen5 is the easiest and fastest way to create videos with your own custom branded templates. Decentralize video creation on your teams with confidence.
                    </Text>

                    <Link to="/enterprise">
                        <Button m="10px" p="30px 20px" color="white" bg="#5846f5" variant='solid' borderRadius="30px">
                            Join Enterprise
                        </Button>
                    </Link>

                </Flex>

                <Spacer/>

                <Image w={["90%", "50%"]} objectFit="contain" src="https://storage.googleapis.com/lumen5-site-images/website-assets/enterprise-header.png" />
        </Flex>

        <BrandAd />

        <VideoGrid 
            data={EnterpriseVideoData}
            col={2}/>
        
        {EnterpriseCards.map((card)=>{
            return (
                <ImageTextCard
                data={card} 
                key={card.image} />
            )
        })}

        <Flex p="50px 0" bg="#24282f" color="white" flexWrap="flex-wrap" border="1px solid" alignItems="center" justifyContent="space-evenly" direction={["column", "column", "row"]}>
            
            <Flex w={["97%","97%","27%"]} p="20px" textAlign="left" direction="column" >
                <Text fontWeight="600" fontSize="lg">Siemens</Text>
                <Text fontSize="lg">“One of the goals of the company is to help our customers in their digital transformation, Lumen5 helps us in getting more digital in our communications—that’s part of the digital transformation.”</Text>
                <Flex p="20px 0px" w="100%" alignItems="center">
                    <Avatar mr="15px" src="https://storage.googleapis.com/lumen5-site-images/website-assets/guenter-siemens.jpeg"/>
                    <Box w="50%">
                        <Text fontSize="lg" fontWeight="700" p="5px 0px">Guenter Gaugler</Text>                     
                        <Text>Head of Content Production</Text>                     
                    </Box>
                </Flex> 
            </Flex>

            <Flex w={["97%","97%","27%"]} p="20px" textAlign="left" direction="column" >
                <Text fontWeight="600" fontSize="lg">Mitsubishi</Text>
                <Text fontSize="lg">“Thanks to Lumen5, we have been able to cut down on time and costs for video making. We don’t have to go through a third party which speeds everything up and makes our work a lot easier.”</Text>
                <Flex p="20px 0px" w="100%" alignItems="center">
                    <Avatar mr="15px" src="https://storage.googleapis.com/lumen5-site-images/website-assets/adrian-mitsubishi.jpg"/>
                    <Box w="50%">
                        <Text fontSize="lg" fontWeight="700" p="5px 0px">Adrian Ngo</Text>                     
                        <Text>Global Advertising and Sponsorships</Text>                     
                    </Box>
                </Flex> 
            </Flex>

            <Flex w={["97%","48%","27%"]} display={["none", "none", "flex"]} p="20px" textAlign="left" direction="column">
                <Text fontWeight="600" fontSize="lg">Cisco</Text>
                <Text fontSize="lg">“At Cisco we try to share lots of multimedia content and new types of content like memes, graphics and videos. And the videos by far give us the most engagement, thanks to Lumen5.”</Text>
                <Flex p="20px 0px" w="100%" alignItems="center">
                    <Avatar mr="15px" src="https://storage.googleapis.com/lumen5-site-images/website-assets/eric-cisco.jpeg"/>
                    <Box w="50%">
                        <Text fontSize="lg" fontWeight="700" p="5px 0px">Eric Chu</Text>                     
                        <Text>Social and Digital Content Manager</Text>                     
                    </Box>
                </Flex> 
            </Flex>

        </Flex>

        <SignupBox />  
        <Footer />
        </>
    )
}