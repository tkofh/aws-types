export interface DatasetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type DatasetArn = `arn:${string}:forecast:${string}:${string}:dataset/${string}`
export function datasetArn(parameters: DatasetArnParameters): DatasetArn {
  return `arn:${parameters.partition ?? ''}:forecast:${parameters.region}:${parameters.account}:dataset/${parameters.resourceId}`
}

export interface DatasetGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type DatasetGroupArn = `arn:${string}:forecast:${string}:${string}:dataset-group/${string}`
export function datasetGroupArn(parameters: DatasetGroupArnParameters): DatasetGroupArn {
  return `arn:${parameters.partition ?? ''}:forecast:${parameters.region}:${parameters.account}:dataset-group/${parameters.resourceId}`
}

export interface DatasetImportJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type DatasetImportJobArn = `arn:${string}:forecast:${string}:${string}:dataset-import-job/${string}`
export function datasetImportJobArn(parameters: DatasetImportJobArnParameters): DatasetImportJobArn {
  return `arn:${parameters.partition ?? ''}:forecast:${parameters.region}:${parameters.account}:dataset-import-job/${parameters.resourceId}`
}

export interface AlgorithmArnParameters {
  partition?: string | undefined
  resourceId: string
}
export type AlgorithmArn = `arn:${string}:forecast:::algorithm/${string}`
export function algorithmArn(parameters: AlgorithmArnParameters): AlgorithmArn {
  return `arn:${parameters.partition ?? ''}:forecast:::algorithm/${parameters.resourceId}`
}

export interface PredictorArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type PredictorArn = `arn:${string}:forecast:${string}:${string}:predictor/${string}`
export function predictorArn(parameters: PredictorArnParameters): PredictorArn {
  return `arn:${parameters.partition ?? ''}:forecast:${parameters.region}:${parameters.account}:predictor/${parameters.resourceId}`
}

export interface PredictorBacktestExportJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type PredictorBacktestExportJobArn = `arn:${string}:forecast:${string}:${string}:predictor-backtest-export-job/${string}`
export function predictorBacktestExportJobArn(parameters: PredictorBacktestExportJobArnParameters): PredictorBacktestExportJobArn {
  return `arn:${parameters.partition ?? ''}:forecast:${parameters.region}:${parameters.account}:predictor-backtest-export-job/${parameters.resourceId}`
}

export interface ForecastArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ForecastArn = `arn:${string}:forecast:${string}:${string}:forecast/${string}`
export function forecastArn(parameters: ForecastArnParameters): ForecastArn {
  return `arn:${parameters.partition ?? ''}:forecast:${parameters.region}:${parameters.account}:forecast/${parameters.resourceId}`
}

export interface ForecastExportArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ForecastExportArn = `arn:${string}:forecast:${string}:${string}:forecast-export-job/${string}`
export function forecastExportArn(parameters: ForecastExportArnParameters): ForecastExportArn {
  return `arn:${parameters.partition ?? ''}:forecast:${parameters.region}:${parameters.account}:forecast-export-job/${parameters.resourceId}`
}

export interface ExplainabilityArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ExplainabilityArn = `arn:${string}:forecast:${string}:${string}:explainability/${string}`
export function explainabilityArn(parameters: ExplainabilityArnParameters): ExplainabilityArn {
  return `arn:${parameters.partition ?? ''}:forecast:${parameters.region}:${parameters.account}:explainability/${parameters.resourceId}`
}

export interface ExplainabilityExportArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ExplainabilityExportArn = `arn:${string}:forecast:${string}:${string}:explainability-export/${string}`
export function explainabilityExportArn(parameters: ExplainabilityExportArnParameters): ExplainabilityExportArn {
  return `arn:${parameters.partition ?? ''}:forecast:${parameters.region}:${parameters.account}:explainability-export/${parameters.resourceId}`
}

export interface MonitorArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type MonitorArn = `arn:${string}:forecast:${string}:${string}:monitor/${string}`
export function monitorArn(parameters: MonitorArnParameters): MonitorArn {
  return `arn:${parameters.partition ?? ''}:forecast:${parameters.region}:${parameters.account}:monitor/${parameters.resourceId}`
}

export interface WhatIfAnalysisArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type WhatIfAnalysisArn = `arn:${string}:forecast:${string}:${string}:what-if-analysis/${string}`
export function whatIfAnalysisArn(parameters: WhatIfAnalysisArnParameters): WhatIfAnalysisArn {
  return `arn:${parameters.partition ?? ''}:forecast:${parameters.region}:${parameters.account}:what-if-analysis/${parameters.resourceId}`
}

export interface WhatIfForecastArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type WhatIfForecastArn = `arn:${string}:forecast:${string}:${string}:what-if-forecast/${string}`
export function whatIfForecastArn(parameters: WhatIfForecastArnParameters): WhatIfForecastArn {
  return `arn:${parameters.partition ?? ''}:forecast:${parameters.region}:${parameters.account}:what-if-forecast/${parameters.resourceId}`
}

export interface WhatIfForecastExportArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type WhatIfForecastExportArn = `arn:${string}:forecast:${string}:${string}:what-if-forecast-export/${string}`
export function whatIfForecastExportArn(parameters: WhatIfForecastExportArnParameters): WhatIfForecastExportArn {
  return `arn:${parameters.partition ?? ''}:forecast:${parameters.region}:${parameters.account}:what-if-forecast-export/${parameters.resourceId}`
}

export interface EndpointArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type EndpointArn = `arn:${string}:forecast:${string}:${string}:forecast-endpoint/${string}`
export function endpointArn(parameters: EndpointArnParameters): EndpointArn {
  return `arn:${parameters.partition ?? ''}:forecast:${parameters.region}:${parameters.account}:forecast-endpoint/${parameters.resourceId}`
}