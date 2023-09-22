import React, {useState} from 'react';
import styled from 'styled-components';
import Minheader from '../Compont.tsx/Minheader';
import {FaUser} from 'react-icons/fa'
import {MdGroups} from 'react-icons/md'
import {PiCircleDashedDuotone} from 'react-icons/pi'
import {BiSolidMessageRoundedMinus} from 'react-icons/bi'
import {TbMessagePlus} from 'react-icons/tb'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import {HiArrowLeft} from 'react-icons/hi'
import {TbPlus} from 'react-icons/tb'
import Verify from '../Compont.tsx/Verify';
import Globalbutton from '../Compont.tsx/Globalbutton';
import img from '../assets/Screenshot__323_-removebg-preview.png'
import DropItem from '../Compont.tsx/DropItem';
import {AiOutlineRight} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import ChatDiv from '../Compont.tsx/ChatDiv';

function Sidebar() {
const [Show , Setshow] = useState(false)

const Theshow = () =>{
  Setshow(!Show)
}

const [Toggle , SetToggle] = useState(false)

const Thetoggle = () =>{
  SetToggle(!Toggle)
  Setshow(false)
}

const [Showcom , Setshowcom] = useState(false)

const [Theshowcom , SetTheshowcom] = useState(false)

const THeshow= () =>{
  SetTheshowcom(!Theshowcom)
  // Setshowcom(false)
}

const Thecom = () =>{
  Setshowcom(!Showcom)
  SetTheshowcom(false)
}



const [Dropdown, SetDropdown] = useState(false)
    

    const drop = () =>{
        SetDropdown(!Dropdown)
        
    }
    

  return (
    <Container >
          <Container2>
        <Wrapper>
            <USER>
                <FaUser style={{width: '30px' , height: '30px' , marginTop: '5px'}}/>
            </USER>
            <NavButton>
                <MdGroups onClick={THeshow} style={{ width: '30px', height: '30px', cursor: 'pointer'}}/>
                <PiCircleDashedDuotone style={{ width: '25px', height: '25px', cursor: 'pointer'}}/>
                <BiSolidMessageRoundedMinus onClick={Theshow} style={{ width: '25px', height: '25px', cursor: 'pointer'}}/>
                <TbMessagePlus style={{ width: '25px', height: '25px', cursor: 'pointer'}}/>

                <Icon isOpen='sk' onClick={drop}>
                <BiDotsVerticalRounded style={{ width: '25px', height: '25px', cursor: 'pointer' }}/>
                </Icon>
                  
                {Dropdown?(
                  <Dropdown1>
                  <DropItem txt='New group'/>
                  <DropItem txt='New community'/>
                  <DropItem txt='Starred message'/>
                  <DropItem txt='Select chats'/>
                  <DropItem txt='Settings'/>
                  <DropItem txt='Log out'/>
                  </Dropdown1>
                ): null}
            </NavButton>
        </Wrapper>
    </Container2>
       <Minheader/>
      <Content1>
        <Wrapper1>
          <Link style={{ textDecoration:'none'}} to='chat2'>
          <WRAPPER> 
            <ChatDiv txt='whats up bro' Text='Ahmed' src='https://pps.whatsapp.net/v/t61.24694-24/370272304_1348209096090717_1341583957162199915_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQh5KlPA0EGjEHAZ0ltcTnUONB7fGeJeUzL1taV68EegQ&oe=651A2410&_nc_sid=000000&_nc_cat=102'/>
          </WRAPPER>
          </Link>
            <Link style={{textDecoration: 'none'}} to="/chats">
          <WRAPPER>
            <ChatDiv txt='Keep it up..' Text='Topper (You)' src='https://pps.whatsapp.net/v/t61.24694-24/120585197_2754128254861577_7070255868664318702_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQreNK_IF5E4lWCVHjUQ7NsvgFqi_jvT-2us32ZUmDJ2w&oe=6519E5D7&_nc_sid=000000&_nc_cat=100'/>
          </WRAPPER>
            </Link>
            <Link style={{textDecoration: 'none'}} to='/chat3'>
          <WRAPPER>
            <ChatDiv txt= 'Hey how far' Text='Ayomide' src='https://pps.whatsapp.net/v/t61.24694-24/374547440_846884283542181_8232499409327687361_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQnPKcwNU34khvnty549sBeBklOlqkh1u9hfklt-3WkXA&oe=651A1397&_nc_sid=000000&_nc_cat=109'/>
          </WRAPPER>
            </Link>
            <Link style={{textDecoration:'none'}} to='/chat4'>
          <WRAPPER>
            <ChatDiv txt='hey are u back' Text='Delight' src='https://pps.whatsapp.net/v/t61.24694-24/353805352_758555656020701_1245890410332049192_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSJal584ZY0vM0gpz84BzG1OBM1G0B1ZKIyvEAROHJwQQ&oe=651A063D&_nc_sid=000000&_nc_cat=109'/>
          </WRAPPER>
            </Link>
            <Link style={{textDecoration:'none'}} to='/chat5'>
          <WRAPPER>
            <ChatDiv txt='Sup dawg' Text='Wisdom P' src='https://pps.whatsapp.net/v/t61.24694-24/363582685_1929874790717289_4250711332932383925_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRGsY_BOEwZXDTsoMsu-6EFDhsQ7HSIXKjMY7eaXk_kVw&oe=651A1405&_nc_sid=000000&_nc_cat=103'/>
          </WRAPPER>
            </Link>
            <Link style={{textDecoration:'none'}} to='/chat6'>
          <WRAPPER>
            <ChatDiv txt='Are u done' Text='Joan' src='https://pps.whatsapp.net/v/t61.24694-24/374897160_180698621709533_101658677677897320_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdT7ty_3sGr8J0DabwYLZE317FKV2QoSKvmgv2jbWcID5A&oe=6519F9D7&_nc_sid=000000&_nc_cat=102'/>
          </WRAPPER>
            </Link>
            <Link style={{textDecoration:'none'}} to='/chat7'>
          <WRAPPER>
            <ChatDiv txt='pls send it' Text='Regina' src='https://pps.whatsapp.net/v/t61.24694-24/365470351_1016085276391915_3581559641859448149_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQDjT-1ZyUMkpm4SmfmYSFcEDhc0oxukp4nYi6cIDElHg&oe=651A0BDC&_nc_sid=000000&_nc_cat=106'/>
          </WRAPPER>
            </Link>
            <Link style={{textDecoration:'none'}} to='/chat8'>
          <WRAPPER>
            <ChatDiv txt='HEY' Text='Jemima' src='https://pps.whatsapp.net/v/t61.24694-24/325961529_790522388666183_7737765282289380868_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTt9l3mqb5_KtAs54q1X8kmXRyVdfFrsyPseK0pYqhQNw&oe=6519FBA3&_nc_sid=000000&_nc_cat=109'/>
          </WRAPPER>
            </Link>
            <Link style={{textDecoration:'none'}} to='/chat9'>
          <WRAPPER>
            <ChatDiv txt='Big man' Text='Victor' src='https://pps.whatsapp.net/v/t61.24694-24/372094609_338448755202114_1290050316325832087_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSB9fEz9Q5P0CxydkaRjSkHm04O5kbEUMf44NnHHOkALg&oe=6519F26E&_nc_sid=000000&_nc_cat=100'/>
          </WRAPPER>
            </Link>
            <Link style={{textDecoration:'none'}} to='/chat10'>
          <WRAPPER>
            <ChatDiv txt='How far' Text='Jessica' src='https://pps.whatsapp.net/v/t61.24694-24/348450933_2015448875458883_4784927171826293782_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSAtj62fjlD_jsrLEuPOLCx62xPOr1_YcvmmRgWH71CyQ&oe=6519FC93&_nc_sid=000000&_nc_cat=109'/>
          </WRAPPER>
            </Link>
            <Link style={{textDecoration:'none'}} to='/chat11'>
          <WRAPPER>
            <ChatDiv txt='HI boss' Text='Tobez' src='https://pps.whatsapp.net/v/t61.24694-24/352441093_812497283812832_7192118840151510265_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQmyaxqRoXehLMhCTcWZLn6agBrpzHOMXKu2jEnz2fVTw&oe=651A1E1A&_nc_sid=000000&_nc_cat=102'/>
          </WRAPPER>
            </Link>
   
          {/* Add more content items as needed */}
        </Wrapper1>
      </Content1>
      {Show?(
        <Channel>
        <Content3>
          <Wrapper2>  
          <ChannelHead>
          <HiArrowLeft onClick={Thetoggle} style={{width: '20px' , height: '20px',  color: 'white', cursor: 'pointer'}}/>
          <h1 style={{marginRight: '30px'}}>Channels</h1>
          </ChannelHead>

          <TbPlus style={{width: '23px' , height: '23px', marginLeft: '260px', color: 'white', cursor: 'pointer', marginBottom: '20px'}}/>
          </Wrapper2>

          <TXT>
            <h2>Stay updated on your favourite topics</h2>
            <p>Find channels to follow bellow</p>
          </TXT>
          <Picdiv>
          <PIC>
          <Verify src= 'https://pps.whatsapp.net/v/t61.24694-24/377174764_845788680397260_6221308472354943231_n.jpg?stp=dst-jpg_s192x192&ccb=11-4&oh=01_AdTqkcQ-LUhC_TJ7ZvyDpCHVqGFvpHdjw49_YdfUF4cygg&oe=650ED999&_nc_sid=000000&_nc_cat=103' Text='BRODA SH...'/>
          <Verify src= 'https://pps.whatsapp.net/v/t61.24694-24/375889238_966271664457847_8300677556682588326_n.jpg?stp=dst-jpg_s192x192&ccb=11-4&oh=01_AdTQMnGZeudUFmXpRbCjwGuxj-iteayWLnFDhJBOYcGiRQ&oe=650ED4DD&_nc_sid=000000&_nc_cat=102' Text='Branjotter'/>
          <Verify src= 'https://pps.whatsapp.net/v/t61.24694-24/366387448_293789799924809_8386798898441461754_n.jpg?stp=dst-jpg_s192x192&ccb=11-4&oh=01_AdSOgsJJqBr-LBfeFf_ZqE_fsFR49otrMT0_rQ4poU06ww&oe=650F60D8&_nc_sid=000000&_nc_cat=100' Text='Mark Zuck... '/>
          <Verify src= 'https://pps.whatsapp.net/v/t61.24694-24/376327833_298666059525800_4351303229206372999_n.jpg?stp=dst-jpg_s192x192&ccb=11-4&oh=01_AdTWslLvIajPxXzSPNOPdojI_4TT1sxRUBpFEccz4u6BQA&oe=650FDFE5&_nc_sid=000000&_nc_cat=111' Text='Pulse Nige...'/>
          <Verify src= 'https://pps.whatsapp.net/v/t61.24694-24/325794670_1006906947177463_6339525738149446442_n.jpg?stp=dst-jpg_s192x192&ccb=11-4&oh=01_AdQbp4jF7wVkehqXabLVtBy7zAhrYjP7R9k57bLGhToPIQ&oe=650FD3F8&_nc_sid=000000&_nc_cat=104' Text='SYDNEY T...'/>
          <Verify src= 'https://pps.whatsapp.net/v/t61.24694-24/375974985_705894881401033_1627199810759022415_n.jpg?stp=dst-jpg_s192x192&ccb=11-4&oh=01_AdSvhbs7iJ5C87SHjPrWcNjgsq9itBMGdmpQ-6rH6SH9XA&oe=650FA358&_nc_sid=000000&_nc_cat=104' Text='Agentofla...'/>
          <Verify src= 'https://pps.whatsapp.net/v/t61.24694-24/375913221_272723285569481_73276532703560865_n.jpg?stp=dst-jpg_s192x192&ccb=11-4&oh=01_AdTwlZK0ZT5E2jfBrXhnmRzjbtWjwkpc5LtHJtnpIcHBHw&oe=650F67AB&_nc_sid=000000&_nc_cat=110' Text='Cute Abiola'/>
          <Verify src= 'https://pps.whatsapp.net/v/t61.24694-24/374649618_3012599485538740_3857925966832640779_n.jpg?stp=dst-jpg_s192x192&ccb=11-4&oh=01_AdSMG0HEMA1v7EWueYOll58uvGJwR2NPGjT6wQvDPECydQ&oe=650F0B31&_nc_sid=000000&_nc_cat=101' Text='Free Wors...'/>
          </PIC>
          </Picdiv>
          <Globalbutton height='35px' width='140px' bcc='#017561' cl='white' br='15px' Text='Find channel' mar='20px 190px' fs='14px'/>
        </Content3>
    </Channel>
      ): null}

     {Theshowcom?(
      <Channel1>
        <Content3>
        <Wrapper2>
        <ChannelHead>
          <HiArrowLeft onClick={Thecom} style={{width: '20px' , height: '20px',  color: 'white', cursor: 'pointer'}}/>
          <h1 style={{marginRight: '5px'}}>Communities </h1>
          </ChannelHead>
        </Wrapper2>

        <div style={{display:'flex' , alignItems:'center' , justifyContent: 'center'}}>
        <Img src= {img}>
        </Img>
        </div>
        <Downtxt>
          <H2>
          <h3>Stay connected with a community</h3>
          </H2>
          <H3>
          <h3>Communities bring member together in topic-base groups, and make it easy to get admin announcements. Any community you're added to will appear here.</h3>
          </H3>
        </Downtxt>
        <Linker>
        <a href="">See example communities</a>

        <AiOutlineRight style={{marginTop:'35px', color: '#00A884', fontWeight: '30px'}}/>
        </Linker>

        <Globalbutton height='35px' width='170px' bcc='#017561' cl='white' br='15px' Text='Start your community' mar='35px 165px' fs='14px'/>
        
        </Content3>
      </Channel1>
     ):null}
    </Container>
  );
}

export default Sidebar;

const Channel1 = styled.div`
  width: 40vw;
  background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  overflow-y: auto;
  &::-webkit-scrollbar{
     width: 12px;

   }

   &::-webkit-scrollbar-track{
    background-color: #888;
   }

   &::-webkit-scrollbar-thumb{
    background-color: black;
    border-radius: 5px;
   }
`;

const Linker = styled.div`
  background-color: blue;
  height: 0px;
  display: flex;
  justify-content: center;
  align-items: center;


  a{
    font-weight:450;
    font-style:normal;
    font-variant:normal;
    font-kerning:auto;
    font-optical-sizing:auto;
    font-stretch:100%;
    font-variation-settings:normal;
    font-feature-settings:"kern";
    text-transform:none;
    text-decoration: none;
    text-align:center;
    text-indent:0px;
    color: #00A884;
    font-size: 14px;
    margin-top: 30px;

    &:hover{
      text-decoration:underline solid rgb(0, 168, 132);
    }
  }
`

const H2 = styled.div`
  h3{
    line-height:36px;
    vertical-align:baseline;
    letter-spacing:normal;
    word-spacing:0px;
    margin:18px 0px 0px;
    padding:0px;
    font-weight:700;
    font-style:normal;
    font-variant:normal;
    font-kerning:auto;
    font-optical-sizing:auto;
    font-stretch:100%;
    font-variation-settings:normal;
    font-feature-settings:"kern";
    text-transform:none;
    text-decoration:none solid rgb(17, 27, 33);
    text-align:center;
    text-indent:0px;
    color: black;
    font-size: 24px;
    margin-bottom: 10px;

  }
`

const H3 = styled.div`
  width: 60%;
  


  h3{
    line-height:20.0004px;
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
    text-decoration:none solid rgb(59, 74, 84);
    text-align:center;
    text-indent:0px;
    font-size: 14px;
    color: #4A5861;
  }
`


const Downtxt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0;
`

const Img = styled.img`
  height: 250px;
  width: 430px;
`

const PIC = styled.div`
  height: 205px;
  width: 75%;
  /* background-color: pink; */
  padding: 2px;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1248px) {
    flex-shrink: 1;
    flex-wrap: wrap;
    overflow-x: hidden;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }

`


const Picdiv = styled.div`
  height: 250px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`


const Content3 = styled.div`
  


  h2{
    line-height:28.0003px;
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
    font-feature-settings:"kern";
    text-decoration:none solid rgb(17, 27, 33);
    text-align:center;
    font-size: 19px;
    color: black;
  }

  p{
    line-height:21.9997px;
    vertical-align:baseline;
    letter-spacing:normal;
    word-spacing:0px;
    margin:8px;
    padding:0px;
    font-weight:400;
    font-style:normal;
    font-variant:normal;
    font-kerning:auto;
    font-optical-sizing:auto;
    font-stretch:100%;
    font-feature-settings:"kern";
    text-decoration:none solid rgb(102, 119, 129);
    text-align:center;
    font-size: 17px;
    color: rgb(102, 119, 129);
  }
`

const TXT = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 40px;
`

const Icon = styled.div <{isOpen:string}>`
  background-color: ${(props) => (props.isOpen ? 'lightblue' : 'green')};
  border-radius: 360px;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ChannelHead = styled.div`
    /* background-color: black; */
    margin-bottom: 20px;
    display: flex;
    width: 170px;
    margin-left: 30px;
    justify-content: space-between;
    color: white;
    align-items: center;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    h1{
      line-height:23px;
      vertical-align:baseline;
      letter-spacing:normal;
      word-spacing:0px;
      margin:0px;
      padding:0px;
      font-size: 20px;
      cursor: default;
      font-weight: 500;
    }
`
 
const Wrapper2 = styled.div`
  width: 100%;
  height: 120px;
  background-color: #008069;
  display: flex;
  align-items: end;
  z-index: 99999;
`



const Container = styled.div`
  width: 40vw;
  color: #802626;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;



const Content1 = styled.div`
  overflow-y: auto;
  &::-webkit-scrollbar{
     width: 12px;

   }

   &::-webkit-scrollbar-track{
    background-color: #888;
   }

   &::-webkit-scrollbar-thumb{
    background-color: black;
    border-radius: 5px;
   }
`;

const Wrapper1 = styled.div`
   padding: 2px;
`;

const WRAPPER = styled.div`
  height: 60px;
  margin-top: 1px;
  border-top: 1px solid #8696A0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;

  &:hover{
    background-color: #F5F6F6;
  }
`;

const Dropdown1 = styled.div`
  position: absolute;
  background-color: #f9f9f9;
  height: 320px;
  width: 230px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 91;
  border-radius: 10px;
  margin-right: 60px;
  top: 0;
  margin-top: 50px;
`

const NavButton = styled.div`
    height: 50px;
    width: 210px;
    /* background-color: greenyellow; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px;
    color: #54656F;
    margin-right: 20px;
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
`


const Container2 = styled.div`
  background-color: #F0F2F5;
  width: 100%;
  height: 84px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;

`;

const Wrapper = styled.div`
    width: 540px;
    height: 50px;
 
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-right: 1px solid black;
`

const Channel = styled.div`
  width: 40vw;
  background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: absolute;
`;

