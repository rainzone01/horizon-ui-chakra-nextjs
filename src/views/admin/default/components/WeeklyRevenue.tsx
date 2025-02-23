// Chakra imports
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import Card from 'components/card/Card';
import React from 'react';
import { useState, useEffect } from 'react';

export default function WeeklyRevenue(props: { [x: string]: any }) {
  const { ...rest } = props;
  const [lights, setLights] = useState(['green', 'red', 'green', 'red']);

  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');

  useEffect(() => {
    const interval = setInterval(() => {
      setLights((prev) =>
        prev[0] === 'green'
          ? ['red', 'green', 'red', 'green']
          : ['green', 'red', 'green', 'red']
      );
    }, 20000); // Change lights every 20 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <Card w='100%' {...rest}>
      <Flex align='center' w='100%' px='15px' py='10px'>
        <Text
          me='auto'
          color={textColor}
          fontSize='xl'
          fontWeight='700'
          lineHeight='100%'
        >
          Traffic Lights
        </Text>
      </Flex>

      {/* Use Grid component from Chakra UI */}
      <Flex
        // templateColumns='repeat(2, 1fr)' // 2 columns
        gap={10} // Gap between grid items
        h='240px'
        mt='auto'
        mb='6'
       justifyContent='space-evenly' // Evenly space the traffic lights
        alignItems='center'
      >
        {lights.map((color, index) => (
          <Flex key={index}>
            <Box
              w='96px' // Width of the traffic light box
              h='240px' // Height of the traffic light box
              bg='black' // Background color
              borderRadius='lg' // Rounded corners
              p='2' // Padding
              display='flex'
              flexDirection='column'
              alignItems='center'
            >
              {/* Red Light */}
              <Box
                w='64px' // Width of the light
                h='64px' // Height of the light
                borderRadius='full' // Circular shape
                mb='2' // Margin bottom
                bg={color === 'red' ? 'red.500' : 'gray.700'} // Dynamic color
              />
              {/* Yellow Light */}
              <Box
                w='64px'
                h='64px'
                borderRadius='full'
                mb='2'
                bg={color === 'yellow' ? 'yellow.500' : 'gray.700'}
              />
              {/* Green Light */}
              <Box
                w='64px'
                h='64px'
                borderRadius='full'
                bg={color === 'green' ? 'green.500' : 'gray.700'}
              />
            </Box>
          </Flex>
        ))}
      </Flex>
    </Card>
  );
}