import { useSelector } from "react-redux";
import { LoginForm } from "./LoginForm";
import { VerifyForm } from "./VerifyForm";
import ImgLeft from 'assets/img_bottom_left.png'
import ImgRight from 'assets/img_bottom_right.png'

export const Login = () => {
  const email = useSelector((state: any) => state.login.email);
  return (
    <div className="wrap-form">
      <div className="login-form">
        {
          !email ? <LoginForm /> : <VerifyForm />
        }
        <p>Privacy Policy</p>
        <p>This site is protected by reCAPTCHA and the Google Privacy</p>
        <p>Policy and Terms of Service apply.</p>
      </div>
      <ul className="list-img">
        <li><p className="wrap-img"><img src={ImgLeft} alt="" /></p></li>
        <li><p className="wrap-img"><img src={ImgRight} alt="" /></p></li>
      </ul>
    </div>
  );
}