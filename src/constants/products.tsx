import tradedons from "public/images/tradedons.png";
import tradedons2 from "public/images/tradedons2.png";
import villeos from "public/images/villeos.png";
import tdf2 from "public/images/tdfx2.png";
import tdfx from "public/images/tdfx.png";
import wixEcom3 from "public/images/wix-com3.png";
import wixEcom2 from "public/images/wix-ecom2.png";
import wixEcom from "public/images/wix-ecom.png";

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
    slug: "villeos",
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
  {
    href: "https://www.tdfx.exchange/",
    title: "TDFX Exchange",
    description:
      "An open community trading platform Traders and investors from all over the world can publish trading strategies and share their experiences and ideas in real",
    thumbnail: tdfx,
    images: [tdfx, tdf2],
    stack: ["ReactJS", "Tailwindcss"],
    slug: "tdfx",
    content: (
      <div>
        <p>
          TDFX is a NO-DEALING DESK (NDD) that tansmits client on central
          clearing markets, who automated matching system instantly reconcile
          trades to ensure that each client order is executed faitly without any
          conflict of interest
        </p>
      </div>
    ),
  },
  {
    href: "https://nextjs-wix-ecom.vercel.app/",
    title: "NextJS + WIX Headless Store",
    description:
      "A headless e-commerce store built with Next.js and WIX, showcasing the power of modern web development.",
    thumbnail: wixEcom3,
    images: [wixEcom3, wixEcom, wixEcom2],
    stack: ["NextJS", "Tailwindcss", "WIX Headless"],
    slug: "wix-ecom",
    content: (
      <div>
        <p>
          This project demonstrates the integration of Next.js with WIX's
          headless e-commerce capabilities. It showcases how to build a
          responsive and dynamic online store using modern web technologies. The
          project emphasizes the flexibility and scalability of headless
          commerce, allowing for a seamless shopping experience across devices.
        </p>
      </div>
    ),
  },
];
