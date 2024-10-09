export interface SecretArnParameters {
  partition?: string | undefined
  region: string
  account: string
  secretId: string
}
export type SecretArn = `arn:${string}:secretsmanager:${string}:${string}:secret:${string}`
export function secretArn(parameters: SecretArnParameters): SecretArn {
  return `arn:${parameters.partition ?? ''}:secretsmanager:${parameters.region}:${parameters.account}:secret:${parameters.secretId}`
}