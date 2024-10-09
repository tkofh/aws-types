export interface CertificateAuthorityArnParameters {
  partition?: string | undefined
  region: string
  account: string
  certificateAuthorityId: string
}
export type CertificateAuthorityArn = `arn:${string}:acm-pca:${string}:${string}:certificate-authority/${string}`
export function certificateAuthorityArn(parameters: CertificateAuthorityArnParameters): CertificateAuthorityArn {
  return `arn:${parameters.partition ?? ''}:acm-pca:${parameters.region}:${parameters.account}:certificate-authority/${parameters.certificateAuthorityId}`
}