import { ArrowLeftOutlined } from '@ant-design/icons';
import { Container } from '../../components/base/container';
import { Divider, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const RealReportPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container
      style={{
        padding: '',
        minHeight: 'calc(100vh - 44px)',
        paddingBottom: '0px',
        fontFamily: 'serif',
      }}
    >
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
        style={{
          marginTop: '44px',
          maxWidth: 800,
          padding: 24,
          background: '#f4f4f4',
        }}
      >
        <div
          style={{
            backgroundColor: '#fff',
            padding: '16px 12px',
            marginBottom: '12px',
            borderRadius: 6,
          }}
        >
          <div
            style={{ display: 'flex', alignItems: 'center', marginBottom: 14 }}
          >
            <div
              style={{
                width: '4px',
                height: '18px',
                marginRight: '6px',
                background: 'rgb(228, 201, 173)',
              }}
            />
            <div>体质分析</div>
          </div>
          <div
            style={{
              backgroundColor: '#f1f1f1',
              padding: '12px',
              fontFamily: 'sans-serif',
            }}
          >
            <div
              style={{
                fontWeight: 500,
                color: '#000',
                fontSize: '18px',
              }}
            >
              发病倾向
            </div>
            <Divider style={{ margin: '10px 0' }} />
            <Typography.Text style={{ fontSize: 16 }}>
              整体发病倾向：易患痰饮、腹泻、耳鸣、痹症、失眠等病症
            </Typography.Text>
          </div>
          {/* <div
            style={{
              backgroundColor: '#f1f1f1',
              padding: '12px',
              fontFamily: 'sans-serif',
            }}
          >
            <div
              style={{
                fontWeight: 500,
                color: '#000',
                fontSize: '18px',
              }}
            >
              专科建议
            </div>
            <Divider style={{ margin: '10px 0' }} />
            <Typography.Text style={{ fontSize: 16 }}>
              鼻炎患者，多为阳虚体质，易患感冒。
            </Typography.Text>
          </div> */}
        </div>
        <div
          style={{
            backgroundColor: '#fff',
            padding: '16px 12px',
            borderRadius: 6,
          }}
        >
          <div
            style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}
          >
            <div
              style={{
                width: '4px',
                height: '18px',
                marginRight: '6px',
                background: 'rgb(228, 201, 173)',
              }}
            />
            <div>调理建议</div>
          </div>
          <div
            style={{
              backgroundColor: '#f1f1f1',
              padding: '12px',
              fontFamily: 'sans-serif',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                fontWeight: 500,
                color: '#000',
                fontSize: '18px',
              }}
            >
              总体建议
            </div>
            <Divider style={{ margin: '10px 0' }} />
            <Typography.Text style={{ fontSize: 16 }}>
              阳虚体质的鼻炎患者。调养关键在温阳、通阳。调养原则是温阳散寒，化痰通滞，以通鼻窍。重点在温运脾、肾、心的阳气。
            </Typography.Text>
          </div>
          <div
            style={{
              backgroundColor: '#f1f1f1',
              padding: '12px',
              fontFamily: 'sans-serif',
            }}
          >
            <div
              style={{
                fontWeight: 500,
                color: '#000',
                fontSize: '18px',
              }}
            >
              专科建议
            </div>
            <Divider style={{ margin: '10px 0' }} />
            <Typography.Text style={{ fontSize: 16 }}>
              鼻炎患者，多为阳虚体质，易患感冒。
            </Typography.Text>
          </div>
        </div>
      </div>
    </Container>
  );
};
