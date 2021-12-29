import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Spacer,
} from '@chakra-ui/react';
import SubjectNotesCard from '../SubjectNotesCard/SubjectNotesCard';

export default function Home(): JSX.Element {
  return (
    <Box padding="10px">
      <SubjectNotesCard />
    </Box>
  );
}
