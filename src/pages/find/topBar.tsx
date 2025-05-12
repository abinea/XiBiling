import { UnorderedListOutlined } from '@ant-design/icons';
import { Tag } from 'antd';

const tags = [
  {
    label: '全部',
    key: '0',
  },
  {
    label: '鼻窦炎',
    key: '1',
  },
  {
    label: '鼻息肉',
    key: '2',
  },
  {
    label: '中耳炎',
    key: '3',
  },
];

export const TopBar = () => {
  return (
    <div style={{ position: 'relative' }}>
      {tags.map((tag) => {
        return (
          <Tag
            style={{
              borderRadius: '10px',
              border: 0,
              backgroundColor: '#f1f1f1',
              padding: '3px 10px',
              color: '#666',
            }}
            key={tag.key}
          >
            {tag.label}
          </Tag>
        );
      })}
      <span
        style={{
          position: 'fixed',
          right: '0px',
          width: '36px',
          height: '22px',
          padding: '3px 0',
        }}
      >
        <UnorderedListOutlined />
      </span>
    </div>
  );
};
