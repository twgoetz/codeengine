Build and deploy the app in code engine. The app listens on port 80, so make sure to configure that.

The app serves a liveness probe at /alive and a readiness probe at /ready. You can make the app be not alive (ie. fail the liveness probe) by POSTing to /die. You can make the app be not ready for a number of seconds by POSTing to /sleep/seconds, where seconds should be an integer.