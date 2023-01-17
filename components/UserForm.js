import React from "react";
import { Button, Form, Input } from "antd";
import { InputNumber } from "antd";

const UserForm = ({ user, onFinish, btnText, formTitle }) => {
  const [form] = Form.useForm();
  
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0px auto",
      }}
    >
      <h2 style={{ padding: "40px 0px 0px 0px", textAlign: "center" }}>
        {formTitle}
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
            value: user?.values?.name,
          },
          {
            name: ["email"],
            value: user?.values?.email,
          },
          {
            name: ["password"],
            value: user?.values?.password,
          },
          {
            name: ["address"],
            value: user?.values?.address,
          },
          {
            name: ["phone"],
            value: user?.values?.phone,
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
          {btnText}
        </Button>
      </Form>
    </div>
  );
};

export default UserForm;
