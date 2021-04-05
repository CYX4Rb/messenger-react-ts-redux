import { Comment, Tooltip, Avatar } from 'antd';
import { MessageType } from '../../Redux/Messages';

type IMessagePropsType = {
  message: MessageType
}
const Message: React.FC<IMessagePropsType> = ({message}) => {
  return (
    <Comment
      className='message'
      author={<p>Han Solo</p>}
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      }
      content={
        <p>
          {message.text}
        </p>
      }
      datetime={
        <Tooltip title={'2021-03-23 16:53:12'}> 
          <span>{'16:53:12'}</span>
        </Tooltip>
      }
    />
  );
};
export default Message