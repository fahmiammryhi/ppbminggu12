import React from 'react';
import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  ScrollView,
  Text,
  VStack,
  Center,
  AlertDialog,
} from 'native-base';

class Profil extends React.Component {
  render() {
    return (
      <Box flex={1}>
      <ScrollView px={3} py={5}>
      <Box>
      <Heading>App Description</Heading>
      <Text mt={3} style={{ textAlign : 'justify '}}>
       Lorem Ipsum
       </Text>
      </Box>
      <Divider mt="20px" mb="15px" />
      <Box>
      <Heading mb="10px">App Info</Heading>
      <VStack>
       <HStack justifycontent={'space-between'}>
       <Text fontweight={'bold'}>Version</Text>
       <Text>v0.0.1</Text>
       </HStack>
       <HStack justifycontent={'space-between'}>
       <Text fontweight={'bold'}>Update on</Text>
       <Text>January 10, 2023</Text>
       </HStack>
       </VStack>
       </Box>
       <Divider mt="20px" mb="15px" />
       </ScrollView>
       </Box>
    );
  }
}

export default Profil;
