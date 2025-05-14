import { Image, Typography } from 'antd';
import Cover from '../assets/home/cover.png';

interface ParticleProps extends React.PropsWithChildren {
  icon?: string;
  backgroundColor?: string;
  title?: string;
  description?: string;
  tag?: string;
  hasReadCount?: number;
}

export const ShortParticle = (props: ParticleProps) => {
  return (
    <div
      style={{
        borderRadius: '8px',
        display: 'flex',
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginBottom: '10px',
      }}
    >
      <div
        style={{
          padding: '14px',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography.Text
          style={{ fontSize: 16, fontWeight: '700', marginBottom: '10px' }}
        >
          {props.title}
        </Typography.Text>
        <Typography.Text
          style={{
            fontSize: 13,
            color: 'rgb(153, 153, 153)',
          }}
        >
          {props.description}
        </Typography.Text>
      </div>
      <div style={{ width: '80%', height: '100%' }}>
        <Image
          style={{
            borderRadius: '4px',
          }}
          preview={false}
          width={'100%'}
          height={'100%'}
          src={Cover}
        />
      </div>
    </div>
  );
};
