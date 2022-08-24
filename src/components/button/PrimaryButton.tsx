import { Button } from "react-bootstrap";
import "./Button.css";

type Props = {
  text: string;
  size?: "lg" | "sm";
  onClick?: () => void;
};
function PrimaryButton({ text, size, onClick }: Props) {
  return (
    <Button onClick={onClick} size={size} className="__PrimaryButton">
      {text}
    </Button>
  );
}

export default PrimaryButton;
