import { BrowserRouter, Routes, Route } from "react-router-dom"
import ErrorPage from "../pages/ErrorPages"
import  HomePage from "../pages/HomePage"
import ProfilePage from "../pages/ProfilePage"
import LoginPage from "../pages/LoginPage"


const Router = () => {
// O Route precisa de duas informações:
//a primeira é o caminho (paht) e a segunda é o componente a ser renderizado

// quando a página é a princial, seu path = index

    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/profile/:name" element={<ProfilePage/>}/>
                <Route path="/login/:usuario" element={<LoginPage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default Router