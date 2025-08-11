import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightblue;
`;

const ButtonLabel = styled.label`
  font-size: 25px;
  color: white;
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: ${(props) => props.backgroundColor};

  &:hover {
    & label {
      color: green;
    }
  }
`;

const Card = styled.div`
  border: 2px solid #4caf50;
  border-radius: 12px;
  padding: 20px;
  max-width: 400px;
  margin: 20px auto;
  background-color: #f0fff4;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #2e7d32;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Text = styled.p`
  color: #555;
  font-size: 16px;
`;

const CardStyled = () => {
  return (
    <Container>
      <Card>
        <Title>Hello!</Title>
        <Text>This component styled by styled-components.</Text>
        <Button backgroundColor="red">
          <ButtonLabel>Click this Button</ButtonLabel>
        </Button>
        <Button backgroundColor="violet">Click this Button</Button>
      </Card>
    </Container>
  );
};

export default CardStyled;
