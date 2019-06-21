import React,{Component} from 'react';
import {Card} from 'antd';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi-plugin-react/locale';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
// import 'echarts/lib/Component/tooltip';
// import 'echarts/lib/Component/title';

@connect(({ tree, loading }) => ({
    tree,
    loading: loading.models.tree,
  }))
   class EchartsTable extends Component
{
    constructor()
    {
        super();
        this.state={
        }
    }

    componentDidMount(){
      const{dispatch}=this.props;
      dispatch({
          type:'tree/queryEchartsTable'
        }).then(()=>{
          const {tree:{list}}=this.props;
          console.log(list);
          const myChart=echarts.init(document.getElementById('main'));
          myChart.setOption({
                  title:{text:'echart'},
                  tooltip:{},
                  legend:{orient:'vertical'},
                  xAxis:{data:["衬衫","羊毛衫","牛仔裤","高跟鞋","袜子","中山装"]},
                  yAxis:{},
                  series:[{
                          name:'销量',
                          type:'bar',
                          data:list,
                      }]
              }
          )
        })
    }

    render()
    {
        return( 
          <PageHeaderWrapper
            title={<FormattedMessage id="app.echarts.table.title" />}
          >  
            <Card bordered={false}>
              <div id="main" style={{width:400, height:400}} />
            </Card>
          </PageHeaderWrapper>
        );
    }

}
export default EchartsTable;