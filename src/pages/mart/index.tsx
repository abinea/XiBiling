import { Input, Select, Typography } from 'antd';
import {
  ArrowLeftOutlined,
  MessageFilled,
  SearchOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { Container } from '../../components/base/container';
import { Commodity } from './commodity';
import { useNavigate } from 'react-router-dom';
import './index.css';
import Zaojiaoci from '../../assets/mart/zhaojiaoci.png';
import Xibiji from '../../assets/mart/xibiiji.png';
import Guocha from '../../assets/mart/guohca.png';
import Chongxiqi from '../../assets/mart/chongxiqi.png';

const commodityList = [
  {
    title: '皂角刺中药洗鼻剂',
    price: '23.8',
    hasSoldCount: 281,
    cover: Zaojiaoci,
  },
  {
    title: '生理盐水洗鼻剂',
    price: '14.8',
    cover: Xibiji,
    hasSoldCount: 146,
  },
  {
    title: '玉竹罗汉果茶',
    price: '69.9',
    cover: Guocha,
    hasSoldCount: 45,
  },
  {
    title: '洗鼻器更换喷头',
    price: '19.9',
    cover: Chongxiqi,
    hasSoldCount: 245,
  },
];

export const MartPage = () => {
  const navigate = useNavigate();

  const [inputVal, setInputVal] = useState('');
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputVal(val.trim());
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
          <MessageFilled
            style={{ fontSize: '22px', color: 'rgb(127, 160, 250)' }}
            onClick={() => {
              navigate('/find-doctor');
            }}
          />
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
          value={inputVal}
          onChange={onInputChange}
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
          rowGap: '8px',
        }}
      >
        {commodityList.map((item, index) => {
          if (item.title.includes(inputVal) || !inputVal) {
            return (
              <Commodity
                key={index}
                title={item.title}
                cover={item.cover}
                price={item.price}
                hasSoldCount={item.hasSoldCount}
              />
            );
          }
        })}
      </div>
    </Container>
  );
};
