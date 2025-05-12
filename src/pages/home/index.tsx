import { Avatar, Image, Input, Tabs, Typography } from 'antd';
import './index.css';
import { SearchOutlined } from '@ant-design/icons';
import { FuncButton } from '../../components/funcBtn';
import { Description } from '../../components/description';
import { useState } from 'react';
import { Particle } from '../../components/particle';
import { Container } from '../../components/base/container';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const [activeKey, setActiveKey] = useState(0);
  const navigate = useNavigate();
  const getFontSize = (key: number, self: number) => {
    if (key === self) {
      return 16;
    } else {
      return 14;
    }
  };

  const particles = [
    {
      key: '0',
      label: (
        <Typography.Title
          level={5}
          style={{
            marginBottom: 0,
            fontWeight: '400',
            fontSize: getFontSize(activeKey, 0),
          }}
        >
          健康百科
        </Typography.Title>
      ),
      children: (
        <Particle
          title={`"治鼻要药"五道食疗`}
          description="祛风寒、通鼻窍、治鼻炎的香草————白芷"
        />
      ),
    },
    {
      key: '1',
      label: (
        <Typography.Title
          level={5}
          style={{
            marginBottom: 0,
            fontWeight: '400',
            fontSize: getFontSize(activeKey, 1),
          }}
        >
          热门话题
        </Typography.Title>
      ),
      children: (
        <Particle
          title={`"治鼻要药"五道食疗`}
          description="祛风寒、通鼻窍、治鼻炎的香草————白芷"
        />
      ),
    },
    {
      key: '2',
      label: (
        <Typography.Title
          level={5}
          style={{
            marginBottom: 0,
            fontWeight: '400',
            fontSize: getFontSize(activeKey, 2),
          }}
        >
          医疗保险
        </Typography.Title>
      ),
      children: (
        <Particle
          title={`"治鼻要药"五道食疗`}
          description="祛风寒、通鼻窍、治鼻炎的香草————白芷"
        />
      ),
    },
    {
      key: '3',
      label: (
        <Typography.Title
          level={5}
          style={{
            marginBottom: 0,
            fontWeight: '400',
            fontSize: getFontSize(activeKey, 3),
          }}
        >
          养生攻略
        </Typography.Title>
      ),
      children: (
        <Particle
          title={`"治鼻要药"五道食疗`}
          description="祛风寒、通鼻窍、治鼻炎的香草————白芷"
        />
      ),
    },
  ];

  return (
    <Container>
      {/* header */}
      <div>
        <div className="home-container">
          <Typography.Title
            level={5}
            style={{ lineHeight: '32px', marginBottom: '0px' }}
          >
            鼻康灵
          </Typography.Title>
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
        <Input
          className="home-header-search"
          prefix={<SearchOutlined />}
          styles={{
            prefix: {
              width: 16,
            },
            input: {
              display: 'inline-block',
              textAlign: 'center',
              width: 'fit-content',
            },
          }}
          placeholder={'搜索疾病或药品'}
        />
        <Image
          className="home-header-img"
          width={'100%'}
          height={100}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <div className="home-header-funcs-block">
          <FuncButton
            icon={'U'}
            text="体质辨识"
            onClick={() => {
              navigate('/identify');
            }}
          />
          <FuncButton
            icon={'U'}
            text="风险筛查"
            onClick={() => {
              navigate('/risk');
            }}
          />
          <FuncButton
            icon={'U'}
            text="寻医无忧"
            onClick={() => {
              navigate('/find-doctor');
            }}
          />
        </div>
        <div className="home-header-funcs-uni">
          <Description icon={'U'} title="快速购药" description="同城极速送达" />
          <Description icon={'U'} title="咨询问诊" description="医生在线解答" />
        </div>
        <Typography.Title level={5}>热门服务</Typography.Title>
        <div className="home-header-funcs-uni">
          <Description icon={'U'} title="快速购药" description="同城极速送达" />
          <Description icon={'U'} title="咨询问诊" description="医生在线解答" />
          <Description icon={'U'} title="快速购药" description="同城极速送达" />
          <Description icon={'U'} title="咨询问诊" description="医生在线解答" />
        </div>
        <Tabs
          activeKey={activeKey.toString()}
          indicator={{
            size: 40,
          }}
          onChange={(key) => {
            setActiveKey(+key);
          }}
          items={particles}
        />
      </div>
    </Container>
  );
};
