import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ActivityArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly activityName: string
}
class ActivityArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'activity', `arn:${string}:states:${string}:${string}:activity:${string}`> {
  readonly [ArnResourceTypeBrand] = 'activity' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly activityName: string
  constructor(parameters: ActivityArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.activityName = parameters.activityName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:states:${this.region}:${this.account}:activity:${this.activityName}` as const
  }
}
export type { ActivityArn }
export function activityArn<Partition extends ArnPartition = 'aws'>(parameters: ActivityArnParameters<Partition>) {
  return new ActivityArn<Partition>(parameters)
}

export interface ExecutionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
  readonly executionId: string
}
class ExecutionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'execution', `arn:${string}:states:${string}:${string}:execution:${string}:${string}`> {
  readonly [ArnResourceTypeBrand] = 'execution' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
  readonly executionId: string
  constructor(parameters: ExecutionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.stateMachineName = parameters.stateMachineName
    this.executionId = parameters.executionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:states:${this.region}:${this.account}:execution:${this.stateMachineName}:${this.executionId}` as const
  }
}
export type { ExecutionArn }
export function executionArn<Partition extends ArnPartition = 'aws'>(parameters: ExecutionArnParameters<Partition>) {
  return new ExecutionArn<Partition>(parameters)
}

export interface ExpressArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
  readonly executionId: string
  readonly expressId: string
}
class ExpressArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'express', `arn:${string}:states:${string}:${string}:express:${string}:${string}:${string}`> {
  readonly [ArnResourceTypeBrand] = 'express' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
  readonly executionId: string
  readonly expressId: string
  constructor(parameters: ExpressArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.stateMachineName = parameters.stateMachineName
    this.executionId = parameters.executionId
    this.expressId = parameters.expressId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:states:${this.region}:${this.account}:express:${this.stateMachineName}:${this.executionId}:${this.expressId}` as const
  }
}
export type { ExpressArn }
export function expressArn<Partition extends ArnPartition = 'aws'>(parameters: ExpressArnParameters<Partition>) {
  return new ExpressArn<Partition>(parameters)
}

export interface StatemachineArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
}
class StatemachineArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'statemachine', `arn:${string}:states:${string}:${string}:stateMachine:${string}`> {
  readonly [ArnResourceTypeBrand] = 'statemachine' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
  constructor(parameters: StatemachineArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.stateMachineName = parameters.stateMachineName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:states:${this.region}:${this.account}:stateMachine:${this.stateMachineName}` as const
  }
}
export type { StatemachineArn }
export function statemachineArn<Partition extends ArnPartition = 'aws'>(parameters: StatemachineArnParameters<Partition>) {
  return new StatemachineArn<Partition>(parameters)
}

export interface StatemachineversionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
  readonly stateMachineVersionId: string
}
class StatemachineversionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'statemachineversion', `arn:${string}:states:${string}:${string}:stateMachine:${string}:${string}`> {
  readonly [ArnResourceTypeBrand] = 'statemachineversion' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
  readonly stateMachineVersionId: string
  constructor(parameters: StatemachineversionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.stateMachineName = parameters.stateMachineName
    this.stateMachineVersionId = parameters.stateMachineVersionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:states:${this.region}:${this.account}:stateMachine:${this.stateMachineName}:${this.stateMachineVersionId}` as const
  }
}
export type { StatemachineversionArn }
export function statemachineversionArn<Partition extends ArnPartition = 'aws'>(parameters: StatemachineversionArnParameters<Partition>) {
  return new StatemachineversionArn<Partition>(parameters)
}

export interface StatemachinealiasArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
  readonly stateMachineAliasName: string
}
class StatemachinealiasArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'statemachinealias', `arn:${string}:states:${string}:${string}:stateMachine:${string}:${string}`> {
  readonly [ArnResourceTypeBrand] = 'statemachinealias' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
  readonly stateMachineAliasName: string
  constructor(parameters: StatemachinealiasArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.stateMachineName = parameters.stateMachineName
    this.stateMachineAliasName = parameters.stateMachineAliasName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:states:${this.region}:${this.account}:stateMachine:${this.stateMachineName}:${this.stateMachineAliasName}` as const
  }
}
export type { StatemachinealiasArn }
export function statemachinealiasArn<Partition extends ArnPartition = 'aws'>(parameters: StatemachinealiasArnParameters<Partition>) {
  return new StatemachinealiasArn<Partition>(parameters)
}

export interface MaprunArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
  readonly mapRunLabel: string
  readonly mapRunId: string
}
class MaprunArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'maprun', `arn:${string}:states:${string}:${string}:mapRun:${string}/${string}:${string}`> {
  readonly [ArnResourceTypeBrand] = 'maprun' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
  readonly mapRunLabel: string
  readonly mapRunId: string
  constructor(parameters: MaprunArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.stateMachineName = parameters.stateMachineName
    this.mapRunLabel = parameters.mapRunLabel
    this.mapRunId = parameters.mapRunId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:states:${this.region}:${this.account}:mapRun:${this.stateMachineName}/${this.mapRunLabel}:${this.mapRunId}` as const
  }
}
export type { MaprunArn }
export function maprunArn<Partition extends ArnPartition = 'aws'>(parameters: MaprunArnParameters<Partition>) {
  return new MaprunArn<Partition>(parameters)
}

export interface LabelledExecutionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
  readonly mapRunLabel: string
  readonly executionId: string
}
class LabelledExecutionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'labelled execution', `arn:${string}:states:${string}:${string}:execution:${string}/${string}:${string}`> {
  readonly [ArnResourceTypeBrand] = 'labelled execution' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
  readonly mapRunLabel: string
  readonly executionId: string
  constructor(parameters: LabelledExecutionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.stateMachineName = parameters.stateMachineName
    this.mapRunLabel = parameters.mapRunLabel
    this.executionId = parameters.executionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:states:${this.region}:${this.account}:execution:${this.stateMachineName}/${this.mapRunLabel}:${this.executionId}` as const
  }
}
export type { LabelledExecutionArn }
export function labelledExecutionArn<Partition extends ArnPartition = 'aws'>(parameters: LabelledExecutionArnParameters<Partition>) {
  return new LabelledExecutionArn<Partition>(parameters)
}

export interface LabelledExpressArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
  readonly mapRunLabel: string
  readonly executionId: string
  readonly expressId: string
}
class LabelledExpressArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'labelled express', `arn:${string}:states:${string}:${string}:express:${string}/${string}:${string}:${string}`> {
  readonly [ArnResourceTypeBrand] = 'labelled express' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stateMachineName: string
  readonly mapRunLabel: string
  readonly executionId: string
  readonly expressId: string
  constructor(parameters: LabelledExpressArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.stateMachineName = parameters.stateMachineName
    this.mapRunLabel = parameters.mapRunLabel
    this.executionId = parameters.executionId
    this.expressId = parameters.expressId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:states:${this.region}:${this.account}:express:${this.stateMachineName}/${this.mapRunLabel}:${this.executionId}:${this.expressId}` as const
  }
}
export type { LabelledExpressArn }
export function labelledExpressArn<Partition extends ArnPartition = 'aws'>(parameters: LabelledExpressArnParameters<Partition>) {
  return new LabelledExpressArn<Partition>(parameters)
}