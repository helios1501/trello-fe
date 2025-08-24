import { useForm, type SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../auth/authSlice";
import { login } from "./LoginSlice";
type Inputs = {
  code: string
}
export const VerifyForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
    dispatch(login({ code: data.code }))
    localStorage.setItem('user', JSON.stringify(data))
    dispatch(setCredentials({ token: "test", user: { email: "test",  password: "test"} }))
    return navigate('/dashboard')
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>Email Verification</p>
      <p>Please enter your code that send to your email address</p>
      <input type="input" placeholder="Enter code verification" {...register("code")} />
      <button type="submit">Continue</button>
    </form>
  );
}