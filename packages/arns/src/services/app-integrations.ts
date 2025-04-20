import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface IntegrationEventArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameIntegrationEvent: string
}
class IntegrationEventArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'event-integration',
  `arn:${string}:app-integrations:${string}:${string}:event-integration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'event-integration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameIntegrationEvent: string
  constructor(parameters: IntegrationEventArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameIntegrationEvent = parameters.nameIntegrationEvent
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:app-integrations:${this.region}:${this.account}:event-integration/${this.nameIntegrationEvent}` as const
  }
}
export type { IntegrationEventArn }
export function integrationEventArn<Partition extends ArnPartition = 'aws'>(
  parameters: IntegrationEventArnParameters<Partition>,
) {
  return new IntegrationEventArn<Partition>(parameters)
}

export interface AssociationIntegrationEventArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameIntegrationEvent: string
  readonly idResource: string
}
class AssociationIntegrationEventArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'event-integration-association',
  `arn:${string}:app-integrations:${string}:${string}:event-integration-association/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'event-integration-association' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameIntegrationEvent: string
  readonly idResource: string
  constructor(parameters: AssociationIntegrationEventArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameIntegrationEvent = parameters.nameIntegrationEvent
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:app-integrations:${this.region}:${this.account}:event-integration-association/${this.nameIntegrationEvent}/${this.idResource}` as const
  }
}
export type { AssociationIntegrationEventArn }
export function associationIntegrationEventArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AssociationIntegrationEventArnParameters<Partition>) {
  return new AssociationIntegrationEventArn<Partition>(parameters)
}

export interface IntegrationDataArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idIntegrationData: string
}
class IntegrationDataArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'data-integration',
  `arn:${string}:app-integrations:${string}:${string}:data-integration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'data-integration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idIntegrationData: string
  constructor(parameters: IntegrationDataArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idIntegrationData = parameters.idIntegrationData
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:app-integrations:${this.region}:${this.account}:data-integration/${this.idIntegrationData}` as const
  }
}
export type { IntegrationDataArn }
export function integrationDataArn<Partition extends ArnPartition = 'aws'>(
  parameters: IntegrationDataArnParameters<Partition>,
) {
  return new IntegrationDataArn<Partition>(parameters)
}

export interface AssociationIntegrationDataArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idIntegrationData: string
  readonly idResource: string
}
class AssociationIntegrationDataArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'data-integration-association',
  `arn:${string}:app-integrations:${string}:${string}:data-integration-association/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'data-integration-association' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idIntegrationData: string
  readonly idResource: string
  constructor(parameters: AssociationIntegrationDataArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idIntegrationData = parameters.idIntegrationData
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:app-integrations:${this.region}:${this.account}:data-integration-association/${this.idIntegrationData}/${this.idResource}` as const
  }
}
export type { AssociationIntegrationDataArn }
export function associationIntegrationDataArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AssociationIntegrationDataArnParameters<Partition>) {
  return new AssociationIntegrationDataArn<Partition>(parameters)
}

export interface ApplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
}
class ApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'application',
  `arn:${string}:app-integrations:${string}:${string}:application/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'application' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  constructor(parameters: ApplicationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApplication = parameters.idApplication
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:app-integrations:${this.region}:${this.account}:application/${this.idApplication}` as const
  }
}
export type { ApplicationArn }
export function applicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationArnParameters<Partition>,
) {
  return new ApplicationArn<Partition>(parameters)
}

export interface AssociationApplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idAssociationApplication: string
}
class AssociationApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'application-association',
  `arn:${string}:app-integrations:${string}:${string}:application-association/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'application-association' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idAssociationApplication: string
  constructor(parameters: AssociationApplicationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApplication = parameters.idApplication
    this.idAssociationApplication = parameters.idAssociationApplication
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:app-integrations:${this.region}:${this.account}:application-association/${this.idApplication}/${this.idAssociationApplication}` as const
  }
}
export type { AssociationApplicationArn }
export function associationApplicationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AssociationApplicationArnParameters<Partition>) {
  return new AssociationApplicationArn<Partition>(parameters)
}
