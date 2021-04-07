import { Menu } from 'antd'
import Layout from 'antd/lib/layout/layout'
import { TeamOutlined, UserOutlined, HeartOutlined, BulbOutlined } from '@ant-design/icons'
import React from 'react'
import Header from '../header/Header'
import './Dialogs.scss'
import Avatar from 'antd/lib/avatar/avatar'
import { connect } from 'react-redux'
import { AppStateType } from '../../Redux/store'
import { ActionTypes, switchChat } from '../../Redux/ChatReducer'

type MapDispatchToPropsType = {
    switchChat: (key: string) => ActionTypes
}

type IMessageProps = ReturnType<typeof MapStateToProps> & MapDispatchToPropsType
const Dialogs: React.FC<IMessageProps> = ({ me, users, switchChat }) => {
    const onChange = ({key}: any): void => {
        switchChat(key)
    }
    return <Layout className='dialogs'>
        <Header
            name={me.firstName + ' ' + me.lastName}
            status={me.status}
            photo={me.photo}
            type={'user'}
        />
        <Menu mode="inline" defaultOpenKeys={['direct', 'group']} theme='dark' defaultSelectedKeys={['work']} onSelect={onChange}>
            <Menu.SubMenu key="group" title="Group Dialogs" icon={<TeamOutlined />}>
                <Menu.Item key='work' icon={<BulbOutlined />}>Work</Menu.Item>
                <Menu.Item key='random' icon={<HeartOutlined />}>Random</Menu.Item>
            </Menu.SubMenu>
            {<Menu.SubMenu title="Direct dialogs" key='direct' icon={<UserOutlined />}>
                {users
                    .filter(user => user.id !== me.id)
                    .map(user => <Menu.Item key={user.id} icon={<Avatar src={user.photo} />}>{user.firstName + ' ' + user.lastName}</Menu.Item>)}
            </Menu.SubMenu>}
        </Menu>
    </Layout>
}
const MapStateToProps = (state: AppStateType) => ({
    me: state.users.me,
    users: state.users.users
})
export default connect(MapStateToProps, {switchChat})(Dialogs)