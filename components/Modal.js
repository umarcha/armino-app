import { Button, Modal, Input, Row, Col } from "antd";
const CustomModal = ({
  isModalOpen,
  setIsModalOpen,
  title,
  handleDeleteEvent,
  handleUpdate,
  setTitle,
}) => {
  return (
    <>
      <Modal
        title={`Edit Event`}
        open={isModalOpen}
        footer={[
          <Button
            key="back"
            type="primary"
            danger
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleUpdate}>
            Update Event
          </Button>,
        ]}
      >
        <Row gutter={16}>
          <Col className="gutter-row" span={12}>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ marginBottom: "10px", maxWidth: "400px" }}
            />
          </Col>
          <Col className="gutter-row" span={4}>
            {/* <p>{time}</p> */}
            <Button type="primary" danger onClick={handleDeleteEvent}>
              delete event
            </Button>
          </Col>
        </Row>
      </Modal>
    </>
  );
};
export default CustomModal;
