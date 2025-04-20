import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DefinitionSuiteArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionSuite: string
}
class DefinitionSuiteArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Suitedefinition',
  `arn:${string}:iotdeviceadvisor:${string}:${string}:suitedefinition/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Suitedefinition' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionSuite: string
  constructor(parameters: DefinitionSuiteArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDefinitionSuite = parameters.idDefinitionSuite
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotdeviceadvisor:${this.region}:${this.account}:suitedefinition/${this.idDefinitionSuite}` as const
  }
}
export type { DefinitionSuiteArn }
export function definitionSuiteArn<Partition extends ArnPartition = 'aws'>(
  parameters: DefinitionSuiteArnParameters<Partition>,
) {
  return new DefinitionSuiteArn<Partition>(parameters)
}

export interface RunSuiteArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionSuite: string
  readonly idRunSuite: string
}
class RunSuiteArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Suiterun',
  `arn:${string}:iotdeviceadvisor:${string}:${string}:suiterun/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Suiterun' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionSuite: string
  readonly idRunSuite: string
  constructor(parameters: RunSuiteArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDefinitionSuite = parameters.idDefinitionSuite
    this.idRunSuite = parameters.idRunSuite
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotdeviceadvisor:${this.region}:${this.account}:suiterun/${this.idDefinitionSuite}/${this.idRunSuite}` as const
  }
}
export type { RunSuiteArn }
export function runSuiteArn<Partition extends ArnPartition = 'aws'>(
  parameters: RunSuiteArnParameters<Partition>,
) {
  return new RunSuiteArn<Partition>(parameters)
}
