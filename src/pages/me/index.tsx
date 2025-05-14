import { Avatar, Typography } from 'antd';
import { EditOutlined, UserOutlined } from '@ant-design/icons';
import { FuncButton } from '../../components/funcBtn';
import { MenuList } from './menuList';
import { useNavigate } from 'react-router-dom';
import Tizhi from '../../assets/home/tizhi.png';
import Fengxian from '../../assets/home/fengxian.png';
import Doctor from '../../assets/home/doctor.png';

export const MePage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '16px 16px 16px 36px' }}>
      {/* header */}
      <div style={{ textAlign: 'right', marginBottom: '12px' }}>
        <EditOutlined style={{ fontSize: 18 }} />
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
          icon={Tizhi}
          text="体质辨识"
          onClick={() => {
            navigate('/identify');
          }}
        />
        <FuncButton
          icon={Fengxian}
          text="风险筛查"
          onClick={() => {
            navigate('/risk');
          }}
        />
        <FuncButton
          icon={Doctor}
          text="寻医无忧"
          onClick={() => {
            navigate('/find-doctor');
          }}
        />
        <div></div>
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
