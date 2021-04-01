import React from "react";
import { Form, Input, Button, InputNumber, Divider } from "antd";
import { SaveOutlined } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import { useHistory } from "react-router";
import { useHideMenu } from "../../hooks/useHideMenu";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 14,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 14,
  },
};

export const Ingresar = () => {

  useHideMenu(false);


  const history = useHistory();

  const onFinish = (values) => {
    console.log("Success:", values);

    history.push('/escritorio')
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
    <Title level={2}>Ingresar</Title>
    <Text>Su nombre y número de escritorio</Text>
    <Divider></Divider>
      <Form
        {...layout}
        name="basic"
        md={12}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Nombre del agente"
          name="nombre"
          rules={[
            {
              required: true,
              message: "Por favor ingrese su nombre!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Escritorio"
          name="escritorio"
          rules={[
            {
              required: true,
              message: "Por favor ingrese su escritorio!",
            },
          ]}
        >
          <InputNumber min={1} max={100} />
        </Form.Item>

        <Form.Item {...tailLayout}   >
          <Button type="primary" htmlType="submit" shape="round">
            <SaveOutlined />
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
