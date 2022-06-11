import { Space, Typography } from "antd";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Typography.Title
        level={5}
        style={{ color: "#fff", textAlign: "center" }}
      >
        Copyright &copy; 2022 <Link to="/">Cryptoapp</Link> <br /> All Rights
        Reserved
      </Typography.Title>
      <Space>
        <Link to="/">Home</Link>
        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        <Link to="/news">News</Link>
      </Space>
    </>
  );
};
export default Footer;
