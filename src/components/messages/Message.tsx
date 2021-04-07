import { Comment, Tooltip, Avatar, Typography } from 'antd';
import { MessageType } from '../../Redux/ChatReducer';
import { User } from '../../Redux/UsersReducer';

type IMessagePropsType = {
  message: MessageType
  sender: User | undefined
}
const Message: React.FC<IMessagePropsType> = ({message, sender}) => {
  return (
    <Comment
      className='message'
      author={<Typography.Text strong>{sender?.firstName} {sender?.lastName}</Typography.Text>}
      avatar={
        <Avatar
          src={sender?.photo}
          alt="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      }
      content={
        <p>
          {message.text}
        </p>
      }
      datetime={
        <Tooltip title={message.timeSending}> 
          <span>{message.timeSending.slice(11,16)}</span>
        </Tooltip>
      }
    />
  );
};
export default Message