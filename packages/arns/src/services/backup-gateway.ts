export interface GatewayArnParameters {
  partition?: string | undefined
  account: string
  gatewayId: string
}
export type GatewayArn = `arn:${string}:backup-gateway::${string}:gateway/${string}`
export function gatewayArn(parameters: GatewayArnParameters): GatewayArn {
  return `arn:${parameters.partition ?? ''}:backup-gateway::${parameters.account}:gateway/${parameters.gatewayId}`
}

export interface HypervisorArnParameters {
  partition?: string | undefined
  account: string
  hypervisorId: string
}
export type HypervisorArn = `arn:${string}:backup-gateway::${string}:hypervisor/${string}`
export function hypervisorArn(parameters: HypervisorArnParameters): HypervisorArn {
  return `arn:${parameters.partition ?? ''}:backup-gateway::${parameters.account}:hypervisor/${parameters.hypervisorId}`
}

export interface VirtualmachineArnParameters {
  partition?: string | undefined
  account: string
  virtualmachineId: string
}
export type VirtualmachineArn = `arn:${string}:backup-gateway::${string}:vm/${string}`
export function virtualmachineArn(parameters: VirtualmachineArnParameters): VirtualmachineArn {
  return `arn:${parameters.partition ?? ''}:backup-gateway::${parameters.account}:vm/${parameters.virtualmachineId}`
}