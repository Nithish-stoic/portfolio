export type Project = {
    title: string;
    subtitle: string;
    heroImage: string;
    category: "UI/UX" | "REACT.JS";
    storyLines: string[];
    dayOneLines: string[];
    liveLink?: string;
};

export const projects: Record<string, Project> = {
    "brand-journey": {
        title: "Analytics Dashboard Design",
        subtitle: "Strategic Brand Elevation",
        heroImage: "/Dashboard.png",
        category: "UI/UX",
        storyLines: [
            "This Analytics Dashboard is designed to transform complex data into actionable insights area. The dark-themed interface minimizes eye strain while ensuring that colorful data visualizations pop, allowing stakeholders to instantly gauge performance metrics.",
            "We focused on creating a hierarchy of information, placing critical user engagement stats and activity graphs at the forefront, ensuring decision-makers have immediate access to the pulse of their platform.",
        ],
        dayOneLines: [
            "The challenge was dealing with information overload. We started by auditing the existing data points and categorizing them by priority. The goal was clarity without compromise.",
            "We adopted a modular grid system that allows for scalable widgets. The dark color palette was chosen not just for aesthetics, but to let the data tell the story without distraction.",
        ],
        liveLink: "https://www.figma.com/design/gxYVvoIsB0B26f9oFCrHT0/Analytics-Dashboard-Design?node-id=5-2&t=Ev8p1z1AssdenvuM-0",
    },
    "pay-wallet": {
        title: "Pay Wallet App",
        subtitle: "Fintech & Digital Payments",
        heroImage: "/paywallet.jpeg",
        category: "UI/UX",
        storyLines: [
            "The Pay Wallet App redefines the digital transaction experience with a sleek, monochromatic dark mode design. It focuses on trust and speed, offering users a seamless way to manage cards, track expenses, and transfer money.",
            "The interface features smooth gradients and depth to highlight active cards and transaction flows. Every interaction is designed to feel secure yet effortless, turning mundane financial tasks into a premium experience.",
        ],
        dayOneLines: [
            "Digital wallets often feel cluttered. Our Day One goal was to strip away the noise. We prioritized the 'Payment' and 'Transfer' actions, ensuring they are always within thumb's reach.",
            "We experimented with various contrast levels to ensure readability. The final dark aesthetic conveys sophistication and security, essential attributes for a modern fintech product.",
        ],
        liveLink: "https://www.figma.com/design/FSE9bz6w52tKUvoJcStC7n/Pay-Wallet-App?node-id=0-1&p=f&t=Ev8p1z1AssdenvuM-0",
    },
    "electronics-ecommerce": {
        title: "Electronics Ecommerce",
        subtitle: "Online Retail Platform",
        heroImage: "/Electronics.jpeg",
        category: "REACT.JS",
        storyLines: [
            "This Electronics Ecommerce platform is built on the philosophy of 'less is more'. The minimalist, light-themed interface is designed to let the high-quality product imagery take center stage, stripping away unnecessary visual noise.",
            "We utilized soft shadows, rounded corners, and ample whitespace to create a modern, airy aesthetic. The goal was to replicate the feeling of walking into a high-end tech showroom—clean, organized, and premium.",
        ],
        dayOneLines: [
            "Tech products can look overwhelming. Our Day One goal was simplification. We wanted a layout where users could appreciate the sleek design of the gadgets without being bombarded by cluttered specifications.",
            "We chose a monochromatic light palette to evoke cleanliness and sophistication. This 'invisible design' approach ensures that the user's focus remains entirely on the product features and the purchase journey.",
        ],
        liveLink: "https://electronics-ecommers.vercel.app/",
    },
    "grocery": {
        title: "Grocery Website",
        subtitle: "E-Commerce & Delivery",
        heroImage: "/grocery.jpeg",
        category: "REACT.JS",
        storyLines: [
            "This Grocery Website concept merges the efficiency of digital shopping with a bold, modern aesthetic. Moving away from traditional colorful supermarket interfaces, we adopted a sophisticated monochrome palette that lets the typography and composition shine.",
            "The layout features a prominent, user-centric search experience. High-contrast visuals and clean lines create a sense of order, acknowledging that clarity and speed are the primary drivers for online grocery shoppers.",
        ],
        dayOneLines: [
            "Grocery shopping is routine, so the experience needs to be seamless. We analyzed the friction points of clutter and simplified the interface to its absolute essentials.",
            "We decided on a greyscale theme to differentiate from competitors, using bold typography to guide the user's eye. The result is a platform that feels premium, professional, and incredibly easy to navigate.",
        ],
        liveLink: "https://grocery-ten-phi.vercel.app/",
    },
};
