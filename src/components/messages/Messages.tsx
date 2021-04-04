
import { Input } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Header from '../header/Header';
import { SendOutlined } from '@ant-design/icons'
import Message from './Message';
import './Messages.scss'
const Messages = () => {
    const onSend= (value: string) => console.log(value) 
    return (
        <div className='messages'>
            <Header title={'Work'} description={'We working'} />
            <Content className='messages__content'>
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
            </Content>
            <div className='messages__input'>
                <Input.Search onSearch={onSend} placeholder='enter your message' enterButton={<SendOutlined />}></Input.Search>
            </div>
        </div>
    )
}


export default Messages