import { Box, Button, Flex, Heading, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

export default function NavBar(): JSX.Element {
  return (
    <Flex padding={'10px'} boxShadow="0 2px 2px -2px rgba(0,0,0,.2);">
      <Box p="2">
        <Heading size="lg">My ACSG</Heading>
      </Box>
      <Spacer />
      <Box>
        <Button colorScheme="teal" mr="4">
          Sign Up
        </Button>
        <Button colorScheme="teal">Log in</Button>
        <ColorModeSwitcher />
      </Box>
    </Flex>
  );
}
