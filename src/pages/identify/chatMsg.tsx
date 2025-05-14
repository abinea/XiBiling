import { Avatar } from 'antd';

interface IChatMessage {
  msg: string;
  self?: boolean;
  man?: string;
}

export const ChatMessage = (props: IChatMessage) => {
  const { msg, self = false, man = '医' } = props;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: self ? 'row-reverse' : 'row',
        padding: '12px',
        alignItems: 'flex-start',
        justifyContent: self ? 'end' : 'start',
      }}
    >
      <Avatar
        style={{
          background: self ? '#1890ff' : '#fff',
          color: self ? '#fff' : '#1890ff',
        }}
      >
        {self ? '我' : man}
      </Avatar>
      <div
        style={{
          marginLeft: self ? 0 : '12px',
          marginRight: self ? '12px' : 0,
          maxWidth: '80%',
          position: 'relative',
        }}
      >
        <div
          style={{
            background: self ? '#1890ff' : '#fff',
            padding: '12px 16px',
            borderRadius: '18px',
            borderTopRightRadius: self ? '4px' : '18px',
            borderTopLeftRadius: self ? '18px' : '4px',
            wordBreak: 'break-word',
            fontSize: '14px',
            lineHeight: '1.5',
            color: self ? '#fff' : 'rgba(0,0,0,0.85)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            position: 'relative',
          }}
        >
          <div
            style={
              self
                ? {
                    position: 'absolute',
                    right: '-8px',
                    top: '12px',
                    width: 0,
                    height: 0,
                    borderTop: '8px solid transparent',
                    borderLeft: '8px solid #1890ff',
                    borderBottom: '8px solid transparent',
                  }
                : {
                    position: 'absolute',
                    left: '-8px',
                    top: '12px',
                    width: 0,
                    height: 0,
                    borderTop: '8px solid transparent',
                    borderRight: '8px solid #fff',
                    borderBottom: '8px solid transparent',
                  }
            }
          />
          {msg}
        </div>
      </div>
    </div>
  );
};
