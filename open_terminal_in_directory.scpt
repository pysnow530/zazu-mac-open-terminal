set results to ""

on run argv
  set results to item 1 of argv
  tell application "Terminal"
    activate
    set currentTab to do script "cd '" & results & "'"
  end tell
end run
