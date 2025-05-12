import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
interface DescriptionProps extends React.PropsWithChildren {
  icon?: string;
  backgroundColor?: string;
  title?: string;
  description?: string;
}

export const Description = (props: DescriptionProps) => {
  return (
    <div
      style={{
        height: '60px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: '8px 16px',
      }}
    >
      <Avatar shape="square" size={48} icon={<UserOutlined />} />
      <div style={{ marginLeft: '8px' }}>
        <div style={{ fontSize: 14, fontWeight: '700', marginBottom: '8px' }}>
          {props.title}
        </div>
        <div
          style={{
            fontSize: 12,
            // 灰色
            color: 'rgb(153, 153, 153)',
          }}
        >
          {props.description}
        </div>
      </div>
    </div>
  );
};
