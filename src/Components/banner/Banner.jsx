
import Leftbanner from "./Leftbanner";
import profile_photo from "../../assets/Photos/profile_photo.jpg";

function Banner() {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-10 flex flex-col lgl:flex-row items-center border-b-[1px] border-b-white gap-10 xl:gap-0"
    >
      <Leftbanner />

      <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
        <img
          //className="w-[300px] h-[350px] lgl:w-[400px] lgl:h-[450px] z-10"
          className="w-[350px] h-auto lgl:w-[500px] max-h-[600px] rounded-xl object-cover shadow-lg z-10"
          src={profile_photo}  
          alt="profile_photo"
        />
        <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center rounded-t-full"></div>
      </div>
    </section>
  );
}

export default Banner;
