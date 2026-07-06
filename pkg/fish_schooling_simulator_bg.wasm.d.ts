/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export const __wbg_simulation_free: (a: number, b: number) => void;
export const simulation_new: () => number;
export const simulation_reset: (a: number) => void;
export const simulation_set_dimensions: (a: number, b: number) => void;
export const simulation_dimensions: (a: number) => number;
export const simulation_tick: (a: number, b: number) => void;
export const simulation_fish_positions: (a: number) => [number, number];
export const simulation_shark_position: (a: number) => [number, number];
export const simulation_shark_heading: (a: number) => [number, number];
export const simulation_shark_target_position: (a: number) => [number, number];
export const simulation_fish_count: (a: number) => number;
export const simulation_fish_eaten: (a: number) => number;
export const simulation_fish_eaten_per_minute: (a: number) => number;
export const simulation_elapsed_seconds: (a: number) => number;
export const simulation_world_width: (a: number) => number;
export const simulation_world_height: (a: number) => number;
export const simulation_world_depth: (a: number) => number;
export const simulation_fish_personal_space: (a: number) => number;
export const simulation_shark_detection_radius: (a: number) => number;
export const simulation_shark_eat_radius: (a: number) => number;
export const __wbindgen_externrefs: WebAssembly.Table;
export const __wbindgen_free: (a: number, b: number, c: number) => void;
export const __wbindgen_start: () => void;
