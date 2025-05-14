import { Image } from 'antd';

interface DescriptionProps extends React.PropsWithChildren {
  icon?: any;
  backgroundColor?: string;
  text?: string;
  onClick?: () => void;
}

export const FuncButton = (props: DescriptionProps) => {
  return (
    <div
      style={{
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
      onClick={props.onClick}
    >
      <Image
        preview={false}
        width={52}
        height={48}
        src={props.icon}
        style={{
          objectFit: 'cover',
        }}
      />
      <span style={{ fontSize: '14px', marginTop: '2px' }}>{props.text}</span>
    </div>
  );
};
