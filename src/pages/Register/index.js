import GrayInput from "../../components/GrayInput"
import BlueButton from "../../components/BlueButton"
import { Link } from 'react-router-dom'
import { FaArrowCircleLeft } from "react-icons/fa"
import { MainPage } from "./style"

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { useHistory, Redirect } from 'react-router-dom';

import { firebaseApp, db } from '../../firebaseApi';
import { useAuth } from '../../providers/Auth';

const Register = () => {

    const { loggedUser } = useAuth();

    const formSchema = yup.object().shape({
        user: yup.string().required("Usuário obrigatório"),
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        phone: yup.string(),
        password: yup.string().required("Senha obrigatória").min(8, "Senha deve ter ao menos 8 caracteres"),
        confirm: yup.string().oneOf([yup.ref("password")], "Senhas diferentes")
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
                db.collection('Users').doc(user.user.uid).set({
                    user: data.user,
                    email: data.email,
                    phone: data.phone,
                    bio: '', 
                    posts: 0
                });
                history.push('/login');
            });
    }

    if (loggedUser) {
        return <Redirect to='/home' />
    }

    return (
        <MainPage>
            <div className="gray__gradient" />
            <Link className="mobile__return" to="/">
                <FaArrowCircleLeft className="arrow__button" />
            </Link>
            <div className="text__box">
                <h1>Crie sua conta</h1>
            </div>
            <form className="input__box" onSubmit={handleSubmit(onSubmitFunction)}>
                <GrayInput type="text" name="user" placeholder={'Nome de Usuário'} register={register} />
                <GrayInput type="email" name="email" placeholder={'Email'} register={register} />
                <GrayInput type="text" name="phone" placeholder={'Telefone'} register={register}/>
                <GrayInput type="password" name="password" placeholder={'Senha'} register={register} />
                <GrayInput type="password" name="confirm" placeholder={'Confirme sua Senha'} register={register} />
                <BlueButton type="submit" text="Cadastrar" />
                <Link to="/login" className="smalltext margin">Já tem cadastro? <strong>Entre!</strong></Link>
            </form>
        </MainPage>
    )

}

export default Register;