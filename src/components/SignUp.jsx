import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {Form} from './Form';
import {setUser} from 'store/slices/userSlice';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const SignUp = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleRegister = (email, password) => {
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/');
            })
            .catch((error)=>{
                console.log(error);
                alert("Ошибка! Проверьте консоль")
            })

           
            
    }

    return (
        <Form
            title = "Зарегистрироваться"
            handleClick={handleRegister}
        />
    )
}

export {SignUp}