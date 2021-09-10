import { BlueBtn } from "./style"

const BlueButton = ({white = false, text, onClick, type}) => {

    return (
        <BlueBtn white={white} onClick={onClick} type={type}>{text}</BlueBtn>
    )
}

export default BlueButton