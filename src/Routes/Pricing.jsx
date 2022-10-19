import { Box, Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { useContext } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import PricingCard from "../Components/PricingCard";
import SignupBox from "../Components/SignupBox";
import { AuthContext } from "../Context/AuthContext";
import { PricesData } from "../Data/data";
import { DashboardNav } from "./Dashboard";


export default function Pricing(){

  const {isAuth} = useContext(AuthContext);
  

    return (
        <>

        { isAuth ? <><DashboardNav /></> : <Navbar />}

        <Flex direction="column" w="100%" mt="30px" alignItems="center">
          <Text fontSize="xl">PRICING</Text>
          <Text w={["80%","50%"]} fontWeight="600" fontSize="4xl">Plans for your video content creation strategy</Text>

          <Grid templateRows={['repeat(4, 1fr)', 'repeat(2, 1fr)','repeat(1, 1fr)']} p={["10px", "20px","30px"]} w="100%" templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(5, 1fr)']} gap={["10px", "20px","30px"]}>

              {PricesData.map((plan)=>{
                  return <PricingCard 
                  plan={plan} 
                  key={plan.id}/>
              })}
          </Grid>
        </Flex>
        { isAuth ? <></> : <SignupBox />}
        { isAuth ? <></> :<Footer />}
        
        
      
        </>
    )
}
