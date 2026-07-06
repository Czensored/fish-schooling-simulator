import { existsSync, rmSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const generatedPkgIgnore = resolve(root, "pkg/.gitignore");
const requiredPkgFiles = [
  "pkg/fish_schooling_simulator.js",
  "pkg/fish_schooling_simulator_bg.wasm",
  "pkg/package.json",
];

function commandExists(command) {
  const result = spawnSync(command, ["--version"], {
    cwd: root,
    shell: true,
    stdio: "ignore",
  });

  return result.status === 0;
}

if (commandExists("cargo")) {
  const result = spawnSync(
    "wasm-pack",
    ["build", "--target", "web", "--out-dir", "pkg"],
    {
      cwd: root,
      env: { ...process.env, CARGO_TARGET_DIR: "target" },
      shell: true,
      stdio: "inherit",
    },
  );

  if (result.status === 0) {
    rmSync(generatedPkgIgnore, { force: true });
  }

  process.exit(result.status ?? 1);
}

const missingPkgFiles = requiredPkgFiles.filter((file) => {
  return !existsSync(resolve(root, file));
});

if (missingPkgFiles.length > 0) {
  console.error("Cargo is not available and the prebuilt WASM package is missing:");
  for (const file of missingPkgFiles) {
    console.error(`- ${file}`);
  }
  console.error("Run `npm run build:wasm:force` locally and commit the generated pkg files.");
  process.exit(1);
}

console.warn("Cargo is not available; using the committed prebuilt WASM package.");
