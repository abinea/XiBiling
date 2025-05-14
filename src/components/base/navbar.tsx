import {
  HomeFilled,
  RocketFilled,
  ShopFilled,
  UserOutlined,
} from '@ant-design/icons';
import { NavBarBtn } from '../navBtn';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const NavBar = () => {
  const location = useLocation();
  const [pageIdx, setPageIdx] = useState(0);

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname === '/') {
      setPageIdx(0);
    } else if (pathname === '/find') {
      setPageIdx(1);
    } else if (pathname === '/mart') {
      setPageIdx(2);
    } else if (pathname === '/me') {
      setPageIdx(3);
    } else {
      setPageIdx(0);
    }
  }, [location.pathname]);
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
