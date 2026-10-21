# Mastra AI Agent（配布用サンプル）

社内向け People / HR サポートエージェントと MCP 連携エージェントの最小構成です。固有名詞はテンプレート化してあり、配布先で差し替えて使えます。

## セットアップ

1. 依存関係をインストール

```bash
pnpm install
```

2. 環境変数

`.env.example` を `.env` にコピーし、API キーと MCP のファイルシステムルートを設定してください。

3. プロンプトのカスタマイズ

`src/mastra/agents/people.instructions.md` 内の `{{ORG_NAME}}` などを自社向けに書き換えてください。

4. 開発サーバー

```bash
pnpm dev
```

## 構成

| ファイル | 説明 |
| --- | --- |
| `src/mastra/agents/peopleAgent.ts` | メインエージェント（指示文は外部 Markdown） |
| `src/mastra/agents/people.instructions.md` | 配布用プロンプトテンプレート |
| `src/mastra/agents/mcpAgent.ts` | MCP ツール付きエージェント（必要に応じて `index.ts` に登録） |
| `src/mastra/mcp.ts` | MCP クライアント設定 |

## 配布時の注意

- `.env` や `*.db` はコミットしない（`.gitignore` 済み）
- 社内固有の名称・人名・クライアント名は `people.instructions.md` に書かない
- 実運用の指示文は各環境の `.env` や非公開リポジトリで管理することを推奨
