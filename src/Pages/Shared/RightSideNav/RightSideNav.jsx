import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-xl text-center font-bold">Login With</h2>
        <button className="btn btn-outline btn-primary w-full">
          <FaGoogle /> Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub /> Login with Github
        </button>
      </div>
      <div className="p-4 mb-6">
        <h2 className="text-xl mb-2 text-center font-bold">Find Us On</h2>
        <a
          className="flex items-center border rounded-t-lg p-4 text-lg"
          href=""
        >
          <FaFacebook className="mr-2 text-blue-500" />
          Facebook
        </a>
        <a className="flex items-center border-x p-4 text-lg" href="">
          <FaTwitter className="mr-2 text-blue-500" />
          Twitter
        </a>
        <a
          className="flex items-center border rounded-b-lg p-4 text-lg"
          href=""
        >
          <FaInstagram className="mr-2 text-orange-700" />
          Instagram
        </a>
      </div>
      <div>
        <div className="p-4 space-y-3 mb-6 bg-slate-100">
          <h2 className="text-xl text-center font-bold">Q-zone</h2>
          <img src={qZone1} alt=""></img>
          <img src={qZone2} alt=""></img>
          <img src={qZone3} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
