export interface WorkbookArnParameters {
  partition?: string | undefined
  region: string
  account: string
  workbookId: string
}
export type WorkbookArn = `arn:${string}:honeycode:${string}:${string}:workbook:workbook/${string}`
export function workbookArn(parameters: WorkbookArnParameters): WorkbookArn {
  return `arn:${parameters.partition ?? ''}:honeycode:${parameters.region}:${parameters.account}:workbook:workbook/${parameters.workbookId}`
}

export interface TableArnParameters {
  partition?: string | undefined
  region: string
  account: string
  workbookId: string
  tableId: string
}
export type TableArn = `arn:${string}:honeycode:${string}:${string}:table:workbook/${string}/table/${string}`
export function tableArn(parameters: TableArnParameters): TableArn {
  return `arn:${parameters.partition ?? ''}:honeycode:${parameters.region}:${parameters.account}:table:workbook/${parameters.workbookId}/table/${parameters.tableId}`
}

export interface ScreenArnParameters {
  partition?: string | undefined
  region: string
  account: string
  workbookId: string
  appId: string
  screenId: string
}
export type ScreenArn = `arn:${string}:honeycode:${string}:${string}:screen:workbook/${string}/app/${string}/screen/${string}`
export function screenArn(parameters: ScreenArnParameters): ScreenArn {
  return `arn:${parameters.partition ?? ''}:honeycode:${parameters.region}:${parameters.account}:screen:workbook/${parameters.workbookId}/app/${parameters.appId}/screen/${parameters.screenId}`
}

export interface ScreenAutomationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  workbookId: string
  appId: string
  screenId: string
  automationId: string
}
export type ScreenAutomationArn = `arn:${string}:honeycode:${string}:${string}:screen-automation:workbook/${string}/app/${string}/screen/${string}/automation/${string}`
export function screenAutomationArn(parameters: ScreenAutomationArnParameters): ScreenAutomationArn {
  return `arn:${parameters.partition ?? ''}:honeycode:${parameters.region}:${parameters.account}:screen-automation:workbook/${parameters.workbookId}/app/${parameters.appId}/screen/${parameters.screenId}/automation/${parameters.automationId}`
}