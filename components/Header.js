import { Menu, Typography, Button, Drawer } from "antd";
import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useDispatch } from "react-redux";
import { setToken, setUsers } from "../redux/feature/user";
import router from "next/router";
const { SubMenu } = Menu;
const { Text } = Typography;

const AppHeader = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState("mail");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    setVisible({ current: e.key });
  };

  const logoutHandler = () => {
    dispatch(setToken(""));
    dispatch(setUsers([]));
  };

  return (
    <div>
      <div className={styles.miandiv}>
        <Link href="/">
          <p> Arrimo</p>
        </Link>
      </div>
      <>
        <Button
          className={styles.menubtn}
          type="primary"
          shape="circle"
          icon={<MenuOutlined />}
          onClick={handleClick}
        ></Button>
        <Drawer
          title="Arrimo"
          placement="right"
          onClose={() => setVisible(false)}
          visible={visible}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Link href="/users">
              <Button type="text">Users</Button>
            </Link>
            <Link href="/events">
              <Button type="text">events</Button>
            </Link>
          </div>
        </Drawer>
      </>

      <Menu
        className={styles.bigmenu}
        selectedKeys={[current]}
        mode="horizontal"
        overflowedIndicator={<MenuOutlined />}
      >
        <Menu.Item key="users">
          <Link href="/users"> Users </Link>
        </Menu.Item>
        <Menu.Item key="events">
          <Link href="/events"> Events </Link>
        </Menu.Item>
      </Menu>
      <Button
        onClick={logoutHandler}
        style={{ position: "absolute", top: "63px", right: "100px" }}
      >
        Log out
      </Button>
    </div>
  );
};

export default AppHeader;
