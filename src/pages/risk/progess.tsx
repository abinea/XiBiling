import { Progress, Typography } from 'antd';

interface ProgessProps {
  percent: number;
  remark: string;
}

export const Progess = ({ percent, remark }: ProgessProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Progress size={'small'} type="circle" percent={percent} />
      <Typography.Text style={{ marginTop: '10px' }}>{remark}</Typography.Text>
    </div>
  );
};
