import { Grid, GridItem, Image, SimpleGrid } from "@chakra-ui/react";
import HoverVideoPlayer from "react-hover-video-player";
import { videoData } from "../Data/data";

export default function VideoGrid({ data = videoData, col = 3 }) {
  return (
    // <Grid
    //   p="30px"
    //   w="90%"
    //   templateColumns={`repeat(${col}, 1fr)`}
    //   gap="30px 20px"
    // >
    <SimpleGrid columns={[1, 2, col]} spacing="30px 20px" w="90%" p="30px">
      {data.map((item) => {
        return (
          <GridItem
            h="95%"
            borderRadius="10px"
            overflow="hidden"
            key={item.poster}
          >
            <HoverVideoPlayer
              border="1px solid"
              videoSrc={item.video}
              pausedOverlay={<Image src={item.poster} objectFit="cover" />}
            />
          </GridItem>
        );
      })}
    </SimpleGrid>
    // </Grid>
  );
}
