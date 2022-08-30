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
import { DashboardNav } from "./Dashboard";


export default function Enterprise(){

    const cards = [
        {
            left : true,
            image : "https://storage.googleapis.com/lumen5-site-images/website-assets/enterprise-scale.png",
            heading : "Produce videos at scale and in‑house. Seriously easy.",
            content : `Lumen5 is an unbelievably easy to use video creator built specifically for users without experience in video editing. The workflow is as simple as creating a PowerPoint presentation, and the output can be indistinguishable from professional agency-produced videos.\n  You can create professional video from any text-based content and cut video creation time to an average of six minutes in Lumen5. \n Enable your global teams to produce localized content for their audience as well in a snap. Just don't tell your boss it was this easy.`,
            link : "",
            linkAdress : "",
            review : "",
        },
        {
            left : false,
            image : "https://storage.googleapis.com/lumen5-site-images/website-assets/enterprise-control.png",
            heading : "Maintain full control over content and branding.",
            content : `Our team of motion graphics designers work with your brand team to produce a custom template unique to your visual identity, ensuring your videos are always on-brand no matter who is creating them for you. \n With approval and permission level workflows in place, you can always make sure everyone's on the right path and on brand. Comment and leave revision requests right in the video itself, scene by scene, allowing for smooth team collaboration and a simple creation and video sharing process between team members, no matter if they're sitting next to you, or half a world away.`,
            link : "",
            linkAdress : "",
            review : "",
        },
        {
            left : true,
            image : "https://storage.googleapis.com/lumen5-site-images/website-assets/enterprise-support.png",
            heading : "Priority support, customer success, and continuous training.",
            content : `Our strategic Customer Success team has worked with hundreds of brands on implementation and adoption. We have a strong track record of helping users across all departments of all enterprises become video creation experts. Paired with our easy-peasy UI and AI, your team will be pumping out expert eye catching videos in days. \n Onboarding is just the beginning. We'll team up with you throughout our partnership to offer video analysis, creative direction, and industry best practices to help you continuously push the boundaries of producing more effective video content that actually generates results and drives growth. We got you.`,
            link : "",
            linkAdress : "",
            review : "",
        },
    ]

    const videoData = [
        {
            video : "https://storage.googleapis.com/lumen5-site-images/siemens_prev.mp4",
            poster : "https://storage.googleapis.com/lumen5-site-images/siemens_tn.png",
        },
        {
            video : "https://storage.googleapis.com/lumen5-site-images/salesforce_prev.mp4",
            poster : "https://storage.googleapis.com/lumen5-site-images/salesforce_tn.png",
        },
        {
            video : "https://storage.googleapis.com/lumen5-site-images/viasat_prev.mp4",
            poster : "https://storage.googleapis.com/lumen5-site-images/viasat_tn.png",
        },
        {
            video : "https://storage.googleapis.com/lumen5-site-images/storaenso_prev.mp4",
            poster : "https://storage.googleapis.com/lumen5-site-images/storaenso_tn.png",
        },
    ]

    const {isAuth} = useContext(AuthContext);

    return ( 
        <>
        { isAuth ? <><DashboardNav /></> : <Navbar />}

        <Flex p="30px 15%" bg="#24282f" color="white" m="30px 0px" w="100%" >
                <Flex direction="column" w="40%" textAlign="left" alignItems="flex-start" justifyContent="space-between">

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

                <Image w="50%" objectFit="contain" src="https://storage.googleapis.com/lumen5-site-images/website-assets/enterprise-header.png" />
        </Flex>

        <BrandAd />

        <VideoGrid 
            data={videoData}
            col={2}/>
        
        {cards.map((card)=>{
            return (
                <ImageTextCard
                data={card} 
                key={card.image} />
            )
        })}

        <Flex p="50px 0" bg="#24282f" color="white" border="1px solid" justifyContent="space-evenly  ">
            
            <Flex w="27%" p="20px" textAlign="left" direction="column" >
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

            <Flex w="27%" p="20px" textAlign="left" direction="column" >
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

            <Flex w="27%" p="20px" textAlign="left" direction="column">
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