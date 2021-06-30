import { useState } from 'react'

type ButtonProps = {
  children?: string,
  counter?: number,
  incrementAmount?: number
}


export function Button (props: ButtonProps) {
  const incrementAmount = props.incrementAmount || 1
  const [ counter, setCounter ] = useState(Number(props.children) || props.counter || 0)

  function increment () {
    const newCounterValue = counter + incrementAmount
    setCounter(newCounterValue)
  }

  return (
    <div>
      <button onClick={increment}>
        Botão de Increment por ({incrementAmount}) - Value = {counter}
        </button>
      <br />
    </div>
  )
}
