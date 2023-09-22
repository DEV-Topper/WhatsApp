import { useState } from 'react'
import React  from 'react'
import Header from '../Compont.tsx/Header'
import styled from 'styled-components'
import {AiOutlinePlus} from 'react-icons/ai'
import {BsEmojiSmile} from 'react-icons/bs'
import {IoMdMic , IoMdSend} from 'react-icons/io'


const Allchats2 = () => {
 
    const [Click , Setclick] = useState(false)

  const TheClick = () =>{
    Setclick(!Click)
  }

 const [messages , Setmessages] = useState<string[]>([]);
 const [Newmessages , Setnewmessages] = useState<string>('');

 const handleInutChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
  Setnewmessages(e.target.value)
 }

 const handleSendClick = () =>{
  if (Newmessages.trim() !==''){
    Setmessages([...messages , Newmessages])
    Setnewmessages('')
  }
}


  return (
    <div>
        <Header Text='Ahmed' src='https://pps.whatsapp.net/v/t61.24694-24/370272304_1348209096090717_1341583957162199915_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQh5KlPA0EGjEHAZ0ltcTnUONB7fGeJeUzL1taV68EegQ&oe=651A2410&_nc_sid=000000&_nc_cat=102'/>

        <ChatWrapper>
      <MessagesContainer>
        {messages.map ((message,index)=>(
          <Message key={index}>{message}</Message>
        ))}
      </MessagesContainer>
      <InputContainer>
      <InputWrapper>
      <Icon><AiOutlinePlus style={{width:'25px', height:'25' , color:'#54656F' , cursor:'pointer'}}/></Icon>
      <div > 
      <Theinput>
        <BsEmojiSmile style={{width:'25px', height:"25px", marginRight: '5px' , color:'#54656F' , cursor:'pointer'}}/>
        <Input  
           type='text'
           placeholder='Type a message'
           onClick={TheClick}
           value={Newmessages}
           onChange={handleInutChange}
        />
      </Theinput>
      </div>
      {Click?(
        <IoMdSend onClick={handleSendClick} style={{width: '25px', height: '25px' , color:'#54656F', cursor:'pointer'}}/>
        ):(
        <IoMdMic style={{width:'25px', height:'25px', color:'#54656F' , cursor:'pointer'}}/>
      )}
      </InputWrapper>
      </InputContainer>
    </ChatWrapper>
    </div>
  )
}


export default Allchats2

const Message = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  margin: 5px 0;
  width: fit-content;
  align-self: flex-end;

`;

const Input = styled.input`
  height: 33px;
  width: 600px;
  /* flex: 1; */
  border: 1px solid #ccc;
  border-radius: 5px;
  border: none;
  font-size: 15px;
  margin-right: 5px;
  background-color: #ffff;
  outline: none;
`

const Theinput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffff;
  border-radius: 10px;
  height: 45px;
  /* width: 60px; */
`

const InputWrapper = styled.div`
  /* background-color: green; */
  height: 50px;
  width: 740px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
`;

const MessagesContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px;
  background-color: #F4F0EA;
  border-left: 1px solid #ddd;
`;


const InputContainer = styled.div`
  display: flex;
  height: 50px;
  background-color: #F0F2F5;
  border-top: 1px solid #ddd;
  width: 765px;
  align-items: center;
  justify-content: center;
`;
