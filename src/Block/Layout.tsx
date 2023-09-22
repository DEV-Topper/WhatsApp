import {Outlet} from "react-router-dom"
import Sidebar from "./Sidebar"
import styled from "styled-components"

const Layout = () =>{
    return(
        <Main>
            <Sidebar/>
                <div>
              <Outlet/>
              </div>   
        </Main>
    )
}

export default Layout


const Main = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  /* background-color: var(--appBG); */
`;

