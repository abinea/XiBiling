import { Image } from 'antd';
import './index.css';

interface DescriptionProps extends React.PropsWithChildren {
  icon?: string;
  backgroundColor?: string;
  title?: string;
  size?: 'default' | 'lg';
  description?: string;
  hl?: boolean;
  onClick?: () => void;
}

export const Description = (props: DescriptionProps) => {
  return (
    <div
      style={{
        height: '70px',
        boxSizing: 'border-box',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'start',
        padding: '8px 10px',
      }}
      onClick={props.onClick}
    >
      <Image
        preview={false}
        width={42}
        height={42}
        src={props.icon}
        style={{
          objectFit: 'cover',
        }}
      />
      <div style={{ marginLeft: '8px' }}>
        <div
          style={{
            fontSize: props.size === 'lg' ? 14 : 13,
            fontWeight: '700',
            marginBottom: '8px',
          }}
        >
          {props.title}
        </div>
        <div
          className={props.hl ? 'description-highlight' : ''}
          style={{
            fontSize: 11,
            // 灰色
            color: 'rgb(153, 153, 153)',
          }}
        >
          {props.description}
        </div>
      </div>
    </div>
  );
};
