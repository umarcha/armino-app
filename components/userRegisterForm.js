import { Button, Form, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setUsers } from "../redux/feature/user";
import { Col, Row } from "antd";

import UserCard from "./Card";
const UserRegister = () => {
  const users = useSelector((state) => state?.users);
  const dispatch = useDispatch();
  const delHandler = (id) => {
    const delData = users?.filter((item) => item.id != id);
    dispatch(setUsers(delData));
  };

  return (
    <>
      <div>
        <Button href="/add-user" type="primary" style={{ marginTop: "50px" }}>
          Add users
        </Button>
        {users?.length == 0 ? (
          <div style={{ textAlign: "center", padding: "50px" }}>
            <p>No Users Exist </p>
          </div>
        ) : (
          <Row style={{ justifyContent: "space-evenly" }}>
            {users?.map((user, ind) => {
              return (
                <Col
                  key={ind}
                  span={{ xs: 12, md: 6, lg: 4 }}
                  style={{
                    marginRight: "20px",
                    padding: "50px",
                    display: "flex",
                  }}
                >
                  <UserCard user={user} delHandler={delHandler} />
                </Col>
              );
            })}
          </Row>
        )}
      </div>
    </>
  );
};
export default UserRegister;
