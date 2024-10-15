import { Box, Button, Flex, Heading, Text, Stack } from "@chakra-ui/react";
import { Link } from "@remix-run/react";

export default function Header(): JSX.Element {
  return (
    <Box
      as="header"
      bg="white"
      py={4}
      boxShadow="sm"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={50}
    >
      <Flex
        maxW="container.xl"
        mx="auto"
        px={4}
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading as="h1" fontSize="2xl" color="#00A896">
          HealthEase
        </Heading>
        <Stack as="nav" direction="row" spacing={12}>
          {[
            "Profile",
            "Jaminan Kesehatan",
            "Layanan",
            "Informasi Publik",
            "Tautan",
          ].map((navigasi) => (
            <Link
              key={navigasi}
              to={`/${navigasi.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <Text
                color="black"
                fontWeight="medium"
                _hover={{ textDecoration: "underline" }}
              >
                {navigasi}
              </Text>
            </Link>
          ))}
        </Stack>
        <Button
          bg="#00A896"
          color="white"
          _hover={{ bg: "blue.600" }}
          size="sm"
        >
          Contact Us
        </Button>
      </Flex>
    </Box>
  );
}
