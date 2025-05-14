import { Image } from 'antd';
interface ParticleProps extends React.PropsWithChildren {
  icon?: string;
  backgroundColor?: string;
  title?: string;
  description?: string;
}

export const Particle = (props: ParticleProps) => {
  return (
    <div
      style={{
        height: '100px',
        borderRadius: '8px',
        display: 'flex',
        backgroundColor: '#fff',
        justifyContent: 'center',
      }}
    >
      <div style={{ padding: '16px 8px 16px 16px' }}>
        <div style={{ fontSize: 16, fontWeight: '700', marginBottom: '8px' }}>
          {props.title}
        </div>
        <div
          style={{
            fontSize: 12,
            // 灰色
            color: 'rgb(153, 153, 153)',
          }}
        >
          {props.description}
        </div>
      </div>
      <div style={{ width: '40%', height: '98%' }}>
        <Image
          preview={false}
          style={{
            borderRadius: '4px',
          }}
          width={'100%'}
          height={'100%'}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </div>
    </div>
  );
};
