import { Menu } from 'antd'
import Layout from 'antd/lib/layout/layout'

import React from 'react'
import Header from '../header/Header'
import './Dialogs.scss'

const Dialogs: React.FC = () => {
    return <Layout className='dialogs'>
        <Header title={'Elon Mask'} description={'i m king!!!!'} />
        <Menu mode="inline" defaultOpenKeys={['direct']}>
            <Menu.Item>Random</Menu.Item>
            <Menu.Item>Work</Menu.Item>
            <Menu.SubMenu title="Direct dialogs" key='direct'>
                <Menu.Item>Tom</Menu.Item>
                <Menu.Item>Bill</Menu.Item>
                <Menu.Item>Alex</Menu.Item>
            </Menu.SubMenu>
        </Menu>
    </Layout>
}

export default Dialogs