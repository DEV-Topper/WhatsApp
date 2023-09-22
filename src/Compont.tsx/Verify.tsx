import React from 'react';
import styled from 'styled-components';
import {MdVerified} from 'react-icons/md'

interface Veri{
  src: string
  Text: string
}


const Verify: React.FC <Veri> = ({ src , Text }) => {
  return (
    <div>
      <Container>
      <Image src={src} alt="Verified" />
      <Checkmark><MdVerified/></Checkmark>
     </Container>
      <H>
      {Text}
      </H>
    </div>
  );
};

export default Verify;

const H = styled.div`
  margin-left: 10px;
  line-height:20.0005px;
  vertical-align:baseline;
  letter-spacing:normal;
  word-spacing:0px;
  margin:0px;
  padding:0px;
  font-weight:400;
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
  font-style:normal;
  font-size:13px;
  margin-left: 25px;
  cursor: pointer;

  @media screen and (max-width: 1248px) {
    font-size: 7px;
  }
`


const Container = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 30px;
  margin-top: 20px;
  flex-wrap: wrap;
  @media screen and (max-width: 1248px) {
    flex-shrink: 1;
    flex-wrap: wrap;
    overflow-x: hidden;
    justify-content: center;
    display: flex;
    
  }
`;

const Image = styled.img`
  width: 102%; 
  height: 60px;
  border-radius: 360px;
  cursor: pointer;
  @media screen and (max-width: 1248px) {
    flex-shrink: 1;
    flex-wrap: wrap;
    overflow-x: hidden;
    justify-content: center;
    display: flex;
    width: 50px;
    height: 50px;
    border-radius: 360px;
    flex-direction: column;
  }
`;

const Checkmark = styled(MdVerified)`
  position: absolute;
  /* top: 0; */
  right: 0;
  bottom: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  color: #00DA60;
  left: 40px;
  cursor: pointer;
`;
