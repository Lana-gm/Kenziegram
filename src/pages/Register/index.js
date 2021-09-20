import GrayInput from "../../components/GrayInput";
import BlueButton from "../../components/BlueButton";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import * as S from "./style";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useHistory, Redirect } from "react-router-dom";

import { firebaseApp, db } from "../../firebaseApi";
import { useAuth } from "../../providers/Auth";

const Register = () => {
  const { loggedUser } = useAuth();

  const formSchema = yup.object().shape({
    user: yup
      .string()
      .max(20, "Máximo de 20 caractéres")
      .required("Usuário obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    phone: yup.string(),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Senha deve ter ao menos 8 caracteres"),
    confirm: yup.string().oneOf([yup.ref("password")], "Senhas diferentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const history = useHistory();
  const onSubmitFunction = async (data) => {
    await firebaseApp
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((user) => {
        db.collection("Users").doc(user.user.uid).set({
          id: user.user.uid,
          user: data.user,
          email: data.email,
          phone: data.phone,
          bio: "",
          posts: 0,
          img_url:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXFxcX////CwsLGxsb7+/vT09PJycn19fXq6urb29ve3t7w8PDOzs7n5+f5+fnt7e30nlkBAAAFHUlEQVR4nO2dC5qqMAyFMTwUBdz/bq+VYYrKKJCkOfXmXwHna5uTpA+KwnEcx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3EcA2iO9cdIc5PUdO257y+BU39u66b4HplE3fk6VIcnqmNfl1+gksr6+iIucjl3WYukor7+re6Hoe1y1UhNO3zUd+fUFRmKpOa0Tt6dY5ubRCrOG/QFLk1WGmnt/JxzykcjdZ/jyxJDLlOV2l36AtcsJJb9boG3YcR3DuqODIE3ztYKPkDdmwRmpUToUaSaq++AvRgZMWbOpbQW8hdCAm8ZDugoikzREdCJ2okJPBx6azFLNOwoOgcxojJ98JkaTSJxMpklKrCAKhZGI0drTY/wU5lXoJYibannV9NYy4oozNEAkPHTjop+DTDxVGkIgYJNoyQQJtiIW+EMjGAjm649AjGIaqswcEFQKJ2QPlJbqytki6ZXAAZRJ52J2McaUowzAfs+uFzrYhnzaapphiPWdaJWShqxjqa6kTTQ205TVbsfMa6htL0iYOsXpJrQjHSmCkv1QGPtiHqlYcQ21Gj7fcDU8xOEUuNgSltPzexh+HqFlanCBHZ4OLhCV+gK/3OF6vWvucLv98MUOY2pwu/PS/+D2qJU7pYGbOvDFDW+bbON9p3o3oRxn0bfLgZTgSn6pSfrtr56qLHemtHPTK2319SzGvtjQ9qeb39WgS66Cm073nd0U1PzDdJCO3Gzn6TKpl9Zq7ujGWsQhlA3NwWIMwG9zM08Y/tBrR9VWeczv5CSQuuUNKIUTk23ZJ5RKfVhjnkXotfWIlgX2BSCDYbZR+QTcLhb3dKZDUY2M0d4KWItwhHRah/zsrOgKw4wycwjcgEVcgQDQo23CqSiWEJkFAfod2oE1uIFdA1OsCPqFXYNTjCfb8Ez+iX2x5sKLlVbhtqdDcar9ZevhnbZxoBUD35k23t0d304LYs1ELVbnfFaZ/REJJX9niP8Q19moZGo3m8XR/yBvOnjFfsXcI2c8ZuNo7WMP5HQh6yRGrlmFOJTnyTcT+zRlqPUBI2gTVWNUzUna1ERgecgF4GpNBQ38jGqxVLzQA1A31Rrhk6Yz9QEh/WND0GnuG9huhiTXJkxfAizTHLr6cbJKN6UCU6x/2DTRE1xEeEXi3O0ZUqBN4nJRzHhFB1JPlFTBZlI2kQ8zc3KJ1Le8DIRmFJiknuVS6RK4Ej/JtBfJErDSzOBiY4wJHX6Z1I4v1GUmdCPNirnLLeg3oJLcbX5PcpHNbRvOa1A956QmRPOUXVF+zkaUJynpkYR0bOMJH2nNej1pqyV/aKkz9jr5yj5vrXXz1F5SQLACiMapmierj2ikLyleKdlA/I/2oFxiglxx9B+mHwz0lf34IZQfhDRhlD6bhvgEAoPYooHkTczSIZTLC+cEExsoNKZiGBiY9cCfo/Y/SjIOBMQizWWTe73CMUasJx7jlD+DdKdWUKoY4PRYFtGpO0G1Lx4RaadgTtJhf4fiGqGIwKWCGuGIwKWqP+7IxYCzygjR9IAO5pC7Da9g70TBVpWRNgFBlgT8RV2WxHbKwJMv4BOaEaYaU2K16yZMN/qgV+G7IWIvwyZCxHeDQMsR8wg0DBDDXB5H2EV+hkEGmaoySHQsEJNFoGGFWrAq98JRhUMX1iMMMqLLEIpK5jCbd4vw9nSt/72lewXiN6jmdjfq8Hdknlk92ZwJnbIMMRM7JBhiFlUFoHd1UWaP1QKsPsHA5mkNB+Smn9JqV3wskatnQAAAABJRU5ErkJggg==",
        });
        history.push("/login");
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  if (loggedUser) {
    return <Redirect to="/home" />;
  }

  return (
    <S.MainPage>
      <div className="gray__gradient" />
      <Link className="mobile__return" to="/">
        <FaArrowCircleLeft className="arrow__button" />
      </Link>
      <div className="text__box">
        <h1>Crie sua conta</h1>
      </div>
      <form className="input__box" onSubmit={handleSubmit(onSubmitFunction)}>
        <GrayInput
          type="text"
          error={!!errors.user}
          name="user"
          placeholder={"Nome de Usuário"}
          register={register}
        />
        <S.ErrorMessage>{errors.user?.message}</S.ErrorMessage>
        <GrayInput
          type="email"
          error={!!errors.email}
          name="email"
          placeholder={"Email"}
          register={register}
        />
        <S.ErrorMessage>{errors.email?.message}</S.ErrorMessage>
        <GrayInput
          type="text"
          error={!!errors.phone}
          name="phone"
          placeholder={"Telefone"}
          register={register}
        />
        <GrayInput
          type="password"
          error={!!errors.password}
          name="password"
          placeholder={"Senha"}
          register={register}
        />
        <S.ErrorMessage>{errors.password?.message}</S.ErrorMessage>
        <GrayInput
          type="password"
          error={!!errors.confirm}
          name="confirm"
          placeholder={"Confirme sua Senha"}
          register={register}
        />
        <S.ErrorMessage>{errors.confirm?.message}</S.ErrorMessage>
        <BlueButton type="submit" text="Cadastrar" />
        <Link to="/login" className="smalltext margin">
          Já tem cadastro? <strong>Entre!</strong>
        </Link>
      </form>
      <ToastContainer />
    </S.MainPage>
  );
};

export default Register;
