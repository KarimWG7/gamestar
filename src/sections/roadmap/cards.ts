export interface Card {
  title: string;
  color: string;
  content: {
    element: string;
    description?: string;
  }[];
  arrows?: {
    horizontal?: boolean;
    curvedDownLeft?: boolean;
  };
}

export const cards: Card[] = [
  {
    title: "Q4 2021",
    color: "#51a2ff",
    content: [{ element: "G-Agency" }],
    arrows: { horizontal: true },
  },
  {
    title: "Q2 2022",
    color: "#51a2ff",
    content: [{ element: "G-TEAM + Advisors" }],
    arrows: { horizontal: true },
  },
  {
    title: "Q3 2022",
    color: "#51a2ff",
    content: [
      { element: "Incubation" },
      { element: "G-PAD (LauncPad + StakePad)" },
    ],
    arrows: { curvedDownLeft: true },
  },
  {
    title: "Q1 2023",
    color: "#00c950",
    content: [
      {
        element: "Marketplace",
        description: "One-click Minting for Game Developers",
      },
      {
        element: "GAMESTA Guild",
        description: "Matching Investor with Players P2E / E2B / L2B",
      },
      {
        element: "Game Hub",
        description:
          "Games & NFT data, Business Intelligence for Investors and Players",
      },
    ],
    arrows: { horizontal: true },
  },
  {
    title: "Q2 2023",
    color: "#5d0ec0",
    content: [
      {
        element: "Guild Management (Pro)",
        description: "with Big Data + AI Matching",
      },
      {
        element: "Player F2Own(Free to Own",
        description: "NFT lottery + other models for NFT maximisation",
      },
      {
        element: "G-Community",
      },
    ],
    arrows: { horizontal: true },
  },
  {
    title: "Q3 2023",
    color: "#ff8904",
    content: [
      {
        element: "Gaming SDK",
      },
      {
        element: "Gaming API (Ecosystem) ",
      },
      {
        element: "Smart NFTs",
      },
    ],
    arrows: { curvedDownLeft: true },
  },
  {
    title: "Q4 2023",
    color: "#00c950",
    content: [
      {
        element: "Gaming SDK",
        description: "Enhanced Minting & Templating",
      },
      {
        element: "AI (Plug & Play)",
        description: "with higher TPS",
      },
      {
        element: "GTF (GAMESTA Trading Fund)",
        description: "AI-based Trading",
      },
    ],
    arrows: { horizontal: true },
  },
  {
    title: "Q1 2024",
    color: "#c800de",
    content: [
      {
        element: "Chromium Launch",
        description: "Launch with multiple models + multichains",
      },
      {
        element: "Gaming Insights",
        description: "for Game Developers",
      },
      {
        element: "Predictive analysis ",
        description: "for Gaming NFTs",
      },
    ],
    arrows: { horizontal: true },
  },
  {
    title: "Q2 2024",
    color: "#51a2ff",
    content: [
      {
        element: "Gaming Onchain (Plug & Play) + DAO ",
        description: "2024/25",
      },
      {
        element: "MetaVerse SDK/API",
        description: "plus eCasinos in Metaverse",
      },
    ],
  },
];
