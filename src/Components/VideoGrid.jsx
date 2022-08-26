import {
    Grid, 
    GridItem, 
    Image} from "@chakra-ui/react";
import HoverVideoPlayer from 'react-hover-video-player';

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



export default function VideoGrid({data=videoData, col=3}) {

    return (
        <Grid templateRows='repeat(3, 1fr)' p="30px" w="90%" templateColumns={`repeat(${col}, 1fr)`} gap="30px 20px">
       
       {data.map((item)=>{
        return (
            <GridItem  h="95%" borderRadius="10px" overflow="hidden" key={item.poster}>
            <HoverVideoPlayer border="1px solid"
                videoSrc={item.video}
                pausedOverlay={
                    <Image src={item.poster} objectFit="cover" />
                }
            />
        </GridItem>
        )
       })

       }
        
    </Grid>
    )
}