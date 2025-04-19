import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface EventIntegrationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly eventIntegrationName: string
}
class EventIntegrationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'event-integration', `arn:${string}:app-integrations:${string}:${string}:event-integration/${string}`> {
  readonly [ArnResourceTypeBrand] = 'event-integration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly eventIntegrationName: string
  constructor(parameters: EventIntegrationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.eventIntegrationName = parameters.eventIntegrationName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:app-integrations:${this.region}:${this.account}:event-integration/${this.eventIntegrationName}` as const
  }
}
export type { EventIntegrationArn }
export function eventIntegrationArn<Partition extends ArnPartition = 'aws'>(parameters: EventIntegrationArnParameters<Partition>) {
  return new EventIntegrationArn<Partition>(parameters)
}

export interface EventIntegrationAssociationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly eventIntegrationName: string
  readonly resourceId: string
}
class EventIntegrationAssociationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'event-integration-association', `arn:${string}:app-integrations:${string}:${string}:event-integration-association/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'event-integration-association' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly eventIntegrationName: string
  readonly resourceId: string
  constructor(parameters: EventIntegrationAssociationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.eventIntegrationName = parameters.eventIntegrationName
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:app-integrations:${this.region}:${this.account}:event-integration-association/${this.eventIntegrationName}/${this.resourceId}` as const
  }
}
export type { EventIntegrationAssociationArn }
export function eventIntegrationAssociationArn<Partition extends ArnPartition = 'aws'>(parameters: EventIntegrationAssociationArnParameters<Partition>) {
  return new EventIntegrationAssociationArn<Partition>(parameters)
}

export interface DataIntegrationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dataIntegrationId: string
}
class DataIntegrationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'data-integration', `arn:${string}:app-integrations:${string}:${string}:data-integration/${string}`> {
  readonly [ArnResourceTypeBrand] = 'data-integration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dataIntegrationId: string
  constructor(parameters: DataIntegrationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.dataIntegrationId = parameters.dataIntegrationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:app-integrations:${this.region}:${this.account}:data-integration/${this.dataIntegrationId}` as const
  }
}
export type { DataIntegrationArn }
export function dataIntegrationArn<Partition extends ArnPartition = 'aws'>(parameters: DataIntegrationArnParameters<Partition>) {
  return new DataIntegrationArn<Partition>(parameters)
}

export interface DataIntegrationAssociationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dataIntegrationId: string
  readonly resourceId: string
}
class DataIntegrationAssociationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'data-integration-association', `arn:${string}:app-integrations:${string}:${string}:data-integration-association/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'data-integration-association' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dataIntegrationId: string
  readonly resourceId: string
  constructor(parameters: DataIntegrationAssociationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.dataIntegrationId = parameters.dataIntegrationId
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:app-integrations:${this.region}:${this.account}:data-integration-association/${this.dataIntegrationId}/${this.resourceId}` as const
  }
}
export type { DataIntegrationAssociationArn }
export function dataIntegrationAssociationArn<Partition extends ArnPartition = 'aws'>(parameters: DataIntegrationAssociationArnParameters<Partition>) {
  return new DataIntegrationAssociationArn<Partition>(parameters)
}

export interface ApplicationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
}
class ApplicationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'application', `arn:${string}:app-integrations:${string}:${string}:application/${string}`> {
  readonly [ArnResourceTypeBrand] = 'application' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  constructor(parameters: ApplicationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationId = parameters.applicationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:app-integrations:${this.region}:${this.account}:application/${this.applicationId}` as const
  }
}
export type { ApplicationArn }
export function applicationArn<Partition extends ArnPartition = 'aws'>(parameters: ApplicationArnParameters<Partition>) {
  return new ApplicationArn<Partition>(parameters)
}

export interface ApplicationAssociationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly applicationAssociationId: string
}
class ApplicationAssociationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'application-association', `arn:${string}:app-integrations:${string}:${string}:application-association/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'application-association' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly applicationAssociationId: string
  constructor(parameters: ApplicationAssociationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationId = parameters.applicationId
    this.applicationAssociationId = parameters.applicationAssociationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:app-integrations:${this.region}:${this.account}:application-association/${this.applicationId}/${this.applicationAssociationId}` as const
  }
}
export type { ApplicationAssociationArn }
export function applicationAssociationArn<Partition extends ArnPartition = 'aws'>(parameters: ApplicationAssociationArnParameters<Partition>) {
  return new ApplicationAssociationArn<Partition>(parameters)
}