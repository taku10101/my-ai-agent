import { mcp } from "./mcp";
 
export const resources = await mcp.getResources();
 
if (resources.filesystem) {
  const resource = resources.filesystem.find(
    (r) => r.uri === "filesystem://Downloads",
  );
  console.log(`Resource: ${resource?.name}`);
}