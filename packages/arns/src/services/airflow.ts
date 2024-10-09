export interface EnvironmentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  environmentName: string
}
export type EnvironmentArn = `arn:${string}:airflow:${string}:${string}:environment/${string}`
export function environmentArn(parameters: EnvironmentArnParameters): EnvironmentArn {
  return `arn:${parameters.partition ?? ''}:airflow:${parameters.region}:${parameters.account}:environment/${parameters.environmentName}`
}

export interface RbacRoleArnParameters {
  partition?: string | undefined
  region: string
  account: string
  environmentName: string
  roleName: string
}
export type RbacRoleArn = `arn:${string}:airflow:${string}:${string}:role/${string}/${string}`
export function rbacRoleArn(parameters: RbacRoleArnParameters): RbacRoleArn {
  return `arn:${parameters.partition ?? ''}:airflow:${parameters.region}:${parameters.account}:role/${parameters.environmentName}/${parameters.roleName}`
}