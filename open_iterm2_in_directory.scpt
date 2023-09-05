on run argv
  set results to item 1 of argv
  tell application "iTerm2"
    set newWindow to (create window with default profile)
    tell current session of newWindow
      write text "cd '" & results & "'"
    end tell
  end tell
end run
