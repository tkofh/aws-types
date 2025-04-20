import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ControlRoutingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idPanelControl: string
  readonly idControlRouting: string
}
class ControlRoutingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'routingcontrol',
  `arn:${string}:route53-recovery-control::${string}:controlpanel/${string}/routingcontrol/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'routingcontrol' as const
  readonly partition: string
  readonly account: string
  readonly idPanelControl: string
  readonly idControlRouting: string
  constructor(parameters: ControlRoutingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idPanelControl = parameters.idPanelControl
    this.idControlRouting = parameters.idControlRouting
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53-recovery-control::${this.account}:controlpanel/${this.idPanelControl}/routingcontrol/${this.idControlRouting}` as const
  }
}
export type { ControlRoutingArn }
export function controlRoutingArn<Partition extends ArnPartition = 'aws'>(
  parameters: ControlRoutingArnParameters<Partition>,
) {
  return new ControlRoutingArn<Partition>(parameters)
}
