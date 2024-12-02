import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "http://www.github.com/TheRealKwabena" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/kwabena-asare-bostrom/",
  },
  { icon: <FaTwitter />, path: "" },
  { icon: <FaInstagram />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
