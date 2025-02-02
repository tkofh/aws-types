export interface PaymentInstrumentArnParameters {
  partition?: string | undefined
  account: string
  resourceId: string
}
export type PaymentInstrumentArn = `arn:${string}:payments::${string}:payment-instrument:${string}`
export function paymentInstrumentArn(parameters: PaymentInstrumentArnParameters): PaymentInstrumentArn {
  return `arn:${parameters.partition ?? 'aws'}:payments::${parameters.account}:payment-instrument:${parameters.resourceId}`
}