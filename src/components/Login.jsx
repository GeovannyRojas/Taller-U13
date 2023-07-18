import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUsername } from '../store/slices/userName.slice';
import pikachu from '../img/pngwing.com.png';
import '../styles/Listado.css'



const Login = () => {
    // eslint-disable-next-line no-undef
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const goPokedex = () => {
        //dispatch(getUsername(name));
        //navigate("/Listado")
        if (username === 'admin' && password === 'admin') {
            navigate("/Listado");
        } else {
          alert('Usuario o contraseña incorrectos');
        }
      };

    return (
        <div className="contenedor-login">
        <div className="central-login">
          <div className="id-login">
            <div className="titulo-login">
              <div >
               <label for="" className='form_label' >POKEAPP</label>
                <img className="imagent" src={pikachu}/>
              </div>
            </div>
            <form className="login-form" onSubmit={goPokedex}>
                <input className='form_input' id='textUser' placeholder='USUARIO' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input className='form_input' id='textPass' placeholder='CONTRASEÑA' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" title="Ingresar" name="Ingresar">Login</button>
                  </form>
                </div>
              </div>
            </div>
    );
}

export default Login;