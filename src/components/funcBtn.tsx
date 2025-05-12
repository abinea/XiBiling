import { Avatar } from 'antd';

interface DescriptionProps extends React.PropsWithChildren {
  icon?: string;
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
      <Avatar
        style={{
          backgroundColor: 'rgb(126, 169, 244)',
          color: '#fff',
          boxShadow: '0 0 0 2px #f0f0f0',
          marginBottom: '10px',
        }}
      >
        {props.icon}
      </Avatar>
      <span style={{ fontSize: '14px' }}>{props.text}</span>
    </div>
  );
};
