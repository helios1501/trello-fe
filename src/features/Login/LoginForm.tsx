import { useForm, type SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "./LoginSlice";
import Logo from '../../assets/logo.png'
type Inputs = {
  email: string
}
export const LoginForm = () => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
    dispatch(login({ email: data.email }))
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="wrap-img logo"><img src={Logo} alt="" /></p>
      <p>Login to continue</p>
      <input type="input" placeholder="Enter your email" {...register("email")} defaultValue="test@gmail.com" />
      <button type="submit">Continue</button>
    </form>
  );
}