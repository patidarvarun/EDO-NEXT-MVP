import Sidebar from "@/components/Sidebar";
import styles from "../../styles/dashboard.module.css";
import React from "react";

function Dashboard() {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className={`bg-white ml-8 w-full mt-1 rounded-t rounded-b ${styles.min_content_height} ${styles.max_width}`}></div>
    </div>
  );
}

export default Dashboard;
