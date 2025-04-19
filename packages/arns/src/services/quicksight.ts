import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AccountArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class AccountArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'account',
  `arn:${string}:quicksight:${string}:${string}:account/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'account' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: AccountArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:account/${this.resourceId}` as const
  }
}
export type { AccountArn }
export function accountArn<Partition extends ArnPartition = 'aws'>(
  parameters: AccountArnParameters<Partition>,
) {
  return new AccountArn<Partition>(parameters)
}

export interface UserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class UserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'user',
  `arn:${string}:quicksight:${string}:${string}:user/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'user' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: UserArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:user/${this.resourceId}` as const
  }
}
export type { UserArn }
export function userArn<Partition extends ArnPartition = 'aws'>(
  parameters: UserArnParameters<Partition>,
) {
  return new UserArn<Partition>(parameters)
}

export interface GroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class GroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'group',
  `arn:${string}:quicksight:${string}:${string}:group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'group' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: GroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:group/${this.resourceId}` as const
  }
}
export type { GroupArn }
export function groupArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupArnParameters<Partition>,
) {
  return new GroupArn<Partition>(parameters)
}

export interface AnalysisArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class AnalysisArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'analysis',
  `arn:${string}:quicksight:${string}:${string}:analysis/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'analysis' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: AnalysisArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:analysis/${this.resourceId}` as const
  }
}
export type { AnalysisArn }
export function analysisArn<Partition extends ArnPartition = 'aws'>(
  parameters: AnalysisArnParameters<Partition>,
) {
  return new AnalysisArn<Partition>(parameters)
}

export interface DashboardArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class DashboardArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dashboard',
  `arn:${string}:quicksight:${string}:${string}:dashboard/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dashboard' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: DashboardArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:dashboard/${this.resourceId}` as const
  }
}
export type { DashboardArn }
export function dashboardArn<Partition extends ArnPartition = 'aws'>(
  parameters: DashboardArnParameters<Partition>,
) {
  return new DashboardArn<Partition>(parameters)
}

export interface TemplateArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class TemplateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'template',
  `arn:${string}:quicksight:${string}:${string}:template/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'template' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: TemplateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:template/${this.resourceId}` as const
  }
}
export type { TemplateArn }
export function templateArn<Partition extends ArnPartition = 'aws'>(
  parameters: TemplateArnParameters<Partition>,
) {
  return new TemplateArn<Partition>(parameters)
}

export interface VpcconnectionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class VpcconnectionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'vpcconnection',
  `arn:${string}:quicksight:${string}:${string}:vpcConnection/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpcconnection' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: VpcconnectionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:vpcConnection/${this.resourceId}` as const
  }
}
export type { VpcconnectionArn }
export function vpcconnectionArn<Partition extends ArnPartition = 'aws'>(
  parameters: VpcconnectionArnParameters<Partition>,
) {
  return new VpcconnectionArn<Partition>(parameters)
}

export interface AssetBundleExportJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class AssetBundleExportJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'assetBundleExportJob',
  `arn:${string}:quicksight:${string}:${string}:asset-bundle-export-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'assetBundleExportJob' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: AssetBundleExportJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:asset-bundle-export-job/${this.resourceId}` as const
  }
}
export type { AssetBundleExportJobArn }
export function assetBundleExportJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: AssetBundleExportJobArnParameters<Partition>,
) {
  return new AssetBundleExportJobArn<Partition>(parameters)
}

export interface AssetBundleImportJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class AssetBundleImportJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'assetBundleImportJob',
  `arn:${string}:quicksight:${string}:${string}:asset-bundle-import-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'assetBundleImportJob' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: AssetBundleImportJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:asset-bundle-import-job/${this.resourceId}` as const
  }
}
export type { AssetBundleImportJobArn }
export function assetBundleImportJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: AssetBundleImportJobArnParameters<Partition>,
) {
  return new AssetBundleImportJobArn<Partition>(parameters)
}

export interface DatasourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class DatasourceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'datasource',
  `arn:${string}:quicksight:${string}:${string}:datasource/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'datasource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: DatasourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:datasource/${this.resourceId}` as const
  }
}
export type { DatasourceArn }
export function datasourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: DatasourceArnParameters<Partition>,
) {
  return new DatasourceArn<Partition>(parameters)
}

export interface DatasetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class DatasetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dataset',
  `arn:${string}:quicksight:${string}:${string}:dataset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dataset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: DatasetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:dataset/${this.resourceId}` as const
  }
}
export type { DatasetArn }
export function datasetArn<Partition extends ArnPartition = 'aws'>(
  parameters: DatasetArnParameters<Partition>,
) {
  return new DatasetArn<Partition>(parameters)
}

export interface IngestionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly datasetId: string
  readonly resourceId: string
}
class IngestionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ingestion',
  `arn:${string}:quicksight:${string}:${string}:dataset/${string}/ingestion/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ingestion' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly datasetId: string
  readonly resourceId: string
  constructor(parameters: IngestionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.datasetId = parameters.datasetId
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:dataset/${this.datasetId}/ingestion/${this.resourceId}` as const
  }
}
export type { IngestionArn }
export function ingestionArn<Partition extends ArnPartition = 'aws'>(
  parameters: IngestionArnParameters<Partition>,
) {
  return new IngestionArn<Partition>(parameters)
}

export interface RefreshscheduleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly datasetId: string
  readonly resourceId: string
}
class RefreshscheduleArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'refreshschedule',
  `arn:${string}:quicksight:${string}:${string}:dataset/${string}/refresh-schedule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'refreshschedule' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly datasetId: string
  readonly resourceId: string
  constructor(parameters: RefreshscheduleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.datasetId = parameters.datasetId
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:dataset/${this.datasetId}/refresh-schedule/${this.resourceId}` as const
  }
}
export type { RefreshscheduleArn }
export function refreshscheduleArn<Partition extends ArnPartition = 'aws'>(
  parameters: RefreshscheduleArnParameters<Partition>,
) {
  return new RefreshscheduleArn<Partition>(parameters)
}

export interface ThemeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ThemeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'theme',
  `arn:${string}:quicksight:${string}:${string}:theme/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'theme' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ThemeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:theme/${this.resourceId}` as const
  }
}
export type { ThemeArn }
export function themeArn<Partition extends ArnPartition = 'aws'>(
  parameters: ThemeArnParameters<Partition>,
) {
  return new ThemeArn<Partition>(parameters)
}

export interface AssignmentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly resourceId: string
}
class AssignmentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'assignment',
  `arn:${string}:quicksight::${string}:assignment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'assignment' as const
  readonly partition: Partition
  readonly account: string
  readonly resourceId: string
  constructor(parameters: AssignmentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight::${this.account}:assignment/${this.resourceId}` as const
  }
}
export type { AssignmentArn }
export function assignmentArn<Partition extends ArnPartition = 'aws'>(
  parameters: AssignmentArnParameters<Partition>,
) {
  return new AssignmentArn<Partition>(parameters)
}

export interface CustomizationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class CustomizationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'customization',
  `arn:${string}:quicksight:${string}:${string}:customization/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'customization' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: CustomizationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:customization/${this.resourceId}` as const
  }
}
export type { CustomizationArn }
export function customizationArn<Partition extends ArnPartition = 'aws'>(
  parameters: CustomizationArnParameters<Partition>,
) {
  return new CustomizationArn<Partition>(parameters)
}

export interface NamespaceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class NamespaceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'namespace',
  `arn:${string}:quicksight:${string}:${string}:namespace/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'namespace' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: NamespaceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:namespace/${this.resourceId}` as const
  }
}
export type { NamespaceArn }
export function namespaceArn<Partition extends ArnPartition = 'aws'>(
  parameters: NamespaceArnParameters<Partition>,
) {
  return new NamespaceArn<Partition>(parameters)
}

export interface FolderArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class FolderArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'folder',
  `arn:${string}:quicksight:${string}:${string}:folder/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'folder' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: FolderArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:folder/${this.resourceId}` as const
  }
}
export type { FolderArn }
export function folderArn<Partition extends ArnPartition = 'aws'>(
  parameters: FolderArnParameters<Partition>,
) {
  return new FolderArn<Partition>(parameters)
}

export interface EmailCustomizationTemplateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class EmailCustomizationTemplateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'emailCustomizationTemplate',
  `arn:${string}:quicksight:${string}:${string}:email-customization-template/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'emailCustomizationTemplate' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: EmailCustomizationTemplateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:email-customization-template/${this.resourceId}` as const
  }
}
export type { EmailCustomizationTemplateArn }
export function emailCustomizationTemplateArn<
  Partition extends ArnPartition = 'aws',
>(parameters: EmailCustomizationTemplateArnParameters<Partition>) {
  return new EmailCustomizationTemplateArn<Partition>(parameters)
}

export interface TopicArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class TopicArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'topic',
  `arn:${string}:quicksight:${string}:${string}:topic/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'topic' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: TopicArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:topic/${this.resourceId}` as const
  }
}
export type { TopicArn }
export function topicArn<Partition extends ArnPartition = 'aws'>(
  parameters: TopicArnParameters<Partition>,
) {
  return new TopicArn<Partition>(parameters)
}

export interface DashboardSnapshotJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dashboardId: string
  readonly resourceId: string
}
class DashboardSnapshotJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'dashboardSnapshotJob',
  `arn:${string}:quicksight:${string}:${string}:dashboard/${string}/snapshot-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dashboardSnapshotJob' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dashboardId: string
  readonly resourceId: string
  constructor(parameters: DashboardSnapshotJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.dashboardId = parameters.dashboardId
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:quicksight:${this.region}:${this.account}:dashboard/${this.dashboardId}/snapshot-job/${this.resourceId}` as const
  }
}
export type { DashboardSnapshotJobArn }
export function dashboardSnapshotJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: DashboardSnapshotJobArnParameters<Partition>,
) {
  return new DashboardSnapshotJobArn<Partition>(parameters)
}
