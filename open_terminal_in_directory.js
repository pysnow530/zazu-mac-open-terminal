module.exports = (pluginContext) => {
  return (command, env = {}) => {
    return new Promise((resolve, reject) => {
      exec(command)
    })
  }
}
