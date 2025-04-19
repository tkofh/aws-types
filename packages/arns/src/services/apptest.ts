import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface TestCaseArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly testCaseId: string
}
class TestCaseArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'TestCase', `arn:${string}:apptest:${string}:${string}:testcase/${string}`> {
  readonly [ArnResourceTypeBrand] = 'TestCase' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly testCaseId: string
  constructor(parameters: TestCaseArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.testCaseId = parameters.testCaseId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apptest:${this.region}:${this.account}:testcase/${this.testCaseId}` as const
  }
}
export type { TestCaseArn }
export function testCaseArn<Partition extends ArnPartition = 'aws'>(parameters: TestCaseArnParameters<Partition>) {
  return new TestCaseArn<Partition>(parameters)
}

export interface TestConfigurationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly testConfigurationId: string
}
class TestConfigurationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'TestConfiguration', `arn:${string}:apptest:${string}:${string}:testconfiguration/${string}`> {
  readonly [ArnResourceTypeBrand] = 'TestConfiguration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly testConfigurationId: string
  constructor(parameters: TestConfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.testConfigurationId = parameters.testConfigurationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apptest:${this.region}:${this.account}:testconfiguration/${this.testConfigurationId}` as const
  }
}
export type { TestConfigurationArn }
export function testConfigurationArn<Partition extends ArnPartition = 'aws'>(parameters: TestConfigurationArnParameters<Partition>) {
  return new TestConfigurationArn<Partition>(parameters)
}

export interface TestRunArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly testRunId: string
}
class TestRunArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'TestRun', `arn:${string}:apptest:${string}:${string}:testrun/${string}`> {
  readonly [ArnResourceTypeBrand] = 'TestRun' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly testRunId: string
  constructor(parameters: TestRunArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.testRunId = parameters.testRunId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apptest:${this.region}:${this.account}:testrun/${this.testRunId}` as const
  }
}
export type { TestRunArn }
export function testRunArn<Partition extends ArnPartition = 'aws'>(parameters: TestRunArnParameters<Partition>) {
  return new TestRunArn<Partition>(parameters)
}

export interface TestSuiteArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly testSuiteId: string
}
class TestSuiteArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'TestSuite', `arn:${string}:apptest:${string}:${string}:testsuite/${string}`> {
  readonly [ArnResourceTypeBrand] = 'TestSuite' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly testSuiteId: string
  constructor(parameters: TestSuiteArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.testSuiteId = parameters.testSuiteId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apptest:${this.region}:${this.account}:testsuite/${this.testSuiteId}` as const
  }
}
export type { TestSuiteArn }
export function testSuiteArn<Partition extends ArnPartition = 'aws'>(parameters: TestSuiteArnParameters<Partition>) {
  return new TestSuiteArn<Partition>(parameters)
}