const path = require("path")
const fs = require("fs")

try {
  const srcDir = path.join(path.dirname(require.resolve("@vercel/og/package.json")), "dist")
  const destDir = path.join(path.dirname(require.resolve("next/package.json")), "dist/compiled/@vercel/og")

  const files = fs.readdirSync(srcDir).filter((f) => f.endsWith(".ttf") || f.endsWith(".wasm"))
  files.forEach((file) => {
    fs.cpSync(path.join(srcDir, file), path.join(destDir, file))
  })
} catch (e) {
  // silently fail
}
