declare module "flubber" {
  export interface InterpolateOptions {
    maxSegmentLength?: number;
    single?: boolean;
  }

  export function interpolate(
    from: string | string[],
    to: string | string[],
    options?: InterpolateOptions
  ): (t: number) => string;
}
