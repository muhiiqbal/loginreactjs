import './LoginUi.css';
import email from "./../image/email.jpg";
import pass from "./../image/pass.png";
function LoginUi() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div>
           <h1>Login Page</h1>
           <h2> Welcome Friend, We Will Miss You</h2>
           <div>
             <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="User Name" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="Password" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button>
          </div>
           
            <p className="link">
              <a href="#">Forgot Password?</a> Or <a href="#">Sign Up</a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default LoginUi;
