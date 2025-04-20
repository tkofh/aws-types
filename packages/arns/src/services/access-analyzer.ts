import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AnalyzerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly analyzerName: string
}
class AnalyzerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Analyzer',
  `arn:${string}:access-analyzer:${string}:${string}:analyzer/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Analyzer' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly analyzerName: string
  constructor(parameters: AnalyzerArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.analyzerName = parameters.analyzerName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:access-analyzer:${this.region}:${this.account}:analyzer/${this.analyzerName}` as const
  }
}
export type { AnalyzerArn }
export function analyzerArn<Partition extends ArnPartition = 'aws'>(
  parameters: AnalyzerArnParameters<Partition>,
) {
  return new AnalyzerArn<Partition>(parameters)
}

export interface ArchiveRuleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly analyzerName: string
  readonly ruleName: string
}
class ArchiveRuleArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ArchiveRule',
  `arn:${string}:access-analyzer:${string}:${string}:analyzer/${string}/archive-rule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ArchiveRule' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly analyzerName: string
  readonly ruleName: string
  constructor(parameters: ArchiveRuleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.analyzerName = parameters.analyzerName
    this.ruleName = parameters.ruleName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:access-analyzer:${this.region}:${this.account}:analyzer/${this.analyzerName}/archive-rule/${this.ruleName}` as const
  }
}
export type { ArchiveRuleArn }
export function archiveRuleArn<Partition extends ArnPartition = 'aws'>(
  parameters: ArchiveRuleArnParameters<Partition>,
) {
  return new ArchiveRuleArn<Partition>(parameters)
}
