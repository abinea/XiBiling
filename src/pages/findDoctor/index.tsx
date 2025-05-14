import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/base/container';
import { LeftOutlined } from '@ant-design/icons';
import { Avatar, Button, Input, Typography } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { ChatMessage } from '../identify/chatMsg';

let timer: any = null;
export const FindDoctorPage = () => {
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState('');
  const [messages, setMessages] = useState([
    {
      msg: '你好，欢迎来到私人医生在线咨询平台，正在帮你连接医生，请稍后',
      self: false,
    },
    {
      msg: '您可以在下方先输入要咨询的问题，详细描写病症现象，帮助医生了解你的情况',
      self: false,
    },
    {
      msg: '使用中药洗鼻器后鼻痒症状有所减轻，但喷嚏、鼻涕还是比较多，该怎么办？',
      self: true,
    },
    {
      msg: '请具体描述一下鼻涕颜色和质地。是白稀还是黄稠？打喷嚏是什么时间比较频繁？我为您调整一下具体的洗鼻方案',
      self: false,
    },
    { msg: '有其他症状吗？', self: false },
  ]);

  const contentRef = useRef<HTMLDivElement | null>(null);

  const addMessage = () => {
    if (!inputVal.trim()) return;
    setMessages((prev) => {
      return [
        ...prev,
        {
          msg: inputVal,
          self: true,
        },
      ];
    });
    setInputVal('');
  };

  useEffect(() => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        });
      }
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [messages]);

  return (
    <>
      <Container
        style={{
          padding: '',
          paddingTop: '70px',
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
            <LeftOutlined
              onClick={() => {
                navigate(-1);
              }}
            />
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Avatar
                style={{
                  border: '1px solid rgba(0,0,0,0.1)',
                  background: '#fff',
                  color: '#1890ff',
                }}
              >
                医
              </Avatar>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginLeft: '10px',
                }}
              >
                <Typography.Text style={{ fontWeight: 500 }}>
                  医生
                </Typography.Text>
                <Typography.Text
                  style={{ fontSize: 12, color: 'rgba(0,0,0,0.65)' }}
                >
                  在线
                </Typography.Text>
              </div>
            </span>
            <Typography.Text style={{ fontSize: 12, fontWeight: 500 }}>
              评价/投诉
            </Typography.Text>
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Typography.Text style={{ fontSize: 12, color: '#e83f0e' }}>
            医生的建议仅供参考，未成年人请在家长引导下进行咨询！
          </Typography.Text>
        </div>
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} {...msg} man="医" />
        ))}
        <div ref={contentRef} style={{ width: '100%', height: '69px' }}></div>
      </Container>
      <div
        style={{
          display: 'flex',
          backgroundColor: '#fff',
          position: 'fixed',
          bottom: '0',
          width: '100%',
          padding: 12,
          boxSizing: 'border-box',
        }}
      >
        <Input
          style={{ backgroundColor: 'f1f1f1' }}
          placeholder="请输入您要咨询的问题"
          value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
        />
        <Button type="primary" style={{ marginLeft: 12 }} onClick={addMessage}>
          发送
        </Button>
      </div>
    </>
  );
};
