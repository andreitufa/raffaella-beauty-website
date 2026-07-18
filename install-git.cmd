@echo off
echo Installing Git for Windows...
echo.

REM Download Git for Windows installer
echo Downloading Git installer...
powershell -Command "Invoke-WebRequest -Uri 'https://github.com/git-for-windows/git/releases/download/v2.43.0.windows.1/Git-2.43.0-64-bit.exe' -OutFile 'git-installer.exe'"

echo.
echo Git installer downloaded. Please run it manually:
echo 1. Double-click git-installer.exe
echo 2. Follow the installation wizard
echo 3. Use default settings (recommended)
echo 4. After installation, restart your computer
echo 5. Then run this script again
echo.
pause
