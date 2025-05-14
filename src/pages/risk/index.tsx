import { ArrowLeftOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { Container } from '../../components/base/container';
import { Progess } from './progess';
import { Summary } from './summary';
import { useNavigate } from 'react-router-dom';

const diseases = [
  {
    name: '过敏性鼻炎',
    desc: '是机体免疫系统对环境触发因素产生的反应导致的。最常见的致敏原为灰尘、真菌、花粉、草、树和动物。症状包括发痒、喷嚏、流清涕、鼻塞、鼻痒和易流泪。可能会头疼和眼脸浮肿，也可出现咳嗽和喘鸣。',
  },
  { name: '糖尿病', desc: '血糖水平异常升高，建议控制糖分摄入。' },
  { name: '脂肪肝', desc: '肝脏脂肪堆积，建议减少油腻食物。' },
];

export const RiskPage = () => {
  const navigate = useNavigate();

  return (
    <Container
      style={{
        padding: '',
        paddingTop: '78px',
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
            height: '32px',
          }}
        >
          <ArrowLeftOutlined
            onClick={() => {
              navigate(-1);
            }}
          />
          <span>风险筛查</span>
          <ShareAltOutlined />
        </div>
      </div>
      <div
        style={{
          backgroundColor: '#fff',
          padding: '12px 16px',
          borderRadius: 6,
        }}
      >
        <div style={{ marginBottom: 20 }}>
          <Typography.Title level={5} style={{ marginBottom: 20 }}>
            患病风险
          </Typography.Title>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
            }}
          >
            <Progess percent={45} remark={'过敏性鼻炎'} />
            <Progess percent={38} remark={'鼻息肉'} />
            <Progess percent={21} remark={'鼻窦炎'} />
            <Progess percent={33} remark={'急性鼻炎'} />
            <Progess percent={15} remark={'药物性鼻炎'} />
            <Progess percent={7} remark={'急性咽炎'} />
          </div>
        </div>

        <Typography.Title level={5} style={{ marginBottom: 20 }}>
          需要警惕
        </Typography.Title>
        <div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {diseases.map((item, idx) => (
              <Summary key={idx} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};
