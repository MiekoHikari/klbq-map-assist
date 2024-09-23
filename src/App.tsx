import { useState } from 'react';
import { Layout, Collapse, Typography, Select, Tooltip, Popover, Col, Row, Popconfirm } from '@douyinfe/semi-ui';
import { IconEdit, IconDelete, IconUndo } from '@douyinfe/semi-icons';
import ColorBtn from './components/colorBtb.tsx';

import './App.css';

function App() {
  const { Header, Footer, Sider, Content } = Layout;
  const commonStyle = {
    height: 64,
    lineHeight: '64px',
    background: 'var(--semi-color-fill-0)'
  };
  const { Title } = Typography;
  const [presentMap, setPresentMap] = useState("风曳镇");
  const [penColor, setpenColor] = useState("red");
  const [presentMapURL, setPresentMapURL] = useState("https://patchwiki.biligame.com/images/klbq/c/c2/5dzy2fxrj3ihqq2n9gfmpe2g91ofc0p.png");
  const mapList = [
    {
      mapName: "风曳镇",
      imgLink: "https://patchwiki.biligame.com/images/klbq/c/c2/5dzy2fxrj3ihqq2n9gfmpe2g91ofc0p.png"
    }, {
      mapName: "空间实验室",
      imgLink: "https://patchwiki.biligame.com/images/klbq/thumb/6/66/jth3bp2k8eopctdj42xo52fewsxci1s.png/800px-%E5%9C%B0%E5%9B%BE-%E7%A9%BA%E9%97%B4%E5%AE%9E%E9%AA%8C%E5%AE%A42.png"
    }, {
      mapName: "科斯迷特",
      imgLink: "https://patchwiki.biligame.com/images/klbq/thumb/c/c4/6pqvpjg5zvg14xtsydzeb95ok2ysq17.png/600px-%E5%9C%B0%E5%9B%BE-%E7%A7%91%E6%96%AF%E8%BF%B7%E7%89%B92.png"
    }, {
      mapName: "欧拉港口",
      imgLink: "https://patchwiki.biligame.com/images/klbq/thumb/2/29/cjlkwy6ikzo7pehy7xf7h5edfn8b5xt.png/600px-%E5%9C%B0%E5%9B%BE-oula-0.png"
    }, {
      mapName: "柯西街区",
      imgLink: "https://patchwiki.biligame.com/images/klbq/f/f6/jxevkldn7u4bx678t7hwqdcvxw7ta9m.png"
    }, {
      mapName: "88区",
      imgLink: "https://patchwiki.biligame.com/images/klbq/thumb/3/35/a1wr3rbkbabvf5ijojx4ow0nikeonhl.png/800px-%E5%9C%B0%E5%9B%BE-88area-0.png"
    }, {
      mapName: "404基地",
      imgLink: "https://patchwiki.biligame.com/images/klbq/thumb/8/8e/p8mgyehvp4ah71xc5txnmhbuwgarxku.png/800px-%E5%9C%B0%E5%9B%BE-base404-0.png"
    }
  ]
  const [togglevisible, setToggleVisible] = useState(false);

  const changePresentmap = (value: any) => {
    setPresentMap(value);
    for (const mapinfo of mapList) {
      if (mapinfo.mapName === value) {
        setPresentMapURL(mapinfo.imgLink);
      }
    }
  }

  const article = <div className="grid grid-flex">
    <Row gutter={[16, 24]} type="flex" justify="space-around" align="middle" style={{ marginLeft: "25px" }}>
      <Col span={4}>
        <div className="col-content" onClick={() => { setpenColor("red") }}><ColorBtn color="red" /></div>
      </Col>
      <Col span={4}>
        <div className="col-content" onClick={() => { setpenColor("orange") }}><ColorBtn color="orange" /></div>
      </Col>
      <Col span={4}>
        <div className="col-content" onClick={() => { setpenColor("yellow") }}><ColorBtn color="yellow" /></div>
      </Col>
      <Col span={4}>
        <div className="col-content" onClick={() => { setpenColor("green") }}><ColorBtn color="green" /></div>
      </Col>
      <Col span={4}>
        <div className="col-content" onClick={() => { setpenColor("blue") }}><ColorBtn color="blue" /></div>
      </Col>
      <Col span={4}>
        <div className="col-content" onClick={() => { setpenColor("purple") }}><ColorBtn color="purple" /></div>
      </Col>
      <Col span={4}>
        <div className="col-content" onClick={() => { setpenColor("white") }}><ColorBtn color="white" /></div>
      </Col>
      <Col span={4}>
        <div className="col-content" onClick={() => { setpenColor("rgba(var(--semi-grey-0), 1)") }}><ColorBtn color="rgba(var(--semi-grey-0), 1)" /></div>
      </Col>
      <Col span={4}>
        <div className="col-content" onClick={() => { setpenColor("rgba(var(--semi-grey-2), 1)") }}><ColorBtn color="rgba(var(--semi-grey-2), 1)" /></div>
      </Col>
      <Col span={4}>
        <div className="col-content" onClick={() => { setpenColor("rgba(var(--semi-grey-4), 1)") }}><ColorBtn color="rgba(var(--semi-grey-4), 1)" /></div>
      </Col>
      <Col span={4}>
        <div className="col-content" onClick={() => { setpenColor("rgba(var(--semi-grey-6), 1)") }}><ColorBtn color="rgba(var(--semi-grey-6), 1)" /></div>
      </Col>
      <Col span={4}>
        <div className="col-content" onClick={() => { setpenColor("rgba(var(--semi-grey-8), 1)") }}><ColorBtn color="rgba(var(--semi-grey-8), 1)" /></div>
      </Col>
    </Row>
  </div>;


  const canvasToolBtnStyle = {
    borderRadius: "100%",
    margin: "5px",
    width: "50px",
    height: "50px",
    display: 'flex',
    placeItems: 'center',
    placeContent: 'center',
    backgroundColor: "rgba(var(--semi-grey-0), 1)",
    boxShadow: "0 0 0 3px rgba(var(--semi-grey-1), 1)",
    marginTop: "35px",
  }

  return (
    <Layout className="components-layout-demo" style={{ height: 720, width: 1280 }}>
      <Header style={commonStyle}>
        <Title heading={3} style={{ margin: '14px 0' }} >卡拉彼丘地图助手 - {presentMap}</Title>
      </Header>
      <Layout>
        <Sider style={{ width: '180px', background: 'var(--semi-color-fill-2)' }}>
          <Collapse accordion defaultActiveKey="1">
            <Collapse.Panel header="地图设置" itemKey="1">
              <p>
                <Select defaultValue="风曳镇" style={{ width: 120 }} onChange={changePresentmap}>
                  <Select.Option value="风曳镇">风曳镇</Select.Option>
                  <Select.Option value="空间实验室">空间实验室</Select.Option>
                  <Select.Option value="科斯迷特">科斯迷特</Select.Option>
                  <Select.Option value="欧拉港口">欧拉港口</Select.Option>
                  <Select.Option value="柯西街区">柯西街区</Select.Option>
                  <Select.Option value="88区">88区</Select.Option>
                  <Select.Option value="404基地">404基地</Select.Option>
                </Select>
              </p>
            </Collapse.Panel>
            <Collapse.Panel header="超弦体" itemKey="2">
              <p>Hi, bytedance dance dance. This is the docsite of Semi UI. </p>
            </Collapse.Panel>
            <Collapse.Panel header="技能" itemKey="3">
              <p>Hi, bytedance dance dance. This is the docsite of Semi UI. </p>
            </Collapse.Panel>
            <Collapse.Panel header="战术道具" itemKey="4">
              <p>Hi, bytedance dance dance. This is the docsite of Semi UI. </p>
            </Collapse.Panel>
          </Collapse>
        </Sider>
        <Content style={{ height: "100%", lineHeight: '100px', width: '100%', margin: 'auto', display: 'flex', placeItems: 'center' }}>
          <img src={presentMapURL} style={{ height: "700px", marginLeft: "100px" }}></img>
          <div style={{ position: "relative", top: "15%", right: "-200px", width: "58px", height: "max" }}>
            <Tooltip content={'画笔'}><div style={canvasToolBtnStyle}><IconEdit size='extra-large' /></div></Tooltip>
            <Popover
              content={article}
              position={"left"}
            >
              <div style={canvasToolBtnStyle}><ColorBtn color={penColor} /></div>
            </Popover>
            <Tooltip content={'撤销'}><div style={canvasToolBtnStyle}><IconUndo size='extra-large' /></div></Tooltip>
            <Tooltip content={'清屏'}><Popconfirm
              visible={togglevisible}
              title="确认清除所有笔迹？"
              content="此修改将不可逆"
              onConfirm={() => { setToggleVisible(!togglevisible) }}
              onCancel={() => { setToggleVisible(!togglevisible) }}
            >
              <div onClick={() => setToggleVisible(!togglevisible)} style={canvasToolBtnStyle}><IconDelete size='extra-large' /></div>
            </Popconfirm></Tooltip>
          </div>
        </Content>
      </Layout>
      <Footer style={commonStyle}>©番石榴网络科技工作室 2020-2024</Footer>
    </Layout >
  )
}

export default App
