import { Card } from "antd";
import { Button } from "antd";
import { useRouter } from "next/router";
const UserCard = ({ user, delHandler }) => {
  const router = useRouter();

  return (
    <div
      className="site-card-border-less-wrapper"
      style={{
        boxShadow: "0px 2px 25px rgba(51, 51, 51, 0.1)",
        width: "400px",
      }}
    >
      <Card
        title={`Title : ${user.values.name}`}
        bordered={false}
        style={{ boxShadow: "none" }}
      >
        <p>
          <span style={{ fontWeight: "bold" }}> Email : </span>
          {user.values.email}
        </p>
        <p>
          {" "}
          <span style={{ fontWeight: "bold" }}> Address : </span>
          {user.values.address}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}> Phone : </span>
          {user.values.phone}
        </p>
        <Button
          type="primary"
          danger
          onClick={() => {
            delHandler(user.id);
          }}
          style={{ marginRight: "20px" }}
        >
          Delete
        </Button>
        <Button
          type="primary"
          onClick={() => {
            router.push(`/users/${user.id}`);
          }}
        >
          Edit
        </Button>
      </Card>
    </div>
  );
};

export default UserCard;
