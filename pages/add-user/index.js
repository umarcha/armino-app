import React from "react";
import { Form, notification } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setUsers } from "../../redux/feature/user";
import styles from "../../styles/Home.module.css";
import AppHeader from "../../components/Header";
import { useRouter } from "next/router";
import UserForm from "../../components/UserForm";
import withAuth from "../../utilities/withAuth";

const Index = () => {
  const users = useSelector((state) => state?.users);
  const router = useRouter();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const userExists = users?.find((user) => user.values.email === values.email);
    if(userExists){
      notification.open({
        message: "User already exists with this email"
      });
      return;
    }
    dispatch(
      setUsers([
        ...users,
        {
          id: Number((Math.random() * 1000).toFixed(0)),
          values: values,
        },
      ])
    );
    router.push("/users");
  };

  return (
    <div>
      <div className={styles.main}>
        <AppHeader />
        <div
          style={{
            maxWidth: "800px",
            margin: "100px auto",
            boxShadow: "0px 2px 25px rgba(51, 51, 51, 0.1)",
          }}
        >
          <UserForm onFinish={onFinish} btnText="Add User" formTitle="Add User" />
        </div>
      </div>
    </div>
  );
};

export default withAuth(Index);
