import formLogo from "../img/Logo.png";
import "./Form.css";

function Form({ children }) {
  return (
    <section className="form-Log-In">
      <img src={formLogo} alt="" />
      <div className="container">
        <div className="buttons">
          <button className="log-in-button">Iniciar sesión</button>
          <button className="sign-up-button">Registrarse</button>
        </div>
        <div className="form">
          {children}
        </div>
      </div>
    </section>
  );
}

export default Form;
