export type ProofCard = {
  id: string;
  image: string;
  alt: string;
  projectType: string;
  metrics: {
    spend: string;
    cpl: string;
    leads: string;
  };
};

export const proofCards: ProofCard[] = [
  {
    id: "plot-1",
    image: "/images/proof-plot-1.png",
    alt: "Plot project Meta Ads Manager results",
    projectType: "Plot Project",
    metrics: { spend: "₹3,44,896", cpl: "₹189.19", leads: "1,823" },
  },
  {
    id: "villa-1",
    image: "/images/proof-villa-1.png",
    alt: "Villa project Meta Ads Manager results",
    projectType: "Villa Project",
    metrics: { spend: "₹3,33,490", cpl: "₹311.09", leads: "1,072" },
  },
  {
    id: "residential-1",
    image: "/images/proof-residential-1.png",
    alt: "Residential project Meta Ads Manager results",
    projectType: "Residential Project",
    metrics: { spend: "₹1,27,689", cpl: "₹392.89", leads: "325" },
  },
  {
    id: "plot-2",
    image: "/images/proof-plot-2.png",
    alt: "Plot project Meta Ads Manager results",
    projectType: "Plot Project",
    metrics: { spend: "₹1,14,055", cpl: "₹261.59", leads: "436" },
  },
  {
    id: "residential-2",
    image: "/images/proof-residential-2.png",
    alt: "Residential project Meta Ads Manager results",
    projectType: "Residential Project",
    metrics: { spend: "₹4,40,624", cpl: "₹449.16", leads: "981" },
  },
  {
    id: "villa-2",
    image: "/images/proof-villa-2.png",
    alt: "Villa project Meta Ads Manager results",
    projectType: "Villa Project",
    metrics: { spend: "₹12,26,120", cpl: "₹486.36", leads: "2,521" },
  },
  {
    id: "villa-3",
    image: "/images/proof-villa-3.png",
    alt: "Villa project Meta Ads Manager results",
    projectType: "Villa Project",
    metrics: { spend: "₹88,568", cpl: "₹288.50", leads: "307" },
  },
  {
    id: "villa-4",
    image: "/images/proof-villa-4.png",
    alt: "Villa project Meta Ads Manager results",
    projectType: "Villa Project",
    metrics: { spend: "₹66,230", cpl: "₹242.60", leads: "273" },
  },
];

export const proofHeadline = "8 Campaigns, ₹27L+ Ad Spend Managed";
