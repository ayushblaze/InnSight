import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";
import PropTypes from "prop-types";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;

  @media (max-width: 700px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 80vw;
    max-width: 28rem;
    z-index: 1002;
    box-shadow: 2px 0 12px rgba(0,0,0,0.15);
    transform: translateX(${props => props.mobileOpen ? '0' : '-100%'});
    transition: transform 0.3s;
    border-right: none;
    border-radius: 0 1rem 1rem 0;
  }
`;

const Overlay = styled.div`
  display: none;
  @media (max-width: 700px) {
    display: ${props => props.mobileOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.2);
    z-index: 1001;
  }
`;

const CloseButton = styled.button`
  display: none;
  @media (max-width: 700px) {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: var(--color-brand-600);
    color: white;
    border: none;
    border-radius: 50%;
    width: 2.8rem;
    height: 2.8rem;
    font-size: 1.6rem;
    z-index: 1003;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.4rem;
`;

function Sidebar({ mobileOpen, onClose }) {
  return (
    <>
      <Overlay mobileOpen={mobileOpen} onClick={onClose} />
      <StyledSidebar mobileOpen={mobileOpen}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <MainNav />
        {/* <Uploader /> */}
      </StyledSidebar>
    </>
  );
}

Sidebar.propTypes = {
  mobileOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

Sidebar.defaultProps = {
  mobileOpen: false,
  onClose: () => {},
};

export default Sidebar;