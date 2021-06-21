import { Button } from './components/Button'

function App() {
  return (
    <div>
      <Button counter={0} />
      <Button counter={0} />
      <Button>0</Button>
      <Button counter={0} incrementAmount={2} />
      <Button />
    </div>
  );
}

export default App;
