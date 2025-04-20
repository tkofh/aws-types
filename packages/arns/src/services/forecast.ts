import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DataSetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class DataSetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dataset',
  `arn:${string}:forecast:${string}:${string}:dataset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dataset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: DataSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:forecast:${this.region}:${this.account}:dataset/${this.resourceId}` as const
  }
}
export type { DataSetArn }
export function dataSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: DataSetArnParameters<Partition>,
) {
  return new DataSetArn<Partition>(parameters)
}

export interface DataSetGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class DataSetGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'datasetGroup',
  `arn:${string}:forecast:${string}:${string}:dataset-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'datasetGroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: DataSetGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:forecast:${this.region}:${this.account}:dataset-group/${this.resourceId}` as const
  }
}
export type { DataSetGroupArn }
export function dataSetGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: DataSetGroupArnParameters<Partition>,
) {
  return new DataSetGroupArn<Partition>(parameters)
}

export interface DataSetImportJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class DataSetImportJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'datasetImportJob',
  `arn:${string}:forecast:${string}:${string}:dataset-import-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'datasetImportJob' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: DataSetImportJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:forecast:${this.region}:${this.account}:dataset-import-job/${this.resourceId}` as const
  }
}
export type { DataSetImportJobArn }
export function dataSetImportJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: DataSetImportJobArnParameters<Partition>,
) {
  return new DataSetImportJobArn<Partition>(parameters)
}

export interface AlgorithmArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly resourceId: string
}
class AlgorithmArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'algorithm',
  `arn:${string}:forecast:::algorithm/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'algorithm' as const
  readonly partition: Partition
  readonly resourceId: string
  constructor(parameters: AlgorithmArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:forecast:::algorithm/${this.resourceId}` as const
  }
}
export type { AlgorithmArn }
export function algorithmArn<Partition extends ArnPartition = 'aws'>(
  parameters: AlgorithmArnParameters<Partition>,
) {
  return new AlgorithmArn<Partition>(parameters)
}

export interface PredictorArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class PredictorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'predictor',
  `arn:${string}:forecast:${string}:${string}:predictor/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'predictor' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: PredictorArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:forecast:${this.region}:${this.account}:predictor/${this.resourceId}` as const
  }
}
export type { PredictorArn }
export function predictorArn<Partition extends ArnPartition = 'aws'>(
  parameters: PredictorArnParameters<Partition>,
) {
  return new PredictorArn<Partition>(parameters)
}

export interface PredictorBacktestExportJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class PredictorBacktestExportJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'predictorBacktestExportJob',
  `arn:${string}:forecast:${string}:${string}:predictor-backtest-export-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'predictorBacktestExportJob' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: PredictorBacktestExportJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:forecast:${this.region}:${this.account}:predictor-backtest-export-job/${this.resourceId}` as const
  }
}
export type { PredictorBacktestExportJobArn }
export function predictorBacktestExportJobArn<
  Partition extends ArnPartition = 'aws',
>(parameters: PredictorBacktestExportJobArnParameters<Partition>) {
  return new PredictorBacktestExportJobArn<Partition>(parameters)
}

export interface ForecastArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ForecastArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'forecast',
  `arn:${string}:forecast:${string}:${string}:forecast/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'forecast' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ForecastArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:forecast:${this.region}:${this.account}:forecast/${this.resourceId}` as const
  }
}
export type { ForecastArn }
export function forecastArn<Partition extends ArnPartition = 'aws'>(
  parameters: ForecastArnParameters<Partition>,
) {
  return new ForecastArn<Partition>(parameters)
}

export interface ForecastExportArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ForecastExportArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'forecastExport',
  `arn:${string}:forecast:${string}:${string}:forecast-export-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'forecastExport' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ForecastExportArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:forecast:${this.region}:${this.account}:forecast-export-job/${this.resourceId}` as const
  }
}
export type { ForecastExportArn }
export function forecastExportArn<Partition extends ArnPartition = 'aws'>(
  parameters: ForecastExportArnParameters<Partition>,
) {
  return new ForecastExportArn<Partition>(parameters)
}

export interface ExplainabilityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ExplainabilityArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'explainability',
  `arn:${string}:forecast:${string}:${string}:explainability/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'explainability' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ExplainabilityArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:forecast:${this.region}:${this.account}:explainability/${this.resourceId}` as const
  }
}
export type { ExplainabilityArn }
export function explainabilityArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExplainabilityArnParameters<Partition>,
) {
  return new ExplainabilityArn<Partition>(parameters)
}

export interface ExplainabilityExportArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ExplainabilityExportArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'explainabilityExport',
  `arn:${string}:forecast:${string}:${string}:explainability-export/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'explainabilityExport' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ExplainabilityExportArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:forecast:${this.region}:${this.account}:explainability-export/${this.resourceId}` as const
  }
}
export type { ExplainabilityExportArn }
export function explainabilityExportArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExplainabilityExportArnParameters<Partition>,
) {
  return new ExplainabilityExportArn<Partition>(parameters)
}

export interface MonitorArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class MonitorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'monitor',
  `arn:${string}:forecast:${string}:${string}:monitor/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'monitor' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: MonitorArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:forecast:${this.region}:${this.account}:monitor/${this.resourceId}` as const
  }
}
export type { MonitorArn }
export function monitorArn<Partition extends ArnPartition = 'aws'>(
  parameters: MonitorArnParameters<Partition>,
) {
  return new MonitorArn<Partition>(parameters)
}

export interface WhatIfAnalysisArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class WhatIfAnalysisArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'whatIfAnalysis',
  `arn:${string}:forecast:${string}:${string}:what-if-analysis/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'whatIfAnalysis' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: WhatIfAnalysisArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:forecast:${this.region}:${this.account}:what-if-analysis/${this.resourceId}` as const
  }
}
export type { WhatIfAnalysisArn }
export function whatIfAnalysisArn<Partition extends ArnPartition = 'aws'>(
  parameters: WhatIfAnalysisArnParameters<Partition>,
) {
  return new WhatIfAnalysisArn<Partition>(parameters)
}

export interface WhatIfForecastArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class WhatIfForecastArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'whatIfForecast',
  `arn:${string}:forecast:${string}:${string}:what-if-forecast/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'whatIfForecast' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: WhatIfForecastArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:forecast:${this.region}:${this.account}:what-if-forecast/${this.resourceId}` as const
  }
}
export type { WhatIfForecastArn }
export function whatIfForecastArn<Partition extends ArnPartition = 'aws'>(
  parameters: WhatIfForecastArnParameters<Partition>,
) {
  return new WhatIfForecastArn<Partition>(parameters)
}

export interface WhatIfForecastExportArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class WhatIfForecastExportArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'whatIfForecastExport',
  `arn:${string}:forecast:${string}:${string}:what-if-forecast-export/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'whatIfForecastExport' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: WhatIfForecastExportArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:forecast:${this.region}:${this.account}:what-if-forecast-export/${this.resourceId}` as const
  }
}
export type { WhatIfForecastExportArn }
export function whatIfForecastExportArn<Partition extends ArnPartition = 'aws'>(
  parameters: WhatIfForecastExportArnParameters<Partition>,
) {
  return new WhatIfForecastExportArn<Partition>(parameters)
}

export interface EndpointArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class EndpointArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'endpoint',
  `arn:${string}:forecast:${string}:${string}:forecast-endpoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'endpoint' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: EndpointArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:forecast:${this.region}:${this.account}:forecast-endpoint/${this.resourceId}` as const
  }
}
export type { EndpointArn }
export function endpointArn<Partition extends ArnPartition = 'aws'>(
  parameters: EndpointArnParameters<Partition>,
) {
  return new EndpointArn<Partition>(parameters)
}
