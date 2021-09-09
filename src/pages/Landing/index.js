import { MainPage } from "./style"
import { AiFillFacebook } from 'react-icons/ai'
import { AiOutlineGoogle } from 'react-icons/ai'
import { useHistory } from "react-router"
import BlueButton from "../../components/BlueButton"

const Landing = () => {

    const history = useHistory()

    return (
        <MainPage>
            <div className="gray__gradient" />
            <div className="text__box">
                <h1>Faça conexões na Kenzie Brasil</h1>
                <p>Conecte-se com estudantes e membros do curso que abre portas para o mundo da tecnologia.</p>
            </div>
            <div className="input__box">
                <BlueButton white text="Login" onClick={() => history.push('/login')} />
                <BlueButton text="Cadastro" onClick={() => history.push('/register')} />
                <p className="divider">Ou</p>
                <div className="input__btn">
                    <button className="btn__invisible">
                        <AiFillFacebook />
                    </button>
                    <button className="btn__invisible">
                        <AiOutlineGoogle />
                    </button>
                </div>
            </div>
        </MainPage>
    )
}

export default Landing