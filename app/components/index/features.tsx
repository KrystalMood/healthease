import { Box, Flex, Heading, Image } from "@chakra-ui/react";

interface featureProps {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const featureList: featureProps[] = [
  {
    id: 1,
    image: "template.jpeg",
    title: "Virtual Health Consultations",
    subtitle:
      "Schedule appointments with healthcare professionals online from the comfort of your home. ",
  },
  {
    id: 2,
    image: "template.jpeg",
    title: "Mental Health Support",
    subtitle:
      "Services include therapy sessions, stress management, and mental health resources.",
  },
  {
    id: 3,
    image: "template.jpeg",
    title: "Personalized Health Plans",
    subtitle:
      "Focus areas include diet, exercise, mental well-being, and chronic condition management.",
  },
  {
    id: 4,
    image: "template.jpeg",
    title: "Chronic Disease Management",
    subtitle:
      "Ongoing support and care for managing chronic conditions such as diabetes, hypertension, and heart disease.",
  },
  {
    id: 5,
    image: "template.jpeg",
    title: "Preventive Care & Wellness Checkups",
    subtitle:
      "Routine screenings and checkups designed to prevent illness and promote long-term health.",
  },
];
export default function IndexFeatures(): JSX.Element {
  return (
    <Box h={"100vh"}>
      <Flex
        mx={"auto"}
        direction={"column"}
        justifyItems={"center"}
        alignItems={"center"}
        padding={"12"}
      >
        <Heading as="h1" size={"2xl"} fontWeight={"800"}>
          Are You Looking For
        </Heading>
        <Heading as="h2" size={"xl"} fontWeight={"400"}>
          Comprehensive Health Solutions at Your Fingertips
        </Heading>
        <Flex gap={"4"} mt={20}>
          {featureList.map((feature, index) => (
            <Flex key={feature.id}
            mt={index % 2 !== 0 ? 40 : 0} >
              <Flex
                w={60}
                h={52}
                justifyContent={"center"}
                alignItems={"center"}
                direction={"column"}
                textAlign={"center"}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  rounded={"full"}
                  minW={"32"}
                  minH={"32"}
                  maxW={"32"}
                  maxH={"32"}
                  objectFit={"cover"}
                  shadow={"xl"}
                />
                <Heading 
                as={"h3"} 
                size={"sm"}
                fontWeight={"800"}
                mt={4}

                >
                    {feature.title}
                </Heading>
                <Heading 
                as={"h4"} 
                size={"sm"}
                fontWeight={"400"}
                >
                    {feature.subtitle}
                </Heading>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}
