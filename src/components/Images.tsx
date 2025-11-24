import youtube from "@/assets/logos/youtube.png";
import twitter from "@/assets/logos/twitter.png";
import telegram from "@/assets/logos/telegram.png";
import laptop from "@/assets/laptop.png";

export const Youtube = () => {
  return <img src={youtube} alt="" className="size-5" />;
};
export const Twitter = () => {
  return <img src={twitter} alt="" className="size-5" />;
};
export const Telegram = () => {
  return <img src={telegram} alt="" className="size-5" />;
};

export const Laptop = ({ className }: { className?: string }) => {
  return <img src={laptop} alt="" className={className} />;
};
