import Head from 'next/head'
import Image from 'next/image'
import Full from '../components/Intro'
import Intro from '../components/Intro'
import styled from 'styled-components'


const Container = styled.div`
    height: 100vh;
    width: 100%;
  
`


export default function Index() {
  return (
    <Container>
        
        <Head>
          <title></title>
          <meta name="description" content="Helium Blog" />
          <link rel="icon" href="#" /> 
        </Head>
       <Intro />
    </Container>
  )
}
