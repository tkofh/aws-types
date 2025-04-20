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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSimulation: string
}
class SimulationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Simulation',
  `arn:${string}:simspaceweaver:${string}:${string}:simulation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Simulation' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSimulation: string
  constructor(parameters: SimulationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameSimulation = parameters.nameSimulation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:simspaceweaver:${this.region}:${this.account}:simulation/${this.nameSimulation}` as const
  }
}
export type { SimulationArn }
export function simulationArn<Partition extends ArnPartition = 'aws'>(
  parameters: SimulationArnParameters<Partition>,
) {
  return new SimulationArn<Partition>(parameters)
}
