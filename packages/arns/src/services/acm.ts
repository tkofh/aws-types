export interface CertificateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  certificateId: string
}
export type CertificateArn = `arn:${string}:acm:${string}:${string}:certificate/${string}`
export function certificateArn(parameters: CertificateArnParameters): CertificateArn {
  return `arn:${parameters.partition ?? 'aws'}:acm:${parameters.region}:${parameters.account}:certificate/${parameters.certificateId}`
}