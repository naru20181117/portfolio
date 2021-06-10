module.exports = {
  devServer: {
    host: "localhost",
    proxy: {
      "https://note.com/api/v2/creators/naru_note/contents?kind=note&page=1/": {
        target: "http://localhost:8080",
      }
    }
  },

  transpileDependencies: [
    'vuetify'
  ]
};
