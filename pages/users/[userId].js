import React from "react";
import { Form } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../redux/feature/user";
import styles from "../../styles/Home.module.css";
import AppHeader from "../../components/Header";
import { useRouter } from "next/router";
import UserForm from "../../components/UserForm";
import withAuth from "../../utilities/withAuth";

const Index = () => {
  const users = useSelector((state) => state?.users);
  const router = useRouter();
  const getId = router.query.userId;

  const user = users?.find((item) => {
    return item.id == getId;
  });

  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    dispatch(updateUser({ id: user.id, values: values }));
    form.resetFields();
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
          <UserForm onFinish={onFinish} btnText="Update" formTitle="Edit User" user={user} />
        </div>
      </div>
    </div>
  );
};

export default withAuth(Index);
