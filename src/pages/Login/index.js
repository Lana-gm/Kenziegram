import GrayInput from "../../components/GrayInput"
import BlueButton from "../../components/BlueButton"
import { FaArrowCircleLeft } from 'react-icons/fa'
import { MainPage } from "./style"
import { Link, useHistory, Redirect } from "react-router-dom"

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { firebaseApp } from '../../firebaseApi';
import { useAuth } from '../../providers/Auth';

const Login = () => {

    const { loggedUser } = useAuth();

    const formSchema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        password: yup.string().required("Senha obrigatória").min(8, "Senha deve ter ao menos 8 caracteres"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(formSchema)
    });
        
    const history = useHistory();
    const onSubmitFunction = async (data) => {
        await firebaseApp
            .auth()
            .signInWithEmailAndPassword(data.email, data.password)
            .then((user) => {
                history.push('/home');
            });
    }

    if(loggedUser) {
        return <Redirect to='/home'/>
    }

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
            <form className="input__box" onSubmit={handleSubmit(onSubmitFunction)}>
                <input type="email" placeholder={'Email'} {...register('email')}/>
                <input type="password" placeholder={'Senha'} {...register('password')}/>
                <BlueButton type='submit' text="Entrar" />
                <Link className="smalltext margin">Esqueceu sua senha?</Link>
            </form>
        </MainPage>
    )
}

export default Login