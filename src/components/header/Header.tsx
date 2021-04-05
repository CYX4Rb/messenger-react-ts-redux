import { Card } from "antd"
import Avatar from "antd/lib/avatar/avatar"
import Meta from "antd/lib/card/Meta"
import { EllipsisOutlined } from '@ant-design/icons'
import './Header.scss'

type IHeaderProps = {
    name: string
    status: string
    photo: string
    type: 'user' | 'chat',
}

const Header: React.FC<IHeaderProps> = ({name, status, photo, type}) => {
    return (
        <div className='header'>
            <Card
                style={{ backgroundColor:  type === 'user' ? '#001529' : '#00335a' }} 
                actions={[
                    <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                    avatar={<Avatar src={photo} />}
                    title={name}
                    description={status}
                />
            </Card>
        </div>
    )
}

export default Header