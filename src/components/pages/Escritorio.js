import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Typography } from "antd";
import React from "react";
import { useHideMenu } from "../../hooks/useHideMenu";

const { Title, Text } = Typography;

export const Escritorio = () => {
  useHideMenu(false);

  const salir = () => {
    console.log("Salir");
  };

  const siguienteTicket = () => {
    console.log("siguiente Ticket");
  };

  return (
    <>
      <Row>
        <Col span={20}>
          <Title>Angel</Title>
          <Text>Usted esta en el escritorio</Text>:
          <Text type="success"> 5</Text>
        </Col>
        <Col span={4} align="right">
          <Button shape="round" type="danger" onClick={salir}>
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider></Divider>
      <Row>
        <Col>
          <Text style={{ fontSize: 30 }}>
            Está atentiendo el ticket número:{" "}
          </Text>
          <Text type="danger" style={{ fontSize: 30 }}>
            {" "}
            55
          </Text>
        </Col>
      </Row>
      <Divider></Divider>
      <Row>
        <Col offset={18} span={6} align="right">
          <Button onClick={siguienteTicket}>
            <RightOutlined />
            Siguiente
          </Button>
        </Col>
      </Row>
    </>
  );
};
