export interface TestCaseArnParameters {
  partition?: string | undefined
  region: string
  account: string
  testCaseId: string
}
export type TestCaseArn = `arn:${string}:apptest:${string}:${string}:testcase/${string}`
export function testCaseArn(parameters: TestCaseArnParameters): TestCaseArn {
  return `arn:${parameters.partition ?? ''}:apptest:${parameters.region}:${parameters.account}:testcase/${parameters.testCaseId}`
}

export interface TestConfigurationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  testConfigurationId: string
}
export type TestConfigurationArn = `arn:${string}:apptest:${string}:${string}:testconfiguration/${string}`
export function testConfigurationArn(parameters: TestConfigurationArnParameters): TestConfigurationArn {
  return `arn:${parameters.partition ?? ''}:apptest:${parameters.region}:${parameters.account}:testconfiguration/${parameters.testConfigurationId}`
}

export interface TestRunArnParameters {
  partition?: string | undefined
  region: string
  account: string
  testRunId: string
}
export type TestRunArn = `arn:${string}:apptest:${string}:${string}:testrun/${string}`
export function testRunArn(parameters: TestRunArnParameters): TestRunArn {
  return `arn:${parameters.partition ?? ''}:apptest:${parameters.region}:${parameters.account}:testrun/${parameters.testRunId}`
}

export interface TestSuiteArnParameters {
  partition?: string | undefined
  region: string
  account: string
  testSuiteId: string
}
export type TestSuiteArn = `arn:${string}:apptest:${string}:${string}:testsuite/${string}`
export function testSuiteArn(parameters: TestSuiteArnParameters): TestSuiteArn {
  return `arn:${parameters.partition ?? ''}:apptest:${parameters.region}:${parameters.account}:testsuite/${parameters.testSuiteId}`
}