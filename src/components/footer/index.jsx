import { ReactComponent as StarWarsLogoSVG } from "../../assets/star-wars.svg";
import { ReactComponent as FacebookLogoSVG } from "../../assets/facebook.svg";
import { ReactComponent as InstagramLogoSVG } from "../../assets/instagram.svg";
import { ReactComponent as TwitterLogoSVG } from "../../assets/twitter.svg";
import { ReactComponent as YoutubeLogoSVG } from "../../assets/youtube.svg";

//массив данных ссылок
const swLinks = [
  {
    url: "https://www.youtube.com/watch?v=R_b2z_R5vR4",
    name: "facebook_logo",
    component: <FacebookLogoSVG />,
  },
  {
    url: "https://www.youtube.com/watch?v=R_b2z_R5vR4",
    name: "instagram_logo",
    component: <InstagramLogoSVG />,
  },
  {
    url: "https://www.youtube.com/watch?v=R_b2z_R5vR4",
    name: "twitter_logo",
    component: <TwitterLogoSVG />,
  },
  {
    url: "https://www.youtube.com/watch?v=R_b2z_R5vR4",
    name: "youtube_logo",
    component: <YoutubeLogoSVG />,
  },
];

export const Footer = ({})=> {
    return (
        <footer>
            <div className="links-laydown">
        {swLinks.map((link) => (
          <a
            key={link.name}
            className="link"
            href={link.url}
            target="_blank"
            alt={link.name}
            rel="noreferrer"
          >
            {link.component}
          </a>
        ))}
      </div>
      <div className="logo-down">
        <StarWarsLogoSVG />
      </div>
      <div className="text-laydown">
        <h3>
           TM & © Lucasfilm Ltd. All Rights Reserved 
        </h3>
      </div>
        </footer>
    );
};