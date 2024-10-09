export interface QuantumTaskArnParameters {
  partition?: string | undefined
  region: string
  account: string
  randomId: string
}
export type QuantumTaskArn = `arn:${string}:braket:${string}:${string}:quantum-task/${string}`
export function quantumTaskArn(parameters: QuantumTaskArnParameters): QuantumTaskArn {
  return `arn:${parameters.partition ?? ''}:braket:${parameters.region}:${parameters.account}:quantum-task/${parameters.randomId}`
}

export interface JobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobName: string
}
export type JobArn = `arn:${string}:braket:${string}:${string}:job/${string}`
export function jobArn(parameters: JobArnParameters): JobArn {
  return `arn:${parameters.partition ?? ''}:braket:${parameters.region}:${parameters.account}:job/${parameters.jobName}`
}