import React from 'react'
import styled from 'styled-components'

interface iButton{
    width: string;
    height: string;
    br: string;
    bcc: string;
    Text: string
    cl: string
    mar: string
    fs: string
}


const Globalbutton: React.FC <iButton> = ({width , height , br , bcc , Text, cl, mar , fs}) =>{
  return (
    <div>
        <Buttons width= {width} height={height} br= {br} bcc={bcc} cl={cl} mar= {mar} fs= {fs}>
            {Text}
        </Buttons>
    </div>
  )
}

export default Globalbutton


const Buttons = styled.div <{width: string ,height: string , br: string , bcc: string , cl: string , mar: string , fs: string}>`
   width: ${({width}) => width};
   height: ${({height}) => height};
   border-radius: ${({br}) => br};
   background-color: ${({bcc}) => bcc};
   color: ${({cl}) => cl};
   display: flex;
   align-items: center;
   justify-content: center;
   line-height:6.0006px;
   vertical-align:baseline;
    letter-spacing:normal;
    word-spacing:0px;
   margin:${({mar}) => mar};
    padding:0px;
    font-weight:500;
    font-style:normal;
    font-variant:normal;
    font-kerning:auto;
    font-optical-sizing:auto;
    font-stretch:100%;
    font-variation-settings:normal;
    font-feature-settings:normal;
    text-transform:none;
    text-decoration:none solid rgb(255, 255, 255);
    text-align:center;
    text-indent:0px;
    font-size: ${({fs}) => fs};
    cursor: pointer;
`