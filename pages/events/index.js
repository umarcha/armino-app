import React from "react";
import AppHeader from "../../components/Header";
import Calendar from "../../components/calendar";
import styles from "../../styles/Home.module.css";
import withAuth from "../../utilities/withAuth";

const Index = () => {
  return (
    <div className={styles.main}>
      <AppHeader />
      <div
        style={{
          margin: "50px 300px",
          textAlign: "center",
        }}
      >
        <h1>Event Page</h1>
        <div style={{ maxWidth: "1500px", maxHeight: "400px" }}>
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default withAuth(Index);
