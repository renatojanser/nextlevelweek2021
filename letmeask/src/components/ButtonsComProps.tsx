type ButtonProps = {
    text?: string
}

export function ButtonComProps(props: ButtonProps){
    return (
        <button>{props.text || 'Clique aqui'}</button>
    )
}