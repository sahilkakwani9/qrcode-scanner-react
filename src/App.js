import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { Container, Box, Text, Button, Flex } from '@chakra-ui/react'

function App(){
  const [data, setData] = useState('No result');
  const [screen, setScreen] = useState(false);
  const [num, setNum] = useState(0);
  const [lists, setLists] = useState(dataList);
  const startCamera = () => {
    if(!screen){
      setScreen(true);
    }
  }
  const stopCamera = () => {
    if(screen){
      setScreen(false);
    }
    
  }
  // const handleList = () => {
  //   for(int i =0; i < dataList.length; i++){
  //     return "<li>"+dataList[i]+"</li>";
  //   }
  // }

  const dataList = ["sahil"];

  return (
    <>
    <Text fontSize='4xl' color='#4FD1C5' textAlign={'center'}>QR Code Scanner</Text>
    <Flex maxW='95%'>
      
    <Box width={'30%'} p={4} textAlign="center">
    
    {screen && <Container>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
            setData(data.Name);
            let n =0;
            if (data != null){
              n = dataList.push(data);
              setLists(dataList);
              setNum(n);
            }
            
          }

          if (!!error) {
            console.info(error);
          }
        }}
      />
    </Container> }
    <Flex color='white'>
      <Button colorScheme='blue' mr={2} onClick={() => startCamera()}>Start Camera</Button>
      <Button colorScheme='blue' onClick={() => stopCamera()}>Stop Camera</Button>
    </Flex>
    
    
    </Box>
      <Box width={'70%'}>
      <Text fontSize='4xl' color='#000000' textAlign={'center'}>Scanned Detail</Text>
      <Box>
        <ol>
          {/* {lists && lists.map((el) => {{
            return <li>{el}</li>
          }})} */}
          <li>{data}</li>
        </ol>
        {/* <p color="white">{data}</p> */}
      </Box>
      </Box>
   </Flex>
      
    </>
  )
}


export default App;