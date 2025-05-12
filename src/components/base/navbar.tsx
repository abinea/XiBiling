import {
  HomeFilled,
  RocketFilled,
  ShopFilled,
  UserOutlined,
} from '@ant-design/icons';
import { NavBarBtn } from '../navBtn';
import { useState } from 'react';

export const NavBar = () => {
  const [pageIdx, setPageIdx] = useState(() => {
    const pathname = window.location.pathname;
    if (pathname === '/') {
      return 0;
    }
    if (pathname === '/find') {
      return 1;
    }
    if (pathname === '/mart') {
      return 2;
    }
    if (pathname === '/me') {
      return 3;
    }
    return 0;
  });
  const onClick = (key: number) => {
    setPageIdx(key);
  };

  return (
    <div
      style={{
        height: '70px',
        backgroundColor: '#fff',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '8px 16px',
        boxSizing: 'border-box',
      }}
    >
      <NavBarBtn
        onClick={() => onClick(0)}
        to="/"
        icon={<HomeFilled />}
        text="首页"
        styles={{
          icon: {
            color: pageIdx === 0 ? 'rgb(126, 169, 244)' : '',
          },
          text: {
            fontSize: 12,
            color: pageIdx === 0 ? 'rgb(126, 169, 244)' : '',
          },
        }}
      />
      <NavBarBtn
        onClick={() => onClick(1)}
        to="/find"
        icon={<RocketFilled />}
        text="发现"
        styles={{
          icon: {
            color: pageIdx === 1 ? 'rgb(126, 169, 244)' : '',
          },
          text: {
            fontSize: 12,
            color: pageIdx === 1 ? 'rgb(126, 169, 244)' : '',
          },
        }}
      />
      <NavBarBtn
        onClick={() => onClick(2)}
        to="/mart"
        icon={<ShopFilled />}
        text="健康商城"
        styles={{
          icon: {
            color: pageIdx === 2 ? 'rgb(126, 169, 244)' : '',
          },
          text: {
            fontSize: 12,
            color: pageIdx === 2 ? 'rgb(126, 169, 244)' : '',
          },
        }}
      />
      <NavBarBtn
        to="/me"
        onClick={() => onClick(3)}
        icon={<UserOutlined />}
        text="我的"
        styles={{
          icon: {
            color: pageIdx === 3 ? 'rgb(126, 169, 244)' : '',
          },
          text: {
            fontSize: 12,
            color: pageIdx === 3 ? 'rgb(126, 169, 244)' : '',
          },
        }}
      />
    </div>
  );
};
