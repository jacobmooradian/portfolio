export type VideoCover = {
    kind: "video";
    poster: string;
    mp4: string;
    webm?: string;
  };
  
  export type ImageCover = {
    kind: "image";
    src: string;
    alt: string;
    bg?: string;
  };
  
  export type Project = {
    slug: string;
    title: string;
    summary: string;
    tags?: string[];
    cover: VideoCover | ImageCover;
  };
  
  export const projects: Project[] = [
    {
      slug: "fire-weather-dashboard",
      title: "Fire Weather Dashboard",
      summary: "Rebuilt and redesigned a real-time dashboard for exploring fire-weather data.",
      tags: ["Product UX", "Maps", "Data Viz"],
      cover: {
        kind: "video",
        poster: "/images/fire-dashboard-poster.jpg",
        mp4: "/videos/fire-dashboard.mp4",
        webm: "/videos/fire-dashboard.webm",
      },
    },
    {
      slug: "bestday2marry",
      title: "BestDay2Marry",
      summary: "Platform delivering year-ahead weather insights for weddings and events.",
      tags: ["Consumer", "Forecasting"],
      cover: {
        kind: "image",
        src: "/images/bd2m_logo12.png",
        alt: "BestDay2Marry Logo",
        bg: "bg-neutral-100",
      },
    },
    {
      slug: "climformatics-website",
      title: "Climformatics — Company Website",
      summary: "Redesigned and optimized the company site for a modern, cohesive brand.",
      tags: ["Design", "Next.js"],
      cover: {
        kind: "image",
        src: "/images/climformatics_inc_logo.jpeg",
        alt: "Climformatics logo",
        bg: "bg-white",
      },
    },
  ];