import { Box, Flex, Text, Button, Switch, VStack, useColorModeValue } from '@chakra-ui/react';
import Card from 'components/card/Card';

export default function Controller(props: { [x: string]: any }) {
	const { ...rest } = props;

	// Chakra Color Mode
	const textColor = useColorModeValue('secondaryGray.900', 'white');

	return (
		<Card alignItems='center' flexDirection='column' w='100%' {...rest}>
			<Flex justify='space-between' align='start' px='10px' pt='5px' w='100%'>
				<Flex flexDirection='column' align='start' me='20px'>
					<Text color='white' fontSize='22px' fontWeight='500'>
						Traffic Light Controller
					</Text>
				</Flex>
			</Flex>

			<Button colorScheme='red' mt={4} w='80%'>
				Turn All Red
			</Button>

			<Box display='grid' gridTemplateColumns='repeat(2, 1fr)' gap={6} mt={6}>
				{[...Array(4)].map((_, index) => (
					<VStack key={index} bg='black' p={4} borderRadius='md' w='120px' h='260px' align='center' justify='center'>
						<VStack spacing={6}>
							<Switch size='lg' colorScheme='red' />
							<Switch size='lg' colorScheme='yellow' />
							<Switch size='lg' colorScheme='green' />
						</VStack>
					</VStack>
				))}
			</Box>
		</Card>
	);
}
