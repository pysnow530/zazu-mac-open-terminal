const exec = require('child_process').exec

module.exports = (pluginContext) => {
  return (command, env = {}) => {
    return new Promise((resolve, reject) => {
      exec(command)
    })
  }
}
