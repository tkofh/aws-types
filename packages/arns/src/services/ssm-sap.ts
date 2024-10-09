export interface ApplicationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationType: string
  applicationId: string
}
export type ApplicationArn = `arn:${string}:ssm-sap:${string}:${string}:${string}/${string}`
export function applicationArn(parameters: ApplicationArnParameters): ApplicationArn {
  return `arn:${parameters.partition ?? ''}:ssm-sap:${parameters.region}:${parameters.account}:${parameters.applicationType}/${parameters.applicationId}`
}

export interface ComponentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationType: string
  applicationId: string
  componentId: string
}
export type ComponentArn = `arn:${string}:ssm-sap:${string}:${string}:${string}/${string}/COMPONENT/${string}`
export function componentArn(parameters: ComponentArnParameters): ComponentArn {
  return `arn:${parameters.partition ?? ''}:ssm-sap:${parameters.region}:${parameters.account}:${parameters.applicationType}/${parameters.applicationId}/COMPONENT/${parameters.componentId}`
}

export interface DatabaseArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationType: string
  applicationId: string
  databaseId: string
}
export type DatabaseArn = `arn:${string}:ssm-sap:${string}:${string}:${string}/${string}/DB/${string}`
export function databaseArn(parameters: DatabaseArnParameters): DatabaseArn {
  return `arn:${parameters.partition ?? ''}:ssm-sap:${parameters.region}:${parameters.account}:${parameters.applicationType}/${parameters.applicationId}/DB/${parameters.databaseId}`
}