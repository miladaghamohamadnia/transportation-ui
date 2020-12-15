import Head from 'next/head'
import Canvas from '../src/canvas/canvas'
import styled from 'styled-components'

const WrapperStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`

export default function Home() {
  return (
    <WrapperStyle>
    
      <Head>
        <title>Transportation</title>
        <link rel="" href="" />
        <link href='https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css' rel='stylesheet' />
      </Head>

      <Canvas/>

      {/* <Footer/> */}

    </WrapperStyle>
  )
}
