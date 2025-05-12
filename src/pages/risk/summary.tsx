import { Typography } from 'antd';

interface SummaryProps {
  name: string;
  desc: string;
}

export const Summary = ({ name, desc }: SummaryProps) => {
  return (
    <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 16 }}>
      <span
        style={{
          display: 'inline-block',
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: '#222',
          margin: '8px 0 0 10px',
        }}
      ></span>
      <div
        style={{
          width: 'calc(100% - 32px)',
          padding: '0 20px 0 10px',
        }}
      >
        <Typography.Text
          strong
          style={{ fontFamily: 'serif', fontWeight: 500, fontSize: 16 }}
        >
          {name}
        </Typography.Text>
        <span style={{ margin: '0 6px 0 2px' }}>:</span>
        <Typography.Text style={{ fontSize: 16, fontFamily: 'serif' }}>
          {desc}
        </Typography.Text>
      </div>
    </li>
  );
};
