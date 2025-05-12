import Icon, {
  AppstoreAddOutlined,
  EditFilled,
  LockOutlined,
  MenuOutlined,
  RightOutlined,
  SettingOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';

interface MenuItemProps {
  icon: any;
  text: string;
  onClick: () => void;
}

const MenuItem = ({ icon, text, onClick }: MenuItemProps) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '40px',
        paddingRight: '18px',
        marginBottom: '4px',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <Icon
          component={icon}
          style={{
            color: 'rgb(0, 197, 171)',
          }}
        />
        <span
          style={{
            fontSize: '14px',
            marginLeft: '14px',
          }}
        >
          {text}
        </span>
      </div>
      <RightOutlined
        style={{
          fontSize: '12px',
          color: 'rgb(0,0,0,0.65',
        }}
      />
    </div>
  );
};

const menuList: MenuItemProps[] = [
  {
    icon: EditFilled,
    text: '反馈建议',
    onClick: () => {
      console.log('首页');
    },
  },
  {
    icon: ShareAltOutlined,
    text: '应用分享',
    onClick: () => {
      console.log('首页');
    },
  },
  {
    icon: LockOutlined,
    text: '地址管理',
    onClick: () => {
      console.log('首页');
    },
  },
  {
    icon: MenuOutlined,
    text: '我的订单',
    onClick: () => {
      console.log('首页');
    },
  },
  {
    icon: AppstoreAddOutlined,
    text: '随访中心',
    onClick: () => {
      console.log('首页');
    },
  },
  //   设置
  {
    icon: SettingOutlined,
    text: '设置',
    onClick: () => {
      console.log('首页');
    },
  },
];

export const MenuList = () => {
  return (
    <div style={{ padding: '12px' }}>
      {menuList.map((item) => (
        <MenuItem
          key={item.text}
          icon={item.icon}
          text={item.text}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
};
