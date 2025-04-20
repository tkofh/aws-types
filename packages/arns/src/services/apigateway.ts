import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface SettingsLogAccessArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly nameStage: string
}
class SettingsLogAccessArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'AccessLogSettings',
  `arn:${string}:apigateway:${string}::/apis/${string}/stages/${string}/accesslogsettings`
> {
  readonly [ArnResourceTypeBrand] = 'AccessLogSettings' as const
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly nameStage: string
  constructor(parameters: SettingsLogAccessArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApi = parameters.idApi
    this.nameStage = parameters.nameStage
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.idApi}/stages/${this.nameStage}/accesslogsettings` as const
  }
}
export type { SettingsLogAccessArn }
export function settingsLogAccessArn<Partition extends ArnPartition = 'aws'>(
  parameters: SettingsLogAccessArnParameters<Partition>,
) {
  return new SettingsLogAccessArn<Partition>(parameters)
}

export interface ApiArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idApi: string
}
class ApiArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Api',
  `arn:${string}:apigateway:${string}::/apis/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Api' as const
  readonly partition: string
  readonly region: string
  readonly idApi: string
  constructor(parameters: ApiArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApi = parameters.idApi
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.idApi}` as const
  }
}
export type { ApiArn }
export function apiArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApiArnParameters<Partition>,
) {
  return new ApiArn<Partition>(parameters)
}

export interface ApisArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
}
class ApisArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Apis',
  `arn:${string}:apigateway:${string}::/apis`
> {
  readonly [ArnResourceTypeBrand] = 'Apis' as const
  readonly partition: string
  readonly region: string
  constructor(parameters: ApisArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
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

export interface MappingApiArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly nameDomain: string
  readonly idMappingApi: string
}
class MappingApiArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ApiMapping',
  `arn:${string}:apigateway:${string}::/domainnames/${string}/apimappings/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ApiMapping' as const
  readonly partition: string
  readonly region: string
  readonly nameDomain: string
  readonly idMappingApi: string
  constructor(parameters: MappingApiArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.nameDomain = parameters.nameDomain
    this.idMappingApi = parameters.idMappingApi
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/domainnames/${this.nameDomain}/apimappings/${this.idMappingApi}` as const
  }
}
export type { MappingApiArn }
export function mappingApiArn<Partition extends ArnPartition = 'aws'>(
  parameters: MappingApiArnParameters<Partition>,
) {
  return new MappingApiArn<Partition>(parameters)
}

export interface MappingsApiArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly nameDomain: string
}
class MappingsApiArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ApiMappings',
  `arn:${string}:apigateway:${string}::/domainnames/${string}/apimappings`
> {
  readonly [ArnResourceTypeBrand] = 'ApiMappings' as const
  readonly partition: string
  readonly region: string
  readonly nameDomain: string
  constructor(parameters: MappingsApiArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.nameDomain = parameters.nameDomain
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/domainnames/${this.nameDomain}/apimappings` as const
  }
}
export type { MappingsApiArn }
export function mappingsApiArn<Partition extends ArnPartition = 'aws'>(
  parameters: MappingsApiArnParameters<Partition>,
) {
  return new MappingsApiArn<Partition>(parameters)
}

export interface AuthorizerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly idAuthorizer: string
}
class AuthorizerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Authorizer',
  `arn:${string}:apigateway:${string}::/apis/${string}/authorizers/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Authorizer' as const
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly idAuthorizer: string
  constructor(parameters: AuthorizerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApi = parameters.idApi
    this.idAuthorizer = parameters.idAuthorizer
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.idApi}/authorizers/${this.idAuthorizer}` as const
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
  readonly partition: string
  readonly region: string
  readonly idApi: string
}
class AuthorizersArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Authorizers',
  `arn:${string}:apigateway:${string}::/apis/${string}/authorizers`
> {
  readonly [ArnResourceTypeBrand] = 'Authorizers' as const
  readonly partition: string
  readonly region: string
  readonly idApi: string
  constructor(parameters: AuthorizersArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApi = parameters.idApi
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.idApi}/authorizers` as const
  }
}
export type { AuthorizersArn }
export function authorizersArn<Partition extends ArnPartition = 'aws'>(
  parameters: AuthorizersArnParameters<Partition>,
) {
  return new AuthorizersArn<Partition>(parameters)
}

export interface CacheAuthorizersArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly nameStage: string
}
class CacheAuthorizersArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'AuthorizersCache',
  `arn:${string}:apigateway:${string}::/apis/${string}/stages/${string}/cache/authorizers`
> {
  readonly [ArnResourceTypeBrand] = 'AuthorizersCache' as const
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly nameStage: string
  constructor(parameters: CacheAuthorizersArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApi = parameters.idApi
    this.nameStage = parameters.nameStage
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.idApi}/stages/${this.nameStage}/cache/authorizers` as const
  }
}
export type { CacheAuthorizersArn }
export function cacheAuthorizersArn<Partition extends ArnPartition = 'aws'>(
  parameters: CacheAuthorizersArnParameters<Partition>,
) {
  return new CacheAuthorizersArn<Partition>(parameters)
}

export interface CorsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idApi: string
}
class CorsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Cors',
  `arn:${string}:apigateway:${string}::/apis/${string}/cors`
> {
  readonly [ArnResourceTypeBrand] = 'Cors' as const
  readonly partition: string
  readonly region: string
  readonly idApi: string
  constructor(parameters: CorsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApi = parameters.idApi
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.idApi}/cors` as const
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
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly idDeployment: string
}
class DeploymentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Deployment',
  `arn:${string}:apigateway:${string}::/apis/${string}/deployments/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Deployment' as const
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly idDeployment: string
  constructor(parameters: DeploymentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApi = parameters.idApi
    this.idDeployment = parameters.idDeployment
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.idApi}/deployments/${this.idDeployment}` as const
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
  readonly partition: string
  readonly region: string
  readonly idApi: string
}
class DeploymentsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Deployments',
  `arn:${string}:apigateway:${string}::/apis/${string}/deployments`
> {
  readonly [ArnResourceTypeBrand] = 'Deployments' as const
  readonly partition: string
  readonly region: string
  readonly idApi: string
  constructor(parameters: DeploymentsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApi = parameters.idApi
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.idApi}/deployments` as const
  }
}
export type { DeploymentsArn }
export function deploymentsArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeploymentsArnParameters<Partition>,
) {
  return new DeploymentsArn<Partition>(parameters)
}

export interface ApiExportedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly specification: string
}
class ApiExportedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ExportedAPI',
  `arn:${string}:apigateway:${string}::/apis/${string}/exports/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ExportedAPI' as const
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly specification: string
  constructor(parameters: ApiExportedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApi = parameters.idApi
    this.specification = parameters.specification
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.idApi}/exports/${this.specification}` as const
  }
}
export type { ApiExportedArn }
export function apiExportedArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApiExportedArnParameters<Partition>,
) {
  return new ApiExportedArn<Partition>(parameters)
}

export interface IntegrationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly idIntegration: string
}
class IntegrationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Integration',
  `arn:${string}:apigateway:${string}::/apis/${string}/integrations/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Integration' as const
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly idIntegration: string
  constructor(parameters: IntegrationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApi = parameters.idApi
    this.idIntegration = parameters.idIntegration
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.idApi}/integrations/${this.idIntegration}` as const
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
  readonly partition: string
  readonly region: string
  readonly idApi: string
}
class IntegrationsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Integrations',
  `arn:${string}:apigateway:${string}::/apis/${string}/integrations`
> {
  readonly [ArnResourceTypeBrand] = 'Integrations' as const
  readonly partition: string
  readonly region: string
  readonly idApi: string
  constructor(parameters: IntegrationsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApi = parameters.idApi
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.idApi}/integrations` as const
  }
}
export type { IntegrationsArn }
export function integrationsArn<Partition extends ArnPartition = 'aws'>(
  parameters: IntegrationsArnParameters<Partition>,
) {
  return new IntegrationsArn<Partition>(parameters)
}

export interface ResponseIntegrationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly idIntegration: string
  readonly idResponseIntegration: string
}
class ResponseIntegrationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'IntegrationResponse',
  `arn:${string}:apigateway:${string}::/apis/${string}/integrations/${string}/integrationresponses/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'IntegrationResponse' as const
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly idIntegration: string
  readonly idResponseIntegration: string
  constructor(parameters: ResponseIntegrationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApi = parameters.idApi
    this.idIntegration = parameters.idIntegration
    this.idResponseIntegration = parameters.idResponseIntegration
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.idApi}/integrations/${this.idIntegration}/integrationresponses/${this.idResponseIntegration}` as const
  }
}
export type { ResponseIntegrationArn }
export function responseIntegrationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResponseIntegrationArnParameters<Partition>,
) {
  return new ResponseIntegrationArn<Partition>(parameters)
}

export interface ResponsesIntegrationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly idIntegration: string
}
class ResponsesIntegrationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'IntegrationResponses',
  `arn:${string}:apigateway:${string}::/apis/${string}/integrations/${string}/integrationresponses`
> {
  readonly [ArnResourceTypeBrand] = 'IntegrationResponses' as const
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly idIntegration: string
  constructor(parameters: ResponsesIntegrationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApi = parameters.idApi
    this.idIntegration = parameters.idIntegration
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.idApi}/integrations/${this.idIntegration}/integrationresponses` as const
  }
}
export type { ResponsesIntegrationArn }
export function responsesIntegrationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResponsesIntegrationArnParameters<Partition>,
) {
  return new ResponsesIntegrationArn<Partition>(parameters)
}

export interface ModelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly idModel: string
}
class ModelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Model',
  `arn:${string}:apigateway:${string}::/apis/${string}/models/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Model' as const
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly idModel: string
  constructor(parameters: ModelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApi = parameters.idApi
    this.idModel = parameters.idModel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.idApi}/models/${this.idModel}` as const
  }
}
export type { ModelArn }
export function modelArn<Partition extends ArnPartition = 'aws'>(
  parameters: ModelArnParameters<Partition>,
) {
  return new ModelArn<Partition>(parameters)
}

export interface ModelsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idApi: string
}
class ModelsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Models',
  `arn:${string}:apigateway:${string}::/apis/${string}/models`
> {
  readonly [ArnResourceTypeBrand] = 'Models' as const
  readonly partition: string
  readonly region: string
  readonly idApi: string
  constructor(parameters: ModelsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApi = parameters.idApi
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.idApi}/models` as const
  }
}
export type { ModelsArn }
export function modelsArn<Partition extends ArnPartition = 'aws'>(
  parameters: ModelsArnParameters<Partition>,
) {
  return new ModelsArn<Partition>(parameters)
}

export interface TemplateModelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly idModel: string
}
class TemplateModelArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ModelTemplate',
  `arn:${string}:apigateway:${string}::/apis/${string}/models/${string}/template`
> {
  readonly [ArnResourceTypeBrand] = 'ModelTemplate' as const
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly idModel: string
  constructor(parameters: TemplateModelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApi = parameters.idApi
    this.idModel = parameters.idModel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.idApi}/models/${this.idModel}/template` as const
  }
}
export type { TemplateModelArn }
export function templateModelArn<Partition extends ArnPartition = 'aws'>(
  parameters: TemplateModelArnParameters<Partition>,
) {
  return new TemplateModelArn<Partition>(parameters)
}

export interface RouteArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly idRoute: string
}
class RouteArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Route',
  `arn:${string}:apigateway:${string}::/apis/${string}/routes/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Route' as const
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly idRoute: string
  constructor(parameters: RouteArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApi = parameters.idApi
    this.idRoute = parameters.idRoute
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.idApi}/routes/${this.idRoute}` as const
  }
}
export type { RouteArn }
export function routeArn<Partition extends ArnPartition = 'aws'>(
  parameters: RouteArnParameters<Partition>,
) {
  return new RouteArn<Partition>(parameters)
}

export interface RoutesArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idApi: string
}
class RoutesArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Routes',
  `arn:${string}:apigateway:${string}::/apis/${string}/routes`
> {
  readonly [ArnResourceTypeBrand] = 'Routes' as const
  readonly partition: string
  readonly region: string
  readonly idApi: string
  constructor(parameters: RoutesArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApi = parameters.idApi
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.idApi}/routes` as const
  }
}
export type { RoutesArn }
export function routesArn<Partition extends ArnPartition = 'aws'>(
  parameters: RoutesArnParameters<Partition>,
) {
  return new RoutesArn<Partition>(parameters)
}

export interface ResponseRouteArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly idRoute: string
  readonly idResponseRoute: string
}
class ResponseRouteArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'RouteResponse',
  `arn:${string}:apigateway:${string}::/apis/${string}/routes/${string}/routeresponses/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'RouteResponse' as const
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly idRoute: string
  readonly idResponseRoute: string
  constructor(parameters: ResponseRouteArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApi = parameters.idApi
    this.idRoute = parameters.idRoute
    this.idResponseRoute = parameters.idResponseRoute
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.idApi}/routes/${this.idRoute}/routeresponses/${this.idResponseRoute}` as const
  }
}
export type { ResponseRouteArn }
export function responseRouteArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResponseRouteArnParameters<Partition>,
) {
  return new ResponseRouteArn<Partition>(parameters)
}

export interface ResponsesRouteArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly idRoute: string
}
class ResponsesRouteArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'RouteResponses',
  `arn:${string}:apigateway:${string}::/apis/${string}/routes/${string}/routeresponses`
> {
  readonly [ArnResourceTypeBrand] = 'RouteResponses' as const
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly idRoute: string
  constructor(parameters: ResponsesRouteArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApi = parameters.idApi
    this.idRoute = parameters.idRoute
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.idApi}/routes/${this.idRoute}/routeresponses` as const
  }
}
export type { ResponsesRouteArn }
export function responsesRouteArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResponsesRouteArnParameters<Partition>,
) {
  return new ResponsesRouteArn<Partition>(parameters)
}

export interface ParameterRequestRouteArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly idRoute: string
  readonly keyParameterRequest: string
}
class ParameterRequestRouteArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'RouteRequestParameter',
  `arn:${string}:apigateway:${string}::/apis/${string}/routes/${string}/requestparameters/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'RouteRequestParameter' as const
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly idRoute: string
  readonly keyParameterRequest: string
  constructor(parameters: ParameterRequestRouteArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApi = parameters.idApi
    this.idRoute = parameters.idRoute
    this.keyParameterRequest = parameters.keyParameterRequest
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.idApi}/routes/${this.idRoute}/requestparameters/${this.keyParameterRequest}` as const
  }
}
export type { ParameterRequestRouteArn }
export function parameterRequestRouteArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ParameterRequestRouteArnParameters<Partition>) {
  return new ParameterRequestRouteArn<Partition>(parameters)
}

export interface SettingsRouteArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly nameStage: string
  readonly keyRoute: string
}
class SettingsRouteArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'RouteSettings',
  `arn:${string}:apigateway:${string}::/apis/${string}/stages/${string}/routesettings/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'RouteSettings' as const
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly nameStage: string
  readonly keyRoute: string
  constructor(parameters: SettingsRouteArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApi = parameters.idApi
    this.nameStage = parameters.nameStage
    this.keyRoute = parameters.keyRoute
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.idApi}/stages/${this.nameStage}/routesettings/${this.keyRoute}` as const
  }
}
export type { SettingsRouteArn }
export function settingsRouteArn<Partition extends ArnPartition = 'aws'>(
  parameters: SettingsRouteArnParameters<Partition>,
) {
  return new SettingsRouteArn<Partition>(parameters)
}

export interface StageArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly nameStage: string
}
class StageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Stage',
  `arn:${string}:apigateway:${string}::/apis/${string}/stages/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Stage' as const
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly nameStage: string
  constructor(parameters: StageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApi = parameters.idApi
    this.nameStage = parameters.nameStage
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.idApi}/stages/${this.nameStage}` as const
  }
}
export type { StageArn }
export function stageArn<Partition extends ArnPartition = 'aws'>(
  parameters: StageArnParameters<Partition>,
) {
  return new StageArn<Partition>(parameters)
}

export interface StagesArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idApi: string
}
class StagesArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Stages',
  `arn:${string}:apigateway:${string}::/apis/${string}/stages`
> {
  readonly [ArnResourceTypeBrand] = 'Stages' as const
  readonly partition: string
  readonly region: string
  readonly idApi: string
  constructor(parameters: StagesArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApi = parameters.idApi
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apis/${this.idApi}/stages` as const
  }
}
export type { StagesArn }
export function stagesArn<Partition extends ArnPartition = 'aws'>(
  parameters: StagesArnParameters<Partition>,
) {
  return new StagesArn<Partition>(parameters)
}

export interface LinkVpcArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idLinkVpc: string
}
class LinkVpcArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'VpcLink',
  `arn:${string}:apigateway:${string}::/vpclinks/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'VpcLink' as const
  readonly partition: string
  readonly region: string
  readonly idLinkVpc: string
  constructor(parameters: LinkVpcArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idLinkVpc = parameters.idLinkVpc
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/vpclinks/${this.idLinkVpc}` as const
  }
}
export type { LinkVpcArn }
export function linkVpcArn<Partition extends ArnPartition = 'aws'>(
  parameters: LinkVpcArnParameters<Partition>,
) {
  return new LinkVpcArn<Partition>(parameters)
}

export interface LinksVpcArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
}
class LinksVpcArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'VpcLinks',
  `arn:${string}:apigateway:${string}::/vpclinks`
> {
  readonly [ArnResourceTypeBrand] = 'VpcLinks' as const
  readonly partition: string
  readonly region: string
  constructor(parameters: LinksVpcArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/vpclinks` as const
  }
}
export type { LinksVpcArn }
export function linksVpcArn<Partition extends ArnPartition = 'aws'>(
  parameters: LinksVpcArnParameters<Partition>,
) {
  return new LinksVpcArn<Partition>(parameters)
}

export interface AccountArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
}
class AccountArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Account',
  `arn:${string}:apigateway:${string}::/account`
> {
  readonly [ArnResourceTypeBrand] = 'Account' as const
  readonly partition: string
  readonly region: string
  constructor(parameters: AccountArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
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

export interface KeyApiArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idKeyApi: string
}
class KeyApiArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ApiKey',
  `arn:${string}:apigateway:${string}::/apikeys/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ApiKey' as const
  readonly partition: string
  readonly region: string
  readonly idKeyApi: string
  constructor(parameters: KeyApiArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idKeyApi = parameters.idKeyApi
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apikeys/${this.idKeyApi}` as const
  }
}
export type { KeyApiArn }
export function keyApiArn<Partition extends ArnPartition = 'aws'>(
  parameters: KeyApiArnParameters<Partition>,
) {
  return new KeyApiArn<Partition>(parameters)
}

export interface KeysApiArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
}
class KeysApiArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ApiKeys',
  `arn:${string}:apigateway:${string}::/apikeys`
> {
  readonly [ArnResourceTypeBrand] = 'ApiKeys' as const
  readonly partition: string
  readonly region: string
  constructor(parameters: KeysApiArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/apikeys` as const
  }
}
export type { KeysApiArn }
export function keysApiArn<Partition extends ArnPartition = 'aws'>(
  parameters: KeysApiArnParameters<Partition>,
) {
  return new KeysApiArn<Partition>(parameters)
}

export interface MappingPathBaseArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly nameDomain: string
  readonly pathBase: string
}
class MappingPathBaseArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'BasePathMapping',
  `arn:${string}:apigateway:${string}::/domainnames/${string}/basepathmappings/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'BasePathMapping' as const
  readonly partition: string
  readonly region: string
  readonly nameDomain: string
  readonly pathBase: string
  constructor(parameters: MappingPathBaseArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.nameDomain = parameters.nameDomain
    this.pathBase = parameters.pathBase
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/domainnames/${this.nameDomain}/basepathmappings/${this.pathBase}` as const
  }
}
export type { MappingPathBaseArn }
export function mappingPathBaseArn<Partition extends ArnPartition = 'aws'>(
  parameters: MappingPathBaseArnParameters<Partition>,
) {
  return new MappingPathBaseArn<Partition>(parameters)
}

export interface MappingsPathBaseArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly nameDomain: string
}
class MappingsPathBaseArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'BasePathMappings',
  `arn:${string}:apigateway:${string}::/domainnames/${string}/basepathmappings`
> {
  readonly [ArnResourceTypeBrand] = 'BasePathMappings' as const
  readonly partition: string
  readonly region: string
  readonly nameDomain: string
  constructor(parameters: MappingsPathBaseArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.nameDomain = parameters.nameDomain
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/domainnames/${this.nameDomain}/basepathmappings` as const
  }
}
export type { MappingsPathBaseArn }
export function mappingsPathBaseArn<Partition extends ArnPartition = 'aws'>(
  parameters: MappingsPathBaseArnParameters<Partition>,
) {
  return new MappingsPathBaseArn<Partition>(parameters)
}

export interface CertificateClientArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idCertificateClient: string
}
class CertificateClientArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ClientCertificate',
  `arn:${string}:apigateway:${string}::/clientcertificates/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ClientCertificate' as const
  readonly partition: string
  readonly region: string
  readonly idCertificateClient: string
  constructor(parameters: CertificateClientArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idCertificateClient = parameters.idCertificateClient
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/clientcertificates/${this.idCertificateClient}` as const
  }
}
export type { CertificateClientArn }
export function certificateClientArn<Partition extends ArnPartition = 'aws'>(
  parameters: CertificateClientArnParameters<Partition>,
) {
  return new CertificateClientArn<Partition>(parameters)
}

export interface CertificatesClientArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
}
class CertificatesClientArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ClientCertificates',
  `arn:${string}:apigateway:${string}::/clientcertificates`
> {
  readonly [ArnResourceTypeBrand] = 'ClientCertificates' as const
  readonly partition: string
  readonly region: string
  constructor(parameters: CertificatesClientArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/clientcertificates` as const
  }
}
export type { CertificatesClientArn }
export function certificatesClientArn<Partition extends ArnPartition = 'aws'>(
  parameters: CertificatesClientArnParameters<Partition>,
) {
  return new CertificatesClientArn<Partition>(parameters)
}

export interface PartDocumentationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idApiRest: string
  readonly idPartDocumentation: string
}
class PartDocumentationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'DocumentationPart',
  `arn:${string}:apigateway:${string}::/restapis/${string}/documentation/parts/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'DocumentationPart' as const
  readonly partition: string
  readonly region: string
  readonly idApiRest: string
  readonly idPartDocumentation: string
  constructor(parameters: PartDocumentationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApiRest = parameters.idApiRest
    this.idPartDocumentation = parameters.idPartDocumentation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/${this.idApiRest}/documentation/parts/${this.idPartDocumentation}` as const
  }
}
export type { PartDocumentationArn }
export function partDocumentationArn<Partition extends ArnPartition = 'aws'>(
  parameters: PartDocumentationArnParameters<Partition>,
) {
  return new PartDocumentationArn<Partition>(parameters)
}

export interface PartsDocumentationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idApiRest: string
}
class PartsDocumentationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'DocumentationParts',
  `arn:${string}:apigateway:${string}::/restapis/${string}/documentation/parts`
> {
  readonly [ArnResourceTypeBrand] = 'DocumentationParts' as const
  readonly partition: string
  readonly region: string
  readonly idApiRest: string
  constructor(parameters: PartsDocumentationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApiRest = parameters.idApiRest
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/${this.idApiRest}/documentation/parts` as const
  }
}
export type { PartsDocumentationArn }
export function partsDocumentationArn<Partition extends ArnPartition = 'aws'>(
  parameters: PartsDocumentationArnParameters<Partition>,
) {
  return new PartsDocumentationArn<Partition>(parameters)
}

export interface VersionDocumentationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idApiRest: string
  readonly idVersionDocumentation: string
}
class VersionDocumentationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'DocumentationVersion',
  `arn:${string}:apigateway:${string}::/restapis/${string}/documentation/versions/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'DocumentationVersion' as const
  readonly partition: string
  readonly region: string
  readonly idApiRest: string
  readonly idVersionDocumentation: string
  constructor(parameters: VersionDocumentationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApiRest = parameters.idApiRest
    this.idVersionDocumentation = parameters.idVersionDocumentation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/${this.idApiRest}/documentation/versions/${this.idVersionDocumentation}` as const
  }
}
export type { VersionDocumentationArn }
export function versionDocumentationArn<Partition extends ArnPartition = 'aws'>(
  parameters: VersionDocumentationArnParameters<Partition>,
) {
  return new VersionDocumentationArn<Partition>(parameters)
}

export interface VersionsDocumentationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idApiRest: string
}
class VersionsDocumentationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'DocumentationVersions',
  `arn:${string}:apigateway:${string}::/restapis/${string}/documentation/versions`
> {
  readonly [ArnResourceTypeBrand] = 'DocumentationVersions' as const
  readonly partition: string
  readonly region: string
  readonly idApiRest: string
  constructor(parameters: VersionsDocumentationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApiRest = parameters.idApiRest
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/${this.idApiRest}/documentation/versions` as const
  }
}
export type { VersionsDocumentationArn }
export function versionsDocumentationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: VersionsDocumentationArnParameters<Partition>) {
  return new VersionsDocumentationArn<Partition>(parameters)
}

export interface NameDomainArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly nameDomain: string
}
class NameDomainArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'DomainName',
  `arn:${string}:apigateway:${string}::/domainnames/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'DomainName' as const
  readonly partition: string
  readonly region: string
  readonly nameDomain: string
  constructor(parameters: NameDomainArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.nameDomain = parameters.nameDomain
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/domainnames/${this.nameDomain}` as const
  }
}
export type { NameDomainArn }
export function nameDomainArn<Partition extends ArnPartition = 'aws'>(
  parameters: NameDomainArnParameters<Partition>,
) {
  return new NameDomainArn<Partition>(parameters)
}

export interface NamesDomainArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
}
class NamesDomainArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'DomainNames',
  `arn:${string}:apigateway:${string}::/domainnames`
> {
  readonly [ArnResourceTypeBrand] = 'DomainNames' as const
  readonly partition: string
  readonly region: string
  constructor(parameters: NamesDomainArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/domainnames` as const
  }
}
export type { NamesDomainArn }
export function namesDomainArn<Partition extends ArnPartition = 'aws'>(
  parameters: NamesDomainArnParameters<Partition>,
) {
  return new NamesDomainArn<Partition>(parameters)
}

export interface ResponseGatewayArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idApiRest: string
  readonly typeResponse: string
}
class ResponseGatewayArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'GatewayResponse',
  `arn:${string}:apigateway:${string}::/restapis/${string}/gatewayresponses/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'GatewayResponse' as const
  readonly partition: string
  readonly region: string
  readonly idApiRest: string
  readonly typeResponse: string
  constructor(parameters: ResponseGatewayArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApiRest = parameters.idApiRest
    this.typeResponse = parameters.typeResponse
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/${this.idApiRest}/gatewayresponses/${this.typeResponse}` as const
  }
}
export type { ResponseGatewayArn }
export function responseGatewayArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResponseGatewayArnParameters<Partition>,
) {
  return new ResponseGatewayArn<Partition>(parameters)
}

export interface ResponsesGatewayArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idApiRest: string
}
class ResponsesGatewayArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'GatewayResponses',
  `arn:${string}:apigateway:${string}::/restapis/${string}/gatewayresponses`
> {
  readonly [ArnResourceTypeBrand] = 'GatewayResponses' as const
  readonly partition: string
  readonly region: string
  readonly idApiRest: string
  constructor(parameters: ResponsesGatewayArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApiRest = parameters.idApiRest
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/${this.idApiRest}/gatewayresponses` as const
  }
}
export type { ResponsesGatewayArn }
export function responsesGatewayArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResponsesGatewayArnParameters<Partition>,
) {
  return new ResponsesGatewayArn<Partition>(parameters)
}

export interface MethodArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idApiRest: string
  readonly idResource: string
  readonly typeMethodHttp: string
}
class MethodArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Method',
  `arn:${string}:apigateway:${string}::/restapis/${string}/resources/${string}/methods/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Method' as const
  readonly partition: string
  readonly region: string
  readonly idApiRest: string
  readonly idResource: string
  readonly typeMethodHttp: string
  constructor(parameters: MethodArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApiRest = parameters.idApiRest
    this.idResource = parameters.idResource
    this.typeMethodHttp = parameters.typeMethodHttp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/${this.idApiRest}/resources/${this.idResource}/methods/${this.typeMethodHttp}` as const
  }
}
export type { MethodArn }
export function methodArn<Partition extends ArnPartition = 'aws'>(
  parameters: MethodArnParameters<Partition>,
) {
  return new MethodArn<Partition>(parameters)
}

export interface ResponseMethodArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idApiRest: string
  readonly idResource: string
  readonly typeMethodHttp: string
  readonly codeStatus: string
}
class ResponseMethodArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'MethodResponse',
  `arn:${string}:apigateway:${string}::/restapis/${string}/resources/${string}/methods/${string}/responses/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'MethodResponse' as const
  readonly partition: string
  readonly region: string
  readonly idApiRest: string
  readonly idResource: string
  readonly typeMethodHttp: string
  readonly codeStatus: string
  constructor(parameters: ResponseMethodArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApiRest = parameters.idApiRest
    this.idResource = parameters.idResource
    this.typeMethodHttp = parameters.typeMethodHttp
    this.codeStatus = parameters.codeStatus
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/${this.idApiRest}/resources/${this.idResource}/methods/${this.typeMethodHttp}/responses/${this.codeStatus}` as const
  }
}
export type { ResponseMethodArn }
export function responseMethodArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResponseMethodArnParameters<Partition>,
) {
  return new ResponseMethodArn<Partition>(parameters)
}

export interface ValidatorRequestArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idApiRest: string
  readonly idValidatorRequest: string
}
class ValidatorRequestArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'RequestValidator',
  `arn:${string}:apigateway:${string}::/restapis/${string}/requestvalidators/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'RequestValidator' as const
  readonly partition: string
  readonly region: string
  readonly idApiRest: string
  readonly idValidatorRequest: string
  constructor(parameters: ValidatorRequestArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApiRest = parameters.idApiRest
    this.idValidatorRequest = parameters.idValidatorRequest
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/${this.idApiRest}/requestvalidators/${this.idValidatorRequest}` as const
  }
}
export type { ValidatorRequestArn }
export function validatorRequestArn<Partition extends ArnPartition = 'aws'>(
  parameters: ValidatorRequestArnParameters<Partition>,
) {
  return new ValidatorRequestArn<Partition>(parameters)
}

export interface ValidatorsRequestArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idApiRest: string
}
class ValidatorsRequestArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'RequestValidators',
  `arn:${string}:apigateway:${string}::/restapis/${string}/requestvalidators`
> {
  readonly [ArnResourceTypeBrand] = 'RequestValidators' as const
  readonly partition: string
  readonly region: string
  readonly idApiRest: string
  constructor(parameters: ValidatorsRequestArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApiRest = parameters.idApiRest
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/${this.idApiRest}/requestvalidators` as const
  }
}
export type { ValidatorsRequestArn }
export function validatorsRequestArn<Partition extends ArnPartition = 'aws'>(
  parameters: ValidatorsRequestArnParameters<Partition>,
) {
  return new ValidatorsRequestArn<Partition>(parameters)
}

export interface ResourceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idApiRest: string
  readonly idResource: string
}
class ResourceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Resource',
  `arn:${string}:apigateway:${string}::/restapis/${string}/resources/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Resource' as const
  readonly partition: string
  readonly region: string
  readonly idApiRest: string
  readonly idResource: string
  constructor(parameters: ResourceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApiRest = parameters.idApiRest
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/${this.idApiRest}/resources/${this.idResource}` as const
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
  readonly partition: string
  readonly region: string
  readonly idApiRest: string
}
class ResourcesArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Resources',
  `arn:${string}:apigateway:${string}::/restapis/${string}/resources`
> {
  readonly [ArnResourceTypeBrand] = 'Resources' as const
  readonly partition: string
  readonly region: string
  readonly idApiRest: string
  constructor(parameters: ResourcesArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApiRest = parameters.idApiRest
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/${this.idApiRest}/resources` as const
  }
}
export type { ResourcesArn }
export function resourcesArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResourcesArnParameters<Partition>,
) {
  return new ResourcesArn<Partition>(parameters)
}

export interface ApiRestArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idApiRest: string
}
class ApiRestArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'RestApi',
  `arn:${string}:apigateway:${string}::/restapis/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'RestApi' as const
  readonly partition: string
  readonly region: string
  readonly idApiRest: string
  constructor(parameters: ApiRestArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApiRest = parameters.idApiRest
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/${this.idApiRest}` as const
  }
}
export type { ApiRestArn }
export function apiRestArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApiRestArnParameters<Partition>,
) {
  return new ApiRestArn<Partition>(parameters)
}

export interface ApisRestArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
}
class ApisRestArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'RestApis',
  `arn:${string}:apigateway:${string}::/restapis`
> {
  readonly [ArnResourceTypeBrand] = 'RestApis' as const
  readonly partition: string
  readonly region: string
  constructor(parameters: ApisRestArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis` as const
  }
}
export type { ApisRestArn }
export function apisRestArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApisRestArnParameters<Partition>,
) {
  return new ApisRestArn<Partition>(parameters)
}

export interface SdkArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idApiRest: string
  readonly nameStage: string
  readonly typeSdk: string
}
class SdkArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Sdk',
  `arn:${string}:apigateway:${string}::/restapis/${string}/stages/${string}/sdks/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Sdk' as const
  readonly partition: string
  readonly region: string
  readonly idApiRest: string
  readonly nameStage: string
  readonly typeSdk: string
  constructor(parameters: SdkArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApiRest = parameters.idApiRest
    this.nameStage = parameters.nameStage
    this.typeSdk = parameters.typeSdk
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/${this.idApiRest}/stages/${this.nameStage}/sdks/${this.typeSdk}` as const
  }
}
export type { SdkArn }
export function sdkArn<Partition extends ArnPartition = 'aws'>(
  parameters: SdkArnParameters<Partition>,
) {
  return new SdkArn<Partition>(parameters)
}

export interface TemplateArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly nameModel: string
}
class TemplateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Template',
  `arn:${string}:apigateway:${string}::/restapis/models/${string}/template`
> {
  readonly [ArnResourceTypeBrand] = 'Template' as const
  readonly partition: string
  readonly region: string
  readonly nameModel: string
  constructor(parameters: TemplateArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.nameModel = parameters.nameModel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/models/${this.nameModel}/template` as const
  }
}
export type { TemplateArn }
export function templateArn<Partition extends ArnPartition = 'aws'>(
  parameters: TemplateArnParameters<Partition>,
) {
  return new TemplateArn<Partition>(parameters)
}

export interface PlanUsageArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idPlanUsage: string
}
class PlanUsageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'UsagePlan',
  `arn:${string}:apigateway:${string}::/usageplans/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'UsagePlan' as const
  readonly partition: string
  readonly region: string
  readonly idPlanUsage: string
  constructor(parameters: PlanUsageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idPlanUsage = parameters.idPlanUsage
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/usageplans/${this.idPlanUsage}` as const
  }
}
export type { PlanUsageArn }
export function planUsageArn<Partition extends ArnPartition = 'aws'>(
  parameters: PlanUsageArnParameters<Partition>,
) {
  return new PlanUsageArn<Partition>(parameters)
}

export interface PlansUsageArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
}
class PlansUsageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'UsagePlans',
  `arn:${string}:apigateway:${string}::/usageplans`
> {
  readonly [ArnResourceTypeBrand] = 'UsagePlans' as const
  readonly partition: string
  readonly region: string
  constructor(parameters: PlansUsageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/usageplans` as const
  }
}
export type { PlansUsageArn }
export function plansUsageArn<Partition extends ArnPartition = 'aws'>(
  parameters: PlansUsageArnParameters<Partition>,
) {
  return new PlansUsageArn<Partition>(parameters)
}

export interface KeyPlanUsageArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idPlanUsage: string
  readonly id: string
}
class KeyPlanUsageArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'UsagePlanKey',
  `arn:${string}:apigateway:${string}::/usageplans/${string}/keys/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'UsagePlanKey' as const
  readonly partition: string
  readonly region: string
  readonly idPlanUsage: string
  readonly id: string
  constructor(parameters: KeyPlanUsageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idPlanUsage = parameters.idPlanUsage
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/usageplans/${this.idPlanUsage}/keys/${this.id}` as const
  }
}
export type { KeyPlanUsageArn }
export function keyPlanUsageArn<Partition extends ArnPartition = 'aws'>(
  parameters: KeyPlanUsageArnParameters<Partition>,
) {
  return new KeyPlanUsageArn<Partition>(parameters)
}

export interface KeysPlanUsageArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idPlanUsage: string
}
class KeysPlanUsageArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'UsagePlanKeys',
  `arn:${string}:apigateway:${string}::/usageplans/${string}/keys`
> {
  readonly [ArnResourceTypeBrand] = 'UsagePlanKeys' as const
  readonly partition: string
  readonly region: string
  readonly idPlanUsage: string
  constructor(parameters: KeysPlanUsageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idPlanUsage = parameters.idPlanUsage
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/usageplans/${this.idPlanUsage}/keys` as const
  }
}
export type { KeysPlanUsageArn }
export function keysPlanUsageArn<Partition extends ArnPartition = 'aws'>(
  parameters: KeysPlanUsageArnParameters<Partition>,
) {
  return new KeysPlanUsageArn<Partition>(parameters)
}

export interface TagsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly arnResourceEncodedUrl: string
}
class TagsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Tags',
  `arn:${string}:apigateway:${string}::/tags/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Tags' as const
  readonly partition: string
  readonly region: string
  readonly arnResourceEncodedUrl: string
  constructor(parameters: TagsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.arnResourceEncodedUrl = parameters.arnResourceEncodedUrl
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/tags/${this.arnResourceEncodedUrl}` as const
  }
}
export type { TagsArn }
export function tagsArn<Partition extends ArnPartition = 'aws'>(
  parameters: TagsArnParameters<Partition>,
) {
  return new TagsArn<Partition>(parameters)
}
