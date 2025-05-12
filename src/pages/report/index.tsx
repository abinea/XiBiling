import { useRef, useState } from 'react';
import { Container } from '../../components/base/container';
import { ArrowLeftOutlined } from '@ant-design/icons';
import {
  Button,
  Input,
  Slider,
  Typography,
  Upload,
  type SliderSingleProps,
  type UploadProps,
} from 'antd';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    id: 1,
    type: 'input',
    title: '主症: 最不舒服的症状是什么？持续多久？最近是否加重？',
    options: ['男', '女'],
  },
  {
    id: 2,
    type: 'rate',
    title:
      '鼻部症状VAS主观评分：（按照VAS评分将病情分为：轻度0~3分；中度>3~7 分；重度>7~10分）',
    options: ['18岁以下', '18-30岁', '31-45岁', '46-60岁', '60岁以上'],
  },
  {
    id: 3,
    type: 'upload',
    title: '如有，请将血常规等检验信息拍照上传',
  },
  {
    id: 4,
    type: 'upload',
    title: '如有，请将鼻内镜或鼻窦CT等影像学检验信息拍照上传',
  },
];

const marks: SliderSingleProps['marks'] = {
  0: '0',
  1: '',
  2: '2',
  3: '',
  4: '4',
  5: '',
  6: '6',
  7: '',
  8: '8',
  9: '',
  10: '10',
};

const uploadProps: UploadProps = {
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },
};

const SliderInput = () => {
  const [sliderVal, setSliderVal] = useState(0);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Input value={sliderVal} readOnly style={{ width: 40, height: 30 }} />
      <div style={{ width: 'calc(100vw - 130px)' }}>
        <Slider
          marks={marks}
          included={false}
          min={0}
          max={10}
          onChange={(val) => {
            setSliderVal(val);
          }}
        />
      </div>
    </div>
  );
};

const renderChild = (type: string) => {
  switch (type) {
    case 'input':
      return <Input />;
    case 'rate':
      return <SliderInput />;
    case 'upload':
      return (
        <Upload {...uploadProps}>
          <Button>点击上传</Button>
        </Upload>
      );
    default:
      return <></>;
  }
};

export const ReportPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const btnRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = () => {
    console.log('click');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        if (btnRef.current) {
          btnRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
        setTimeout(() => {
          navigate('/real-report');
        }, 1000);
      }, 500);
    }, 1000);
    // 可在此处提交数据到后端
  };

  return (
    <Container style={{ padding: '', paddingBottom: '0px' }}>
      <div
        style={{
          boxSizing: 'border-box',
          backgroundColor: '#fff',
          position: 'fixed',
          top: 0,
          width: '100%',
          padding: '12px 24px 10px 24px',
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
              navigate('/');
            }}
          />
          <span style={{ marginRight: '12px' }}>体质报告</span>
          <div></div>
        </div>
      </div>
      <div
        ref={btnRef}
        style={{ padding: '64px 16px 0 16px', maxWidth: 480, margin: '0 auto' }}
      >
        <div
          style={{
            background: '#fff',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '10px',
            padding: '12px 20px',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 6,
          }}
        >
          <Typography.Title
            level={4}
            style={{
              color: 'rgb(127, 182, 218)',
            }}
          >
            信息补充录入
          </Typography.Title>
          <Typography.Text>
            AI导诊后的患者症状信息补充录入，请依据真实情况填写!
          </Typography.Text>
        </div>
        {questions.map((q, idx) => (
          <div
            key={q.id}
            style={{
              background: '#fff',
              boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
              padding: 20,
            }}
          >
            <div style={{ fontSize: 16 }}>
              <Typography.Text>
                <span style={{ color: '#e83f0e' }}>
                  {idx + 1 == 1 ? '*' : ''}
                </span>
                {idx + 1}. {q.title}
              </Typography.Text>
            </div>
            <div style={{ marginTop: '12px' }}>{renderChild(q.type)}</div>
          </div>
        ))}
        {submitted && (
          <div style={{ textAlign: 'center', color: '#52c41a', marginTop: 18 }}>
            感谢您的填写！
          </div>
        )}
        <Button
          loading={loading}
          disabled={submitted}
          style={{
            width: '100%',
            height: 48,
            background: 'rgba(22, 119, 255,0.85)',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            fontSize: 16,
            fontWeight: 500,
            cursor: 'pointer',
            margin: '12px 0',
            boxShadow: '0 2px 8px rgba(22,119,255,0.08)',
            transition: 'background 0.2s',
          }}
          onClick={handleSubmit}
        >
          {submitted ? '已提交' : '提交问卷'}
        </Button>
      </div>
    </Container>
  );
};
