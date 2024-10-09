export interface AdapterArnParameters {
  partition?: string | undefined
  region: string
  account: string
  adapterId: string
}
export type AdapterArn = `arn:${string}:textract:${string}:${string}:/adapters/${string}`
export function adapterArn(parameters: AdapterArnParameters): AdapterArn {
  return `arn:${parameters.partition ?? ''}:textract:${parameters.region}:${parameters.account}:/adapters/${parameters.adapterId}`
}

export interface AdapterversionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  adapterId: string
  adapterVersion: string
}
export type AdapterversionArn = `arn:${string}:textract:${string}:${string}:/adapters/${string}/versions/${string}`
export function adapterversionArn(parameters: AdapterversionArnParameters): AdapterversionArn {
  return `arn:${parameters.partition ?? ''}:textract:${parameters.region}:${parameters.account}:/adapters/${parameters.adapterId}/versions/${parameters.adapterVersion}`
}