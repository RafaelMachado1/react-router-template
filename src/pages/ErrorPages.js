import { useNavigate } from "react-router-dom"
import { goToHome } from "../routes/coordinator"

const ErrorPage = () => {

const navigate = useNavigate()
    return (
        <div>
            <h2>Página não existe</h2>
            <button onClick={() => goToHome(navigate)}>pagina principal</button>

        </div>

    )
}

export default ErrorPage