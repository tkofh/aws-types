import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AnalyzerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameAnalyzer: string
}
class AnalyzerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Analyzer',
  `arn:${string}:access-analyzer:${string}:${string}:analyzer/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Analyzer' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameAnalyzer: string
  constructor(parameters: AnalyzerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameAnalyzer = parameters.nameAnalyzer
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:access-analyzer:${this.region}:${this.account}:analyzer/${this.nameAnalyzer}` as const
  }
}
export type { AnalyzerArn }
export function analyzerArn<Partition extends ArnPartition = 'aws'>(
  parameters: AnalyzerArnParameters<Partition>,
) {
  return new AnalyzerArn<Partition>(parameters)
}

export interface RuleArchiveArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameAnalyzer: string
  readonly nameRule: string
}
class RuleArchiveArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ArchiveRule',
  `arn:${string}:access-analyzer:${string}:${string}:analyzer/${string}/archive-rule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ArchiveRule' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameAnalyzer: string
  readonly nameRule: string
  constructor(parameters: RuleArchiveArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameAnalyzer = parameters.nameAnalyzer
    this.nameRule = parameters.nameRule
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:access-analyzer:${this.region}:${this.account}:analyzer/${this.nameAnalyzer}/archive-rule/${this.nameRule}` as const
  }
}
export type { RuleArchiveArn }
export function ruleArchiveArn<Partition extends ArnPartition = 'aws'>(
  parameters: RuleArchiveArnParameters<Partition>,
) {
  return new RuleArchiveArn<Partition>(parameters)
}
