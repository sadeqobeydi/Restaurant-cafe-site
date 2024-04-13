
import ReactDOM  from "react-dom/client"
import App from "./App"
import bootstrap from "bootstrap/dist/css/bootstrap.rtl.min.css"
import { ThemeProvider } from "react-bootstrap"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <>
        <ThemeProvider>
            <App/>  
        </ThemeProvider>  
    </>
)