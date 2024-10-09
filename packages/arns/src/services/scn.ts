export interface InstanceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
}
export type InstanceArn = `arn:${string}:scn:${string}:${string}:instance/${string}`
export function instanceArn(parameters: InstanceArnParameters): InstanceArn {
  return `arn:${parameters.partition ?? ''}:scn:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}`
}

export interface BillOfMaterialsImportJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
  jobId: string
}
export type BillOfMaterialsImportJobArn = `arn:${string}:scn:${string}:${string}:instance/${string}/bill-of-materials-import-job/${string}`
export function billOfMaterialsImportJobArn(parameters: BillOfMaterialsImportJobArnParameters): BillOfMaterialsImportJobArn {
  return `arn:${parameters.partition ?? ''}:scn:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/bill-of-materials-import-job/${parameters.jobId}`
}

export interface DataIntegrationFlowArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
  flowName: string
}
export type DataIntegrationFlowArn = `arn:${string}:scn:${string}:${string}:instance/${string}/data-integration-flows/${string}`
export function dataIntegrationFlowArn(parameters: DataIntegrationFlowArnParameters): DataIntegrationFlowArn {
  return `arn:${parameters.partition ?? ''}:scn:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/data-integration-flows/${parameters.flowName}`
}

export interface DatasetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
  namespace: string
  datasetName: string
}
export type DatasetArn = `arn:${string}:scn:${string}:${string}:instance/${string}/namespaces/${string}/datasets/${string}`
export function datasetArn(parameters: DatasetArnParameters): DatasetArn {
  return `arn:${parameters.partition ?? ''}:scn:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/namespaces/${parameters.namespace}/datasets/${parameters.datasetName}`
}