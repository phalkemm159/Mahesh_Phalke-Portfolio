import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/mahesh-phalke159/" },
  { icon: <FaGithub />, path: "https://github.com/phalkemm159" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/mahesh_phalke_159/" },
];

const HeroButtons = () => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* Download Resume Button */}
      
      {/* Social Media Icons */}
      <div className="flex gap-3">
        {socials.map((item, index) => (
          <a
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border border-accent rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-black transition-all duration-300"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default HeroButtons;