import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface GroupProfilingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupProfiling: string
}
class GroupProfilingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ProfilingGroup',
  `arn:${string}:codeguru-profiler:${string}:${string}:profilingGroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ProfilingGroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupProfiling: string
  constructor(parameters: GroupProfilingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupProfiling = parameters.nameGroupProfiling
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codeguru-profiler:${this.region}:${this.account}:profilingGroup/${this.nameGroupProfiling}` as const
  }
}
export type { GroupProfilingArn }
export function groupProfilingArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupProfilingArnParameters<Partition>,
) {
  return new GroupProfilingArn<Partition>(parameters)
}
