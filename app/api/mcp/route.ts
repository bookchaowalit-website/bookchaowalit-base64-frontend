import { decodeBase64, encodeBase64 } from "@/lib/base64";
import { requireString, respondToMcpRequest } from "@/lib/mcp";
import type { McpTool } from "@/lib/mcp";

const SERVER = { name: "bookchaowalit-base64", version: "0.2.0" };

const TOOLS: McpTool[] = [
  {
    name: "base64_encode",
    description: "Encode UTF-8 text as Base64. Set urlSafe to use the URL-safe alphabet without padding.",
    inputSchema: {
      type: "object",
      properties: { text: { type: "string" }, urlSafe: { type: "boolean" } },
      required: ["text"],
    },
    handler: (args) => encodeBase64(requireString(args, "text"), { urlSafe: args.urlSafe === true }),
  },
  {
    name: "base64_decode",
    description: "Decode standard or URL-safe Base64 into UTF-8 text. Whitespace is ignored.",
    inputSchema: {
      type: "object",
      properties: { base64: { type: "string" } },
      required: ["base64"],
    },
    handler: (args) => decodeBase64(requireString(args, "base64")),
  },
];

export async function POST(request: Request) {
  return respondToMcpRequest(request, SERVER, TOOLS);
}
