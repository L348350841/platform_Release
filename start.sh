#!/bin/sh

while ! ip link show eth0 | grep -q "state UP"; do
    sleep 1
done
ip addr flush dev eth0
ip addr add 192.168.137.2/24 dev eth0
ip link set eth0 up

sleep 1
PYTHON_SCRIPT="/home/platform/currentsystem/backend/run.py"
nohup python "$PYTHON_SCRIPT" > /home/platform/run.log 2>&1 &