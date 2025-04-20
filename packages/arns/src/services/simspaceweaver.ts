import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface SimulationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly simulationName: string
}
class SimulationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Simulation',
  `arn:${string}:simspaceweaver:${string}:${string}:simulation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Simulation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly simulationName: string
  constructor(parameters: SimulationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.simulationName = parameters.simulationName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:simspaceweaver:${this.region}:${this.account}:simulation/${this.simulationName}` as const
  }
}
export type { SimulationArn }
export function simulationArn<Partition extends ArnPartition = 'aws'>(
  parameters: SimulationArnParameters<Partition>,
) {
  return new SimulationArn<Partition>(parameters)
}
