import PlayToEarnHeader from "./Header";
import empowerment from "@/assets/play2earn/empowerment.png";
import scholarships from "@/assets/play2earn/scholarships.png";
import token from "@/assets/play2earn/token.png";
import nfts from "@/assets/play2earn/nft's.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const imageContainerStye =
  "h-12 bg-primary-light center-elements shadow-xl rounded-xl aspect-square";

const titleStyle = "text-primary text-2xl font-machina font-bold mb-2";

const PlayToEarn = () => {
  useGSAP(() => {
    gsap.from(".from-left", {
      scrollTrigger: {
        trigger: ".from-left",
        toggleActions: "restart complete none complete",
      },
      translateX: "-10px",
      opacity: 0,
      stagger: 0.2,
    });
    gsap.from(".from-right", {
      scrollTrigger: {
        trigger: ".from-left",
        toggleActions: "restart complete none complete",
      },
      translateX: "10px",
      opacity: 0,
      delay: 0.2,
      stagger: 0.2,
    });
  }, {});

  return (
    <section className="py-30 relative ">
      <div className="bg-blue-200/20 w-full h-[105%] absolute -top-30 right-0 -z-100 -skew-y-10 md:-skew-y-3 " />
      <div className="container mx-auto px-3">
        <PlayToEarnHeader />
        <div className="mt-10 cards grid grid-cols-1 lg:grid-cols-2 gap-15 max-w-7xl mx-auto text-foreground">
          <div className="flex justify-center gap-6 w-fit p-4 justify-self-end from-left">
            <div className={imageContainerStye}>
              <img src={empowerment} className="" />
            </div>
            <div className="">
              <h4 className={titleStyle}>NFT’s</h4>
              <div>
                <p className=" text-sm max-w-sm">
                  In-game asset ownership through the use of NFT’s provides
                  additional value to the players when the asset is used in the
                  game.
                </p>
                <p className="mt-4 text-sm max-w-sm">
                  As they increase the XP of an asset, its value increases,
                  meaning players are incentivized to spend time in the game,
                  cashing out by selling their assets whenever they wish.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-6 w-fit p-4 from-right">
            <div className={imageContainerStye}>
              <img src={token} className="" />
            </div>
            <div className="">
              <h4 className={titleStyle}>Token Dynamics</h4>
              <div>
                <p className=" text-sm max-w-sm">
                  The play 2 earn model enables game developers to create value
                  in unique tokens associated with the game.
                </p>
                <p className="mt-4 text-sm max-w-sm">
                  These tokens provide utility, and therefore value to the
                  players that earn them.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-6 w-fit p-4 justify-self-end from-left">
            <div className={imageContainerStye}>
              <img src={nfts} className="" />
            </div>
            <div className="">
              <h4 className={titleStyle}>Empowerment</h4>
              <div>
                <p className=" text-sm max-w-sm">
                  Play 2 Earn is revolutionary as it debases the value of a
                  player's time regardless of their means, wealth and location.
                  All players are equal.
                </p>
                <p className="mt-4 text-sm max-w-sm">
                  That means players from under-privileged countries such as
                  Vietnam, Philippines, & Thailand can make relatively high full
                  time incomes from playing the games.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-6 w-fit p-4 from-right">
            <div className={imageContainerStye}>
              <img src={scholarships} className="" />
            </div>
            <div className="">
              <h4 className={titleStyle}>Scholarships</h4>
              <div>
                <p className=" text-sm max-w-sm">
                  Due to the play 2 earn models’ effectiveness, NFT values are
                  high, meaning barriers of entry exist for those with no
                  capital.
                </p>
                <p className="mt-4 text-sm max-w-sm">
                  Scholarships such as Gamesta’s enable the distribution of
                  these assets to players that can use them in game in exchange
                  for a profit sharing model.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayToEarn;
