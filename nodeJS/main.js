const http = require("http");
const os = require("os");
const path = require("path");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  const username = os.userInfo().username;
  const osType = os.type();
  const uptime = Math.floor(os.uptime() / 60);
  const currentDir = process.cwd();
  const serverFilename = path.basename(__filename);

  const html = `
    <html>
    <head>
      <title>System Information</title>
    </head>
    <body>
      <h1>System Information</h1>
      <p><strong>Username:</strong> ${username}</p>
      <p><strong>Operating System:</strong> ${osType}</p>
      <p><strong>System Uptime (minutes):</strong> ${uptime}</p>
      <p><strong>Current Directory:</strong> ${currentDir}</p>
      <p><strong>Server Filename:</strong> ${serverFilename}</p>
    </body>
    </html>
  `;

  res.end(html);
});

server.listen(3000, () => {
  console.log("Server is running on port 5000");
});





