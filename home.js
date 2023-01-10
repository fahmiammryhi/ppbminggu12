import React, {Component} from 'react';
import Constants from 'expo-constants';
import { 
    NativeBaseProvider,
    Box,
    Text,
    Pressable,
    HStack,
    Image,
    Center,
    Slide,
    FlatList,
    VStack
} from "native-base";
import { ActivityIndicator } from "react-native";


export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
        };
    }

    async getNews(){
        try{
            const response = await fetch(
                'https://api-berita-indonesia.vercel.app/cnn/teknologi'
            );
            const json = await response.json();
            this.setState({data: json.data.posts});
        }catch(error){
            console.error(error);
        }finally{
            this.setState({isLoading: false});
        }
    }

    componentDidMount(){
        this.getNews();
    }

    renderItem = ({item}) => {
        const { navigation } = this.props;

        return(
            <>
                <Center>
                    <Pressable
                        width= "85%"
                        bg="#6E8FAD"
                        rounded="8"
                        mt="2"
                        overflow="hidden"
                        onPress={() => navigation.navigate('newsDetail', {data: item})}
                    >
                    <Box>
                        <Image source={{uri: item.thumbnail}} style={{height: 100, resizeMode: 'stretch'}}/>
                        <Text m="5" fontSize="lg" color="white" style={{textAlign: 'justify',}}>
                            {item.title}
                        </Text>
                    </Box>
                    </Pressable>
                </Center>
            </>
        );
    };

    render(){
        const {data, isLoading} = this.state;
        return(
            <NativeBaseProvider flex="1">
                <Box
                    style={{flex: 20, marginTop: Constants.statusBarHeight}}
                    bg="#52ACFF"
                    borderBottomRadius="25"
                >
                    <Center>
                        <Text mt="5" bold fontSize="3xl">
                            Selamat Datang Kembali
                        </Text>
                    </Center>
                </Box>
                <Center width="100%" style={{flex: 75}}>
                    {isLoading ? (
                        <ActivityIndicator size="large" color="#AA0002"/>
                    ): (
                        <FlatList
                            width="100%"
                            data={data}
                            keyExtractor={({link}, index) => link}
                            renderItem={this.renderItem}
                        />
                    )}
                </Center>
            </NativeBaseProvider>
        );
    }
}
