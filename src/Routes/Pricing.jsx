import { Box, Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Footer from "../Components/Footer";
import PricingCard from "../Components/PricingCard";
import SignupBox from "../Components/SignupBox";


export default function Pricing(){

  
const prices = [
  {
    id : 1,
    title : "Community",
    about : "For casual video enthusiasts",
    price : 0,
    duration : "forever free",
    discount : "",
    features : [
      "Unlimited videos",
      "Contains Lumen5 watermark",
      "720p video resolution"
    ]
  },
  {
    id : 2,
    title : "Basic",
    about : "For creating simple unbranded videos",
    price : 19,
    duration : "per month, billed yearly",
    discount : "",
    features : [
      "No Lumen5 branding",
      "Access to icons",
    ]
  },
  {
    id : 3,
    title : "Starter",
    about : "For the individual content creator",
    price : 59,
    duration : "per month, billed yearly",
    discount : "Save 25%",
    features : [
      "50M stock photos & videos",
      "Custom colors & styles",
      "1080p video resolution"
    ]
  },
  {
    id : 4,
    title : "Professional",
    about : "For the professional video storyteller",
    price : 149,
    duration : "per month, billed yearly",
    discount : "Save 25%",
    features : [
      "500M stock photos & videos",
      "Custom watermarks",
      "Upload your own fonts",
      "Multiple saved templates",
      "Multiple brand kits",
    ]
  },
  {
    id : 5,
    title : "Enterprise",
    about : "For marketing & communication teams",
    price : "Custom",
    duration : " ",
    discount : " ",
    features : [
      "Lumen5 design team",
      "Bespoke branded templates",
      "Dedicated customer success",
      "Teams & collaboration",
      "Enterprise-level security"
    ]
  },
]
    return (
        <>
        <Flex direction="column" w="100%" mt="30px" alignItems="center">
          <Text fontSize="xl">PRICING</Text>
          <Text w="50%" fontWeight="600" fontSize="4xl">Plans for your video content creation strategy</Text>

          <Grid templateRows='repeat(1, 1fr)' p="30px" w="100%" templateColumns='repeat(5, 1fr)' gap="20px">

              {prices.map((plan)=>{
                  return <PricingCard 
                  plan={plan} 
                  key={plan.id}/>
              })}
          </Grid>
        </Flex>
        
        <SignupBox />
        
      <Footer />
        </>
    )
}
