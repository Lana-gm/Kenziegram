import GrayInput from "../../components/GrayInput"
import BlueButton from "../../components/BlueButton"
import { FaArrowCircleLeft } from 'react-icons/fa'
import { MainPage } from "./style"
import { Link, useHistory } from "react-router-dom"

const Login = () => {

    const history = useHistory()

    return (
        <MainPage>
            <div className="gray__gradient" />
            <Link className="mobile__return" to="/">
                <FaArrowCircleLeft className="arrow__button" />
            </Link>
            <div className="text__box">
                <h1>Bem-vindo</h1>
                <p className="smalltext">Entre com sua conta</p>
            </div>
            <form className="input__box">
                <GrayInput type="email" placeholder={'Email'} />
                <GrayInput type="password" placeholder={'Senha'} />
                <BlueButton text="Entrar" />
                <Link className="smalltext margin">Esqueceu sua senha?</Link>
            </form>
        </MainPage>
    )
}

export default Login