import { Button } from "react-bootstrap";
import "./Button.css";

type Props = {
  text: string;
  size?: "lg" | "sm";
};
function PrimaryButton({ text, size }: Props) {
  return (
    <Button size={size} className="__PrimaryButton">
      {text}
    </Button>
  );
}

export default PrimaryButton;
