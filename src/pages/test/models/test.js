import { queryTableData } from '@/services/springboot/test';

export default {
  namespace: 'test',

  state: {
    dataSource: [],
  },
  effects: {
    *queryTableData(_, { call, put }) {
      const response = yield call(queryTableData);
      console.log(response);
      yield put({
        type: 'saveList',
        payload: Array.isArray(response) ? response : [],
      });
    },
    // *queryEchartsTable(_, { call, put }) {
    //   const response = yield call(queryEchartsTable);
    //   console.log(response);
    //   yield put({
    //     type: 'saveList',
    //     payload: Array.isArray(response) ? response : [],
    //   });
    // },
  },

  reducers: {
    saveList(state, action) {
      return {
        ...state,
        dataSource: action.payload,
      };
    },
  },
};
