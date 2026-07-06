/* tslint:disable */
/* eslint-disable */

export class Simulation {
    free(): void;
    [Symbol.dispose](): void;
    dimensions(): number;
    elapsed_seconds(): number;
    fish_count(): number;
    fish_eaten(): number;
    fish_eaten_per_minute(): number;
    fish_personal_space(): number;
    fish_positions(): Float32Array;
    constructor();
    reset(): void;
    set_dimensions(dimensions: number): void;
    shark_detection_radius(): number;
    shark_eat_radius(): number;
    shark_heading(): Float32Array;
    shark_position(): Float32Array;
    shark_target_position(): Float32Array;
    tick(delta_seconds: number): void;
    world_depth(): number;
    world_height(): number;
    world_width(): number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_simulation_free: (a: number, b: number) => void;
    readonly simulation_new: () => number;
    readonly simulation_reset: (a: number) => void;
    readonly simulation_set_dimensions: (a: number, b: number) => void;
    readonly simulation_dimensions: (a: number) => number;
    readonly simulation_tick: (a: number, b: number) => void;
    readonly simulation_fish_positions: (a: number) => [number, number];
    readonly simulation_shark_position: (a: number) => [number, number];
    readonly simulation_shark_heading: (a: number) => [number, number];
    readonly simulation_shark_target_position: (a: number) => [number, number];
    readonly simulation_fish_count: (a: number) => number;
    readonly simulation_fish_eaten: (a: number) => number;
    readonly simulation_fish_eaten_per_minute: (a: number) => number;
    readonly simulation_elapsed_seconds: (a: number) => number;
    readonly simulation_world_width: (a: number) => number;
    readonly simulation_world_height: (a: number) => number;
    readonly simulation_world_depth: (a: number) => number;
    readonly simulation_fish_personal_space: (a: number) => number;
    readonly simulation_shark_detection_radius: (a: number) => number;
    readonly simulation_shark_eat_radius: (a: number) => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
