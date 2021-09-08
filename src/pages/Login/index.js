import GrayInput from "../../components/GrayInput"
import BlueButton from "../../components/BlueButton"
import { MainPage } from "./style"
import { Link } from "react-router-dom"

const Login = () => {


    return (
        <MainPage>
            <div className="gray__gradient" />
            <div className="text__box">
                <h1>Bem-vindo</h1>
                <p className="smalltext">Entre com sua conta</p>
            </div>
            <div className="input__box">
                <GrayInput placeholder={'Email'} />
                <GrayInput placeholder={'Senha'} />
                <BlueButton text="Entrar" />
                <Link className="smalltext margin">Esqueceu sua senha?</Link>
            </div>
        </MainPage>
    )
}

export default Login