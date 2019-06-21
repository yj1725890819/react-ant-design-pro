import { queryEchartsTree, queryEchartsTable } from '@/services/echarts/tree';

export default {
  namespace: 'tree',

  state: {
    list: [],
  },

  effects: {
    *queryEchartsTree(_, { call, put }) {
      const response = yield call(queryEchartsTree);
      console.log(response);
      yield put({
        type: 'saveList',
        payload: Array.isArray(response) ? response : [],
      });
    },
    *queryEchartsTable(_, { call, put }) {
      const response = yield call(queryEchartsTable);
      console.log(response);
      yield put({
        type: 'saveList',
        payload: Array.isArray(response) ? response : [],
      });
    },
  },

  reducers: {
    saveList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
};
