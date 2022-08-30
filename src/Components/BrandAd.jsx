import { Flex, Image, Spacer, Text } from "@chakra-ui/react";


export default function BrandAd(){

    return (
        <Flex bg="#fafafb" p="20px 0px" w="100%" m="30px 0px" direction="column" alignItems="center">

            <Text fontSize='3xl'>Over 6 million videos created by thousands of businesses</Text>

            <Flex w="85%" p="30px 0px">
                <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-salesforce-color.png" />
                <Spacer />
                <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-pwc-color.png" />
                <Spacer />
                <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-siemens-color1.png" />
                <Spacer />
                <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-kpmg-color.png" />
                <Spacer />
                <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-merk-color.png" />
                <Spacer />
                <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sap-color.png" />
                <Spacer />
                <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-mitsubishi-color.png" />
                <Spacer />
                <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-cisco-color.png" />
                <Spacer />
            </Flex>

        </Flex>
    )
}