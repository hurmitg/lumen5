import { Avatar, Box, Flex, Image, Spacer, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export default function ImageTextCard({data}){

    if(data.left)
    return (
        <Flex m="30px 0px" p="0% 10%" bg="#fafafb" w="100%"  alignItems="center">
                
                <Image w="50%" objectFit="contain" src={data.image} />
                <Spacer/>

                <Flex direction="column" w="40%" textAlign="left" alignItems="flex-start" justifyContent="space-between" p="40px 0px">

                    <Text fontWeight="700" fontSize='4xl' p="20px 0px">{data.heading}</Text>
                    <Text p="20px 0px" fontSize='lg'>{data.content}</Text>

                    { data.link!== "" ? 
                        <><Link color="blue" to={data.linkAdress}><Text color="blue" fontSize="md"> {data.link}</Text></Link>
                        <Box p="20px 0px" w="100%" borderBottom="1px solid grey"></Box> </>
                        : <></>
                    }
                    

                    
                    
                    { data.review !== ""? 
                        <Flex direction="column" w="80%" m="30px 0px">
                            <Text p="20px 0px" fontSize="sm">{data.review.content}</Text>

                            <Flex p="20px 0px" w="100%" alignItems="center">
                                <Avatar mr="15px" src={data.review.avatar}/>
                                <Box>
                                    <Text p="5px 0px"><b>{data.review.name}</b>{data.review.post}</Text>
                                    <Image w="90px" src={data.review.brand}/>                            
                                </Box>
                            </Flex> 
                        </Flex>
                        : <></>
                    }     
                </Flex>
        </Flex>
    ) 

    return (
        <Flex m="30px 0px" p="0% 10%" bg="white" w="100%"  alignItems="center">
                
                <Flex direction="column" w="40%" textAlign="left" alignItems="flex-start" justifyContent="space-between" p="40px 0px">

                    <Text fontWeight="700" fontSize='4xl' p="20px 0px">{data.heading}</Text>
                    <Text p="20px 0px" fontSize='lg'>{data.content}</Text>

                    { data.link!== "" ? 
                        <><Link color="blue" to={data.linkAdress}><Text color="blue" fontSize="md"> {data.link}</Text></Link>
                        <Box p="20px 0px" w="100%" borderBottom="1px solid grey"></Box> </>
                        : <></>
                    }
                    
                    { data.review !== ""? 
                        <Flex direction="column" w="80%" m="30px 0px">
                            <Text p="20px 0px" fontSize="sm">{data.review.content}</Text>

                            <Flex p="20px 0px" w="100%" alignItems="center">
                                <Avatar mr="15px" src={data.review.avatar}/>
                                <Box>
                                    <Text p="5px 0px"><b>{data.review.name}</b>{data.review.post}</Text>
                                    <Image w="90px" src={data.review.brand}/>                            
                                </Box>
                            </Flex> 
                        </Flex>
                        : <></>
                    }     
                </Flex>

                <Spacer/>
                <Image w="50%" objectFit="contain" src={data.image} />
        </Flex>
    )
    
}