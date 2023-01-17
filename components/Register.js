import { Button, Form, Input, notification } from "antd";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../redux/feature/user";

const RegisterForm = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const users = useSelector((state) => state?.users);

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
          id: Number((Math.random() * 100).toFixed(0)),
          values: values,
        },
      ])
    );
    notification.open({
      message: "User registered successfully, Login to proceed."
    })
    router.push("/login");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0px auto",
        boxShadow: "0px 2px 25px rgba(51, 51, 51, 0.1)",
      }}
    >
      <h2 style={{ padding: "40px 0px 0px 0px", textAlign: "center" }}>
        Register New User
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
        style={{ padding: "50px 20px 20px" }}
        form={form}
        fields={[
          {
            name: ["name"],
            value: "",
          },
          {
            name: ["email"],
            value: "",
          },
          {
            name: ["password"],
            value: "",
          },
          {
            name: ["address"],
            value: "",
          },
          {
            name: ["phone"],
            value: "",
          },
        ]}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
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
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              type: "password",
            },
            {
              required: true,
              message: "Please Enter your Password",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: "Please input your address!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please Enter your phone!",
            },
          ]}
        >
          <Input controls={false} type="number" />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: "170px", margin: "0 auto", display: "block" }}
        >
          Register
        </Button>
      </Form>

      <div style={{
        textAlign: "center"
      }}>
        <p>Already have an account?
          <strong style={{ color: "blue", marginLeft: "10px", cursor: "pointer" }} onClick={() => router.push("/login")}>Login</strong>
        </p>
      </div>
    </div>
  );
};
export default RegisterForm;
