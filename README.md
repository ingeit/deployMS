We can test webhook callbacks with a little http server and a [localtunnel](https://localtunnel.github.io/www/).

Run `server.js` to spin up a local http server on port `8080`. It just exposes a top-level route and will print the received header and payload of any request. Then create a localtunnel to have a non-local url that proxies all requests to `localhost:8080`.

---

First, install dependencies with `npm install`.

Then start the express server with `npm start`.

Then setup a localtunnel with `lt --subdomain acme --port 8080` 

Use `https://acme.localtunnel.me/` as the callback url for the webhook you want to test.
