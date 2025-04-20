import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface PaymentInstrumentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly resourceId: string
}
class PaymentInstrumentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'payment-instrument',
  `arn:${string}:payments::${string}:payment-instrument:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'payment-instrument' as const
  readonly partition: Partition
  readonly account: string
  readonly resourceId: string
  constructor(parameters: PaymentInstrumentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:payments::${this.account}:payment-instrument:${this.resourceId}` as const
  }
}
export type { PaymentInstrumentArn }
export function paymentInstrumentArn<Partition extends ArnPartition = 'aws'>(
  parameters: PaymentInstrumentArnParameters<Partition>,
) {
  return new PaymentInstrumentArn<Partition>(parameters)
}
