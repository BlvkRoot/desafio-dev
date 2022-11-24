import { Button, Container, Form } from "./styles"
import GlobalStyle from './assets/global'

function App() {
  return (
    <>
     <GlobalStyle/>
      <Container>
        <h1>Bem-Vindo ao CNAB</h1>

        <Form onSubmit={() => {}}>
          <input type="file" accept=".txt"/>

          <Button>
            Enviar
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default App
