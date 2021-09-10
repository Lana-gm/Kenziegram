import { BlueBtn } from "./style"

const BlueButton = ({white = false, text, onClick}) => {

    return (
        <BlueBtn white={white} onClick={onClick}>{text}</BlueBtn>
    )
}

export default BlueButton