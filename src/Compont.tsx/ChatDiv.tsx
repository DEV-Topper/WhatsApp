import React from 'react'
import styled from 'styled-components'
import {BiCheckDouble} from 'react-icons/bi'
// import { FaUser } from 'react-icons/fa'


interface iChatbox{
    Text: string
    src: string
    txt: string
}

const ChatDiv: React.FC <iChatbox> = ({Text , src , txt}) => {
  return (
    <div>
        <Container>
            <Wrapper>
            <All>
             <USER>
             <Img src={src} alt='Profile Pic'/>
             </USER>
                <Name>
                  <div style={{marginTop: '20px', color: 'black'}}>
                  <span style={{marginRight: '20px'}}>{Text}</span>
                  </div>
                <TXT>
                    <BiCheckDouble/>
                    <p>{txt}</p>
                </TXT>
                </Name>
            </All>
            <Day>
                <p>Yesterday</p>
            </Day>
            </Wrapper>
        </Container>
    </div>
  )
}

export default ChatDiv


const Day = styled.div`
    margin-bottom: 20px;
    font-size: 14px;
    font-weight:400;
    color: RGB(59, 74, 84);
`

const TXT = styled.div`
  /* margin-bottom: 20000px; */
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 10px; */
`

const Img = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 360px;
`

const USER = styled.div`
    height: 50px;
    width: 50px;
    background-color: #DFE5E7;
    border-radius: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    cursor: pointer;
    margin-left: 10px;
`

const Name = styled.div`
  height: 30px;
  width: fit-content;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: RGB(59, 74, 84);
  padding: 0px;

`

const All = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  width: 475px;
`

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 475px;
`;