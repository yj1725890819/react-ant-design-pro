import React, { Component } from 'react';
import { Table, Radio, Card } from 'antd';
import {connect} from 'dva';

const RadioGroup = Radio.Group;
@connect(({ test, loading }) => ({
    test,
    loading: loading.models.test,
  }))
class CrccTable extends Component {
    constructor() {
        super();
        this.state = {
            radioValue: {},
            dataSource: [],
            pagination: {
                total: '10',
                pageSize: '10',
            },
        };
    }

componentDidMount(){
    const {dispatch}=this.props;
    dispatch({
        type:'test/queryTableData',
    }).then(()=>{
 const{test:{dataSource}}=this.props;
 this.setState({dataSource});
    });
}

    onChange = e => {
        this.setState({ radioValue: e.target.value });
    }

    render() {
        const { radioValue, dataSource, pagination } = this.state;
        const columns = [
            {
                title: '选择',
                dataIndex: 'choice',
                render: record => {
                    return (
                      <span>
                        <RadioGroup onChange={e => this.onChange(e)} value={radioValue}>
                          <Radio value={record} />
                        </RadioGroup>
                      </span>
                    );
                },
            },
            {
                title: '编号',
                dataIndex: 'id',
            },
            {
                title: '客户号',
                dataIndex: 'custNo',
            },
            {
                title: '客户名称',
                dataIndex: 'custNm',
            }

        ];
        const showTotal = () => {
            return '总共10条记录，第1/1页';
        }
        return (
          <Card title="测试">
            <Table
              columns={columns}
              dataSource={dataSource}
            />
          </Card>
        );


    }
}
export default CrccTable;