const exec = require('child_process').exec
const path = require('path')

module.exports = (pluginContext) => {
  const appleScriptTerminal = path.join(pluginContext.cwd, 'open_terminal_in_directory.scpt')
  const appleScriptITerm2 = path.join(pluginContext.cwd, 'open_iterm2_in_directory.scpt')
  const cmd = {
    terminal: `osascript ${appleScriptTerminal}`,
    iterm2: `osascript ${appleScriptITerm2}`,
  }
  return (dir, env) => {
    const command = (cmd[env.terminal] || cmd.terminal) + ' ' + dir
    return new Promise((resolve) => {
      resolve([
        {
          icon: 'fa-terminal',
          title: 'Open term in ${dir}',
          value: dir
        }
      ])
    })
  }
}
