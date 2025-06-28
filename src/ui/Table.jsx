import { createContext, useContext } from "react";
import styled from "styled-components";

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
  
  /* Responsive: allow horizontal scroll on small screens */
  width: 100%;
  overflow-x: auto;
  
  @media (max-width: 700px) {
    font-size: 1.2rem;
    min-width: 500px;
  }
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
  
  /* Responsive: reduce gap and allow wrapping */
  @media (max-width: 700px) {
    column-gap: 1.2rem;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
  }

  & > div, & > span, & > p {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    @media (max-width: 700px) {
      font-size: 1.1rem;
    }
  }

  /* Allow first column to wrap (for cabin names) */
  & > div:first-child {
    overflow: visible;
    text-overflow: unset;
    white-space: normal;
    word-break: break-word;
  }
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

const ScrollContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 0.5rem;
  position: relative;

  /* Show a subtle right shadow/gradient on mobile to indicate scrollability */
  @media (max-width: 700px) {
    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 2.4rem;
      height: 100%;
      pointer-events: none;
      background: linear-gradient(to left, var(--color-grey-0) 60%, transparent 100%);
      z-index: 1;
    }
  }
`;

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <ScrollContainer>
      <StyledTable role="table">{children}</StyledTable>
      </ScrollContainer>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledHeader role="row" columns={columns} as="header">
      {children}
    </StyledHeader>
  );
}

function Row({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledRow role="row" columns={columns}>
      {children}
    </StyledRow>
  );
}

function Body({ data, render }) {
  if (!data.length) return <Empty>No data to show at the moment</Empty>;
  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
