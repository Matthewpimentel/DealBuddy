import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://github.com/Matthewpimentel?tab=repositories">
        <AiFillGithub size={50} target="_blank"/>
      </a>
      <a href="https://www.linkedin.com/in/matthew-pimentel-3182551bb/">
        <AiOutlineLinkedin size={50} target="_blank"/>
      </a>
    </div>
  );
};

export default Footer;
