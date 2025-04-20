import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface WorkbookArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorkbook: string
}
class WorkbookArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'workbook',
  `arn:${string}:honeycode:${string}:${string}:workbook:workbook/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workbook' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorkbook: string
  constructor(parameters: WorkbookArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idWorkbook = parameters.idWorkbook
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:honeycode:${this.region}:${this.account}:workbook:workbook/${this.idWorkbook}` as const
  }
}
export type { WorkbookArn }
export function workbookArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorkbookArnParameters<Partition>,
) {
  return new WorkbookArn<Partition>(parameters)
}

export interface TableArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorkbook: string
  readonly idTable: string
}
class TableArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'table',
  `arn:${string}:honeycode:${string}:${string}:table:workbook/${string}/table/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'table' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorkbook: string
  readonly idTable: string
  constructor(parameters: TableArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idWorkbook = parameters.idWorkbook
    this.idTable = parameters.idTable
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:honeycode:${this.region}:${this.account}:table:workbook/${this.idWorkbook}/table/${this.idTable}` as const
  }
}
export type { TableArn }
export function tableArn<Partition extends ArnPartition = 'aws'>(
  parameters: TableArnParameters<Partition>,
) {
  return new TableArn<Partition>(parameters)
}

export interface ScreenArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorkbook: string
  readonly idApp: string
  readonly idScreen: string
}
class ScreenArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'screen',
  `arn:${string}:honeycode:${string}:${string}:screen:workbook/${string}/app/${string}/screen/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'screen' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorkbook: string
  readonly idApp: string
  readonly idScreen: string
  constructor(parameters: ScreenArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idWorkbook = parameters.idWorkbook
    this.idApp = parameters.idApp
    this.idScreen = parameters.idScreen
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:honeycode:${this.region}:${this.account}:screen:workbook/${this.idWorkbook}/app/${this.idApp}/screen/${this.idScreen}` as const
  }
}
export type { ScreenArn }
export function screenArn<Partition extends ArnPartition = 'aws'>(
  parameters: ScreenArnParameters<Partition>,
) {
  return new ScreenArn<Partition>(parameters)
}

export interface AutomationScreenArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorkbook: string
  readonly idApp: string
  readonly idScreen: string
  readonly idAutomation: string
}
class AutomationScreenArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'screen-automation',
  `arn:${string}:honeycode:${string}:${string}:screen-automation:workbook/${string}/app/${string}/screen/${string}/automation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'screen-automation' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorkbook: string
  readonly idApp: string
  readonly idScreen: string
  readonly idAutomation: string
  constructor(parameters: AutomationScreenArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idWorkbook = parameters.idWorkbook
    this.idApp = parameters.idApp
    this.idScreen = parameters.idScreen
    this.idAutomation = parameters.idAutomation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:honeycode:${this.region}:${this.account}:screen-automation:workbook/${this.idWorkbook}/app/${this.idApp}/screen/${this.idScreen}/automation/${this.idAutomation}` as const
  }
}
export type { AutomationScreenArn }
export function automationScreenArn<Partition extends ArnPartition = 'aws'>(
  parameters: AutomationScreenArnParameters<Partition>,
) {
  return new AutomationScreenArn<Partition>(parameters)
}
