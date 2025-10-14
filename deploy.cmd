@echo off
setlocal
set "PATH=C:\Program Files\nodejs;%PATH%"
cd /d "C:\Users\andre\Desktop\Website Raffaella Beauty"
echo Deploying to Vercel (production)...
"C:\Program Files\nodejs\npx.cmd" vercel --prod --yes
endlocal

