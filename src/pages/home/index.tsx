import { Image, Input, Tabs, Typography } from 'antd';
import './index.css';
import { MessageFilled, SearchOutlined } from '@ant-design/icons';
import { FuncButton } from '../../components/funcBtn';
import { Description } from '../../components/description';
import { useState } from 'react';
import { Container } from '../../components/base/container';
import { useNavigate } from 'react-router-dom';
import { ShortParticle } from '../../components/shortPaticle';
import CoverImg from '../../assets/home/top-cover.png';
import Tizhi from '../../assets/home/tizhi.png';
import Fengxian from '../../assets/home/fengxian.png';
import Doctor from '../../assets/home/doctor.png';
import BuyMedical from '../../assets/home/buy-medical.png';
import Wenzhen from '../../assets/home/wenzhen.png';
import Wash from '../../assets/home/wash.png';
import WashTool from '../../assets/home/wash-tool.png';
import Bihoukepu from '../../assets/home/bihoukepu.png';
import Mart from '../../assets/home/mart.png';

export const HomePage = () => {
  const [activeKey, setActiveKey] = useState(0);
  const navigate = useNavigate();
  const getFontSize = (key: number, self: number) => {
    if (key === self) {
      return 16;
    } else {
      return 14;
    }
  };

  const particles = [
    {
      key: '0',
      label: (
        <Typography.Title
          level={5}
          style={{
            marginBottom: 0,
            fontWeight: '400',
            fontSize: getFontSize(activeKey, 0),
          }}
        >
          健康百科
        </Typography.Title>
      ),
      children: (
        <ShortParticle
          title={`"治鼻要药"五道食疗`}
          description="祛风寒、通鼻窍、治鼻炎的香草———白芷"
        />
      ),
    },
    {
      key: '1',
      label: (
        <Typography.Title
          level={5}
          style={{
            marginBottom: 0,
            fontWeight: '400',
            fontSize: getFontSize(activeKey, 1),
          }}
        >
          热门话题
        </Typography.Title>
      ),
      children: (
        <ShortParticle
          title={`"治鼻要药"五道食疗`}
          description="祛风寒、通鼻窍、治鼻炎的香草———白芷"
        />
      ),
    },
    {
      key: '2',
      label: (
        <Typography.Title
          level={5}
          style={{
            marginBottom: 0,
            fontWeight: '400',
            fontSize: getFontSize(activeKey, 2),
          }}
        >
          医疗保险
        </Typography.Title>
      ),
      children: (
        <ShortParticle
          title={`"治鼻要药"五道食疗`}
          description="祛风寒、通鼻窍、治鼻炎的香草———白芷"
        />
      ),
    },
    {
      key: '3',
      label: (
        <Typography.Title
          level={5}
          style={{
            marginBottom: 0,
            fontWeight: '400',
            fontSize: getFontSize(activeKey, 3),
          }}
        >
          养生攻略
        </Typography.Title>
      ),
      children: (
        <ShortParticle
          title={`"治鼻要药"五道食疗`}
          description="祛风寒、通鼻窍、治鼻炎的香草———白芷"
        />
      ),
    },
  ];

  return (
    <Container>
      {/* header */}
      <div>
        <div className="home-container">
          <Typography.Title
            level={5}
            style={{ lineHeight: '32px', marginBottom: '0px' }}
          >
            鼻康灵
          </Typography.Title>
          <MessageFilled
            style={{ fontSize: '22px', color: 'rgb(127, 160, 250)' }}
            onClick={() => {
              navigate('/find-doctor');
            }}
          />
        </div>
        <Input
          className="home-header-search"
          prefix={<SearchOutlined />}
          styles={{
            prefix: {
              width: 16,
            },
            input: {
              display: 'inline-block',
              textAlign: 'center',
              width: 'fit-content',
            },
          }}
          placeholder={'搜索疾病或药品'}
        />
        <Image
          preview={false}
          className="home-header-img"
          width={'100%'}
          height={100}
          src={CoverImg}
        />
        <div className="home-header-funcs-block">
          <FuncButton
            icon={Tizhi}
            text="体质辨识"
            onClick={() => {
              navigate('/identify');
            }}
          />
          <FuncButton
            icon={Fengxian}
            text="风险筛查"
            onClick={() => {
              navigate('/risk');
            }}
          />
          <FuncButton
            icon={Doctor}
            text="寻医无忧"
            onClick={() => {
              navigate('/find-doctor');
            }}
          />
        </div>
        <div className="home-header-funcs-uni">
          <Description
            icon={BuyMedical}
            title="快速购药"
            description="同城极速送达"
            size="lg"
          />
          <Description
            icon={Wenzhen}
            title="咨询问诊"
            description="医生在线解答"
            size="lg"
          />
        </div>
        <Typography.Title level={5}>热门服务</Typography.Title>
        <div className="home-header-funcs-uni">
          <Description
            icon={Wash}
            title="智能洗鼻助理"
            description="私人医生回电"
            hl={true}
          />
          <Description
            icon={WashTool}
            title="洗鼻器保养教程"
            description="专家跨度回复"
            hl={true}
          />
          <Description
            icon={Bihoukepu}
            title="耳鼻喉健康科普"
            description="专业医生诊断"
            hl={true}
          />
          <Description
            icon={Mart}
            title="健康商城"
            description="要求快速到达"
            hl={true}
            onClick={() => {
              navigate('/mart');
            }}
          />
        </div>
        <Tabs
          activeKey={activeKey.toString()}
          indicator={{
            size: 40,
          }}
          onChange={(key) => {
            setActiveKey(+key);
          }}
          items={particles}
        />
      </div>
    </Container>
  );
};
