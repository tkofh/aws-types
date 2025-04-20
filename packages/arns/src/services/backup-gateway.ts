import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface GatewayArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly idGateway: string
}
class GatewayArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'gateway',
  `arn:${string}:backup-gateway::${string}:gateway/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'gateway' as const
  readonly partition: string
  readonly account: string
  readonly idGateway: string
  constructor(parameters: GatewayArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idGateway = parameters.idGateway
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:backup-gateway::${this.account}:gateway/${this.idGateway}` as const
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
  readonly partition: string
  readonly account: string
  readonly idHypervisor: string
}
class HypervisorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'hypervisor',
  `arn:${string}:backup-gateway::${string}:hypervisor/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'hypervisor' as const
  readonly partition: string
  readonly account: string
  readonly idHypervisor: string
  constructor(parameters: HypervisorArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idHypervisor = parameters.idHypervisor
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:backup-gateway::${this.account}:hypervisor/${this.idHypervisor}` as const
  }
}
export type { HypervisorArn }
export function hypervisorArn<Partition extends ArnPartition = 'aws'>(
  parameters: HypervisorArnParameters<Partition>,
) {
  return new HypervisorArn<Partition>(parameters)
}

export interface MachineVirtualArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idMachineVirtual: string
}
class MachineVirtualArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'virtualmachine',
  `arn:${string}:backup-gateway::${string}:vm/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'virtualmachine' as const
  readonly partition: string
  readonly account: string
  readonly idMachineVirtual: string
  constructor(parameters: MachineVirtualArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idMachineVirtual = parameters.idMachineVirtual
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:backup-gateway::${this.account}:vm/${this.idMachineVirtual}` as const
  }
}
export type { MachineVirtualArn }
export function machineVirtualArn<Partition extends ArnPartition = 'aws'>(
  parameters: MachineVirtualArnParameters<Partition>,
) {
  return new MachineVirtualArn<Partition>(parameters)
}
