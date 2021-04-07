import { Input } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Header from '../header/Header';
import { SendOutlined } from '@ant-design/icons'
import Message from './Message';
import { MessageType, sendMessage, ActionTypes } from  '../../Redux/ChatReducer'
import './Messages.scss'
import { AppStateType } from '../../Redux/store';
import { connect } from 'react-redux';
import moment from 'moment';

type MapDispatchToPropsType = {
    sendMessage: ({id, timeSending, text, senderId}: MessageType ) => ActionTypes
}

type IMessagePropsType = ReturnType<typeof MapStateToProps> & MapDispatchToPropsType

const Messages: React.FC<IMessagePropsType> = ({ chat, me, users, sendMessage }) => {
    const onSend = (value: string) => {

        sendMessage(
            {id:  chat.messages.length.toString(),
            timeSending: moment().format('YYYY-MM-DD HH:mm:ss'),
            text: value,
            senderId: me.id}
        )
    }

    return (
        <div className='messages'>
            <Header name={chat.title} status={chat.status} photo={'null'} type={'chat'} chatType={chat.chatType} />
            <Content className='messages__content'>
                {chat.messages
                    .reverse()
                    .map(message => <Message
                        key={message.id}
                        message={message}
                        sender={users.find(user => user.id === message.senderId)}
                    />
                    )}
            </Content>
            <div className='messages__input'>
                <Input.Search onSearch={onSend} placeholder='enter your message' enterButton={<SendOutlined />}></Input.Search>
            </div>
        </div>
    )
}

const MapStateToProps = (state: AppStateType) => ({
    me: state.users.me,
    chat: state.chat,
    users: state.users.users
})

export default connect(MapStateToProps, {sendMessage})(Messages)