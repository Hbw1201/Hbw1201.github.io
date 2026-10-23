import http from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const port = Number(process.env.PORT || 4173);
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".pdf": "application/pdf", ".ico": "image/x-icon" };
const server = http.createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    const filename = path.resolve(root, `.${pathname === "/" ? "/index.html" : pathname}`);
    const relative = path.relative(root, filename);
    if (relative.startsWith("..") || path.isAbsolute(relative) || relative.split(/[\\/]/).some((segment) => segment.startsWith("."))) {
      res.writeHead(403); res.end("Forbidden"); return;
    }
    if (!["GET", "HEAD"].includes(req.method)) {
      res.writeHead(405, { Allow: "GET, HEAD" }); res.end("Method not allowed"); return;
    }
    const content = await readFile(filename);
    res.writeHead(200, { "Content-Type": types[path.extname(filename)] || "application/octet-stream", "Cache-Control": "no-store" });
    res.end(req.method === "HEAD" ? undefined : content);
  } catch (error) {
    res.writeHead(error.code === "ENOENT" || error.code === "EISDIR" ? 404 : 400);
    res.end(error.code === "ENOENT" || error.code === "EISDIR" ? "Not found" : "Bad request");
  }
});
server.on("error", (error) => {
  console.error(error.code === "EADDRINUSE" ? `Port ${port} is in use. Set PORT to choose another port.` : error.message);
  process.exitCode = 1;
});
server.listen(port, "127.0.0.1", () => console.log(`Local: http://127.0.0.1:${port}`));
