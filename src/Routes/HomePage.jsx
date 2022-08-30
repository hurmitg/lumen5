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

export default function HomePage(){

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
    
        },
        {
            left : true,
            image : "https://storage.googleapis.com/lumen5-site-images/website-assets/image-customize.png",
            heading : "Making it easy to stay on brand",
            content : "It has never been easier to stay on brand. With Lumen5 templates, you can customize each video with your unique logo, watermark, fonts, colors, and more.",
            link : "Get started for free →",
            linkAdress : "/signup",
            review : 
                {
                    content : "“Whenever I got in touch with Lumen5 I felt like my suggestions mattered and I was being listened to. It’s like I’m co-creating in a tiny way. It’s a great feeling.”",
                    avatar : "https://storage.googleapis.com/lumen5-site-images/website-assets/image-promod-s.jpg",
                    name : "Promod Sharma, ",
                    post : "Actuary & Insurance Consultant",
                    brand : "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-taxevity-color.png"
                },
    
        }
    ]

    const videoData = [
        {
            video : "https://storage.googleapis.com/lumen5-site-images/prev_tracer.mp4",
            poster : "https://storage.googleapis.com/lumen5-site-images/tb_tracer.png"  ,
        },
        {
            video : "https://storage.googleapis.com/lumen5-site-images/prev_billow.mp4",
            poster : "https://storage.googleapis.com/lumen5-site-images/tb_billow.png",
        },
        {
            video :"https://storage.googleapis.com/lumen5-site-images/prev_vertex.mp4",
            poster : "https://storage.googleapis.com/lumen5-site-images/tb_vertex.png" ,
        },
        {
            video : "https://storage.googleapis.com/lumen5-site-images/prev_circuit.mp4",
            poster : "https://storage.googleapis.com/lumen5-site-images/tb_circuit.png" ,
        },
        {
            video : "https://storage.googleapis.com/lumen5-site-images/prev_vault.mp4",
            poster : "https://storage.googleapis.com/lumen5-site-images/tb_vault2.png" ,
        },
        {
            video : "https://storage.googleapis.com/lumen5-site-images/prev_notice.mp4",
            poster : "https://storage.googleapis.com/lumen5-site-images/tb_notice.png" ,
        },
        {
            video : "https://storage.googleapis.com/lumen5-site-images/flux_prev.mp4",
            poster : "https://storage.googleapis.com/lumen5-site-images/flux_tn.png" ,
        },
        {
            video : "https://storage.googleapis.com/lumen5-site-images/unity_prev.mp4",
            poster : "https://storage.googleapis.com/lumen5-site-images/unity_tn.png",
        },
        {
            video : "https://storage.googleapis.com/lumen5-site-images/looper_prev.mp4",
            poster : "https://storage.googleapis.com/lumen5-site-images/looper_tn.png",
        },
    
    ]

    return (
        <>
      <Navbar />
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

           <BrandAd />

            <Text fontWeight="700" fontSize='4xl'>Captivating video templates</Text>
            <Text fontWeight="600" fontSize='xl' p="15px 0px">Drag and drop. No experience required.</Text>

            <VideoGrid
                data={videoData} 
                col={3}/>

            {cards.map((card)=>{
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