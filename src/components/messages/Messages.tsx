
import { Input } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Header from '../header/Header';
import { SendOutlined } from '@ant-design/icons'
import Message from './Message';
import './Messages.scss'
import { AppStateType } from '../../Redux/store';
import { connect } from 'react-redux';

const Messages: React.FC<ReturnType<typeof MapStateToProps>> = ({randomMessages}) => {
    const onSend= (value: string) => console.log(value) 
    return (
        <div className='messages'>
            <Header name={'Work'} status={'Здесь только по работе'} photo={'null'} type={'chat'}/>
            <Content className='messages__content'>
                {randomMessages.map(message => <Message key={message.id} message={message} /> )}
            </Content>
            <div className='messages__input'>
                <Input.Search onSearch={onSend} placeholder='enter your message' enterButton={<SendOutlined />}></Input.Search>
            </div>
        </div>
    )
}

const MapStateToProps = (state: AppStateType) => ({
    randomMessages : state.messages.RandomMessages
})

export default connect(MapStateToProps)(Messages)