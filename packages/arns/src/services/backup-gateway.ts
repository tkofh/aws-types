import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface GatewayArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly gatewayId: string
}
class GatewayArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'gateway',
  `arn:${string}:backup-gateway::${string}:gateway/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'gateway' as const
  readonly partition: Partition
  readonly account: string
  readonly gatewayId: string
  constructor(parameters: GatewayArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.gatewayId = parameters.gatewayId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:backup-gateway::${this.account}:gateway/${this.gatewayId}` as const
  }
}
export type { GatewayArn }
export function gatewayArn<Partition extends ArnPartition = 'aws'>(
  parameters: GatewayArnParameters<Partition>,
) {
  return new GatewayArn<Partition>(parameters)
}

export interface HypervisorArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly hypervisorId: string
}
class HypervisorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'hypervisor',
  `arn:${string}:backup-gateway::${string}:hypervisor/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'hypervisor' as const
  readonly partition: Partition
  readonly account: string
  readonly hypervisorId: string
  constructor(parameters: HypervisorArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.hypervisorId = parameters.hypervisorId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:backup-gateway::${this.account}:hypervisor/${this.hypervisorId}` as const
  }
}
export type { HypervisorArn }
export function hypervisorArn<Partition extends ArnPartition = 'aws'>(
  parameters: HypervisorArnParameters<Partition>,
) {
  return new HypervisorArn<Partition>(parameters)
}

export interface VirtualMachineArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly virtualMachineId: string
}
class VirtualMachineArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'virtualmachine',
  `arn:${string}:backup-gateway::${string}:vm/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'virtualmachine' as const
  readonly partition: Partition
  readonly account: string
  readonly virtualMachineId: string
  constructor(parameters: VirtualMachineArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.virtualMachineId = parameters.virtualMachineId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:backup-gateway::${this.account}:vm/${this.virtualMachineId}` as const
  }
}
export type { VirtualMachineArn }
export function virtualMachineArn<Partition extends ArnPartition = 'aws'>(
  parameters: VirtualMachineArnParameters<Partition>,
) {
  return new VirtualMachineArn<Partition>(parameters)
}
