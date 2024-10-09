export interface AgreementArnParameters {
  partition?: string | undefined
  agreement: string
  agreementId: string
}
export type AgreementArn = `arn:${string}:mapcredits:::${string}/${string}`
export function agreementArn(parameters: AgreementArnParameters): AgreementArn {
  return `arn:${parameters.partition ?? ''}:mapcredits:::${parameters.agreement}/${parameters.agreementId}`
}