import "./index.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onsubmitHandler = (data: Inputs) => {
    console.log(data);
  };

  const onclickHandler = () => {
    axios.get("products");
  };

  const emailPattern = /(.+)@(.+){2,}\.(.+){2,}/g;
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onsubmitHandler)}>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            {...register("email", {
              required: "email is required",
              pattern: {
                value: emailPattern,
                message: "invalid email address",
              },
            })}
            id="email"
            type="email"
          />
          <small>{errors?.email?.message}</small>
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            {...register("password", {
              required: "password is required",
              minLength: 8,
              maxLength: 8,
            })}
            id="password"
            type="password"
          />
          <small>{errors?.password?.message}</small>
          <small>
            {errors?.password?.type === "maxLength" && "max-length is 8"}
          </small>
          <small>
            {errors?.password?.type === "minLength" && "minLength is 8"}
          </small>
        </div>
        <button>submit</button>
      </form>
      <button onClick={onclickHandler}>fetch</button>
    </div>
  );
};
export default LoginPage;

type Inputs = {
  email: string;
  password: string;
};
