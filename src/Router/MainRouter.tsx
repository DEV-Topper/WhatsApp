import {createBrowserRouter} from "react-router-dom"
import Layout from "../Block/Layout"
import { HomeScreen } from "../Pages/HomeScreen"
import Chat from "../Pages/Chat"
import Allchats from "../Pages/Allchats"
import Allchats2 from "../Pages/Allchats2"
import Allchats3 from "../Pages/Allchats3"
import Allchats4 from "../Pages/Allchats4"
import Allchats5 from "../Pages/Allchats5"
import Allchats11 from "../Pages/Allchats11"
import Allchats10 from "../Pages/Allchats10"
import Allchats9 from "../Pages/Allchats9"
import Allchats8 from "../Pages/Allchats8"
import Allchats7 from "../Pages/Allchats7"
import Allchats6 from "../Pages/Allchats6"
// import Hero from "../Block/Hero"

export const MainRouter = createBrowserRouter ([
    {
        path : "/",
        element: <Layout/>,
       children:[{
        index: true,
        element: <Chat/>
    }
    ,{
        index: true,
        path: "/chats",
        element: <Allchats/>
    },
    {
        index: true,
        path: '/chat2',
        element: <Allchats2/>
    },
    {
        index: true,
        path: '/chat3',
        element: <Allchats3/>
    },
    {
        index: true,
        path: '/chat4',
        element: <Allchats4/>
    },
    {
        index: true,
        path: '/chat5',
        element: <Allchats5/>
    },
    {
        index: true,
        path: '/chat6',
        element: <Allchats6/>
    },
    {
        index: true,
        path: '/chat7',
        element: <Allchats7/>
    },
    {
        index: true,
        path: '/chat8',
        element: <Allchats8/>
    },
    {
        index: true,
        path: '/chat9',
        element: <Allchats9/>
    },
    {
        index: true,
        path: '/chat10',
        element: <Allchats10/>
    },
    {
        index: true,
        path: '/chat11',
        element: <Allchats11/>
    }
    ]},

    
])