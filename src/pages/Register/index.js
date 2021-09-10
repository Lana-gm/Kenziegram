import GrayInput from "../../components/GrayInput"
import BlueButton from "../../components/BlueButton"
import { Link } from 'react-router-dom'
import { FaArrowCircleLeft } from "react-icons/fa"
import { MainPage } from "./style"

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { useHistory, Redirect } from 'react-router-dom';

import { firebaseApp } from '../../firebaseApi';
import { useAuth } from '../../providers/Auth';

const Register = () => {

<<<<<<< HEAD
=======
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
            .createUserWithEmailAndPassword(data.email, data.password)
            .then((user) => {
                history.push('/login');
            });
    }

    if(loggedUser) {
        return <Redirect to='/home'/>
    }

>>>>>>> 1935072c435cc964ad34de74edd34d7191e7fa17
    return (
        <MainPage>
            <div className="gray__gradient" />
            <Link className="mobile__return" to="/">
                <FaArrowCircleLeft className="arrow__button" />
            </Link>
            <div className="text__box">
                <h1>Crie sua conta</h1>
            </div>
<<<<<<< HEAD
            <form className="input__box">
                <GrayInput type="text" placeholder={'Nome de Usuário'} />
                <GrayInput type="email" placeholder={'Email'} />
                <GrayInput type="text" placeholder={'Telefone'} />
                <GrayInput type="password" placeholder={'Senha'} />
                <GrayInput type="password" placeholder={'Confirme sua Senha'} />
=======
            <form className="input__box" onSubmit={handleSubmit(onSubmitFunction)}>
                <input type="text" placeholder={'Nome de Usuário'} />
                <input type="email" placeholder={'Email'} {...register('email')}/>
                <input type="number" placeholder={'Telefone'} />
                <input type="password" placeholder={'Senha'} {...register('password')}/>
                <input type="password" placeholder={'Confirme sua Senha'} />
>>>>>>> 1935072c435cc964ad34de74edd34d7191e7fa17
                <BlueButton type="submit" text="Cadastrar" />
                <Link to="/login" className="smalltext margin">Já tem cadastro? <strong>Entre!</strong></Link>
            </form>
        </MainPage>
    )

}

export default Register;