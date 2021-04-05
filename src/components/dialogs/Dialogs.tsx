import { Menu } from 'antd'
import Layout from 'antd/lib/layout/layout'
import { TeamOutlined, UserOutlined, HeartOutlined, BulbOutlined } from '@ant-design/icons'
import React from 'react'
import Header from '../header/Header'
import './Dialogs.scss'
import Avatar from 'antd/lib/avatar/avatar'

const Dialogs: React.FC = () => {
    return <Layout className='dialogs'>
        <Header title={'Elon Mask'} description={'i m king!!!!'} type={'user'} />
        <Menu mode="inline" defaultOpenKeys={['direct', 'group']} theme='dark'>
            <Menu.SubMenu key="group" title="Group Dialogs" icon={<TeamOutlined />}>
                <Menu.Item icon={<HeartOutlined />}>Random</Menu.Item>
                <Menu.Item icon={<BulbOutlined />}>Work</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title="Direct dialogs" key='direct' icon={<UserOutlined />}>
                <Menu.Item icon={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}>Tom</Menu.Item>
                <Menu.Item icon={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}>Bill</Menu.Item>
                <Menu.Item icon={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}>Alex</Menu.Item>
            </Menu.SubMenu>
        </Menu>
    </Layout>
}

export default Dialogs