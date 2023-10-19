import { useForm } from "react-hook-form";


function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
   
      alert(JSON.stringify(data, null, 2)); 
      console.log(data);
    };
  




  return (
    <form onSubmit={handleSubmit(onSubmit)} className="hook">

      <input
        type="firstName"
        className="hook__input"
        placeholder="firstName"
        {...register("firstName", { required: true })}
      />
      {errors.firstName && (
        <p className="hook__error">firstName is required and must be valid</p>
      )}

      <input
        type="lastName"
        className="hook__input"
        placeholder="lastName"
        {...register("lastName", { required: true })}
      />
      {errors.lastName && (
        <p className="hook__error">lastName is required and must be valid</p>
      )}

      <input
        type="userName"
        className="hook__input"
        placeholder="userName"
        {...register("userName", { required: true })}
      />
      {errors.userName && (
        <p className="hook__error">userName is required and must be valid</p>
      )}

      <input
        type="email"
        className="hook__input"
        placeholder = "email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && (
        <p className="hook__error">Email is required and must be valid</p>
      )}
       
      <input
        type="password"
        className="hook__input"
        placeholder="password"
        {...register("password", { required: true })}
      />
      {errors.password && <p className="hook__error">Password is required</p>}

      <button className="hook__button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default LoginForm;