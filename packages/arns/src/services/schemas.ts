export interface DiscovererArnParameters {
  partition?: string | undefined
  region: string
  account: string
  discovererId: string
}
export type DiscovererArn = `arn:${string}:schemas:${string}:${string}:discoverer/${string}`
export function discovererArn(parameters: DiscovererArnParameters): DiscovererArn {
  return `arn:${parameters.partition ?? ''}:schemas:${parameters.region}:${parameters.account}:discoverer/${parameters.discovererId}`
}

export interface RegistryArnParameters {
  partition?: string | undefined
  region: string
  account: string
  registryName: string
}
export type RegistryArn = `arn:${string}:schemas:${string}:${string}:registry/${string}`
export function registryArn(parameters: RegistryArnParameters): RegistryArn {
  return `arn:${parameters.partition ?? ''}:schemas:${parameters.region}:${parameters.account}:registry/${parameters.registryName}`
}

export interface SchemaArnParameters {
  partition?: string | undefined
  region: string
  account: string
  registryName: string
  schemaName: string
}
export type SchemaArn = `arn:${string}:schemas:${string}:${string}:schema/${string}/${string}`
export function schemaArn(parameters: SchemaArnParameters): SchemaArn {
  return `arn:${parameters.partition ?? ''}:schemas:${parameters.region}:${parameters.account}:schema/${parameters.registryName}/${parameters.schemaName}`
}