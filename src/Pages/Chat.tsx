import React from 'react'
import styled from 'styled-components'
import img from '../assets/HEro.png'
import Globalbutton from '../Compont.tsx/Globalbutton'
import {HiMiniLockClosed} from 'react-icons/hi2'


export const Chat = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <IMGWRAP>
          <Img src={img} alt = 'Web'>
          </Img>
          </IMGWRAP>
          <TXT>
            <h1>Download WhatsApp for Windows</h1>
          </TXT>
          <P>
            <p>Make calls, share your screen and get a faster experience when you download the<br></br> Windows app.</p>
          </P>
          <Globalbutton height='35px' width='120px' bcc='#017561' cl='white' br='15px' Text='Get the app' mar='30px 320px' fs='14px'/>

        <Downprt>
          <HiMiniLockClosed color='rgb(134, 150, 160)' fontSize='14px' style={{marginTop: '20px', }}/>
          <p>Your personal messages are end-to-end encrypted</p>
        </Downprt>
        </Wrapper>

      </Container>
    </div>
  )
}

export default Chat

const Downprt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 30px; */
  margin-left: 25px;
  p{
    line-height:20px;
    vertical-align:baseline;
    letter-spacing:normal;
    word-spacing:0px;
    margin:0px;
    padding:0px;
    font-weight:400;
    font-style:normal;
    font-variant:normal;
    font-kerning:auto;
    font-optical-sizing:auto;
    font-stretch:100%;
    font-variation-settings:normal;
    font-feature-settings:"kern";
    text-transform:none;
    /* text-decoration:none solid rgb(134, 150, 160); */
    text-align:center;
    text-indent:0px;
    font-size: 14px;
    color: rgb(134, 150, 160);
    margin-top: 20px;
  }
`

const P = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
  /* background-color: pink; */

  p{
  line-height:20px;
  vertical-align:baseline;
  letter-spacing:normal;
  word-spacing:0px;
  margin:18px 0px 0px;
  padding:0px;
  font-weight:400;
  font-style:normal;
  font-variant:normal;
  font-kerning:auto;
  font-optical-sizing:auto;
  font-stretch:100%;
  font-variation-settings:normal;
  font-feature-settings:"kern";
  font-size: 14px;
  text-transform:none;
  /* text-decoration:none; */
  text-align:center;
  text-indent:0px; 
  color:  rgb(102, 119, 129);
  }
`

const TXT = styled.div`
  

  h1{
    line-height:32px;
    vertical-align:baseline;
    letter-spacing:normal;
    word-spacing:0px;
    margin:28px 0px 0px;
    padding:0px;
    font-weight:300;
    font-style:normal;
    font-variant:normal;
    font-kerning:auto;
    font-optical-sizing:auto;
    font-stretch:100%;
    font-variation-settings:normal;
    font-size:32px;
    font-feature-settings:"kern";
    text-transform:none;
    text-decoration:none solid rgb(65, 82, 93);
    text-align:center;
    text-indent:0px;
  }
`

const IMGWRAP = styled.div`
  /* background-color: blue; */
  display: flex;
  justify-content: center;
  align-items: center;
`

const Img = styled.img`
  width: 310px;
  height: 185px;
`

const Container = styled.div`
  background-color: #F0F2F5;
  height: 100vh;
  width: 60vw;
  display: flex;
  align-items: end;
`

const Wrapper = styled.div`
  height: 500px;
  width: 100%;
  /* background-color: green; */

`