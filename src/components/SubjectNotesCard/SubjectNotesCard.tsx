import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Spacer,
  Text,
} from '@chakra-ui/react';

export default function SubjectNotesCard(): JSX.Element {
  return (
    <Box
      cursor="pointer"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      padding="5px"
    >
      <Heading size="md">Title</Heading>
      <Flex alignItems="baseline">
        <Badge borderRadius="full" px="2" colorScheme="teal">
          New
        </Badge>
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          ml="2"
        >
          A
        </Box>
      </Flex>
    </Box>
  );
}
