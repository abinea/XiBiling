import { Avatar, Typography } from 'antd';
import { EditOutlined, UserOutlined } from '@ant-design/icons';
import { FuncButton } from '../../components/funcBtn';
import { MenuList } from './menuList';

export const MePage = () => {
  return (
    <div style={{ padding: '16px 16px 16px 36px' }}>
      {/* header */}
      <div style={{ textAlign: 'right', marginBottom: '12px' }}>
        <EditOutlined />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          marginBottom: '12px',
        }}
      >
        <Avatar
          size={56}
          style={{ backgroundColor: '#87d068' }}
          icon={<UserOutlined />}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '16px',
            marginBottom: '12px',
          }}
        >
          <Typography.Text strong style={{ marginTop: '12px' }}>
            用户 432832
          </Typography.Text>
          <Typography.Text style={{ fontSize: '12px' }}>
            手机号 198****5457
          </Typography.Text>
        </div>
      </div>
      <div></div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '4px',
            height: '18px',
            marginRight: '6px',
            background: 'rgb(0, 197, 171)',
          }}
        />
        <Typography.Title level={5} style={{ marginBottom: 0 }}>
          我的常用
        </Typography.Title>
      </div>
      <div
        style={{
          padding: '0 16px',
          marginBottom: '12px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <FuncButton
          icon={'U'}
          text="体质辨识"
          onClick={() => {
            // 跳转到 体质辨识 页面
            window.location.href = '/identify';
          }}
        />
        <FuncButton icon={'U'} text="风险筛查" />
        <FuncButton icon={'U'} text="寻医无忧" />
        <FuncButton icon={'U'} text="寻医无忧" />
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '4px',
            height: '18px',
            marginRight: '6px',
            background: 'rgb(0, 197, 171)',
          }}
        />
        <Typography.Title level={5} style={{ marginBottom: 0 }}>
          工具与服务
        </Typography.Title>
      </div>
      <MenuList />
    </div>
  );
};
