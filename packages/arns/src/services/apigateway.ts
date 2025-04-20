import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AccessLogSettingsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly stageName: string
}
class AccessLogSettingsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'AccessLogSettings',
  `arn:${string}:apigateway:${string}::/apis/${string}/stages/${string}/accesslogsettings`
> {
  readonly [ArnResourceTypeBrand] = 'AccessLogSettings' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly stageName: string
  constructor(parameters: AccessLogSettingsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.apiId = parameters.apiId
    this.stageName = parameters.stageName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.apiId}/stages/${this.stageName}/accesslogsettings` as const
  }
}
export type { AccessLogSettingsArn }
export function accessLogSettingsArn<Partition extends ArnPartition = 'aws'>(
  parameters: AccessLogSettingsArnParameters<Partition>,
) {
  return new AccessLogSettingsArn<Partition>(parameters)
}

export interface ApiArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly apiId: string
}
class ApiArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Api',
  `arn:${string}:apigateway:${string}::/apis/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Api' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  constructor(parameters: ApiArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.apiId = parameters.apiId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.apiId}` as const
  }
}
export type { ApiArn }
export function apiArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApiArnParameters<Partition>,
) {
  return new ApiArn<Partition>(parameters)
}

export interface ApisArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
}
class ApisArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Apis',
  `arn:${string}:apigateway:${string}::/apis`
> {
  readonly [ArnResourceTypeBrand] = 'Apis' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  constructor(parameters: ApisArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis` as const
  }
}
export type { ApisArn }
export function apisArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApisArnParameters<Partition>,
) {
  return new ApisArn<Partition>(parameters)
}

export interface ApiMappingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly domainName: string
  readonly apiMappingId: string
}
class ApiMappingArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ApiMapping',
  `arn:${string}:apigateway:${string}::/domainnames/${string}/apimappings/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ApiMapping' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly domainName: string
  readonly apiMappingId: string
  constructor(parameters: ApiMappingArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.domainName = parameters.domainName
    this.apiMappingId = parameters.apiMappingId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/domainnames/${this.domainName}/apimappings/${this.apiMappingId}` as const
  }
}
export type { ApiMappingArn }
export function apiMappingArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApiMappingArnParameters<Partition>,
) {
  return new ApiMappingArn<Partition>(parameters)
}

export interface ApiMappingsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly domainName: string
}
class ApiMappingsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ApiMappings',
  `arn:${string}:apigateway:${string}::/domainnames/${string}/apimappings`
> {
  readonly [ArnResourceTypeBrand] = 'ApiMappings' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly domainName: string
  constructor(parameters: ApiMappingsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.domainName = parameters.domainName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/domainnames/${this.domainName}/apimappings` as const
  }
}
export type { ApiMappingsArn }
export function apiMappingsArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApiMappingsArnParameters<Partition>,
) {
  return new ApiMappingsArn<Partition>(parameters)
}

export interface AuthorizerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly authorizerId: string
}
class AuthorizerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Authorizer',
  `arn:${string}:apigateway:${string}::/apis/${string}/authorizers/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Authorizer' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly authorizerId: string
  constructor(parameters: AuthorizerArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.apiId = parameters.apiId
    this.authorizerId = parameters.authorizerId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.apiId}/authorizers/${this.authorizerId}` as const
  }
}
export type { AuthorizerArn }
export function authorizerArn<Partition extends ArnPartition = 'aws'>(
  parameters: AuthorizerArnParameters<Partition>,
) {
  return new AuthorizerArn<Partition>(parameters)
}

export interface AuthorizersArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly apiId: string
}
class AuthorizersArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Authorizers',
  `arn:${string}:apigateway:${string}::/apis/${string}/authorizers`
> {
  readonly [ArnResourceTypeBrand] = 'Authorizers' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  constructor(parameters: AuthorizersArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.apiId = parameters.apiId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.apiId}/authorizers` as const
  }
}
export type { AuthorizersArn }
export function authorizersArn<Partition extends ArnPartition = 'aws'>(
  parameters: AuthorizersArnParameters<Partition>,
) {
  return new AuthorizersArn<Partition>(parameters)
}

export interface AuthorizersCacheArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly stageName: string
}
class AuthorizersCacheArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'AuthorizersCache',
  `arn:${string}:apigateway:${string}::/apis/${string}/stages/${string}/cache/authorizers`
> {
  readonly [ArnResourceTypeBrand] = 'AuthorizersCache' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly stageName: string
  constructor(parameters: AuthorizersCacheArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.apiId = parameters.apiId
    this.stageName = parameters.stageName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.apiId}/stages/${this.stageName}/cache/authorizers` as const
  }
}
export type { AuthorizersCacheArn }
export function authorizersCacheArn<Partition extends ArnPartition = 'aws'>(
  parameters: AuthorizersCacheArnParameters<Partition>,
) {
  return new AuthorizersCacheArn<Partition>(parameters)
}

export interface CorsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly apiId: string
}
class CorsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Cors',
  `arn:${string}:apigateway:${string}::/apis/${string}/cors`
> {
  readonly [ArnResourceTypeBrand] = 'Cors' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  constructor(parameters: CorsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.apiId = parameters.apiId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.apiId}/cors` as const
  }
}
export type { CorsArn }
export function corsArn<Partition extends ArnPartition = 'aws'>(
  parameters: CorsArnParameters<Partition>,
) {
  return new CorsArn<Partition>(parameters)
}

export interface DeploymentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly deploymentId: string
}
class DeploymentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Deployment',
  `arn:${string}:apigateway:${string}::/apis/${string}/deployments/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Deployment' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly deploymentId: string
  constructor(parameters: DeploymentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.apiId = parameters.apiId
    this.deploymentId = parameters.deploymentId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.apiId}/deployments/${this.deploymentId}` as const
  }
}
export type { DeploymentArn }
export function deploymentArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeploymentArnParameters<Partition>,
) {
  return new DeploymentArn<Partition>(parameters)
}

export interface DeploymentsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly apiId: string
}
class DeploymentsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Deployments',
  `arn:${string}:apigateway:${string}::/apis/${string}/deployments`
> {
  readonly [ArnResourceTypeBrand] = 'Deployments' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  constructor(parameters: DeploymentsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.apiId = parameters.apiId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.apiId}/deployments` as const
  }
}
export type { DeploymentsArn }
export function deploymentsArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeploymentsArnParameters<Partition>,
) {
  return new DeploymentsArn<Partition>(parameters)
}

export interface ExportedApiArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly specification: string
}
class ExportedApiArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ExportedAPI',
  `arn:${string}:apigateway:${string}::/apis/${string}/exports/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ExportedAPI' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly specification: string
  constructor(parameters: ExportedApiArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.apiId = parameters.apiId
    this.specification = parameters.specification
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.apiId}/exports/${this.specification}` as const
  }
}
export type { ExportedApiArn }
export function exportedApiArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExportedApiArnParameters<Partition>,
) {
  return new ExportedApiArn<Partition>(parameters)
}

export interface IntegrationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly integrationId: string
}
class IntegrationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Integration',
  `arn:${string}:apigateway:${string}::/apis/${string}/integrations/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Integration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly integrationId: string
  constructor(parameters: IntegrationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.apiId = parameters.apiId
    this.integrationId = parameters.integrationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.apiId}/integrations/${this.integrationId}` as const
  }
}
export type { IntegrationArn }
export function integrationArn<Partition extends ArnPartition = 'aws'>(
  parameters: IntegrationArnParameters<Partition>,
) {
  return new IntegrationArn<Partition>(parameters)
}

export interface IntegrationsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly apiId: string
}
class IntegrationsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Integrations',
  `arn:${string}:apigateway:${string}::/apis/${string}/integrations`
> {
  readonly [ArnResourceTypeBrand] = 'Integrations' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  constructor(parameters: IntegrationsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.apiId = parameters.apiId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.apiId}/integrations` as const
  }
}
export type { IntegrationsArn }
export function integrationsArn<Partition extends ArnPartition = 'aws'>(
  parameters: IntegrationsArnParameters<Partition>,
) {
  return new IntegrationsArn<Partition>(parameters)
}

export interface IntegrationResponseArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly integrationId: string
  readonly integrationResponseId: string
}
class IntegrationResponseArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'IntegrationResponse',
  `arn:${string}:apigateway:${string}::/apis/${string}/integrations/${string}/integrationresponses/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'IntegrationResponse' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly integrationId: string
  readonly integrationResponseId: string
  constructor(parameters: IntegrationResponseArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.apiId = parameters.apiId
    this.integrationId = parameters.integrationId
    this.integrationResponseId = parameters.integrationResponseId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.apiId}/integrations/${this.integrationId}/integrationresponses/${this.integrationResponseId}` as const
  }
}
export type { IntegrationResponseArn }
export function integrationResponseArn<Partition extends ArnPartition = 'aws'>(
  parameters: IntegrationResponseArnParameters<Partition>,
) {
  return new IntegrationResponseArn<Partition>(parameters)
}

export interface IntegrationResponsesArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly integrationId: string
}
class IntegrationResponsesArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'IntegrationResponses',
  `arn:${string}:apigateway:${string}::/apis/${string}/integrations/${string}/integrationresponses`
> {
  readonly [ArnResourceTypeBrand] = 'IntegrationResponses' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly integrationId: string
  constructor(parameters: IntegrationResponsesArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.apiId = parameters.apiId
    this.integrationId = parameters.integrationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.apiId}/integrations/${this.integrationId}/integrationresponses` as const
  }
}
export type { IntegrationResponsesArn }
export function integrationResponsesArn<Partition extends ArnPartition = 'aws'>(
  parameters: IntegrationResponsesArnParameters<Partition>,
) {
  return new IntegrationResponsesArn<Partition>(parameters)
}

export interface ModelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly modelId: string
}
class ModelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Model',
  `arn:${string}:apigateway:${string}::/apis/${string}/models/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Model' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly modelId: string
  constructor(parameters: ModelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.apiId = parameters.apiId
    this.modelId = parameters.modelId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.apiId}/models/${this.modelId}` as const
  }
}
export type { ModelArn }
export function modelArn<Partition extends ArnPartition = 'aws'>(
  parameters: ModelArnParameters<Partition>,
) {
  return new ModelArn<Partition>(parameters)
}

export interface ModelsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly apiId: string
}
class ModelsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Models',
  `arn:${string}:apigateway:${string}::/apis/${string}/models`
> {
  readonly [ArnResourceTypeBrand] = 'Models' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  constructor(parameters: ModelsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.apiId = parameters.apiId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.apiId}/models` as const
  }
}
export type { ModelsArn }
export function modelsArn<Partition extends ArnPartition = 'aws'>(
  parameters: ModelsArnParameters<Partition>,
) {
  return new ModelsArn<Partition>(parameters)
}

export interface ModelTemplateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly modelId: string
}
class ModelTemplateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ModelTemplate',
  `arn:${string}:apigateway:${string}::/apis/${string}/models/${string}/template`
> {
  readonly [ArnResourceTypeBrand] = 'ModelTemplate' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly modelId: string
  constructor(parameters: ModelTemplateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.apiId = parameters.apiId
    this.modelId = parameters.modelId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.apiId}/models/${this.modelId}/template` as const
  }
}
export type { ModelTemplateArn }
export function modelTemplateArn<Partition extends ArnPartition = 'aws'>(
  parameters: ModelTemplateArnParameters<Partition>,
) {
  return new ModelTemplateArn<Partition>(parameters)
}

export interface RouteArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly routeId: string
}
class RouteArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Route',
  `arn:${string}:apigateway:${string}::/apis/${string}/routes/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Route' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly routeId: string
  constructor(parameters: RouteArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.apiId = parameters.apiId
    this.routeId = parameters.routeId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.apiId}/routes/${this.routeId}` as const
  }
}
export type { RouteArn }
export function routeArn<Partition extends ArnPartition = 'aws'>(
  parameters: RouteArnParameters<Partition>,
) {
  return new RouteArn<Partition>(parameters)
}

export interface RoutesArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly apiId: string
}
class RoutesArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Routes',
  `arn:${string}:apigateway:${string}::/apis/${string}/routes`
> {
  readonly [ArnResourceTypeBrand] = 'Routes' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  constructor(parameters: RoutesArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.apiId = parameters.apiId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.apiId}/routes` as const
  }
}
export type { RoutesArn }
export function routesArn<Partition extends ArnPartition = 'aws'>(
  parameters: RoutesArnParameters<Partition>,
) {
  return new RoutesArn<Partition>(parameters)
}

export interface RouteResponseArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly routeId: string
  readonly routeResponseId: string
}
class RouteResponseArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'RouteResponse',
  `arn:${string}:apigateway:${string}::/apis/${string}/routes/${string}/routeresponses/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'RouteResponse' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly routeId: string
  readonly routeResponseId: string
  constructor(parameters: RouteResponseArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.apiId = parameters.apiId
    this.routeId = parameters.routeId
    this.routeResponseId = parameters.routeResponseId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.apiId}/routes/${this.routeId}/routeresponses/${this.routeResponseId}` as const
  }
}
export type { RouteResponseArn }
export function routeResponseArn<Partition extends ArnPartition = 'aws'>(
  parameters: RouteResponseArnParameters<Partition>,
) {
  return new RouteResponseArn<Partition>(parameters)
}

export interface RouteResponsesArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly routeId: string
}
class RouteResponsesArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'RouteResponses',
  `arn:${string}:apigateway:${string}::/apis/${string}/routes/${string}/routeresponses`
> {
  readonly [ArnResourceTypeBrand] = 'RouteResponses' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly routeId: string
  constructor(parameters: RouteResponsesArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.apiId = parameters.apiId
    this.routeId = parameters.routeId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.apiId}/routes/${this.routeId}/routeresponses` as const
  }
}
export type { RouteResponsesArn }
export function routeResponsesArn<Partition extends ArnPartition = 'aws'>(
  parameters: RouteResponsesArnParameters<Partition>,
) {
  return new RouteResponsesArn<Partition>(parameters)
}

export interface RouteRequestParameterArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly routeId: string
  readonly requestParameterKey: string
}
class RouteRequestParameterArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'RouteRequestParameter',
  `arn:${string}:apigateway:${string}::/apis/${string}/routes/${string}/requestparameters/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'RouteRequestParameter' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly routeId: string
  readonly requestParameterKey: string
  constructor(parameters: RouteRequestParameterArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.apiId = parameters.apiId
    this.routeId = parameters.routeId
    this.requestParameterKey = parameters.requestParameterKey
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.apiId}/routes/${this.routeId}/requestparameters/${this.requestParameterKey}` as const
  }
}
export type { RouteRequestParameterArn }
export function routeRequestParameterArn<
  Partition extends ArnPartition = 'aws',
>(parameters: RouteRequestParameterArnParameters<Partition>) {
  return new RouteRequestParameterArn<Partition>(parameters)
}

export interface RouteSettingsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly stageName: string
  readonly routeKey: string
}
class RouteSettingsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'RouteSettings',
  `arn:${string}:apigateway:${string}::/apis/${string}/stages/${string}/routesettings/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'RouteSettings' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly stageName: string
  readonly routeKey: string
  constructor(parameters: RouteSettingsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.apiId = parameters.apiId
    this.stageName = parameters.stageName
    this.routeKey = parameters.routeKey
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.apiId}/stages/${this.stageName}/routesettings/${this.routeKey}` as const
  }
}
export type { RouteSettingsArn }
export function routeSettingsArn<Partition extends ArnPartition = 'aws'>(
  parameters: RouteSettingsArnParameters<Partition>,
) {
  return new RouteSettingsArn<Partition>(parameters)
}

export interface StageArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly stageName: string
}
class StageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Stage',
  `arn:${string}:apigateway:${string}::/apis/${string}/stages/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Stage' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly stageName: string
  constructor(parameters: StageArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.apiId = parameters.apiId
    this.stageName = parameters.stageName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.apiId}/stages/${this.stageName}` as const
  }
}
export type { StageArn }
export function stageArn<Partition extends ArnPartition = 'aws'>(
  parameters: StageArnParameters<Partition>,
) {
  return new StageArn<Partition>(parameters)
}

export interface StagesArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly apiId: string
}
class StagesArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Stages',
  `arn:${string}:apigateway:${string}::/apis/${string}/stages`
> {
  readonly [ArnResourceTypeBrand] = 'Stages' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  constructor(parameters: StagesArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.apiId = parameters.apiId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.apiId}/stages` as const
  }
}
export type { StagesArn }
export function stagesArn<Partition extends ArnPartition = 'aws'>(
  parameters: StagesArnParameters<Partition>,
) {
  return new StagesArn<Partition>(parameters)
}

export interface VpcLinkArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly vpcLinkId: string
}
class VpcLinkArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'VpcLink',
  `arn:${string}:apigateway:${string}::/vpclinks/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'VpcLink' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly vpcLinkId: string
  constructor(parameters: VpcLinkArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.vpcLinkId = parameters.vpcLinkId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/vpclinks/${this.vpcLinkId}` as const
  }
}
export type { VpcLinkArn }
export function vpcLinkArn<Partition extends ArnPartition = 'aws'>(
  parameters: VpcLinkArnParameters<Partition>,
) {
  return new VpcLinkArn<Partition>(parameters)
}

export interface VpcLinksArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
}
class VpcLinksArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'VpcLinks',
  `arn:${string}:apigateway:${string}::/vpclinks`
> {
  readonly [ArnResourceTypeBrand] = 'VpcLinks' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  constructor(parameters: VpcLinksArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/vpclinks` as const
  }
}
export type { VpcLinksArn }
export function vpcLinksArn<Partition extends ArnPartition = 'aws'>(
  parameters: VpcLinksArnParameters<Partition>,
) {
  return new VpcLinksArn<Partition>(parameters)
}

export interface AccountArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
}
class AccountArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Account',
  `arn:${string}:apigateway:${string}::/account`
> {
  readonly [ArnResourceTypeBrand] = 'Account' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  constructor(parameters: AccountArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/account` as const
  }
}
export type { AccountArn }
export function accountArn<Partition extends ArnPartition = 'aws'>(
  parameters: AccountArnParameters<Partition>,
) {
  return new AccountArn<Partition>(parameters)
}

export interface ApiKeyArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly apiKeyId: string
}
class ApiKeyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ApiKey',
  `arn:${string}:apigateway:${string}::/apikeys/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ApiKey' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly apiKeyId: string
  constructor(parameters: ApiKeyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.apiKeyId = parameters.apiKeyId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apikeys/${this.apiKeyId}` as const
  }
}
export type { ApiKeyArn }
export function apiKeyArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApiKeyArnParameters<Partition>,
) {
  return new ApiKeyArn<Partition>(parameters)
}

export interface ApiKeysArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
}
class ApiKeysArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ApiKeys',
  `arn:${string}:apigateway:${string}::/apikeys`
> {
  readonly [ArnResourceTypeBrand] = 'ApiKeys' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  constructor(parameters: ApiKeysArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apikeys` as const
  }
}
export type { ApiKeysArn }
export function apiKeysArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApiKeysArnParameters<Partition>,
) {
  return new ApiKeysArn<Partition>(parameters)
}

export interface BasePathMappingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly domainName: string
  readonly basePath: string
}
class BasePathMappingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'BasePathMapping',
  `arn:${string}:apigateway:${string}::/domainnames/${string}/basepathmappings/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'BasePathMapping' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly domainName: string
  readonly basePath: string
  constructor(parameters: BasePathMappingArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.domainName = parameters.domainName
    this.basePath = parameters.basePath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/domainnames/${this.domainName}/basepathmappings/${this.basePath}` as const
  }
}
export type { BasePathMappingArn }
export function basePathMappingArn<Partition extends ArnPartition = 'aws'>(
  parameters: BasePathMappingArnParameters<Partition>,
) {
  return new BasePathMappingArn<Partition>(parameters)
}

export interface BasePathMappingsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly domainName: string
}
class BasePathMappingsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'BasePathMappings',
  `arn:${string}:apigateway:${string}::/domainnames/${string}/basepathmappings`
> {
  readonly [ArnResourceTypeBrand] = 'BasePathMappings' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly domainName: string
  constructor(parameters: BasePathMappingsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.domainName = parameters.domainName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/domainnames/${this.domainName}/basepathmappings` as const
  }
}
export type { BasePathMappingsArn }
export function basePathMappingsArn<Partition extends ArnPartition = 'aws'>(
  parameters: BasePathMappingsArnParameters<Partition>,
) {
  return new BasePathMappingsArn<Partition>(parameters)
}

export interface ClientCertificateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly clientCertificateId: string
}
class ClientCertificateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ClientCertificate',
  `arn:${string}:apigateway:${string}::/clientcertificates/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ClientCertificate' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly clientCertificateId: string
  constructor(parameters: ClientCertificateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.clientCertificateId = parameters.clientCertificateId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/clientcertificates/${this.clientCertificateId}` as const
  }
}
export type { ClientCertificateArn }
export function clientCertificateArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClientCertificateArnParameters<Partition>,
) {
  return new ClientCertificateArn<Partition>(parameters)
}

export interface ClientCertificatesArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
}
class ClientCertificatesArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ClientCertificates',
  `arn:${string}:apigateway:${string}::/clientcertificates`
> {
  readonly [ArnResourceTypeBrand] = 'ClientCertificates' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  constructor(parameters: ClientCertificatesArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/clientcertificates` as const
  }
}
export type { ClientCertificatesArn }
export function clientCertificatesArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClientCertificatesArnParameters<Partition>,
) {
  return new ClientCertificatesArn<Partition>(parameters)
}

export interface DocumentationPartArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly restApiId: string
  readonly documentationPartId: string
}
class DocumentationPartArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'DocumentationPart',
  `arn:${string}:apigateway:${string}::/restapis/${string}/documentation/parts/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'DocumentationPart' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly restApiId: string
  readonly documentationPartId: string
  constructor(parameters: DocumentationPartArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.restApiId = parameters.restApiId
    this.documentationPartId = parameters.documentationPartId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/${this.restApiId}/documentation/parts/${this.documentationPartId}` as const
  }
}
export type { DocumentationPartArn }
export function documentationPartArn<Partition extends ArnPartition = 'aws'>(
  parameters: DocumentationPartArnParameters<Partition>,
) {
  return new DocumentationPartArn<Partition>(parameters)
}

export interface DocumentationPartsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly restApiId: string
}
class DocumentationPartsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'DocumentationParts',
  `arn:${string}:apigateway:${string}::/restapis/${string}/documentation/parts`
> {
  readonly [ArnResourceTypeBrand] = 'DocumentationParts' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly restApiId: string
  constructor(parameters: DocumentationPartsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.restApiId = parameters.restApiId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/${this.restApiId}/documentation/parts` as const
  }
}
export type { DocumentationPartsArn }
export function documentationPartsArn<Partition extends ArnPartition = 'aws'>(
  parameters: DocumentationPartsArnParameters<Partition>,
) {
  return new DocumentationPartsArn<Partition>(parameters)
}

export interface DocumentationVersionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly restApiId: string
  readonly documentationVersionId: string
}
class DocumentationVersionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'DocumentationVersion',
  `arn:${string}:apigateway:${string}::/restapis/${string}/documentation/versions/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'DocumentationVersion' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly restApiId: string
  readonly documentationVersionId: string
  constructor(parameters: DocumentationVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.restApiId = parameters.restApiId
    this.documentationVersionId = parameters.documentationVersionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/${this.restApiId}/documentation/versions/${this.documentationVersionId}` as const
  }
}
export type { DocumentationVersionArn }
export function documentationVersionArn<Partition extends ArnPartition = 'aws'>(
  parameters: DocumentationVersionArnParameters<Partition>,
) {
  return new DocumentationVersionArn<Partition>(parameters)
}

export interface DocumentationVersionsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly restApiId: string
}
class DocumentationVersionsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'DocumentationVersions',
  `arn:${string}:apigateway:${string}::/restapis/${string}/documentation/versions`
> {
  readonly [ArnResourceTypeBrand] = 'DocumentationVersions' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly restApiId: string
  constructor(parameters: DocumentationVersionsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.restApiId = parameters.restApiId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/${this.restApiId}/documentation/versions` as const
  }
}
export type { DocumentationVersionsArn }
export function documentationVersionsArn<
  Partition extends ArnPartition = 'aws',
>(parameters: DocumentationVersionsArnParameters<Partition>) {
  return new DocumentationVersionsArn<Partition>(parameters)
}

export interface DomainNameArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly domainName: string
}
class DomainNameArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'DomainName',
  `arn:${string}:apigateway:${string}::/domainnames/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'DomainName' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly domainName: string
  constructor(parameters: DomainNameArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.domainName = parameters.domainName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/domainnames/${this.domainName}` as const
  }
}
export type { DomainNameArn }
export function domainNameArn<Partition extends ArnPartition = 'aws'>(
  parameters: DomainNameArnParameters<Partition>,
) {
  return new DomainNameArn<Partition>(parameters)
}

export interface DomainNamesArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
}
class DomainNamesArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'DomainNames',
  `arn:${string}:apigateway:${string}::/domainnames`
> {
  readonly [ArnResourceTypeBrand] = 'DomainNames' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  constructor(parameters: DomainNamesArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/domainnames` as const
  }
}
export type { DomainNamesArn }
export function domainNamesArn<Partition extends ArnPartition = 'aws'>(
  parameters: DomainNamesArnParameters<Partition>,
) {
  return new DomainNamesArn<Partition>(parameters)
}

export interface GatewayResponseArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly restApiId: string
  readonly responseType: string
}
class GatewayResponseArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'GatewayResponse',
  `arn:${string}:apigateway:${string}::/restapis/${string}/gatewayresponses/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'GatewayResponse' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly restApiId: string
  readonly responseType: string
  constructor(parameters: GatewayResponseArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.restApiId = parameters.restApiId
    this.responseType = parameters.responseType
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/${this.restApiId}/gatewayresponses/${this.responseType}` as const
  }
}
export type { GatewayResponseArn }
export function gatewayResponseArn<Partition extends ArnPartition = 'aws'>(
  parameters: GatewayResponseArnParameters<Partition>,
) {
  return new GatewayResponseArn<Partition>(parameters)
}

export interface GatewayResponsesArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly restApiId: string
}
class GatewayResponsesArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'GatewayResponses',
  `arn:${string}:apigateway:${string}::/restapis/${string}/gatewayresponses`
> {
  readonly [ArnResourceTypeBrand] = 'GatewayResponses' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly restApiId: string
  constructor(parameters: GatewayResponsesArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.restApiId = parameters.restApiId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/${this.restApiId}/gatewayresponses` as const
  }
}
export type { GatewayResponsesArn }
export function gatewayResponsesArn<Partition extends ArnPartition = 'aws'>(
  parameters: GatewayResponsesArnParameters<Partition>,
) {
  return new GatewayResponsesArn<Partition>(parameters)
}

export interface MethodArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly restApiId: string
  readonly resourceId: string
  readonly httpMethodType: string
}
class MethodArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Method',
  `arn:${string}:apigateway:${string}::/restapis/${string}/resources/${string}/methods/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Method' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly restApiId: string
  readonly resourceId: string
  readonly httpMethodType: string
  constructor(parameters: MethodArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.restApiId = parameters.restApiId
    this.resourceId = parameters.resourceId
    this.httpMethodType = parameters.httpMethodType
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/${this.restApiId}/resources/${this.resourceId}/methods/${this.httpMethodType}` as const
  }
}
export type { MethodArn }
export function methodArn<Partition extends ArnPartition = 'aws'>(
  parameters: MethodArnParameters<Partition>,
) {
  return new MethodArn<Partition>(parameters)
}

export interface MethodResponseArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly restApiId: string
  readonly resourceId: string
  readonly httpMethodType: string
  readonly statusCode: string
}
class MethodResponseArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'MethodResponse',
  `arn:${string}:apigateway:${string}::/restapis/${string}/resources/${string}/methods/${string}/responses/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'MethodResponse' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly restApiId: string
  readonly resourceId: string
  readonly httpMethodType: string
  readonly statusCode: string
  constructor(parameters: MethodResponseArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.restApiId = parameters.restApiId
    this.resourceId = parameters.resourceId
    this.httpMethodType = parameters.httpMethodType
    this.statusCode = parameters.statusCode
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/${this.restApiId}/resources/${this.resourceId}/methods/${this.httpMethodType}/responses/${this.statusCode}` as const
  }
}
export type { MethodResponseArn }
export function methodResponseArn<Partition extends ArnPartition = 'aws'>(
  parameters: MethodResponseArnParameters<Partition>,
) {
  return new MethodResponseArn<Partition>(parameters)
}

export interface RequestValidatorArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly restApiId: string
  readonly requestValidatorId: string
}
class RequestValidatorArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'RequestValidator',
  `arn:${string}:apigateway:${string}::/restapis/${string}/requestvalidators/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'RequestValidator' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly restApiId: string
  readonly requestValidatorId: string
  constructor(parameters: RequestValidatorArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.restApiId = parameters.restApiId
    this.requestValidatorId = parameters.requestValidatorId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/${this.restApiId}/requestvalidators/${this.requestValidatorId}` as const
  }
}
export type { RequestValidatorArn }
export function requestValidatorArn<Partition extends ArnPartition = 'aws'>(
  parameters: RequestValidatorArnParameters<Partition>,
) {
  return new RequestValidatorArn<Partition>(parameters)
}

export interface RequestValidatorsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly restApiId: string
}
class RequestValidatorsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'RequestValidators',
  `arn:${string}:apigateway:${string}::/restapis/${string}/requestvalidators`
> {
  readonly [ArnResourceTypeBrand] = 'RequestValidators' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly restApiId: string
  constructor(parameters: RequestValidatorsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.restApiId = parameters.restApiId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/${this.restApiId}/requestvalidators` as const
  }
}
export type { RequestValidatorsArn }
export function requestValidatorsArn<Partition extends ArnPartition = 'aws'>(
  parameters: RequestValidatorsArnParameters<Partition>,
) {
  return new RequestValidatorsArn<Partition>(parameters)
}

export interface ResourceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly restApiId: string
  readonly resourceId: string
}
class ResourceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Resource',
  `arn:${string}:apigateway:${string}::/restapis/${string}/resources/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Resource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly restApiId: string
  readonly resourceId: string
  constructor(parameters: ResourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.restApiId = parameters.restApiId
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/${this.restApiId}/resources/${this.resourceId}` as const
  }
}
export type { ResourceArn }
export function resourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResourceArnParameters<Partition>,
) {
  return new ResourceArn<Partition>(parameters)
}

export interface ResourcesArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly restApiId: string
}
class ResourcesArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Resources',
  `arn:${string}:apigateway:${string}::/restapis/${string}/resources`
> {
  readonly [ArnResourceTypeBrand] = 'Resources' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly restApiId: string
  constructor(parameters: ResourcesArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.restApiId = parameters.restApiId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/${this.restApiId}/resources` as const
  }
}
export type { ResourcesArn }
export function resourcesArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResourcesArnParameters<Partition>,
) {
  return new ResourcesArn<Partition>(parameters)
}

export interface RestApiArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly restApiId: string
}
class RestApiArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'RestApi',
  `arn:${string}:apigateway:${string}::/restapis/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'RestApi' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly restApiId: string
  constructor(parameters: RestApiArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.restApiId = parameters.restApiId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/${this.restApiId}` as const
  }
}
export type { RestApiArn }
export function restApiArn<Partition extends ArnPartition = 'aws'>(
  parameters: RestApiArnParameters<Partition>,
) {
  return new RestApiArn<Partition>(parameters)
}

export interface RestApisArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
}
class RestApisArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'RestApis',
  `arn:${string}:apigateway:${string}::/restapis`
> {
  readonly [ArnResourceTypeBrand] = 'RestApis' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  constructor(parameters: RestApisArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis` as const
  }
}
export type { RestApisArn }
export function restApisArn<Partition extends ArnPartition = 'aws'>(
  parameters: RestApisArnParameters<Partition>,
) {
  return new RestApisArn<Partition>(parameters)
}

export interface SdkArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly restApiId: string
  readonly stageName: string
  readonly sdkType: string
}
class SdkArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Sdk',
  `arn:${string}:apigateway:${string}::/restapis/${string}/stages/${string}/sdks/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Sdk' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly restApiId: string
  readonly stageName: string
  readonly sdkType: string
  constructor(parameters: SdkArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.restApiId = parameters.restApiId
    this.stageName = parameters.stageName
    this.sdkType = parameters.sdkType
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/${this.restApiId}/stages/${this.stageName}/sdks/${this.sdkType}` as const
  }
}
export type { SdkArn }
export function sdkArn<Partition extends ArnPartition = 'aws'>(
  parameters: SdkArnParameters<Partition>,
) {
  return new SdkArn<Partition>(parameters)
}

export interface TemplateArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly modelName: string
}
class TemplateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Template',
  `arn:${string}:apigateway:${string}::/restapis/models/${string}/template`
> {
  readonly [ArnResourceTypeBrand] = 'Template' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly modelName: string
  constructor(parameters: TemplateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.modelName = parameters.modelName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/models/${this.modelName}/template` as const
  }
}
export type { TemplateArn }
export function templateArn<Partition extends ArnPartition = 'aws'>(
  parameters: TemplateArnParameters<Partition>,
) {
  return new TemplateArn<Partition>(parameters)
}

export interface UsagePlanArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly usagePlanId: string
}
class UsagePlanArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'UsagePlan',
  `arn:${string}:apigateway:${string}::/usageplans/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'UsagePlan' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly usagePlanId: string
  constructor(parameters: UsagePlanArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.usagePlanId = parameters.usagePlanId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/usageplans/${this.usagePlanId}` as const
  }
}
export type { UsagePlanArn }
export function usagePlanArn<Partition extends ArnPartition = 'aws'>(
  parameters: UsagePlanArnParameters<Partition>,
) {
  return new UsagePlanArn<Partition>(parameters)
}

export interface UsagePlansArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
}
class UsagePlansArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'UsagePlans',
  `arn:${string}:apigateway:${string}::/usageplans`
> {
  readonly [ArnResourceTypeBrand] = 'UsagePlans' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  constructor(parameters: UsagePlansArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/usageplans` as const
  }
}
export type { UsagePlansArn }
export function usagePlansArn<Partition extends ArnPartition = 'aws'>(
  parameters: UsagePlansArnParameters<Partition>,
) {
  return new UsagePlansArn<Partition>(parameters)
}

export interface UsagePlanKeyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly usagePlanId: string
  readonly id: string
}
class UsagePlanKeyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'UsagePlanKey',
  `arn:${string}:apigateway:${string}::/usageplans/${string}/keys/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'UsagePlanKey' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly usagePlanId: string
  readonly id: string
  constructor(parameters: UsagePlanKeyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.usagePlanId = parameters.usagePlanId
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/usageplans/${this.usagePlanId}/keys/${this.id}` as const
  }
}
export type { UsagePlanKeyArn }
export function usagePlanKeyArn<Partition extends ArnPartition = 'aws'>(
  parameters: UsagePlanKeyArnParameters<Partition>,
) {
  return new UsagePlanKeyArn<Partition>(parameters)
}

export interface UsagePlanKeysArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly usagePlanId: string
}
class UsagePlanKeysArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'UsagePlanKeys',
  `arn:${string}:apigateway:${string}::/usageplans/${string}/keys`
> {
  readonly [ArnResourceTypeBrand] = 'UsagePlanKeys' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly usagePlanId: string
  constructor(parameters: UsagePlanKeysArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.usagePlanId = parameters.usagePlanId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/usageplans/${this.usagePlanId}/keys` as const
  }
}
export type { UsagePlanKeysArn }
export function usagePlanKeysArn<Partition extends ArnPartition = 'aws'>(
  parameters: UsagePlanKeysArnParameters<Partition>,
) {
  return new UsagePlanKeysArn<Partition>(parameters)
}

export interface TagsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly urlEncodedResourceArn: string
}
class TagsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Tags',
  `arn:${string}:apigateway:${string}::/tags/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Tags' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly urlEncodedResourceArn: string
  constructor(parameters: TagsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.urlEncodedResourceArn = parameters.urlEncodedResourceArn
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/tags/${this.urlEncodedResourceArn}` as const
  }
}
export type { TagsArn }
export function tagsArn<Partition extends ArnPartition = 'aws'>(
  parameters: TagsArnParameters<Partition>,
) {
  return new TagsArn<Partition>(parameters)
}
