const Button = ({ children , color, onClick}) => {
    if(!children) return <button>Prázdné tlačítko</button>

    return <button style={{background: color}} onClick={onClick}>{ children }</button>

}
export const greeting = (name) => "Ahoj" + name;
export default Button;