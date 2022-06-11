import { Box, Button, Container, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

function App() {
  const [data, setData] = useState('No result');
  const [screen, setScreen] = useState(false);
  // const [num, setNum] = useState(0);
  const scannedList = [""];
  const [lists, setLists] = useState(scannedList);
  const startCamera = () => {
    if (!screen) {
      setScreen(true);
    }
  }
  const stopCamera = () => {
    if (screen) {
      setScreen(false);
    }
  }

  const clearList = () => {
    setLists("");
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
                console.log(result);
                if (result) {

                  // setData(result?.text);

                  let n = 0;
                  if (result?.text != null) {

                    if (scannedList.includes(result?.text)) {
                      alert("User already scanned");
                      setScreen(false)
                    }

                    else {
                      scannedList.push(result?.text);
                      setLists(scannedList);
                      fetch(`http://localhost:8080/insert/data`, {
                        method: 'POST',
                        body: lists
                      })
                      setScreen(false)
                      // setNum(n);
                    }
                  }

                }
                if (error) {
                  console.info(error);
                }
              }}
            />
          </Container>}
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
              {lists && lists.map((el) => {
                {
                  return <li>{el}</li>
                }
              })}
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