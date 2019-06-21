import request from '@/utils/request';

export async function queryTableData() {
    console.log('sssssssssssssssssssssssssssss');
    return request('/api/yj/hello',{
    method:'GET',
    });
  }