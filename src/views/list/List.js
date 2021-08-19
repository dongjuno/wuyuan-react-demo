import { List, Button } from 'antd';
import React from 'react';
import './List.css'
import local from '../../utils/local'
import Add from '../add/Add'

export default class LoadMoreList extends React.Component {
  state = {
    data: [
      { text: '1 Racing car sprays burning fuel into crowd.', isTrue: true },
      { text: '2 Racing car sprays burning fuel into crowd.', isTrue: true },
      { text: '3 Racing car sprays burning fuel into crowd.', isTrue: true },
      { text: '4 Racing car sprays burning fuel into crowd.', isTrue: true },
      { text: '5 Racing car sprays burning fuel into crowd.', isTrue: true },
      { text: '6 Racing car sprays burning fuel into crowd.', isTrue: true },
      { text: '7 Racing car sprays burning fuel into crowd.', isTrue: true },
      { text: '8 Racing car sprays burning fuel into crowd.', isTrue: true },
      { text: '9 Racing car sprays burning fuel into crowd.', isTrue: true },
      { text: '10 Racing car sprays burning fuel into crowd.', isTrue: true },
      { text: '11 Racing car sprays burning fuel into crowd.', isTrue: true },
      { text: '12 Racing car sprays burning fuel into crowd.', isTrue: true },
    ],
  };
  componentDidMount() {
    let newData = local.get('data')
    if (newData) {
      this.setState({
        data: newData
      })
    } else {
      local.set('data', this.state.data)
    }
    console.log(this.state.data)
  }


  eaitData = (index) => {
    let newData = this.state.data.map((v, i) => {
      if (i === index) {
        v.isTrue = !v.isTrue
        v.text = document.querySelectorAll('.input')[index].value
      }
      return v
    })
    local.set('data', newData)
    this.setState({
      data: newData
    })
  }


  clearData = (index) => {
    this.state.data.splice(index, 1)
    let newData = this.state.data
    local.set('data', newData)
    this.setState({
      data: newData
    })
  }
  openAdd = () => {
    document.querySelector('.add').style.display = 'block'
  }


render() {

  return (
    <div>
      <List
        size="small"
        className='list-warpper'
        header={<div className='header'><p>代办事项</p><Button onClick={this.openAdd}>添加</Button></div>}
        bordered
        dataSource={this.state.data}
        renderItem={(item, i) =>
          <List.Item className='lists'
            actions={[<Button onClick={() => { this.eaitData(i) }}>{item.isTrue ? '编辑' : '完成'}</Button>, <Button onClick={() => { this.clearData(i) }}>删除</Button>]}
          >
            <div className='content'>
              <p className='text' style={{ display: item.isTrue ? 'block' : 'none' }}>{item.text}</p>
              <input type="text" defaultValue={item.text} style={{ display: item.isTrue ? 'none' : 'block' }} className='input'/>
            </div>
          </List.Item>
        }
      />
      <Add data={this.state.data} />
    </div>

  );
}
}


