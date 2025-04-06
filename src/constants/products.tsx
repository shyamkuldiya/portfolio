import tapdata from "public/images/tapdata.png";
import tradedons from "public/images/tradedons.png";
import tradedons2 from "public/images/tradedons2.png";
import villeos from "public/images/villeos.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";

export const products = [
  {
    href: "https://www.tradedons.com/",
    title: "TradeDons",
    description:
      "Real-Time OI-Data for Analysing F&O segment with a wide range of tools",
    thumbnail: tradedons,
    images: [tradedons, tradedons2],
    stack: ["ReactJS", "Tailwindcss"],
    slug: "tradedons",
    content: (
      <div>
        <p>
          This trading platform is designed to enhance trading strategies for
          Futures & Options. It offers AI-powered tools and real-time open
          interest data, providing detailed insights for better decision-making
          in the market. It emphasizes its user-friendly interface,
          lightning-fast data updates, and comprehensive tutorials, making it
          suitable for both beginners and experienced traders. It provides live
          market news from global and Indian markets, including real-time
          updates on NIFTY, BANKNIFTY, and other indices. It also offers a
          customizable dashboard, allowing users to tailor their market analysis
          and trading experience and is backed by the Trading as Profession
          Academy, providing additional educational resources to enhance trading
          skills. The platform offers a 15-day free trial, allowing users to
          experience its features and capabilities.
        </p>
      </div>
    ),
  },
  {
    href: "https://villeos.com",
    title: "Villeos",
    description:
      "All in one platform for your Real Estate needs from buying to selling to managing your property",
    thumbnail: villeos,
    images: [villeos],
    stack: ["ReactJS", "MUI", "React Router"],
    slug: "algochurn",
    content: (
      <div>
        <p>
          Villeos is a comprehensive real estate platform that simplifies
          property transactions and management. It offers a user-friendly
          interface for buying, selling, and managing properties. The platform
          provides tools for property listings, virtual tours, and secure
          transactions, ensuring a seamless experience for buyers and sellers.
        </p>
      </div>
    ),
  },
];
