import { MainPage } from "./style"
import { AiFillFacebook } from 'react-icons/ai'
import { AiOutlineGoogle } from 'react-icons/ai'
import { useHistory, Redirect } from "react-router"
import BlueButton from "../../components/BlueButton"
import { useState } from 'react';

import { db } from '../../firebaseApi';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { useAuth } from '../../providers/Auth';
import { toast } from "react-toastify"

const Landing = () => {

    const [existingUser, setExistingUser] = useState(undefined);

    const { loggedUser } = useAuth();
    const history = useHistory();

    if(loggedUser) {
        return <Redirect to='/home'/>
    }

    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
          .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            db.collection('Users').doc(user.uid).set({
                id: user.uid,
                user: user.displayName,
                email: user.email,
                phone: user.phoneNumber,
                posts: '--',
                bio: 'Google user', 
                img_url: user.photoURL
            });            
          }).catch((error) => {
            const errorMessage = error.message;
            toast(errorMessage);
          });
    }

    return (
        <MainPage>
            <div className="gray__gradient" />
            <div className="text__box">
                <h1>Faça conexões na <span>Kenziegram</span></h1>
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
                        <AiOutlineGoogle onClick={handleGoogleSignIn}/>
                    </button>
                </div>
            </div>
        </MainPage>
    )
}

export default Landing