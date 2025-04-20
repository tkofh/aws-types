import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface InstrumentPaymentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idResource: string
}
class InstrumentPaymentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'payment-instrument',
  `arn:${string}:payments::${string}:payment-instrument:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'payment-instrument' as const
  readonly partition: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: InstrumentPaymentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:payments::${this.account}:payment-instrument:${this.idResource}` as const
  }
}
export type { InstrumentPaymentArn }
export function instrumentPaymentArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstrumentPaymentArnParameters<Partition>,
) {
  return new InstrumentPaymentArn<Partition>(parameters)
}
