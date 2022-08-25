import { Box, Button, Flex, GridItem, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function PricingCard ({plan}){

    return(
         <GridItem textAlign="left">
                    <Flex border="1px solid #dddee6" borderRadius="10px" p="50px 20px 30px" h="400px"   direction="column" alignItems="flex-start" justifyContent="space-between">

                      <Box>
                        <Text fontWeight="600" fontSize="2xl">{plan.title}</Text>
                        <Text fontSize="sm" mt="5px">{plan.about}</Text>
                      </Box>

                      <Box>
                        { plan.price == "Custom" ?<Text fontWeight="700" fontSize="3xl">{plan.price}</Text> : plan.price==0 ? 
                            <Text fontWeight="700" fontSize="3xl">${plan.price}</Text> : 
                            <Text fontWeight="700" fontSize="3xl">${plan.price} <span style={{fontWeight : "600", fontSize:"medium"}}> USD </span></Text>
                        }
                        <Text fontSize="sm" mt="5px">{plan.duration}</Text>
                      </Box>

                      { plan.discount == "" ? <Text> </Text> : <Text fontSize="sm" fontWeight="600" color="blue">{plan.discount}</Text>
                      }

                      { plan.price == "Custom" ?
                                <Link style={{width : "100%"}} to="/enterprise"><Button w="100%" p="25px 0" colorScheme='blue' color="#5846f5" borderRadius="30px"  variant='outline' _hover={{bg:"#5846f5", color : "white"}}>Learn More</Button></Link> :

                                plan.price==0 ? 
                                <Link style={{width : "100%"}} to="/"><Button w="100%" p="25px 0" colorScheme='blue' color="#5846f5" borderRadius="30px"  variant='outline' _hover={{bg:"#5846f5", color : "white"}}>Get Started</Button></Link> :

                                <Link style={{width : "100%"}} to="/pricing"><Button w="100%" p="25px 0" colorScheme='blue' color="#5846f5" borderRadius="30px"  variant='outline' _hover={{bg:"#5846f5", color : "white"}}>Get Started</Button></Link>
                        }
                    </Flex>
                    
                    <Flex p="20px 10px" h="200px" direction="column">
                        {plan.features.map((feature)=>{
                            return <Text pb="5px" fontSize="xs"> <span style={{color:"#83cc00", fontWeight:"900"}}> ✓ </span> {feature}</Text>
                        })}
                    </Flex>

        </GridItem>
    )
}