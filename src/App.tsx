import { Button } from './components/Button'

function App() {
  const testingVariable = [3]

  return (
    <div>
      <Button text="Botão 1" />
      <Button text="Botão 2" />
      <Button> Clique Aqui </Button>
      <Button text="Botão 3" count={testingVariable} />
      <Button />
    </div>
  );
}

export default App;
