# Mastra AI Agent（個人向けサンプル）

個人利用向けの汎用アシスタントと MCP 連携エージェントの最小構成です。会社名・社内制度などの要素は含めていません。

## セットアップ

1. 依存関係をインストール

```bash
pnpm install
```

2. 環境変数

`.env.example` を `.env` にコピーし、API キーと MCP のファイルシステムルートを設定してください。

3. プロンプトのカスタマイズ（任意）

`src/mastra/agents/assistant.instructions.md` に、自分用の好みやルールを追記できます。

4. 開発サーバー

```bash
pnpm dev
```

## 構成

| ファイル | 説明 |
| --- | --- |
| `src/mastra/agents/assistantAgent.ts` | メインエージェント（指示文は外部 Markdown） |
| `src/mastra/agents/assistant.instructions.md` | 汎用プロンプト |
| `src/mastra/agents/mcpAgent.ts` | MCP ツール付きエージェント（必要に応じて `index.ts` に登録） |
| `src/mastra/mcp.ts` | MCP クライアント設定 |

## 共有・配布時の注意

- `.env` や `*.db` はコミットしない（`.gitignore` 済み）
- 個人名・連絡先・非公開メモはリポジトリに含めない
- 本番用の API キーは各自の環境だけで管理する
