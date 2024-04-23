#!/bin/sh

### BEGIN INIT INFO
# Provides:          unicorn
# Required-Start:    $remote_fs $syslog
# Required-Stop:     $remote_fs $syslog
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Short-Description: Manage unicorn server
# Description:       Start, stop, restart unicorn server for a specific application.
### END INIT INFO

set -e

# Feel free to change any of the following variables for your app:
APP_ROOT=/home/deployer/apps/music_db/current
PID=$APP_ROOT/tmp/pids/unicorn.pid
CMD="cd $APP_ROOT && bundle exec unicorn -c $APP_ROOT/config/unicorn.rb -E production"
AS_USER=deployer

set -u

sig () {
  test -s "$PID" && kill -$1 `cat $PID`
}

old_pid="$PID.oldbin"

case "$1" in
  start)
    sig 0 && echo >&2 "Already running" && exit 0
    su -c "$CMD" - $AS_USER
    ;;
  stop)
    sig QUIT && exit 0
    echo >&2 "Not running"
    ;;
  force-stop)
    sig TERM && exit 0
    echo >&2 "Not running"
    ;;
  restart|reload)
    sig HUP && echo reloaded OK && exit 0
    echo >&2 "Couldn't reload, starting '$CMD' instead"
    su -c "$CMD" - $AS_USER
    ;;
  upgrade)
    if test -s $PID; then
      old_pid="$PID.oldbin"
      sig USR2 && sleep 1
      if test -s $old_pid && test -s $PID; then
        echo >&2 "Upgrade failed"
        exit 1
      fi
      echo >&2 "Upgraded"
      exit 0
    else
      echo >&2 "Not running"
      exit 1
    fi
    ;;
  reopen-logs)
    sig USR1
    ;;
  *)
    echo >&2 "Usage: $0 <start|stop|restart|upgrade|force-stop|reopen-logs>"
    exit 1
    ;;
esac
