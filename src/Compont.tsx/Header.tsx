import React from 'react'
import styled from 'styled-components';
import { FaVideo } from 'react-icons/fa';
import {BiChevronDown} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
import {BiDotsVerticalRounded} from 'react-icons/bi'

interface iHeader{
  Text: string
  src: string
}

const Header: React.FC <iHeader> = ({Text, src})=> {
  return (
    <Container2>
        <Wrapper>
            <All>
             <USER>
                <Img src={src} alt='Profile Pic'/>
             </USER>
                <Name>
                  <span>{Text}</span>
                </Name>
            </All>
            <Icons>
              <div style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
              <FaVideo style={{width: '20px', height: '20px', cursor:'pointer', color:'#A2ACB2'}}/>
              <BiChevronDown style={{marginLeft:'5px', width:'20px', height: '20px', cursor:'pointer', color: '#A2ACB2'}}/>
              </div>
              <AiOutlineSearch style={{height: '23px', width:'23px', cursor:'pointer', color:'#54656F'}}/>
              <BiDotsVerticalRounded style={{ width: '25px', height: '25px', cursor: 'pointer', color:'#54656F'}}/>
            </Icons>
        </Wrapper>
    </Container2>
  )
}

export default Header

const Img = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 360px;
`

const Icons = styled.div`
  /* background-color: aqua; */
  width: 140px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
`

const All = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Name = styled.div`
  height: 30px;
  width: fit-content;
  margin-left: 10px;
`

const Container2 = styled.div`
  background-color: #F0F2F5;
  width: 765px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-right: 1px solid black; */
  /* padding: 20px; */
`;

const Wrapper = styled.div`
    width: 750px;
    height: 50px;
    /* border: 1px solid white; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border-right: 1px solid black; */
    /* background-color: green; */
`

const USER = styled.div`
    height: 45px;
    width: 45px;
    background-color: #DFE5E7;
    border-radius: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    cursor: pointer;
    margin-left: 10px;
    /* bottom: 0px; */

    /* .FaUser{
        color: white;
    } */
`