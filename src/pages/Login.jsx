import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.2rem;
  background:
    radial-gradient(circle at 10% 10%, rgba(79, 70, 229, 0.15), transparent 35%),
    radial-gradient(circle at 90% 90%, rgba(14, 116, 144, 0.14), transparent 42%),
    var(--color-grey-50);
`;

const Card = styled.section`
  width: min(54rem, 100%);
  background: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: 1.6rem;
  box-shadow: var(--shadow-lg);
  padding: 3.2rem;

  @media (max-width: 700px) {
    padding: 2.4rem;
  }
`;

const CenteredHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2.4rem;
`;

const SubText = styled.p`
  font-size: 1.4rem;
  color: var(--color-grey-500);
`;

const DemoBox = styled.div`
  margin-top: 2rem;
  padding: 1.4rem;
  border-radius: var(--border-radius-md);
  border: 1px dashed var(--color-indigo-700);
  background: var(--color-indigo-100);
`;

const DemoTitle = styled.h3`
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  margin-bottom: 0.8rem;
  color: var(--color-indigo-700);
`;

const DemoLine = styled.p`
  font-family: "Sono", monospace;
  font-size: 1.3rem;
  color: var(--color-grey-700);
`;

function Login() {
  return (
    <LoginLayout>
      <Card>
        <CenteredHeader>
          <Logo />
          <Heading as="h4">Welcome to InnSight</Heading>
          <SubText>Sign in to explore bookings, cabins, and dashboard analytics.</SubText>
        </CenteredHeader>

        <LoginForm />

        <DemoBox>
          <DemoTitle>Demo credentials</DemoTitle>
          <DemoLine>Email: ayush@blaze.com</DemoLine>
          <DemoLine>Password: notunique@@@</DemoLine>
        </DemoBox>
      </Card>
    </LoginLayout>
  );
}

export default Login;
