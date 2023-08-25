Build and deploy the app in code engine. The app listens on port 80, so make sure to configure that.

The app serves the following endpoints.

 - `/alive`: the liveness probe. Returns HTTP code 200 while the instance is alive.
 - `/ready`: the readiness probe. Returns HTTP code 200 while the instance is ready, otherwise returns 404.
 - `/die`: POST request to kill the instance. After receiving this request, the liveness probe will no longer return a 200.
 - `/sleep[/seconds]`: POST request to put the instance to sleep for `seconds` seconds. During that time, the readiness probe will not return a 200 value. If `/seconds` is ommitted, the default is 10s.
