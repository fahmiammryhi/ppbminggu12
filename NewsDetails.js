import React, {components} from 'react';
import Constants from 'expo-constants';
import {Box,Text,Image,Link} from 'native-base';

const NewsDetail = ({ route }) => {
  const data = route.params.data;
  return(
    <Box
    style={{
      marginTop: Constants.statusBarHeight,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Image 
    source={{
      uri: data.thumbnail,
    }}
    alt="Alternate Text"
    size={250}
    height={200}
    width="100%"

    />
    <Box p={5}>
    <Text fontSize= "lg" mb="10" style={{ textAlign: 'justify'}}>
    {data.title}
  </Text>
  </Box>
  <Link
  widht="80%"
  bg="#52ACFF"
  href={data.link}
  mt="8"
  borderRadius="full"
  style={{ alignItems: 'center', justifyContent: 'center', padding: 10}}>
  <Text fontSize="lg" bold color="white">
  Read More
  </Text>
  </Link>
  </Box>
  );
};

export default NewsDetail;
