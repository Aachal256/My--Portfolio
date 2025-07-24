 
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { pexels } from "../assets/Index.js";

function ContactLeft()  { 
  const gotoX = () => {
    // Redirect to the external page
    window.location.href =  "https://x.com/Aachal_Thaware";// Replace with the desired URL
  };
  const gotoLinkedin = () => {
    // Redirect to the external page
    window.location.href =
       "https://www.linkedin.com/in/aachal-thaware-a05940214 ";
  };
  const github = () => {
    // Redirect to the external page
    window.location.href = "https://github.com/Aachal256 ";
  };

  return (
    <div className=" w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-[160px] object-cover rounded-lg mb-2"
        src={pexels}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Aachal Thaware</h3>
        <p className="text-lg font-normal text-gray-400">
          FRONT-END DEVELOPER
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I love connecting with like-minded developers to share ideas and
          collaborate. Let’s create something extraordinary together—drop me a
          message!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">aachalthaware52@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaGithub onClick={github} />
          </span>
          <span className="bannerIcon">
            <FaTwitter onClick={gotoX} />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn onClick={gotoLinkedin} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;
