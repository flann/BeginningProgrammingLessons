@ECHO OFF
SETLOCAL
PUSHD %~dp0
http-server -a 127.0.0.1 -d false -c-1
ENDLOCAL
PAUSE