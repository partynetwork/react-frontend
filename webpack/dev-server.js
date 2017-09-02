const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const chalk = require('chalk')
const ip = require('ip')

const host = 'localhost'
const port = process.env.PORT || 3000
const divider = chalk.gray('\n-----------------------------------')

const server = new WebpackDevServer(webpack(require('./dev.config')), {
  stats: {
    colors: true,
  },
  historyApiFallback: true,
  hot: true,
})

server.listen(port, '0.0.0.0', () => {
  console.log(`
    ${chalk.bold('Access URLs:')}${divider}
    Localhost: ${chalk.magenta(`http://${host}:${port}`)}
          LAN: ${chalk.magenta(`http://${ip.address()}:${port}`)}
          ${divider}
    ${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}`)
})
