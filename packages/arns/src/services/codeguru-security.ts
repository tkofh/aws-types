export interface ScanNameArnParameters {
  partition?: string | undefined
  region: string
  account: string
  scanName: string
}
export type ScanNameArn = `arn:${string}:codeguru-security:${string}:${string}:scans/${string}`
export function scanNameArn(parameters: ScanNameArnParameters): ScanNameArn {
  return `arn:${parameters.partition ?? ''}:codeguru-security:${parameters.region}:${parameters.account}:scans/${parameters.scanName}`
}