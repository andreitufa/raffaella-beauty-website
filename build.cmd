@echo off
setlocal
set "PATH=C:\Program Files\nodejs;%PATH%"
cd /d "C:\Users\andre\Desktop\Website Raffaella Beauty"
echo Using npm/node versions:
"C:\Program Files\nodejs\npm.cmd" -v
"C:\Program Files\nodejs\node.exe" -v
echo Installing dependencies...
"C:\Program Files\nodejs\npm.cmd" install
if errorlevel 1 exit /b 1
echo Compiling TypeScript...
"C:\Program Files\nodejs\node.exe" node_modules\typescript\bin\tsc -b
if errorlevel 1 exit /b 1
echo Building production bundle with Vite...
"C:\Program Files\nodejs\node.exe" node_modules\vite\bin\vite.js build
if errorlevel 1 exit /b 1
endlocal

