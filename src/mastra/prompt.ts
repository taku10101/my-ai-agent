// import { mcp } from "./mcp";
 
// // 接続されているすべての MCP サーバーからプロンプトを取得
// const prompts = await mcp.prompts.list();
 
// // 特定のサーバーからプロンプトにアクセス
// if (prompts.weather) {
//   const prompt = prompts.weather.find(
//     (p) => p.name === "current"
//   );
//   console.log(`Prompt: ${prompt?.name}`);
// }