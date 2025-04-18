import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  PieChartOutlined,
  DesktopOutlined,
  TeamOutlined,
  FileOutlined,
  ProductOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    if (key === "1") navigate("/dashboard/home");
    // if (key === "2") navigate("/dashboard/home/users");
    if (key === "2") navigate("/dashboard/home/stock");
    if (key === "3") navigate("/dashboard/home/products");
    if (key === "4") navigate("/dashboard/home/cameras");
    if (key === "5") navigate("/dashboard/home/nvr");
    if (key === "6") navigate("/dashboard/home/poe");
    if (key === "7") navigate("/dashboard/home/server");

    if (key === "8") navigate("/dashboard/home/users");

    // add more routes for other keys if needed
  };

  const items = [
    {
      key: "1",
      icon: <PieChartOutlined />,
      label: "Dashboard",
    },

    {
      key: "2",
      icon: <DesktopOutlined />,
      label: "Stock",
    },
    {
      key: "sub1",
      icon: <ProductOutlined />,
      label: "Products",
      children: [
        { key: "3", label: "All products" },
        { key: "4", label: "Cameras" },
        { key: "5", label: "Nvr" },
        { key: "6", label: "Poe" },
        { key: "7", label: "Server" },
      ],
    },
    {
      key: "8",
      icon: <UserOutlined />,
      label: "Users",
    },

    // {
    //   key: "9",
    //   icon: <FileOutlined />,
    //   label: "Files",
    // },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            flex: 1,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
