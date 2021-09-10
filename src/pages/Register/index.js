import GrayInput from "../../components/GrayInput"
import BlueButton from "../../components/BlueButton"
import { Link } from 'react-router-dom'
import { FaArrowCircleLeft } from "react-icons/fa"
import { MainPage } from "./style"

const Register = () => {

    return (
        <MainPage>
            <div className="gray__gradient" />
            <Link className="mobile__return" to="/">
                <FaArrowCircleLeft className="arrow__button" />
            </Link>
            <div className="text__box">
                <h1>Crie sua conta</h1>
            </div>
            <form className="input__box">
                <GrayInput type="text" placeholder={'Nome de Usuário'} />
                <GrayInput type="email" placeholder={'Email'} />
                <GrayInput type="text" placeholder={'Telefone'} />
                <GrayInput type="password" placeholder={'Senha'} />
                <GrayInput type="password" placeholder={'Confirme sua Senha'} />
                <BlueButton type="submit" text="Cadastrar" />
                <Link to="/login" className="smalltext margin">Já tem cadastro? <strong>Entre!</strong></Link>
            </form>
        </MainPage>
    )

}

export default Register