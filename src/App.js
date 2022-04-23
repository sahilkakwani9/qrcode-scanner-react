// import React, {useState, useRef} from 'react';
// import {Container, Card, CardContent, Grid, TextField, Button} from '@mui/material';
// import {makeStyles} from '@mui/material/styles'
// import QRCode from 'qrcode';
// import {QrReader} from 'react-qr-reader';

// function App() { 
//   const [text, setText] = useState('');
//   const [imageUrl, setImageUrl] = useState('');
//   const [scanResultFile, setScanResultFile] = useState('');
//   const [scanResultWebCam, setScanResultWebCam] =  useState('');
//   // const classes = useStyles();
//   const qrRef = useRef(null);


//   const generateQrCode = async () => {
//     try {
//           const response = await QRCode.toDataURL(text);
//           setImageUrl(response);
//     }catch (error) {
//       console.log(error);
//     }
//   }
//   const handleErrorFile = (error) => {
//     console.log(error);
//   }
//   const handleScanFile = (result) => {
//     setScanResultFile(result);
//       if (result) {
          
//       }
//   }
//   const onScanFile = () => {
//     qrRef.current.openImageDialog();
//   }
//   const handleErrorWebCam = (error) => {
//     console.log(error);
//   }
//   const handleScanWebCam = (result) => {
//     setScanResultWebCam(result);
//     if (result){
        
//     }
//    }
//   return (
//     <Container>
//           <Card>
//               <h2>Generate Download & Scan QR Code with React js</h2>
//               <CardContent>
//                   <Grid container spacing={2}>
//                       <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
//                           <TextField label="Enter Text Here" onChange={(e) => setText(e.target.value)}/>
//                           <Button variant="contained" 
//                             color="primary" onClick={() => generateQrCode()}>Generate</Button>
//                             <br/>
//                             <br/>
//                             <br/>
//                             {imageUrl ? (
//                               <a href={imageUrl} download>
//                                   <img src={imageUrl} alt="img"/>
//                               </a>) : null}
//                       </Grid>
//                       <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
//                         <Button variant="contained" color="secondary" onClick={onScanFile}>Scan Qr Code</Button>
//                         <QrReader
//                           ref={qrRef}
//                           delay={300}
//                           style={{width: '100%'}}
//                           onError={handleErrorFile}
//                           onScan={handleScanFile}
//                           legacyMode
//                         />
//                         <h3>Scanned Code: {scanResultFile}</h3>
//                       </Grid>
//                       <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
//                          <h3>Qr Code Scan by Web Cam</h3>
//                          <QrReader
//                          delay={300}
//                          style={{width: '100%'}}
//                          onError={handleErrorWebCam}
//                          onScan={handleScanWebCam}
//                          />
//                          <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
//                       </Grid>
//                   </Grid>
//               </CardContent>
//           </Card>
//     </Container>
//   );
// }

import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { Container, Box, Text, Button, Flex } from '@chakra-ui/react'

function App(){
  const [data, setData] = useState('No result');
  const [screen, setScreen] = useState(false)

  return (
    <>
    <Container maxW='95%'>
    <Box w='100%' p={4} textAlign="center">
    
    <Text fontSize='4xl' color='#4FD1C5'>QR Code Scanner</Text>
    <Flex color='white' justifyContent={'space-around'}>
      <Button colorScheme='blue' mr={2} onClick={setScreen(true)}>Start Camera</Button>
      <Button colorScheme='blue'>Stop Camera</Button>
    </Flex>
    
    {screen && <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
      />}
      <p color="white">{data}</p>
    </Box>
      
   </Container>
      
    </>
  )
}


export default App;