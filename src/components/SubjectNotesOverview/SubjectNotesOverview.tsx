import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Spacer,
  Text,
} from '@chakra-ui/react';
import SubjectNotesTopicsCard from '../SubjectNotesTopicsCard/SubjectNotesTopicsCard';

export default function Home(): JSX.Element {
  return (
    <>
      <Box padding="10px">
        <Heading>Subject Notes</Heading>
        <Text>This is description!</Text>
      </Box>
      <Box padding="10px">
        <SubjectNotesTopicsCard />
      </Box>
    </>
  );
}
