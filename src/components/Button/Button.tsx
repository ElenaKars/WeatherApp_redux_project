import { ButtonProps } from "./types";
import { MainButton } from "./styles";

function Button({
  id,
  name,
  type = "button",
  onClick,
  disabled = false
}: ButtonProps) {

  return (
    <MainButton id={id} type={type} onClick={onClick} disabled={disabled}>
      {name}
    </MainButton>
  );
}

//default export must be only one in the file
export default Button;

