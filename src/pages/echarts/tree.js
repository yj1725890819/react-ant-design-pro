import React, { Component } from 'react';
import { Card } from 'antd';
import Echart from 'echarts-for-react';
import { formatMessage, FormattedMessage } from 'umi-plugin-react/locale';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
// import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/tree';
import { connect } from 'dva';
// import 'echarts/lib/Component/toolbox';
// import 'echarts/lib/Component/title';
import { relative } from 'path';

// @connect(({ tree, loading }) => ({
//     tree,
//     loading: loading.models.tree,
//   }))
class EchartsTree extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
        }
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'tree/queryEchartsTree'
        }).then(() => {
            const { treedata } = this.props;
            const { list } = treedata;
            this.setState({ list });
        })
        // const myChart=echarts.init(document.getElementById('main'));
    }

    render() {
        const { list } = this.state;
        console.log(list);
        const option = {
            title: { text: 'NBA季后赛' },
            tooltip: { trigger: 'item', formatter: "{b}:{c}" },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    restore: { show: true },
                    saveAsImage: { show: true },
                }
            },
            calculable: false,
            series: [
                {
                    name: '树图',
                    type: 'tree',
                    orient: 'vertical',
                    rootLocation: { x: 100, y: '60%' },
                    nodePadding: 10,
                    symbolSize: 40,
                    itemStyle: {
                        normal: {
                            lable: {
                                show: true,
                                postition: 'inside',
                                textStyle: {
                                    color: '#cc9999',
                                    fontSize: 15,
                                    fontWeight: 'bolder',
                                }
                            },
                            lineStyle: {
                                color: '#000',
                                width: 1,
                                type: 'broken',
                            }
                        },
                        emphasis: {
                            lable: { show: true },
                        }
                    },
                    data: list ,

                }]
        };
        return (
          <PageHeaderWrapper
            title={<FormattedMessage id="app.echarts.table.title" />}
          >
            <Card>
              <Echart
                option={option}
                style={{ width: '100%', height: '1000px', postition: relative }}
              />
            </Card>
          </PageHeaderWrapper>
        );
    }

}
function mapStateToProps(state) {
    return {
        treedata: state.tree,
    };
}
export default connect(mapStateToProps)(EchartsTree);