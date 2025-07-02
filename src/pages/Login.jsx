import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const CenteredHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

function Login() {
  return (
    <LoginLayout>
      <CenteredHeader>
        <Logo />
        <Heading as="h4">Log in to your account</Heading>
      </CenteredHeader>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
