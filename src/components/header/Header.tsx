import { Card } from "antd"
import Avatar from "antd/lib/avatar/avatar"
import Meta from "antd/lib/card/Meta"
import { EllipsisOutlined } from '@ant-design/icons'
import './Header.scss'

type IHeaderProps = {
    title: string,
    description: string
}

const Header: React.FC<IHeaderProps> = ({title, description}) => {
    return (
        <div className='header'>
            <Card
                style={{ width: '100%' }}
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