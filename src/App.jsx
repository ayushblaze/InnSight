import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.main`
  // background-color: red;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="vertical">
          <Row type="horizontal">
            <Heading as="h1">Hello world</Heading>
            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button onClick={() => alert("Check in!")}>Check in</Button>
              <Button variation="secondary" size="small" onClick={() => alert("Check out!")}>Check out</Button>
            </div>
          </Row>

          <Row type="vertical">
            <Heading as="h3">Form</Heading>
            <Input type="number" placeholder="Number of guests" />
            <Input type="number" placeholder="Number of guests" />
          </Row>
        </Row>  
      </StyledApp>
    </>
  );
}

export default App;
