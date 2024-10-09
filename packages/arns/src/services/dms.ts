export interface CertificateArnParameters {
  partition?: string | undefined
  region: string
  account: string
}
export type CertificateArn = `arn:${string}:dms:${string}:${string}:cert:*`
export function certificateArn(parameters: CertificateArnParameters): CertificateArn {
  return `arn:${parameters.partition ?? ''}:dms:${parameters.region}:${parameters.account}:cert:*`
}

export interface DataProviderArnParameters {
  partition?: string | undefined
  region: string
  account: string
}
export type DataProviderArn = `arn:${string}:dms:${string}:${string}:data-provider:*`
export function dataProviderArn(parameters: DataProviderArnParameters): DataProviderArn {
  return `arn:${parameters.partition ?? ''}:dms:${parameters.region}:${parameters.account}:data-provider:*`
}

export interface DataMigrationArnParameters {
  partition?: string | undefined
  region: string
  account: string
}
export type DataMigrationArn = `arn:${string}:dms:${string}:${string}:data-migration:*`
export function dataMigrationArn(parameters: DataMigrationArnParameters): DataMigrationArn {
  return `arn:${parameters.partition ?? ''}:dms:${parameters.region}:${parameters.account}:data-migration:*`
}

export interface EndpointArnParameters {
  partition?: string | undefined
  region: string
  account: string
}
export type EndpointArn = `arn:${string}:dms:${string}:${string}:endpoint:*`
export function endpointArn(parameters: EndpointArnParameters): EndpointArn {
  return `arn:${parameters.partition ?? ''}:dms:${parameters.region}:${parameters.account}:endpoint:*`
}

export interface EventSubscriptionArnParameters {
  partition?: string | undefined
  region: string
  account: string
}
export type EventSubscriptionArn = `arn:${string}:dms:${string}:${string}:es:*`
export function eventSubscriptionArn(parameters: EventSubscriptionArnParameters): EventSubscriptionArn {
  return `arn:${parameters.partition ?? ''}:dms:${parameters.region}:${parameters.account}:es:*`
}

export interface InstanceProfileArnParameters {
  partition?: string | undefined
  region: string
  account: string
}
export type InstanceProfileArn = `arn:${string}:dms:${string}:${string}:instance-profile:*`
export function instanceProfileArn(parameters: InstanceProfileArnParameters): InstanceProfileArn {
  return `arn:${parameters.partition ?? ''}:dms:${parameters.region}:${parameters.account}:instance-profile:*`
}

export interface MigrationProjectArnParameters {
  partition?: string | undefined
  region: string
  account: string
}
export type MigrationProjectArn = `arn:${string}:dms:${string}:${string}:migration-project:*`
export function migrationProjectArn(parameters: MigrationProjectArnParameters): MigrationProjectArn {
  return `arn:${parameters.partition ?? ''}:dms:${parameters.region}:${parameters.account}:migration-project:*`
}

export interface ReplicationConfigArnParameters {
  partition?: string | undefined
  region: string
  account: string
}
export type ReplicationConfigArn = `arn:${string}:dms:${string}:${string}:replication-config:*`
export function replicationConfigArn(parameters: ReplicationConfigArnParameters): ReplicationConfigArn {
  return `arn:${parameters.partition ?? ''}:dms:${parameters.region}:${parameters.account}:replication-config:*`
}

export interface ReplicationInstanceArnParameters {
  partition?: string | undefined
  region: string
  account: string
}
export type ReplicationInstanceArn = `arn:${string}:dms:${string}:${string}:rep:*`
export function replicationInstanceArn(parameters: ReplicationInstanceArnParameters): ReplicationInstanceArn {
  return `arn:${parameters.partition ?? ''}:dms:${parameters.region}:${parameters.account}:rep:*`
}

export interface ReplicationSubnetGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
}
export type ReplicationSubnetGroupArn = `arn:${string}:dms:${string}:${string}:subgrp:*`
export function replicationSubnetGroupArn(parameters: ReplicationSubnetGroupArnParameters): ReplicationSubnetGroupArn {
  return `arn:${parameters.partition ?? ''}:dms:${parameters.region}:${parameters.account}:subgrp:*`
}

export interface ReplicationTaskArnParameters {
  partition?: string | undefined
  region: string
  account: string
}
export type ReplicationTaskArn = `arn:${string}:dms:${string}:${string}:task:*`
export function replicationTaskArn(parameters: ReplicationTaskArnParameters): ReplicationTaskArn {
  return `arn:${parameters.partition ?? ''}:dms:${parameters.region}:${parameters.account}:task:*`
}

export interface ReplicationTaskAssessmentRunArnParameters {
  partition?: string | undefined
  region: string
  account: string
}
export type ReplicationTaskAssessmentRunArn = `arn:${string}:dms:${string}:${string}:assessment-run:*`
export function replicationTaskAssessmentRunArn(parameters: ReplicationTaskAssessmentRunArnParameters): ReplicationTaskAssessmentRunArn {
  return `arn:${parameters.partition ?? ''}:dms:${parameters.region}:${parameters.account}:assessment-run:*`
}

export interface ReplicationTaskIndividualAssessmentArnParameters {
  partition?: string | undefined
  region: string
  account: string
}
export type ReplicationTaskIndividualAssessmentArn = `arn:${string}:dms:${string}:${string}:individual-assessment:*`
export function replicationTaskIndividualAssessmentArn(parameters: ReplicationTaskIndividualAssessmentArnParameters): ReplicationTaskIndividualAssessmentArn {
  return `arn:${parameters.partition ?? ''}:dms:${parameters.region}:${parameters.account}:individual-assessment:*`
}