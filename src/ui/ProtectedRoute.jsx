import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { Navigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  // 1. Load authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 3. Loading, show a cpinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  // 4. If there is a user, render the application

  return children;
}

export default ProtectedRoute;
