import { Flex, Grid, Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";

export default function BrandAd() {
  return (
    <Flex
      bg="#fafafb"
      p="20px 0px"
      w="100%"
      m="30px 0px"
      direction="column"
      alignItems="center"
    >
      <Text fontSize="3xl">
        Over 6 million videos created by thousands of businesses
      </Text>

        <SimpleGrid
          columns={[2, 4, 8]}
          spacing="15px"
          textAlign="left"
          w="100%"
          p="30px"
          boxSizing="border-box"
        >
          <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-salesforce-color.png" />
          <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-pwc-color.png" />
          <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-siemens-color1.png" />
          <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-kpmg-color.png" />
          <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-merk-color.png" />
          <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sap-color.png" />
          <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-mitsubishi-color.png" />
          <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-cisco-color.png" />
        </SimpleGrid>
    </Flex>
  );
}
