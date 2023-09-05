// Deprecated use zazu.json instead
module.exports = {
  "name": "Open Terminal",
  "version": "1.0.1",
  "description": "Open terminal here.",
  "blocks": {
    "input": [
      {
        "id": "OpenTerminalKey",
        "type": "Keyword",
        "keyword": "term",
        "title": "Open Terminal Here",
        "icon": "fa-terminal",
        "connections": [
          "OpenTerminal"
        ]
      }
    ],
    "output": [
      {
        "id": "OpenTerminal",
        "type": "UserScript",
        "script": "open_terminal.js"
      }
    ]
  }
}
