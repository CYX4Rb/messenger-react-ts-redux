import './App.scss';
import { Layout, Menu, Breadcrumb } from 'antd';
import { useState } from 'react';
import "antd/dist/antd.css";

const { Header, Content, Sider } = Layout;
function App() {
  const [collapsed, setCollapsed] = useState(false)
  return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider theme='light' collapsible collapsed={collapsed} onCollapse={setCollapsed}>
          <div className="logo" />
          <Menu theme='light' mode="inline">
              <Menu.Item>Tom</Menu.Item>
              <Menu.Item>Bill</Menu.Item>
              <Menu.Item>Alex</Menu.Item>
              <Menu.Item>Team 1</Menu.Item>
              <Menu.Item>Team 2</Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
          </Content>
        </Layout>
      </Layout>
    )
}

export default App;
