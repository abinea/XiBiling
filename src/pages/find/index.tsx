import { Typography } from 'antd';
import './index.css';
import { Particle } from '../../components/particle';
import { TopBar } from './topBar';
import { Container } from '../../components/base/container';
import { useState } from 'react';
import Cover1 from '../../assets/kepu/cover1.png';
import Cover2 from '../../assets/kepu/cover2.png';
import Cover3 from '../../assets/kepu/cover3.png';

const particlesData = [
  {
    title: `如何区分鼻窦炎和鼻炎`,
    description: '鼻炎指的是鼻腔粘膜和粘膜下组织的炎症。表现为充血或...',
    tag: 1,
    cover: Cover1,
    hasReadCount: 1512,
  },
  {
    title: `如何区分各种鼻窦炎`,
    description: '急性鼻窦炎多由上呼吸道感染引起。细菌与病毒感染可同...',
    tag: 1,
    cover: Cover2,
    hasReadCount: 934,
  },
  {
    title: `鼻咽癌的中医治疗方法有哪些`,
    description: '中医在鼻咽癌的治疗中有较重要的地位。虽然，鼻咽癌的...',
    cover: Cover3,
    hasReadCount: 1121,
  },
];

const TagList: Record<number, string> = {
  0: '全部',
  1: '鼻窦炎',
  2: '鼻息肉',
  3: '中耳炎',
};

export const FindPage = () => {
  const [activeTagKey, setActiveTagKey] = useState(0);
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
        <TopBar activeTagKey={activeTagKey} setActiveTagKey={setActiveTagKey} />
      </div>

      <div style={{ marginTop: '74px', padding: '12px' }}>
        {particlesData.map((item) => {
          if (item.tag === activeTagKey || !activeTagKey)
            return (
              <Particle
                title={item.title}
                description={item.description}
                tag={item.tag ? TagList[item.tag] : ''}
                hasReadCount={item.hasReadCount || 0}
                cover={item.cover}
              />
            );
        })}
      </div>
    </Container>
  );
};
