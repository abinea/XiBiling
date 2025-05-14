import { EyeFilled } from '@ant-design/icons';
import { Image, Typography } from 'antd';
interface ParticleProps extends React.PropsWithChildren {
  icon?: string;
  backgroundColor?: string;
  title?: string;
  description?: string;
  tag?: string;
  hasReadCount?: number;
  cover?: string;
}

export const Particle = (props: ParticleProps) => {
  return (
    <div
      style={{
        borderRadius: '8px',
        display: 'flex',
        backgroundColor: '#fff',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '16px',
        marginBottom: '10px',
      }}
    >
      <div style={{ fontSize: 14, fontWeight: '700', marginBottom: '10px' }}>
        {props.title}
      </div>
      <div
        style={{
          fontSize: 12,
          marginBottom: '10px',
          color: 'rgb(153, 153, 153)',
        }}
      >
        {props.description}
      </div>
      <div style={{ width: '100%', height: '160px', marginBottom: '10px' }}>
        <Image
          style={{
            borderRadius: '4px',
          }}
          preview={false}
          width={'100%'}
          height={'100%'}
          src={props.cover}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '10px',
        }}
      >
        <Typography.Link style={{ fontSize: 12 }}>
          {props.tag ? '#' + props.tag : ''}
        </Typography.Link>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <EyeFilled style={{ color: 'rgb(0,0,0,0.65)', marginRight: '6px' }} />
          <Typography.Text style={{ fontSize: 12, color: 'rgba(0,0,0,0.65)' }}>
            {props.hasReadCount ? props.hasReadCount : 0}人已阅读
          </Typography.Text>
        </div>
      </div>
    </div>
  );
};
