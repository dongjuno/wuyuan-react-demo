import React, { Component } from 'react';
import './Add.css'
import { Input, Button } from 'antd';
import local from '../../utils/local'

const { TextArea } = Input;
class Add extends Component {
    constructor(props) {
        super(props)
        this.state={
            value:''
        }
    }
    onChange = e => {
        console.log('Change:', e.target.value);
        this.setState({
            value: e.target.value
        })
    };
    addData = () => {
        let data=this.props.data
        let value=this.state.value
        if(value){
            data.push({text:value,isTrue:true})
        }
        local.set('data',data)
        this.back()
        window.location.reload()
    }
    
    back = () => {
        document.querySelector('.add').style.display = 'none'
    }
    render() {
        return (
            <div className='add' style={{ display: 'none' }} >
                <div className='back'><span onClick={this.back}>&lt;</span></div>
                <TextArea placeholder="添加事项..." maxLength={50} onChange={this.onChange} className='text' />
                <Button type="primary" className='btn' onClick={this.addData}>添加</Button>
            </div>
        );
    }
}

export default Add;