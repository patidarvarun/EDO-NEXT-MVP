import { tabs } from "@/utils/staticContent";
import LadderTabs from "./tabs/LadderTabs";

const Ladder = () => {
  return (
    <>
      <div className="bg-backgroundColor rounded-b-lg shadow-lg">
        <LadderTabs tabs={tabs} />
      </div>
      <div></div>
    </>
  );
};

export default Ladder;
