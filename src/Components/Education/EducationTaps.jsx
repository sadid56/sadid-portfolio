import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useEffect } from "react";
import EducationTabContent from "./EducationContent";
import useMotionAnimate from "../../hooks/useMotionAnimate";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
const EducationTabs = () => {
  const [currentTab, setCurrentTab] = useState("HSC");
  const control = useAnimation();
  const [ref, inView] = useInView();
  const [downAnimate] = useMotionAnimate();
  const { data: educations = [] } = useQuery({
    queryKey: ["education"],
    queryFn: async () => {
      const res = await axios.get("/education.json");
      return res.data;
    },
  });
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  const tabsArray = ["HSC", "SSC"];
  const hscData = educations.filter((education) => education?.category === "HSC");
  const sscData = educations.filter((education) => education?.category === "SSC");
  return (
    <div className="md:w-1/2 relative">
      <Tabs>
      <motion.div ref={ref}
            variants={downAnimate}
            initial="hidden"
            animate={control}>
      <TabList  className={"flex flex-wrap justify-center gap-5 outline-none"}>
          {tabsArray.map((tabArray) => (
            <Tab
              onClick={() => setCurrentTab(tabArray)}
              className={`outline-none cursor-pointer font-semibold text-gray-300 bg-[#092152] px-4 py-2 rounded-md ${
                currentTab === tabArray
                  ? "border-b-2 border-[#03e9f4]"
                  : undefined
              }`}
              key={tabArray}>
              {tabArray}
            </Tab>
          ))}
        </TabList>
      </motion.div>
        <TabPanel  >
          <EducationTabContent educations={hscData} />
        </TabPanel>
        <TabPanel>
          <EducationTabContent educations={sscData} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default EducationTabs;
