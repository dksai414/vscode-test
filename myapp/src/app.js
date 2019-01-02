

 export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
    initialState: {
      products: [
        { name: 'dva',dml:8911, id: 1 },
        { name: 'antd',dml:98, id: 2 },
      ],
    },
  },
};

