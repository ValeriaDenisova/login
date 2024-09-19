import { SignUp } from 'components/SignUp';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return(
        <div>
            <h1>Регистрация</h1>
            <SignUp/>
            <p>
                Если Вы уже зарегистировались перейдите на <Link to="/login">страницу входа</Link>
            </p>
        </div>
    )
}

export default RegisterPage;