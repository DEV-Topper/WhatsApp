import React from 'react'
import styled from 'styled-components';

interface Drop{
    txt: string
}




const DropItem: React.FC<Drop> = ({txt}) =>{
  return (
    <DropdownItem>
        {txt}
    </DropdownItem>
  )
}

export default DropItem

const DropdownItem = styled.div`
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  color: #333;
  &:hover {
    background-color: #ddd;
  }
`;