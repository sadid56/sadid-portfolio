/* eslint-disable react-hooks/exhaustive-deps */

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import SkillsItems from "../../shared/SkillsItems/SkillsItems";
import { useEffect, useState } from "react";
import "./skills.css"
import { useAnimation , motion} from "framer-motion";
import { useInView } from "react-intersection-observer";
import useMotionAnimate from "../../../hooks/useMotionAnimate";

const SkillsTabs = () => {
  const [currentTab, setCurrentTab] = useState("Expertise");
  const control = useAnimation();
  const [ref, inView] = useInView();
  const [upAnimate] = useMotionAnimate();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  const { data: skills = [] } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      const res = await axios.get("/skills.json");
      return res.data;
    },
  });

  const tabsArray = ["Expertise", "Comfortable", "Familiar", "Tools"];

  const FrontEndData = skills.filter(
    (frontEnd) => frontEnd?.category === "Expertise"
  );
  const BackendData = skills.filter(
    (Backend) => Backend?.category === "Comfortable"
  );
  const ExpertsData = skills.filter(
    (Experts) => Experts?.category === "Familiar"
  );
  const OthersData = skills.filter((other) => other?.category === "Tools");

  return (
    <div ref={ref}>
      <Tabs>
        <motion.div
        variants={upAnimate}
        initial="hidden"
        animate={control}>
        <TabList className={"flex flex-wrap justify-center gap-5 outline-none"}>
          {tabsArray.map((tabArray) => (
            <Tab
              onClick={() => setCurrentTab(tabArray)}
              className={`tab-btn ${
                currentTab === tabArray
                  ? "tab-active"
                  : undefined
              }`}
              key={tabArray}>
              {tabArray}
            </Tab>
          ))}
        </TabList>
        </motion.div>

        <TabPanel>
          <SkillsItems skills={FrontEndData} />
        </TabPanel>

        <TabPanel>
          <SkillsItems skills={BackendData} />
        </TabPanel>

        <TabPanel>
          <SkillsItems skills={ExpertsData} />
        </TabPanel>
        <TabPanel>
          <SkillsItems skills={OthersData} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SkillsTabs;
