@echo off
setlocal
set "SITE_DIR=%~dp0"
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%SITE_DIR%open-edge.ps1"
if errorlevel 1 (
  echo.
  echo Failed to open the study app in Microsoft Edge.
  pause
)
