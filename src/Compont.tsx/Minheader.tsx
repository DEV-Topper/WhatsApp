import React, {useState} from 'react'
import styled from 'styled-components'
import {AiOutlineSearch} from 'react-icons/ai'
import {BiFilter} from 'react-icons/bi'
import {HiArrowLeft} from 'react-icons/hi'
// import { transform } from 'typescript'

function Minheader() {

    const [Mainicon , Seticon] = useState(false)

    const Click = () =>{
        Seticon(!Mainicon)
    }

  return (
    <Container>
        <Wrapper  onClick={Click}>
            {Mainicon?(
              <AiOutlineSearch style={{width: '20px' , height: '20px', marginLeft: '10px', color: '#54656F'}}/>
            ):(
              <AR>
                <HiArrowLeft style={{width: '20px' , height: '20px', marginLeft: '10px', color: 'green',}}/>
              </AR>
            )}
            <input  style={{width: '90%', marginRight: '5px', height: '30px', border: 'none', outline: 'none', fontSize: '15px', backgroundColor: '#F0F2F5'}} type="user-select" placeholder='Search or start new chat'/>
        </Wrapper>
        <BiFilter style={{height: '25px', width: '25px', marginRight: '10px', color:'#54656F'}}/>
    </Container>
  )
}

export default Minheader

const AR = styled.div`
  
`

const Container = styled.div`
  background-color: #FFFFFF;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border-right: 2px solid black; */
`;

const Wrapper = styled.div`
    height: 40px;
    width: 90%;
    background-color: #F0F2F5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    margin-left: 10px;
`