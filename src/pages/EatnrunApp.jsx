import React, { useEffect } from "react";
import EatnrunOverview from "../components/EatnrunOverview";

const EatnrunApp = () => {
  useEffect(() => {
    document.title = "Eat 'N Run App";

    const link = document.createElement("link");
    link.rel = "icon";
    link.href = "/images/portfolioLogo.png";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return <EatnrunOverview />;
};

export default EatnrunApp;
