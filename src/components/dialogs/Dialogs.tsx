import { Menu } from 'antd'
import Layout from 'antd/lib/layout/layout'
import { TeamOutlined, UserOutlined, HeartOutlined, BulbOutlined } from '@ant-design/icons'
import React from 'react'
import Header from '../header/Header'
import './Dialogs.scss'
import Avatar from 'antd/lib/avatar/avatar'
import { connect } from 'react-redux'
import { AppStateType } from '../../Redux/store'


const Dialogs: React.FC<ReturnType<typeof MapStateToProps>> = ({me, users}) => {
    return <Layout className='dialogs'>
        <Header
            name={me.firstName + ' ' + me.lastName}
            status={me.status}
            photo={me.photo}
            type={'user'}
        />
        <Menu mode="inline" defaultOpenKeys={['direct', 'group']} theme='dark'>
            <Menu.SubMenu key="group" title="Group Dialogs" icon={<TeamOutlined />}>
                <Menu.Item icon={<HeartOutlined />}>Random</Menu.Item>
                <Menu.Item icon={<BulbOutlined />}>Work</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title="Direct dialogs" key='direct' icon={<UserOutlined />}>
                {users.map(user => <Menu.Item key={user.id} icon={<Avatar src={user.photo} />}>{user.firstName + ' ' + user.lastName}</Menu.Item>)}
            </Menu.SubMenu>
        </Menu>
    </Layout>
}
const MapStateToProps = (state: AppStateType) => ({
    me: state.users.me,
    users: state.users.users
})
export default connect(MapStateToProps)(Dialogs)