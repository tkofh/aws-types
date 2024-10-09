export interface CarArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type CarArn = `arn:${string}:deepracer:${string}:${string}:car/${string}`
export function carArn(parameters: CarArnParameters): CarArn {
  return `arn:${parameters.partition ?? ''}:deepracer:${parameters.region}:${parameters.account}:car/${parameters.resourceId}`
}

export interface EvaluationJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type EvaluationJobArn = `arn:${string}:deepracer:${string}:${string}:evaluation_job/${string}`
export function evaluationJobArn(parameters: EvaluationJobArnParameters): EvaluationJobArn {
  return `arn:${parameters.partition ?? ''}:deepracer:${parameters.region}:${parameters.account}:evaluation_job/${parameters.resourceId}`
}

export interface LeaderboardArnParameters {
  partition?: string | undefined
  region: string
  resourceId: string
}
export type LeaderboardArn = `arn:${string}:deepracer:${string}::leaderboard/${string}`
export function leaderboardArn(parameters: LeaderboardArnParameters): LeaderboardArn {
  return `arn:${parameters.partition ?? ''}:deepracer:${parameters.region}::leaderboard/${parameters.resourceId}`
}

export interface LeaderboardEvaluationJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type LeaderboardEvaluationJobArn = `arn:${string}:deepracer:${string}:${string}:leaderboard_evaluation_job/${string}`
export function leaderboardEvaluationJobArn(parameters: LeaderboardEvaluationJobArnParameters): LeaderboardEvaluationJobArn {
  return `arn:${parameters.partition ?? ''}:deepracer:${parameters.region}:${parameters.account}:leaderboard_evaluation_job/${parameters.resourceId}`
}

export interface ReinforcementLearningModelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ReinforcementLearningModelArn = `arn:${string}:deepracer:${string}:${string}:model/reinforcement_learning/${string}`
export function reinforcementLearningModelArn(parameters: ReinforcementLearningModelArnParameters): ReinforcementLearningModelArn {
  return `arn:${parameters.partition ?? ''}:deepracer:${parameters.region}:${parameters.account}:model/reinforcement_learning/${parameters.resourceId}`
}

export interface TrackArnParameters {
  partition?: string | undefined
  region: string
  resourceId: string
}
export type TrackArn = `arn:${string}:deepracer:${string}::track/${string}`
export function trackArn(parameters: TrackArnParameters): TrackArn {
  return `arn:${parameters.partition ?? ''}:deepracer:${parameters.region}::track/${parameters.resourceId}`
}

export interface TrainingJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type TrainingJobArn = `arn:${string}:deepracer:${string}:${string}:training_job/${string}`
export function trainingJobArn(parameters: TrainingJobArnParameters): TrainingJobArn {
  return `arn:${parameters.partition ?? ''}:deepracer:${parameters.region}:${parameters.account}:training_job/${parameters.resourceId}`
}