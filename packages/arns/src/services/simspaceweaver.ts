export interface SimulationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  simulationName: string
}
export type SimulationArn = `arn:${string}:simspaceweaver:${string}:${string}:simulation/${string}`
export function simulationArn(parameters: SimulationArnParameters): SimulationArn {
  return `arn:${parameters.partition ?? ''}:simspaceweaver:${parameters.region}:${parameters.account}:simulation/${parameters.simulationName}`
}