module.exports = {
  branches: ["main"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        presetConfig: {
          types: [
            { type: "feat", section: "✨ Features" },
            { type: "fix", section: "🐛 Bug Fixes" },
            { type: "refactor", section: "♻️ Refactoring" },
            { type: "perf", section: "⚡ Performance" },
            { type: "docs", section: "📚 Documentation" },
            { type: "test", section: "🧪 Tests" },
            { type: "build", section: "📦 Build System" },
            { type: "ci", section: "⚙️ CI" },
          ],
        },
      },
    ],
    "@semantic-release/changelog",
    "@semantic-release/github",
    "@semantic-release/git",
  ],
};
