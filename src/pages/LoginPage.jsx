import { Link } from 'react-router-dom';
import { Login } from 'components/Login';

const LoginPage = () => {
    return(
        <div>
            <h1>Страница входа</h1>
            <Login/>
            <p>
                Или <Link to="/register">зарегистрируйтесь</Link>
            </p>
        </div>
    )
}

export default LoginPage;