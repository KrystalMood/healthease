import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  VStack,
  Text,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";

export default function IndexHero(): JSX.Element {
  return (
    <Box minH="100vh" bg="gray.50">
      <Flex
        minH="100vh"
        maxW="container.xl"
        mx="auto"
        px={4}
        alignItems="center"
        justifyContent="space-between"
      >
        <VStack align="flex-start" spacing={6} maxW="xl">
          <Text fontSize="lg" fontWeight="medium" color="gray.600">
            Welcome to our healthy site
          </Text>
          <Heading as="h1" size="3xl" color="black" lineHeight="shorter">
            Trusted Health Care, Anytime, Anywhere
          </Heading>
          <Text fontSize="xl" color="gray.700">
            Accessible care solutions, whenever and wherever you need them.
          </Text>
          <Button
            as={Link}
            to="/schedule"
            size="lg"
            bg="#00A896"
            color="white"
            _hover={{ bg: "#007B68", textColor: "white" }}
          >
            Schedule an Appointment
          </Button>
        </VStack>
        <Box display={{ base: "none", md: "block" }}>
          <Image
            src=""
            alt="Gambar uwong"
            objectFit="cover"
            borderRadius="md"
          />
        </Box>
      </Flex>
    </Box>
  );
}
