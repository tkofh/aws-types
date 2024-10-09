export interface RoomArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type RoomArn = `arn:${string}:ivschat:${string}:${string}:room/${string}`
export function roomArn(parameters: RoomArnParameters): RoomArn {
  return `arn:${parameters.partition ?? ''}:ivschat:${parameters.region}:${parameters.account}:room/${parameters.resourceId}`
}

export interface LoggingConfigurationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type LoggingConfigurationArn = `arn:${string}:ivschat:${string}:${string}:logging-configuration/${string}`
export function loggingConfigurationArn(parameters: LoggingConfigurationArnParameters): LoggingConfigurationArn {
  return `arn:${parameters.partition ?? ''}:ivschat:${parameters.region}:${parameters.account}:logging-configuration/${parameters.resourceId}`
}