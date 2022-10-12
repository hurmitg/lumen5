import { Button, 
            Flex, 
            Image, 
            Spacer, 
            Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import BrandAd from "../Components/BrandAd";
import Footer from "../Components/Footer";
import ImageTextCard from "../Components/ImageTextCard";
import Navbar from "../Components/Navbar";
import SignupBox from "../Components/SignupBox";
import VideoGrid from "../Components/VideoGrid";
import { HomeCards, HomeVideoData } from "../Data/data";

export default function HomePage(){

    return (
        <>
      <Navbar />
        <Flex direction="column" w="100%" mt="30px" alignItems="center">  
            <Flex m="30px 0px" w="70%" direction={["column", "row"]} alignItems="center" >
                <Flex direction="column" w={["90%", "40%"]} textAlign={["center", "left"]} pb="20px" alignItems={[ "center", "flex-start" ]}justifyContent="space-between">
                    <Text fontWeight="700" fontSize='4xl' mb="20px">Video maker built to supercharge your content strategy</Text>
                    <Text w="80%" fontSize='xl'>Easily make videos for <b> content marketing, thought leadership, and brand awareness </b> in a snap.</Text>
                    <Link to="/signup"><Button m="10px" p="30px 20px" color="white" bg="#5846f5" variant='solid' borderRadius="30px">Sigun Up Free</Button></Link>
                </Flex>
                <Spacer/>
                <Image w={["90%", "50%"]} src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-hero.png" />
            </Flex>

           <BrandAd />

            <Text fontWeight="700" fontSize='4xl'>Captivating video templates</Text>
            <Text fontWeight="600" fontSize='xl' p="15px 0px">Drag and drop. No experience required.</Text>

            <VideoGrid
                data={HomeVideoData} 
                col={3}/>

            {HomeCards.map((card)=>{
                return (
                    <ImageTextCard
                        data={card} 
                        key={card.image} /> 
                    )
                })
            }
            
            <SignupBox />
            <Footer />
        </Flex>
        </>
    )
}










// https://storage.googleapis.com/lumen5-site-images/website-assets/cta-bg.png