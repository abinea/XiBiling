import { Avatar, Image, Input, Tabs, Typography } from 'antd';
import './index.css';
import Search from 'antd/es/input/Search';
import { SearchOutlined } from '@ant-design/icons';
import { FuncButton } from '../../components/funcBtn';
import { Description } from '../../components/description';
import { useState } from 'react';
import { Particle } from '../../components/particle';
import { TopBar } from './topBar';
import { Container } from '../../components/base/container';

export const FindPage = () => {
  const [activeKey, setActiveKey] = useState(0);
  const getFontSize = (key: number, self: number) => {
    if (key === self) {
      return 16;
    } else {
      return 14;
    }
  };

  const particlesData = [
    {
      title: `"治鼻要药"五道食疗`,
      description: '祛风寒、通鼻窍、治鼻炎的香草————白芷',
    },
    {
      title: `"治鼻要药"五道食疗`,
      description: '祛风寒、通鼻窍、治鼻炎的香草————白芷',
    },
    {
      title: `"治鼻要药"五道食疗`,
      description: '祛风寒、通鼻窍、治鼻炎的香草————白芷',
    },
    {
      title: `"治鼻要药"五道食疗`,
      description: '祛风寒、通鼻窍、治鼻炎的香草————白芷',
    },
    {
      title: `"治鼻要药"五道食疗`,
      description: '祛风寒、通鼻窍、治鼻炎的香草————白芷',
    },
  ];
  return (
    <Container style={{ padding: '', paddingTop: '12px' }}>
      <div
        style={{
          boxSizing: 'border-box',
          backgroundColor: '#fff',
          position: 'fixed',
          top: 0,
          zIndex: 100,
          width: '100%',
          padding: '12px',
        }}
      >
        <Typography.Title level={5} style={{ marginBottom: '12px' }}>
          健康知识
        </Typography.Title>
        <TopBar />
      </div>

      <div style={{ marginTop: '74px', padding: '12px' }}>
        {particlesData.map((item) => {
          return <Particle title={item.title} description={item.description} />;
        })}
      </div>
    </Container>
  );
};
