module.exports = {
    publicPath: '/Instant-Cash/',
    chainWebpack: config => {
        config
        .plugin('html')
        .tap(args => {
          args[0].title = 'Instant Cash: Una app para convertir dinero en dinero';
          return args
        })
      }
}
