import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaHome, FaInfo, FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex direction="column" minHeight="100vh">
        {/* Header */}
        <Box as="header" bg="blue.600" color="white" py={4}>
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg" paddingLeft={5}>
              My React App
            </Heading>
            <Stack direction="row" spacing={4} paddingRight={5}>
              <Button leftIcon={<FaHome />} variant="ghost">
                Home
              </Button>
              <Button leftIcon={<FaInfo />} variant="ghost">
                About
              </Button>
            </Stack>
          </Flex>
        </Box>

        {/* Main Content */}
        <VStack flex="1" spacing={4} align="stretch" py={10}>
          <Box bg="gray.100" borderRadius="md" p={5} shadow="md">
            <Heading as="h2" size="md">
              Welcome to the React App
            </Heading>
            <Text mt={3}>This is a simple application built with React and Chakra UI.</Text>
          </Box>
          <Box display="flex" justifyContent="center">
            <Button leftIcon={<FaPlus />} colorScheme="blue" size="lg">
              Add Something
            </Button>
          </Box>
          <Box display="flex" justifyContent="center">
            <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGV8ZW58MHx8fHwxNzE0NjQ3ODg2fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
          </Box>
        </VStack>

        {/* Footer */}
        <Box as="footer" bg="blue.700" color="white" py={3}>
          <Flex justify="center">
            <Text>&copy; {new Date().getFullYear()} My React App. All rights reserved.</Text>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
