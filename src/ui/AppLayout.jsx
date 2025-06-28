import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { useState } from "react";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr;
    height: auto;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;

  @media (max-width: 700px) {
    padding: 1.2rem 0.8rem 2.4rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 700px) {
    gap: 1.2rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 1001;
  background: var(--color-brand-600);
  color: white;
  border: none;
  border-radius: 50%;
  width: 3.2rem;
  height: 3.2rem;
  font-size: 2rem;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    display: flex;
  }
`;

function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <StyledAppLayout>
      <MobileMenuButton onClick={() => setSidebarOpen((open) => !open)}>
        &#9776;
      </MobileMenuButton>
      <Header />
      <Sidebar mobileOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
