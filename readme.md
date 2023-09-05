## Open Terminal

Open terminal to the current path of the finder window.

## Usage

Simply navigate, in Finder, to the directory you want to open in Terminal (or
iTerm2).

## Installing

Add the package to your plugins array in `~/.zazurc.json`.

~~~ javascript
"pysnow530/zazu-mac-open-terminal",
~~~

### Options

You can overwrite the keyboard shortcut by defining a variable with the name
`OpenTerminalKey`.

~~~ javascript
{
  "plugins": [
    "pysnow530/zazu-mac-open-terminal"
  ]
}
~~~

The default behavior is to open the finder directory in Terminal. If you wish to
use iTerm2 instead you can change that preference here as well.

~~~ javascript
{
  "name": "pysnow530/zazu-mac-open-terminal",
  "variables": {
    "terminal": "iterm2",
  },
}
~~~
