import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface WorkbookArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workbookId: string
}
class WorkbookArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'workbook', `arn:${string}:honeycode:${string}:${string}:workbook:workbook/${string}`> {
  readonly [ArnResourceTypeBrand] = 'workbook' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workbookId: string
  constructor(parameters: WorkbookArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.workbookId = parameters.workbookId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:honeycode:${this.region}:${this.account}:workbook:workbook/${this.workbookId}` as const
  }
}
export type { WorkbookArn }
export function workbookArn<Partition extends ArnPartition = 'aws'>(parameters: WorkbookArnParameters<Partition>) {
  return new WorkbookArn<Partition>(parameters)
}

export interface TableArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workbookId: string
  readonly tableId: string
}
class TableArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'table', `arn:${string}:honeycode:${string}:${string}:table:workbook/${string}/table/${string}`> {
  readonly [ArnResourceTypeBrand] = 'table' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workbookId: string
  readonly tableId: string
  constructor(parameters: TableArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.workbookId = parameters.workbookId
    this.tableId = parameters.tableId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:honeycode:${this.region}:${this.account}:table:workbook/${this.workbookId}/table/${this.tableId}` as const
  }
}
export type { TableArn }
export function tableArn<Partition extends ArnPartition = 'aws'>(parameters: TableArnParameters<Partition>) {
  return new TableArn<Partition>(parameters)
}

export interface ScreenArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workbookId: string
  readonly appId: string
  readonly screenId: string
}
class ScreenArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'screen', `arn:${string}:honeycode:${string}:${string}:screen:workbook/${string}/app/${string}/screen/${string}`> {
  readonly [ArnResourceTypeBrand] = 'screen' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workbookId: string
  readonly appId: string
  readonly screenId: string
  constructor(parameters: ScreenArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.workbookId = parameters.workbookId
    this.appId = parameters.appId
    this.screenId = parameters.screenId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:honeycode:${this.region}:${this.account}:screen:workbook/${this.workbookId}/app/${this.appId}/screen/${this.screenId}` as const
  }
}
export type { ScreenArn }
export function screenArn<Partition extends ArnPartition = 'aws'>(parameters: ScreenArnParameters<Partition>) {
  return new ScreenArn<Partition>(parameters)
}

export interface ScreenAutomationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workbookId: string
  readonly appId: string
  readonly screenId: string
  readonly automationId: string
}
class ScreenAutomationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'screen-automation', `arn:${string}:honeycode:${string}:${string}:screen-automation:workbook/${string}/app/${string}/screen/${string}/automation/${string}`> {
  readonly [ArnResourceTypeBrand] = 'screen-automation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workbookId: string
  readonly appId: string
  readonly screenId: string
  readonly automationId: string
  constructor(parameters: ScreenAutomationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.workbookId = parameters.workbookId
    this.appId = parameters.appId
    this.screenId = parameters.screenId
    this.automationId = parameters.automationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:honeycode:${this.region}:${this.account}:screen-automation:workbook/${this.workbookId}/app/${this.appId}/screen/${this.screenId}/automation/${this.automationId}` as const
  }
}
export type { ScreenAutomationArn }
export function screenAutomationArn<Partition extends ArnPartition = 'aws'>(parameters: ScreenAutomationArnParameters<Partition>) {
  return new ScreenAutomationArn<Partition>(parameters)
}