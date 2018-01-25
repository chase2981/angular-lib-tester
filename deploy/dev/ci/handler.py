import http.server
import time
import deploy

HOST_NAME = '0.0.0.0'
PORT_NUMBER = 8080


class HookHandler(http.server.SimpleHTTPRequestHandler):
    server_version = "HookHandler/0.1"

    def do_GET(s):
        deploy.pull_git()
        s.send_response(200)
        s.send_header("Content-type:", "text/html")
        s.wfile.write(bytes("<h1>Success</h1>", "utf-8"))

if __name__ == '__main__':
    httpd = http.server.HTTPServer((HOST_NAME, PORT_NUMBER), HookHandler)
    print(time.asctime(), "Server Starts - %s:%s" % (HOST_NAME, PORT_NUMBER))
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    httpd.server_close()
    print(time.asctime(), "Server Stops - %s:%s" % (HOST_NAME, PORT_NUMBER))
