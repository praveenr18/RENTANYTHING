import { registerschema } from "../../components/formschema/registerschema";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
function OwnerLogin() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(registerschema)
  });
  function onSubmit2(data) {
    console.log(data);
    alert("Owner Login Success");
    navigate("/ownerdashboard", { state: data });
  }
  return (
    <>
      <h1 className="heading">Owner Login Form</h1>
      <form className="form" onSubmit={handleSubmit(onSubmit2)}>
        <label>USERNAME :</label>
        <input type="text" className="name" placeholder="Enter your Username here"  {...register("username")} />
        <p>{errors.username?.message}</p>
        <br />
        <label>EMAIL :</label>
        <input type="email" className="email"  placeholder="Enter your Email here" {...register("email")} />
        <p>{errors.email?.message}</p>
        <br />
        <label>PASSWORD :</label>
        <input type="password" className="password" placeholder="Enter your Password here" {...register("password")} />
        <p>{errors.password?.message}</p>
        <br />
        <label>AGE :</label>
        <input type="number" className="age" placeholder="Enter your Age here" {...register("age")}  />
        <p>{errors.age?.message}</p>
        <br />
        <button type="submit" className="button"> Submit </button>
      </form>
    </>
  );
}
export default OwnerLogin;