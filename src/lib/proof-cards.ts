export type ProofMetrics = {
  spend: string;
  cpl: string;
  leads: string;
};

export type ProofCard = {
  id: string;
  image: string;
  alt: string;
  pill: string;
  projectType: string;
  metrics: ProofMetrics | null;
  caption?: string;
};

const DASHBOARD_PILL = "Meta Ads Manager - Live Data";
const SUMMARY_PILL = "Campaign Summary";
const CHAT_PILL = "Client WhatsApp";

export const proofCards: ProofCard[] = [
  {
    id: "plot-1",
    image: "/images/proof-plot-1.png",
    alt: "Plot project Meta Ads Manager results",
    pill: DASHBOARD_PILL,
    projectType: "Plot Project",
    metrics: { spend: "₹3,44,896", cpl: "₹189.19", leads: "1,823" },
  },
  {
    id: "villa-1",
    image: "/images/proof-villa-1.png",
    alt: "Villa project Meta Ads Manager results",
    pill: DASHBOARD_PILL,
    projectType: "Villa Project",
    metrics: { spend: "₹3,33,490", cpl: "₹311.09", leads: "1,072" },
  },
  {
    id: "residential-1",
    image: "/images/proof-residential-1.png",
    alt: "Residential project Meta Ads Manager results",
    pill: DASHBOARD_PILL,
    projectType: "Residential Project",
    metrics: { spend: "₹1,27,689", cpl: "₹392.89", leads: "325" },
  },
  {
    id: "plot-2",
    image: "/images/proof-plot-2.png",
    alt: "Plot project Meta Ads Manager results",
    pill: DASHBOARD_PILL,
    projectType: "Plot Project",
    metrics: { spend: "₹1,14,055", cpl: "₹261.59", leads: "436" },
  },
  {
    id: "residential-2",
    image: "/images/proof-residential-2.png",
    alt: "Residential project Meta Ads Manager results",
    pill: DASHBOARD_PILL,
    projectType: "Residential Project",
    metrics: { spend: "₹4,40,624", cpl: "₹449.16", leads: "981" },
  },
  {
    id: "villa-2",
    image: "/images/proof-villa-2.png",
    alt: "Villa project Meta Ads Manager results",
    pill: DASHBOARD_PILL,
    projectType: "Villa Project",
    metrics: { spend: "₹12,26,120", cpl: "₹486.36", leads: "2,521" },
  },
  {
    id: "villa-3",
    image: "/images/proof-villa-3.png",
    alt: "Villa project Meta Ads Manager results",
    pill: DASHBOARD_PILL,
    projectType: "Villa Project",
    metrics: { spend: "₹88,568", cpl: "₹288.50", leads: "307" },
  },
  {
    id: "villa-4",
    image: "/images/proof-villa-4.png",
    alt: "Villa project Meta Ads Manager results",
    pill: DASHBOARD_PILL,
    projectType: "Villa Project",
    metrics: { spend: "₹66,230", cpl: "₹242.60", leads: "273" },
  },
  {
    id: "case-study-1",
    image: "/images/case-study-1.png",
    alt: "Residential plots campaign summary with Meta Ads data",
    pill: SUMMARY_PILL,
    projectType: "Residential Plots",
    metrics: { spend: "₹29,20,026", cpl: "-", leads: "10,000+" },
  },
  {
    id: "case-study-2",
    image: "/images/case-study-2.png",
    alt: "Residential apartment campaign summary with Meta Ads data",
    pill: SUMMARY_PILL,
    projectType: "Residential Apartment",
    metrics: { spend: "₹9,33,543", cpl: "-", leads: "6,700+" },
  },
  {
    id: "whatsapp-1",
    image: "/images/social-proof.jpg",
    alt: "WhatsApp conversation with a client about lead volume and site visits",
    pill: CHAT_PILL,
    projectType: "WhatsApp Inquiries",
    metrics: null,
    caption: "Client check-in on lead volume and site visits.",
  },
  {
    id: "whatsapp-2",
    image: "/images/client-communication.jpg",
    alt: "WhatsApp conversation with a client about leads and site visits, personal details hidden",
    pill: CHAT_PILL,
    projectType: "WhatsApp Inquiries",
    metrics: null,
    caption: "Lead flow and site visit updates shared with the client.",
  },
];

export const proofHeadline = "8 Campaigns, ₹27L+ Ad Spend Managed";
