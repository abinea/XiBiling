import { Divider } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useEffect, useRef, useState } from 'react';
import { Container } from '../../components/base/container';
import { ChatMessage } from './chatMsg';
import './index.css';
import { useNavigate } from 'react-router-dom';

const choices = [
  { label: '没有', value: 0 },
  { label: '很少', value: 1 },
  { label: '有时', value: 2 },
  { label: '经常', value: 3 },
  { label: '总是', value: 4 },
];

const messages = [
  {
    msg: '皂角刺中药洗鼻剂',
    self: false,
  },
  {
    msg: '皂角刺中药洗鼻剂',
    self: true,
  },
  {
    msg: '皂角刺中药洗鼻剂',
    self: false,
  },
  {
    msg: '皂角刺中药洗鼻剂',
    self: false,
  },
];

const questionList = [
  '您平时痰多，特别是咽喉部总感到有痰堵着吗？',
  '您是否经常感到口干舌燥？',
  // 可继续添加更多问题
];

let timer: any = null;
export const IdentifyPage = () => {
  const navigate = useNavigate();
  const [showBottom, setShowBottom] = useState(false);
  const [messages, setMessages] = useState([
    // { msg: '皂角刺中药洗鼻剂', self: false },
    // { msg: '皂角刺中药洗鼻剂', self: false },
    // { msg: '皂角刺中药洗鼻剂', self: false },
    // { msg: '皂角刺中药洗鼻剂', self: false },
    // { msg: '皂角刺中药洗鼻剂', self: true },
    // { msg: '皂角刺中药洗鼻剂', self: true },
  ]);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [questionFade, setQuestionFade] = useState(true);
  const [questionFinished, setQuestionFinished] = useState(false);
  const msgListRef = useRef(null);

  useEffect(() => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      setShowBottom(true);
    }, 200);
    if (msgListRef.current) {
      msgListRef.current.scrollTop = msgListRef.current.scrollHeight;
    }
  }, []);

  // 追加消息并切换问题
  const handleChoiceClick = (choice) => {
    setMessages((prev) => [
      ...prev,
      // 记录下问题
      { msg: questionList[questionIdx], self: false },
      { msg: choice.label, self: true },
    ]);
    setQuestionFade(false);
    setTimeout(() => {
      if (questionFinished) return;
      if (questionIdx + 1 >= questionList.length) {
        setQuestionFinished(true);
        setShowBottom(false);
        return;
      }
      setQuestionIdx((idx) => idx + 1);
      setQuestionFade(true);
    }, 400); // 动画时长
    setTimeout(() => {
      if (msgListRef.current) {
        msgListRef.current.scrollTop = msgListRef.current.scrollHeight;
      }
    }, 600);
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
          <ArrowLeftOutlined />
          <span style={{ marginRight: '12px' }}>AI体质检测系统</span>
          <div></div>
        </div>
      </div>
      <div
        ref={msgListRef}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '0',
          height: showBottom ? 'calc(100vh - 323px)' : 'calc(100vh - 126px)',
          overflowY: 'auto',
          transition: 'height 0.6s',
        }}
      >
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} {...msg} />
        ))}
      </div>
      <div
        style={{
          position: 'fixed',
          left: 0,
          bottom: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            background: '#fff',
            color: 'rgba(0,0,0,0.85)',
            borderRadius: '18px 18px 0 0',
            padding: '16px 32px',
            fontSize: '14px',
            boxShadow: '0 -2px 16px rgba(0,0,0,0.15)',
            width: '100%',
            margin: '0 10px',
            textAlign: 'center',
            transform: showBottom ? 'translateY(0)' : 'translateY(100%)',
            opacity: showBottom ? 1 : 0,
            transition: 'transform 0.6s cubic-bezier(.4,0,.2,1), opacity 0.6s',
            pointerEvents: 'auto',
          }}
        >
          {/* 问题淡入淡出动画 */}
          <div
            style={{
              fontSize: 14,
              marginBottom: 8,
              opacity: questionFade ? 1 : 0,
              transition: 'opacity 0.4s',
              minHeight: 20,
              width: '100%',
            }}
          >
            {questionList[questionIdx]}
          </div>
          <Divider style={{ margin: '12px 0' }} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              alignItems: 'center',
            }}
          >
            {choices.map((choice) => (
              <div
                className="identify-choice"
                key={choice.value}
                onClick={() => handleChoiceClick(choice)}
                style={{ cursor: 'pointer' }}
              >
                {choice.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {questionFinished && (
        <div
          style={{
            position: 'fixed',
            left: 0,
            bottom: 0,
            width: '100%',
            background: '#fff',
            padding: '16px 0',
            textAlign: 'center',
            boxShadow: '0 -2px 16px rgba(0,0,0,0.08)',
            zIndex: 1000,
          }}
        >
          <button
            style={{
              width: '94%',
              height: 48,
              background: 'rgba(22, 119, 255,0.85)',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              fontSize: 16,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(22,119,255,0.08)',
              transition: 'background 0.2s',
            }}
            onClick={() => {
              navigate('/report');
            }}
          >
            点击继续完善体质报告
          </button>
        </div>
      )}
    </Container>
  );
};
