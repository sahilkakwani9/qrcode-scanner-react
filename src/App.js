import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { Container, Box, Text, Button, Flex } from '@chakra-ui/react'

function App(){
  const [data, setData] = useState('No result');
  const [screen, setScreen] = useState(false);
  const [num, setNum] = useState(0);
  const dataList = ["sahil"];
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

  const clearList = () => {
    setLists("")
  }
  // const handleList = () => {
  //   for(int i =0; i < dataList.length; i++){
  //     return "<li>"+dataList[i]+"</li>";
  //   }
  // }

  

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
            let n =0;
            if (data != null){
              if(dataList.includes(result?.text)){
                alert("User already scanned");
              }
              else{
                n = dataList.push(result?.text);
                setLists(dataList);
                setNum(n);
              }
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
    {/* <Button colorScheme='blue' onClick={() => clearList()}>Clear List</Button> */}
    
    </Box>
      <Box width={'70%'}>
      <Text fontSize='4xl' color='#000000' textAlign={'center'}>Scanned Detail</Text>
      <Box>
        <ol>
          {lists && lists.map((el) => {{
            return <li>{el}</li>
          }})}
          {/* <li>{lists}</li> */}
        </ol>
        {/* <p color="white">{data}</p> */}
      </Box>
      </Box>
   </Flex>
      
    </>
  )
}


export default App;