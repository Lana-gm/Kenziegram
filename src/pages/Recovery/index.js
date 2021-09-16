import GrayInput from "../../components/GrayInput"
import BlueButton from "../../components/BlueButton"
import { FaArrowCircleLeft } from 'react-icons/fa'
import { MainPage } from "./style"
import { Link, useHistory, Redirect } from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { firebaseApp } from '../../firebaseApi';
import { useAuth } from '../../providers/Auth';

const Recovery = () => {

    const { loggedUser } = useAuth();

    const formSchema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(formSchema)
    });

    const onSubmitFunction = async (data) => {
        await firebaseApp
            .auth()
            .sendPasswordResetEmail(data.email)
            .then((user) => {
                toast('Cheque o seu email');
            })
            .catch((error) => {
                toast(error.message);
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
                <h1>Esqueceu sua senha?</h1>
                <p className="smalltext">Recupere através do e-mail.</p>
            </div>
            <form className="input__box" onSubmit={handleSubmit(onSubmitFunction)}>
                <GrayInput type="email" name="email" placeholder={'Email'} register={register}/>
                <BlueButton type='submit' text="Entrar" />
                <Link to="/" className="smalltext margin">Retorne para entrar!</Link>
            </form>
            <ToastContainer />
        </MainPage>
    )
}

export default Recovery