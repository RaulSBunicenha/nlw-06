type ButtonProps = {
  children?: string,
  text?: string,
  count?: Array<number>
}


export function Button (props: ButtonProps) {
  return (
    <div>
      <button>{ props.children || props.text || 'Botão Aleatório' }</button>
      <br />
    </div>
  )
}