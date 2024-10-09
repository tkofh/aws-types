export interface AccountArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type AccountArn = `arn:${string}:quicksight:${string}:${string}:account/${string}`
export function accountArn(parameters: AccountArnParameters): AccountArn {
  return `arn:${parameters.partition ?? ''}:quicksight:${parameters.region}:${parameters.account}:account/${parameters.resourceId}`
}

export interface UserArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type UserArn = `arn:${string}:quicksight:${string}:${string}:user/${string}`
export function userArn(parameters: UserArnParameters): UserArn {
  return `arn:${parameters.partition ?? ''}:quicksight:${parameters.region}:${parameters.account}:user/${parameters.resourceId}`
}

export interface GroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type GroupArn = `arn:${string}:quicksight:${string}:${string}:group/${string}`
export function groupArn(parameters: GroupArnParameters): GroupArn {
  return `arn:${parameters.partition ?? ''}:quicksight:${parameters.region}:${parameters.account}:group/${parameters.resourceId}`
}

export interface AnalysisArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type AnalysisArn = `arn:${string}:quicksight:${string}:${string}:analysis/${string}`
export function analysisArn(parameters: AnalysisArnParameters): AnalysisArn {
  return `arn:${parameters.partition ?? ''}:quicksight:${parameters.region}:${parameters.account}:analysis/${parameters.resourceId}`
}

export interface DashboardArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type DashboardArn = `arn:${string}:quicksight:${string}:${string}:dashboard/${string}`
export function dashboardArn(parameters: DashboardArnParameters): DashboardArn {
  return `arn:${parameters.partition ?? ''}:quicksight:${parameters.region}:${parameters.account}:dashboard/${parameters.resourceId}`
}

export interface TemplateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type TemplateArn = `arn:${string}:quicksight:${string}:${string}:template/${string}`
export function templateArn(parameters: TemplateArnParameters): TemplateArn {
  return `arn:${parameters.partition ?? ''}:quicksight:${parameters.region}:${parameters.account}:template/${parameters.resourceId}`
}

export interface VpcconnectionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type VpcconnectionArn = `arn:${string}:quicksight:${string}:${string}:vpcConnection/${string}`
export function vpcconnectionArn(parameters: VpcconnectionArnParameters): VpcconnectionArn {
  return `arn:${parameters.partition ?? ''}:quicksight:${parameters.region}:${parameters.account}:vpcConnection/${parameters.resourceId}`
}

export interface AssetBundleExportJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type AssetBundleExportJobArn = `arn:${string}:quicksight:${string}:${string}:asset-bundle-export-job/${string}`
export function assetBundleExportJobArn(parameters: AssetBundleExportJobArnParameters): AssetBundleExportJobArn {
  return `arn:${parameters.partition ?? ''}:quicksight:${parameters.region}:${parameters.account}:asset-bundle-export-job/${parameters.resourceId}`
}

export interface AssetBundleImportJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type AssetBundleImportJobArn = `arn:${string}:quicksight:${string}:${string}:asset-bundle-import-job/${string}`
export function assetBundleImportJobArn(parameters: AssetBundleImportJobArnParameters): AssetBundleImportJobArn {
  return `arn:${parameters.partition ?? ''}:quicksight:${parameters.region}:${parameters.account}:asset-bundle-import-job/${parameters.resourceId}`
}

export interface DatasourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type DatasourceArn = `arn:${string}:quicksight:${string}:${string}:datasource/${string}`
export function datasourceArn(parameters: DatasourceArnParameters): DatasourceArn {
  return `arn:${parameters.partition ?? ''}:quicksight:${parameters.region}:${parameters.account}:datasource/${parameters.resourceId}`
}

export interface DatasetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type DatasetArn = `arn:${string}:quicksight:${string}:${string}:dataset/${string}`
export function datasetArn(parameters: DatasetArnParameters): DatasetArn {
  return `arn:${parameters.partition ?? ''}:quicksight:${parameters.region}:${parameters.account}:dataset/${parameters.resourceId}`
}

export interface IngestionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  datasetId: string
  resourceId: string
}
export type IngestionArn = `arn:${string}:quicksight:${string}:${string}:dataset/${string}/ingestion/${string}`
export function ingestionArn(parameters: IngestionArnParameters): IngestionArn {
  return `arn:${parameters.partition ?? ''}:quicksight:${parameters.region}:${parameters.account}:dataset/${parameters.datasetId}/ingestion/${parameters.resourceId}`
}

export interface RefreshscheduleArnParameters {
  partition?: string | undefined
  region: string
  account: string
  datasetId: string
  resourceId: string
}
export type RefreshscheduleArn = `arn:${string}:quicksight:${string}:${string}:dataset/${string}/refresh-schedule/${string}`
export function refreshscheduleArn(parameters: RefreshscheduleArnParameters): RefreshscheduleArn {
  return `arn:${parameters.partition ?? ''}:quicksight:${parameters.region}:${parameters.account}:dataset/${parameters.datasetId}/refresh-schedule/${parameters.resourceId}`
}

export interface ThemeArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ThemeArn = `arn:${string}:quicksight:${string}:${string}:theme/${string}`
export function themeArn(parameters: ThemeArnParameters): ThemeArn {
  return `arn:${parameters.partition ?? ''}:quicksight:${parameters.region}:${parameters.account}:theme/${parameters.resourceId}`
}

export interface AssignmentArnParameters {
  partition?: string | undefined
  account: string
  resourceId: string
}
export type AssignmentArn = `arn:${string}:quicksight::${string}:assignment/${string}`
export function assignmentArn(parameters: AssignmentArnParameters): AssignmentArn {
  return `arn:${parameters.partition ?? ''}:quicksight::${parameters.account}:assignment/${parameters.resourceId}`
}

export interface CustomizationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type CustomizationArn = `arn:${string}:quicksight:${string}:${string}:customization/${string}`
export function customizationArn(parameters: CustomizationArnParameters): CustomizationArn {
  return `arn:${parameters.partition ?? ''}:quicksight:${parameters.region}:${parameters.account}:customization/${parameters.resourceId}`
}

export interface NamespaceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type NamespaceArn = `arn:${string}:quicksight:${string}:${string}:namespace/${string}`
export function namespaceArn(parameters: NamespaceArnParameters): NamespaceArn {
  return `arn:${parameters.partition ?? ''}:quicksight:${parameters.region}:${parameters.account}:namespace/${parameters.resourceId}`
}

export interface FolderArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type FolderArn = `arn:${string}:quicksight:${string}:${string}:folder/${string}`
export function folderArn(parameters: FolderArnParameters): FolderArn {
  return `arn:${parameters.partition ?? ''}:quicksight:${parameters.region}:${parameters.account}:folder/${parameters.resourceId}`
}

export interface EmailCustomizationTemplateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type EmailCustomizationTemplateArn = `arn:${string}:quicksight:${string}:${string}:email-customization-template/${string}`
export function emailCustomizationTemplateArn(parameters: EmailCustomizationTemplateArnParameters): EmailCustomizationTemplateArn {
  return `arn:${parameters.partition ?? ''}:quicksight:${parameters.region}:${parameters.account}:email-customization-template/${parameters.resourceId}`
}

export interface TopicArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type TopicArn = `arn:${string}:quicksight:${string}:${string}:topic/${string}`
export function topicArn(parameters: TopicArnParameters): TopicArn {
  return `arn:${parameters.partition ?? ''}:quicksight:${parameters.region}:${parameters.account}:topic/${parameters.resourceId}`
}

export interface DashboardSnapshotJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  dashboardId: string
  resourceId: string
}
export type DashboardSnapshotJobArn = `arn:${string}:quicksight:${string}:${string}:dashboard/${string}/snapshot-job/${string}`
export function dashboardSnapshotJobArn(parameters: DashboardSnapshotJobArnParameters): DashboardSnapshotJobArn {
  return `arn:${parameters.partition ?? ''}:quicksight:${parameters.region}:${parameters.account}:dashboard/${parameters.dashboardId}/snapshot-job/${parameters.resourceId}`
}