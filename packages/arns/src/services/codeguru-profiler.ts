import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ProfilingGroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly profilingGroupName: string
}
class ProfilingGroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'ProfilingGroup', `arn:${string}:codeguru-profiler:${string}:${string}:profilingGroup/${string}`> {
  readonly [ArnResourceTypeBrand] = 'ProfilingGroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly profilingGroupName: string
  constructor(parameters: ProfilingGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.profilingGroupName = parameters.profilingGroupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codeguru-profiler:${this.region}:${this.account}:profilingGroup/${this.profilingGroupName}` as const
  }
}
export type { ProfilingGroupArn }
export function profilingGroupArn<Partition extends ArnPartition = 'aws'>(parameters: ProfilingGroupArnParameters<Partition>) {
  return new ProfilingGroupArn<Partition>(parameters)
}