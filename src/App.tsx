import { ChakraProvider, theme } from '@chakra-ui/react';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SubjectNotesOverview from './components/SubjectNotesOverview/SubjectNotesOverview';

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes/:id" element={<SubjectNotesOverview />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
