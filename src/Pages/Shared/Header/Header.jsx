import logo from "../../../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className="text-center">
      <img className="mx-auto m-5" src={logo} alt=""></img>
      <p>Journalism Without Fear or Favour</p>
      <p className="m-3">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
