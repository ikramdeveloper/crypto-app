import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Menu, Typography, Avatar } from "antd";
import {
  HomeOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import icon from "../assets/images/cryptocurrency.png";

const Navbar = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setIsActiveMenu(false);
    } else {
      setIsActiveMenu(true);
    }
  }, [screenSize]);
  const items = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: <Link to="/">Home</Link>,
    },
    {
      key: "cryptocurrencies",
      icon: <FundOutlined />,
      label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
    },
    {
      key: "news",
      icon: <BulbOutlined />,
      label: <Link to="/news">News</Link>,
    },
  ];

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />

        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoapp</Link>
        </Typography.Title>

        <Button
          className="menu-control-container"
          onClick={() => setIsActiveMenu((prev) => !prev)}
        >
          {!isActiveMenu ? <MenuOutlined /> : <CloseCircleOutlined />}
        </Button>
      </div>

      {isActiveMenu && (
        <Menu
          theme="dark"
          items={items}
          onClick={() => setIsActiveMenu(false)}
        />
      )}
    </div>
  );
};
export default Navbar;
