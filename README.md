# Fish Schooling Simulator

A small Rust and WebAssembly simulation of fish schooling under predator pressure. Fish use simple local rules for separation, alignment, cohesion, boundary avoidance, and fleeing from a shark. The shark selects targets based on distance and crowding, which makes isolated fish easier to catch than fish inside a dense school.

The browser frontend renders the simulation on a canvas and provides a side panel for speed controls and basic stats.

## Running

```sh
npm install
npm run dev
```

## Development Setup

Enable the tracked Git hooks after cloning:

```sh
git config core.hooksPath .githooks
```

The pre-commit hook runs `cargo build --release` and blocks the commit if the Rust code does not compile.

## Testing

```sh
cargo test
```
