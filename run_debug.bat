@echo off
cd /d d:\movies\magizh-builders
echo %CD% > debug_out.txt
echo Node version: >> debug_out.txt
node -v >> debug_out.txt 2>&1
echo Npm version: >> debug_out.txt
npm -v >> debug_out.txt 2>&1
echo Listing dir: >> debug_out.txt
dir >> debug_out.txt 2>&1
echo Running npm install: >> debug_out.txt
npm install >> debug_out.txt 2>&1
echo Done >> debug_out.txt
