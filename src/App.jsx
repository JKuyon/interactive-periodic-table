import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import './App.scss';

const App = () => {
  return (
    <div className='Heading'>
      <Box bg='darkblue' w='100%' p={25} color='white'>
        <Text fontSize='3xl' color='whitesmoke'>Interactive Periodic Table of Elements</Text>
      </Box>    
    </div>

  )
}

export default App;