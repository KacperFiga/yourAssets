import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schemas/formSchemas";
import { Box } from "@mui/material";

import styled from "styled-components";

const StyledBox = styled(Box)`
  min-height: 100vh;
`;

const StyledForm = styled.form`
  & {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    width: 80vw;
    max-width: 400px;
    height: 75vh;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 27px;
    box-shadow: 1px 10px 29px -16px rgba(66, 68, 90, 1);
    backdrop-filter: blur(8.5px);
    background: rgba(239, 239, 239, 0.55);
  }
`;

const StyledInput = styled.input`
  width: 80%;
  height: 5%;
`;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const submit = () => {
    console.log("send data");
  };

  return (
    <StyledBox>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <StyledInput {...register("email")} />
        <StyledInput type="password" {...register("password")} />
        <StyledInput type="submit" />
      </StyledForm>
    </StyledBox>
  );
};

export default Login;
