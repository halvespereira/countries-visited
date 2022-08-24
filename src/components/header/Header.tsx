import PrimaryButton from "../button/PrimaryButton";
import "./Header.css";

function BasicExample() {
  return (
    <div className="__Header">
      <div className="__HeaderTitle">Countries Visited</div>
      <div className="__HeaderButtons">
        {/* <Button>Sign in / Sign up</Button> */}
        <PrimaryButton text="SIGN OUT" />
      </div>
    </div>
  );
}

export default BasicExample;
