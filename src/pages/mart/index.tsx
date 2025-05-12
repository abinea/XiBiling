import { Avatar, Input, Select, Typography } from 'antd';
import {
  ArrowLeftOutlined,
  SearchOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { Container } from '../../components/base/container';
import { Commodity } from './commodity';
import { useNavigate } from 'react-router-dom';
import './index.css';

const commodityList = [
  {
    title: '皂角刺中药洗鼻剂',
    price: '23.8',
    hasSoldCount: 281,
  },
  {
    title: '生理盐水洗鼻剂',
    price: '14.8',
    hasSoldCount: 146,
  },
  {
    title: '玉竹罗汉果茶',
    price: '69.9',
    hasSoldCount: 45,
  },
];

export const MartPage = () => {
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState(0);
  const getFontSize = (key: number, self: number) => {
    if (key === self) {
      return 16;
    } else {
      return 14;
    }
  };

  return (
    <Container
      style={{
        padding: '',
        paddingTop: '120px',
      }}
    >
      <div
        style={{
          boxSizing: 'border-box',
          backgroundColor: '#fff',
          position: 'fixed',
          top: 0,
          width: '100%',
          padding: '20px 24px 10px 24px',
          zIndex: 999,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '12px',
          }}
        >
          <Typography.Title level={5}>鼻康灵</Typography.Title>
          <Avatar
            style={{
              backgroundColor: 'rgb(126, 169, 244)',
              color: '#fff',
              boxShadow: '0 0 0 2px #f0f0f0',
            }}
          >
            U
          </Avatar>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '32px',
          }}
        >
          <ArrowLeftOutlined
            onClick={() => {
              navigate('/');
            }}
          />
          <span>健康商城</span>
          <ShareAltOutlined />
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 24px',
          marginBottom: '12px',
        }}
      >
        <Input
          suffix={<SearchOutlined />}
          style={{
            width: '200px',
            borderRadius: '12px',
          }}
          styles={{
            prefix: {
              width: 16,
            },
          }}
          placeholder={'搜索疾病或药品'}
        />
        <Select
          defaultValue={'0'}
          style={{
            width: '100px',
            borderRadius: '12px',
          }}
          options={[
            {
              label: '全部体质',
              value: '0',
            },
          ]}
        />
      </div>
      <div
        style={{
          display: 'grid',
          padding: '0 16px',
          gridTemplateColumns: 'repeat(2, 1fr)',
          // 空隙在空间
          columnGap: '14px',
          rowGap: '12px',
        }}
      >
        {commodityList.map((item, index) => {
          return (
            <Commodity
              key={index}
              title={item.title}
              price={item.price}
              hasSoldCount={item.hasSoldCount}
            />
          );
        })}
      </div>
    </Container>
  );
};
