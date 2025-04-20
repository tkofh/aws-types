import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface CaseTestArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCaseTest: string
}
class CaseTestArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'TestCase',
  `arn:${string}:apptest:${string}:${string}:testcase/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'TestCase' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCaseTest: string
  constructor(parameters: CaseTestArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idCaseTest = parameters.idCaseTest
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apptest:${this.region}:${this.account}:testcase/${this.idCaseTest}` as const
  }
}
export type { CaseTestArn }
export function caseTestArn<Partition extends ArnPartition = 'aws'>(
  parameters: CaseTestArnParameters<Partition>,
) {
  return new CaseTestArn<Partition>(parameters)
}

export interface ConfigurationTestArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConfigurationTest: string
}
class ConfigurationTestArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'TestConfiguration',
  `arn:${string}:apptest:${string}:${string}:testconfiguration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'TestConfiguration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConfigurationTest: string
  constructor(parameters: ConfigurationTestArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idConfigurationTest = parameters.idConfigurationTest
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apptest:${this.region}:${this.account}:testconfiguration/${this.idConfigurationTest}` as const
  }
}
export type { ConfigurationTestArn }
export function configurationTestArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigurationTestArnParameters<Partition>,
) {
  return new ConfigurationTestArn<Partition>(parameters)
}

export interface RunTestArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idRunTest: string
}
class RunTestArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'TestRun',
  `arn:${string}:apptest:${string}:${string}:testrun/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'TestRun' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idRunTest: string
  constructor(parameters: RunTestArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idRunTest = parameters.idRunTest
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apptest:${this.region}:${this.account}:testrun/${this.idRunTest}` as const
  }
}
export type { RunTestArn }
export function runTestArn<Partition extends ArnPartition = 'aws'>(
  parameters: RunTestArnParameters<Partition>,
) {
  return new RunTestArn<Partition>(parameters)
}

export interface SuiteTestArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSuiteTest: string
}
class SuiteTestArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'TestSuite',
  `arn:${string}:apptest:${string}:${string}:testsuite/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'TestSuite' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSuiteTest: string
  constructor(parameters: SuiteTestArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSuiteTest = parameters.idSuiteTest
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apptest:${this.region}:${this.account}:testsuite/${this.idSuiteTest}` as const
  }
}
export type { SuiteTestArn }
export function suiteTestArn<Partition extends ArnPartition = 'aws'>(
  parameters: SuiteTestArnParameters<Partition>,
) {
  return new SuiteTestArn<Partition>(parameters)
}
