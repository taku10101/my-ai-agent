import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { google } from '@ai-sdk/google';
import { Agent } from '@mastra/core/agent';
import { Memory } from '@mastra/memory';
import { LibSQLStore } from '@mastra/libsql';

const instructionsPath = join(
  dirname(fileURLToPath(import.meta.url)),
  'people.instructions.md',
);

export const peopleAgent = new Agent({
  name: 'People Assistant',
  model: google('gemini-2.0-flash-exp'),
  instructions: readFileSync(instructionsPath, 'utf-8'),

  memory: new Memory({
    storage: new LibSQLStore({
      url: 'file:./mastra.db',
    }),
  }),
});
