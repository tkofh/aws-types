export interface DatastoreArnParameters {
  partition?: string | undefined
  region: string
  account: string
  datastoreId: string
}
export type DatastoreArn = `arn:${string}:healthlake:${string}:${string}:datastore/fhir/${string}`
export function datastoreArn(parameters: DatastoreArnParameters): DatastoreArn {
  return `arn:${parameters.partition ?? ''}:healthlake:${parameters.region}:${parameters.account}:datastore/fhir/${parameters.datastoreId}`
}