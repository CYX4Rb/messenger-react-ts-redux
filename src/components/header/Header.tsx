import { Card } from "antd"
import Avatar from "antd/lib/avatar/avatar"
import Meta from "antd/lib/card/Meta"
import { EllipsisOutlined } from '@ant-design/icons'
import './Header.scss'

type IHeaderProps = {
    title: string,
    description: string,
    type: 'user' | 'chat',
}

const Header: React.FC<IHeaderProps> = ({title, description, type}) => {
    return (
        <div className='header'>
            <Card
                style={{ backgroundColor:  type === 'user' ? '#001529' : '#00335a' }}
                actions={[
                    <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={title}
                    description={description}
                />
            </Card>
        </div>
    )
}

export default Header