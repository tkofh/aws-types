export interface ConnectorArnParameters {
  partition?: string | undefined
  region: string
  account: string
  connectorName: string
  uuid: string
}
export type ConnectorArn = `arn:${string}:kafkaconnect:${string}:${string}:connector/${string}/${string}`
export function connectorArn(parameters: ConnectorArnParameters): ConnectorArn {
  return `arn:${parameters.partition ?? ''}:kafkaconnect:${parameters.region}:${parameters.account}:connector/${parameters.connectorName}/${parameters.uuid}`
}

export interface CustomPluginArnParameters {
  partition?: string | undefined
  region: string
  account: string
  customPluginName: string
  uuid: string
}
export type CustomPluginArn = `arn:${string}:kafkaconnect:${string}:${string}:custom-plugin/${string}/${string}`
export function customPluginArn(parameters: CustomPluginArnParameters): CustomPluginArn {
  return `arn:${parameters.partition ?? ''}:kafkaconnect:${parameters.region}:${parameters.account}:custom-plugin/${parameters.customPluginName}/${parameters.uuid}`
}

export interface WorkerConfigurationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  workerConfigurationName: string
  uuid: string
}
export type WorkerConfigurationArn = `arn:${string}:kafkaconnect:${string}:${string}:worker-configuration/${string}/${string}`
export function workerConfigurationArn(parameters: WorkerConfigurationArnParameters): WorkerConfigurationArn {
  return `arn:${parameters.partition ?? ''}:kafkaconnect:${parameters.region}:${parameters.account}:worker-configuration/${parameters.workerConfigurationName}/${parameters.uuid}`
}