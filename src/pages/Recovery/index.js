import GrayInput from "../../components/GrayInput"
import BlueButton from "../../components/BlueButton"
import { FaArrowCircleLeft } from 'react-icons/fa'
import { MainPage } from "./style"
import { Link, useHistory } from "react-router-dom"

const Recovery = () => {
        
    const history = useHistory();

    return (
        <MainPage>
            <div className="gray__gradient" />
            <Link className="mobile__return" to="/">
                <FaArrowCircleLeft className="arrow__button" />
            </Link>
            <div className="text__box">
                <h1>Esqueceu sua senha?</h1>
                <p className="smalltext">Recupere através do e-mail.</p>
            </div>
            <form className="input__box">
                <GrayInput type="email" name="email" placeholder={'Email'} register={null}/>
                <BlueButton type='submit' text="Entrar" />
                <Link to="/" className="smalltext margin">Retorne para entrar!</Link>
            </form>
        </MainPage>
    )
}

export default Recovery