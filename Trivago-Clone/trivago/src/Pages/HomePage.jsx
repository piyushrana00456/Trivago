import React from "react";
import { Slider } from "../Components/Slider/Slider";
import Footer from "../Components/Footer/Footer";
import { RecentActivity } from "../Components/Recent/RecentActivity";
export const HomePage = () => {
  return (
    <div>
      <RecentActivity />
      <Slider />
      <Footer />
    </div>
  );
};
