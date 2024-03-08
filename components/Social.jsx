import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiDribbble,
  FiLinkedin,
} from "react-icons/fi";

const SocialShare = [
  {
    iconName: <FiFacebook />,
    link: "https://www.facebook.com/Masahiro0506",
  },
  // { iconName: <FiTwitter />, link: "https://twitter.com/" },
  {
    iconName: <FiInstagram />,
    link: "https://www.instagram.com/g.tsaxiur/?fbclid=IwAR3s6QXbWSmaEh-OZrIxvO-tB0jE17eq65ER4Nk5oeNcodCdc96fzl0SzTU",
  },
  // { iconName: <FiDribbble />, link: "https://dribbble.com/" },
  // {
  //   iconName: <FiLinkedin />,
  //   link: "https://www.linkedin.com/feed/",
  // },
];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
