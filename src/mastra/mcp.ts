import { homedir } from "node:os";
import { join } from "node:path";
import { MCPClient } from "@mastra/mcp";

const filesystemRoot =
  process.env.MCP_FILESYSTEM_ROOT ?? join(homedir(), "Downloads");

// Configure MCPClient to connect to your server(s)
export const mcp = new MCPClient({
  servers: {
    filesystem: {
      command: "npx",
      args: [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        filesystemRoot,
      ],
    },
  },
});
