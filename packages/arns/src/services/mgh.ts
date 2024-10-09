export interface ProgressUpdateStreamArnParameters {
  partition?: string | undefined
  region: string
  account: string
  stream: string
}
export type ProgressUpdateStreamArn = `arn:${string}:mgh:${string}:${string}:progressUpdateStream/${string}`
export function progressUpdateStreamArn(parameters: ProgressUpdateStreamArnParameters): ProgressUpdateStreamArn {
  return `arn:${parameters.partition ?? ''}:mgh:${parameters.region}:${parameters.account}:progressUpdateStream/${parameters.stream}`
}

export interface MigrationTaskArnParameters {
  partition?: string | undefined
  region: string
  account: string
  stream: string
  task: string
}
export type MigrationTaskArn = `arn:${string}:mgh:${string}:${string}:progressUpdateStream/${string}/migrationTask/${string}`
export function migrationTaskArn(parameters: MigrationTaskArnParameters): MigrationTaskArn {
  return `arn:${parameters.partition ?? ''}:mgh:${parameters.region}:${parameters.account}:progressUpdateStream/${parameters.stream}/migrationTask/${parameters.task}`
}