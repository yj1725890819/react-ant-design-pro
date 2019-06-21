import request from '@/utils/request';

export async function queryEchartsTree() {
    return request('/api/echarts/tree');
  }
  export async function queryEchartsTable() {
    return request('/api/echarts/table');
  }
  