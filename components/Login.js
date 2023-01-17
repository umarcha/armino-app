import { Button, Form, Input, notification } from "antd";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../redux/feature/user";

const LoginForm = () => {
  const users = useSelector((state) => state?.users);
  const dispatch = useDispatch();
  const router = useRouter();

  const onFinish = (values) => {
    const isUserExists = users?.find((user) => user.values.email === values.email);
    if(!isUserExists){
      notification.open({
        message: "User doesn't exist with this email",
      });
      return;
    }
    if(isUserExists.values.password !== values.password){
      notification.open({
        message: "Invalid Password",
      });
      return;
    }
    dispatch(setToken(`${values.email}${values.password}`));
    // router.push("/users");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "20px auto",
        boxShadow: "0px 2px 25px rgba(51, 51, 51, 0.1)",
      }}
    >
      <h2 style={{ paddingTop: "40px", textAlign: "center" }}>
        Sign in
      </h2>
      <Form
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{ padding: "50px 40px 25px 40px" }}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              message: "The Email is not valid E-mail!",
            },
            {
              required: true,
              message: "Please Enter your E-mail!",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password size="large" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "50%", marginTop: "50px" }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>

      <div style={{
            textAlign: "center"
          }}>
            <p>Doesn't have an account?
              <strong style={{ color: "blue", marginLeft: "10px", cursor: "pointer" }} onClick={() => router.push("/")}>Register</strong>
            </p>
          </div>
    </div>
  );
};
export default LoginForm;
