import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./index.css"
import MyNavbar from "./component/myNavbar/MyNavbar"

function App() {

    return (
        <BrowserRouter>
            <MyNavbar/>
            <Routes>
                <Route path="/" element = {<h1>home</h1>}/>
                <Route path="/blog" element = {<h1>blog</h1>}/>
                <Route path="/about" element = {<h1>about</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App