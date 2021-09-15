import { BlueBtn } from "./style";

const BlueButton = ({ white = false, text, onClick, type, disabled }) => {
  return (
    <BlueBtn white={white} disabled={disabled} onClick={onClick} type={type}>
      {text}
    </BlueBtn>
  );
};

export default BlueButton;
