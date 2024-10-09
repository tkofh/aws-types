export interface AccessLogSettingsArnParameters {
  partition?: string | undefined
  region: string
  apiId: string
  stageName: string
}
export type AccessLogSettingsArn = `arn:${string}:apigateway:${string}::/apis/${string}/stages/${string}/accesslogsettings`
export function accessLogSettingsArn(parameters: AccessLogSettingsArnParameters): AccessLogSettingsArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/apis/${parameters.apiId}/stages/${parameters.stageName}/accesslogsettings`
}

export interface ApiArnParameters {
  partition?: string | undefined
  region: string
  apiId: string
}
export type ApiArn = `arn:${string}:apigateway:${string}::/apis/${string}`
export function apiArn(parameters: ApiArnParameters): ApiArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/apis/${parameters.apiId}`
}

export interface ApisArnParameters {
  partition?: string | undefined
  region: string
}
export type ApisArn = `arn:${string}:apigateway:${string}::/apis`
export function apisArn(parameters: ApisArnParameters): ApisArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/apis`
}

export interface ApiMappingArnParameters {
  partition?: string | undefined
  region: string
  domainName: string
  apiMappingId: string
}
export type ApiMappingArn = `arn:${string}:apigateway:${string}::/domainnames/${string}/apimappings/${string}`
export function apiMappingArn(parameters: ApiMappingArnParameters): ApiMappingArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/domainnames/${parameters.domainName}/apimappings/${parameters.apiMappingId}`
}

export interface ApiMappingsArnParameters {
  partition?: string | undefined
  region: string
  domainName: string
}
export type ApiMappingsArn = `arn:${string}:apigateway:${string}::/domainnames/${string}/apimappings`
export function apiMappingsArn(parameters: ApiMappingsArnParameters): ApiMappingsArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/domainnames/${parameters.domainName}/apimappings`
}

export interface AuthorizerArnParameters {
  partition?: string | undefined
  region: string
  apiId: string
  authorizerId: string
}
export type AuthorizerArn = `arn:${string}:apigateway:${string}::/apis/${string}/authorizers/${string}`
export function authorizerArn(parameters: AuthorizerArnParameters): AuthorizerArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/apis/${parameters.apiId}/authorizers/${parameters.authorizerId}`
}

export interface AuthorizersArnParameters {
  partition?: string | undefined
  region: string
  apiId: string
}
export type AuthorizersArn = `arn:${string}:apigateway:${string}::/apis/${string}/authorizers`
export function authorizersArn(parameters: AuthorizersArnParameters): AuthorizersArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/apis/${parameters.apiId}/authorizers`
}

export interface AuthorizersCacheArnParameters {
  partition?: string | undefined
  region: string
  apiId: string
  stageName: string
}
export type AuthorizersCacheArn = `arn:${string}:apigateway:${string}::/apis/${string}/stages/${string}/cache/authorizers`
export function authorizersCacheArn(parameters: AuthorizersCacheArnParameters): AuthorizersCacheArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/apis/${parameters.apiId}/stages/${parameters.stageName}/cache/authorizers`
}

export interface CorsArnParameters {
  partition?: string | undefined
  region: string
  apiId: string
}
export type CorsArn = `arn:${string}:apigateway:${string}::/apis/${string}/cors`
export function corsArn(parameters: CorsArnParameters): CorsArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/apis/${parameters.apiId}/cors`
}

export interface DeploymentArnParameters {
  partition?: string | undefined
  region: string
  apiId: string
  deploymentId: string
}
export type DeploymentArn = `arn:${string}:apigateway:${string}::/apis/${string}/deployments/${string}`
export function deploymentArn(parameters: DeploymentArnParameters): DeploymentArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/apis/${parameters.apiId}/deployments/${parameters.deploymentId}`
}

export interface DeploymentsArnParameters {
  partition?: string | undefined
  region: string
  apiId: string
}
export type DeploymentsArn = `arn:${string}:apigateway:${string}::/apis/${string}/deployments`
export function deploymentsArn(parameters: DeploymentsArnParameters): DeploymentsArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/apis/${parameters.apiId}/deployments`
}

export interface ExportedApiArnParameters {
  partition?: string | undefined
  region: string
  apiId: string
  specification: string
}
export type ExportedApiArn = `arn:${string}:apigateway:${string}::/apis/${string}/exports/${string}`
export function exportedApiArn(parameters: ExportedApiArnParameters): ExportedApiArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/apis/${parameters.apiId}/exports/${parameters.specification}`
}

export interface IntegrationArnParameters {
  partition?: string | undefined
  region: string
  apiId: string
  integrationId: string
}
export type IntegrationArn = `arn:${string}:apigateway:${string}::/apis/${string}/integrations/${string}`
export function integrationArn(parameters: IntegrationArnParameters): IntegrationArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/apis/${parameters.apiId}/integrations/${parameters.integrationId}`
}

export interface IntegrationsArnParameters {
  partition?: string | undefined
  region: string
  apiId: string
}
export type IntegrationsArn = `arn:${string}:apigateway:${string}::/apis/${string}/integrations`
export function integrationsArn(parameters: IntegrationsArnParameters): IntegrationsArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/apis/${parameters.apiId}/integrations`
}

export interface IntegrationResponseArnParameters {
  partition?: string | undefined
  region: string
  apiId: string
  integrationId: string
  integrationResponseId: string
}
export type IntegrationResponseArn = `arn:${string}:apigateway:${string}::/apis/${string}/integrations/${string}/integrationresponses/${string}`
export function integrationResponseArn(parameters: IntegrationResponseArnParameters): IntegrationResponseArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/apis/${parameters.apiId}/integrations/${parameters.integrationId}/integrationresponses/${parameters.integrationResponseId}`
}

export interface IntegrationResponsesArnParameters {
  partition?: string | undefined
  region: string
  apiId: string
  integrationId: string
}
export type IntegrationResponsesArn = `arn:${string}:apigateway:${string}::/apis/${string}/integrations/${string}/integrationresponses`
export function integrationResponsesArn(parameters: IntegrationResponsesArnParameters): IntegrationResponsesArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/apis/${parameters.apiId}/integrations/${parameters.integrationId}/integrationresponses`
}

export interface ModelArnParameters {
  partition?: string | undefined
  region: string
  apiId: string
  modelId: string
}
export type ModelArn = `arn:${string}:apigateway:${string}::/apis/${string}/models/${string}`
export function modelArn(parameters: ModelArnParameters): ModelArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/apis/${parameters.apiId}/models/${parameters.modelId}`
}

export interface ModelsArnParameters {
  partition?: string | undefined
  region: string
  apiId: string
}
export type ModelsArn = `arn:${string}:apigateway:${string}::/apis/${string}/models`
export function modelsArn(parameters: ModelsArnParameters): ModelsArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/apis/${parameters.apiId}/models`
}

export interface ModelTemplateArnParameters {
  partition?: string | undefined
  region: string
  apiId: string
  modelId: string
}
export type ModelTemplateArn = `arn:${string}:apigateway:${string}::/apis/${string}/models/${string}/template`
export function modelTemplateArn(parameters: ModelTemplateArnParameters): ModelTemplateArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/apis/${parameters.apiId}/models/${parameters.modelId}/template`
}

export interface RouteArnParameters {
  partition?: string | undefined
  region: string
  apiId: string
  routeId: string
}
export type RouteArn = `arn:${string}:apigateway:${string}::/apis/${string}/routes/${string}`
export function routeArn(parameters: RouteArnParameters): RouteArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/apis/${parameters.apiId}/routes/${parameters.routeId}`
}

export interface RoutesArnParameters {
  partition?: string | undefined
  region: string
  apiId: string
}
export type RoutesArn = `arn:${string}:apigateway:${string}::/apis/${string}/routes`
export function routesArn(parameters: RoutesArnParameters): RoutesArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/apis/${parameters.apiId}/routes`
}

export interface RouteResponseArnParameters {
  partition?: string | undefined
  region: string
  apiId: string
  routeId: string
  routeResponseId: string
}
export type RouteResponseArn = `arn:${string}:apigateway:${string}::/apis/${string}/routes/${string}/routeresponses/${string}`
export function routeResponseArn(parameters: RouteResponseArnParameters): RouteResponseArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/apis/${parameters.apiId}/routes/${parameters.routeId}/routeresponses/${parameters.routeResponseId}`
}

export interface RouteResponsesArnParameters {
  partition?: string | undefined
  region: string
  apiId: string
  routeId: string
}
export type RouteResponsesArn = `arn:${string}:apigateway:${string}::/apis/${string}/routes/${string}/routeresponses`
export function routeResponsesArn(parameters: RouteResponsesArnParameters): RouteResponsesArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/apis/${parameters.apiId}/routes/${parameters.routeId}/routeresponses`
}

export interface RouteRequestParameterArnParameters {
  partition?: string | undefined
  region: string
  apiId: string
  routeId: string
  requestParameterKey: string
}
export type RouteRequestParameterArn = `arn:${string}:apigateway:${string}::/apis/${string}/routes/${string}/requestparameters/${string}`
export function routeRequestParameterArn(parameters: RouteRequestParameterArnParameters): RouteRequestParameterArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/apis/${parameters.apiId}/routes/${parameters.routeId}/requestparameters/${parameters.requestParameterKey}`
}

export interface RouteSettingsArnParameters {
  partition?: string | undefined
  region: string
  apiId: string
  stageName: string
  routeKey: string
}
export type RouteSettingsArn = `arn:${string}:apigateway:${string}::/apis/${string}/stages/${string}/routesettings/${string}`
export function routeSettingsArn(parameters: RouteSettingsArnParameters): RouteSettingsArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/apis/${parameters.apiId}/stages/${parameters.stageName}/routesettings/${parameters.routeKey}`
}

export interface StageArnParameters {
  partition?: string | undefined
  region: string
  apiId: string
  stageName: string
}
export type StageArn = `arn:${string}:apigateway:${string}::/apis/${string}/stages/${string}`
export function stageArn(parameters: StageArnParameters): StageArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/apis/${parameters.apiId}/stages/${parameters.stageName}`
}

export interface StagesArnParameters {
  partition?: string | undefined
  region: string
  apiId: string
}
export type StagesArn = `arn:${string}:apigateway:${string}::/apis/${string}/stages`
export function stagesArn(parameters: StagesArnParameters): StagesArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/apis/${parameters.apiId}/stages`
}

export interface VpcLinkArnParameters {
  partition?: string | undefined
  region: string
  vpcLinkId: string
}
export type VpcLinkArn = `arn:${string}:apigateway:${string}::/vpclinks/${string}`
export function vpcLinkArn(parameters: VpcLinkArnParameters): VpcLinkArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/vpclinks/${parameters.vpcLinkId}`
}

export interface VpcLinksArnParameters {
  partition?: string | undefined
  region: string
}
export type VpcLinksArn = `arn:${string}:apigateway:${string}::/vpclinks`
export function vpcLinksArn(parameters: VpcLinksArnParameters): VpcLinksArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/vpclinks`
}

export interface AccountArnParameters {
  partition?: string | undefined
  region: string
}
export type AccountArn = `arn:${string}:apigateway:${string}::/account`
export function accountArn(parameters: AccountArnParameters): AccountArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/account`
}

export interface ApiKeyArnParameters {
  partition?: string | undefined
  region: string
  apiKeyId: string
}
export type ApiKeyArn = `arn:${string}:apigateway:${string}::/apikeys/${string}`
export function apiKeyArn(parameters: ApiKeyArnParameters): ApiKeyArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/apikeys/${parameters.apiKeyId}`
}

export interface ApiKeysArnParameters {
  partition?: string | undefined
  region: string
}
export type ApiKeysArn = `arn:${string}:apigateway:${string}::/apikeys`
export function apiKeysArn(parameters: ApiKeysArnParameters): ApiKeysArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/apikeys`
}

export interface BasePathMappingArnParameters {
  partition?: string | undefined
  region: string
  domainName: string
  basePath: string
}
export type BasePathMappingArn = `arn:${string}:apigateway:${string}::/domainnames/${string}/basepathmappings/${string}`
export function basePathMappingArn(parameters: BasePathMappingArnParameters): BasePathMappingArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/domainnames/${parameters.domainName}/basepathmappings/${parameters.basePath}`
}

export interface BasePathMappingsArnParameters {
  partition?: string | undefined
  region: string
  domainName: string
}
export type BasePathMappingsArn = `arn:${string}:apigateway:${string}::/domainnames/${string}/basepathmappings`
export function basePathMappingsArn(parameters: BasePathMappingsArnParameters): BasePathMappingsArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/domainnames/${parameters.domainName}/basepathmappings`
}

export interface ClientCertificateArnParameters {
  partition?: string | undefined
  region: string
  clientCertificateId: string
}
export type ClientCertificateArn = `arn:${string}:apigateway:${string}::/clientcertificates/${string}`
export function clientCertificateArn(parameters: ClientCertificateArnParameters): ClientCertificateArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/clientcertificates/${parameters.clientCertificateId}`
}

export interface ClientCertificatesArnParameters {
  partition?: string | undefined
  region: string
}
export type ClientCertificatesArn = `arn:${string}:apigateway:${string}::/clientcertificates`
export function clientCertificatesArn(parameters: ClientCertificatesArnParameters): ClientCertificatesArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/clientcertificates`
}

export interface DocumentationPartArnParameters {
  partition?: string | undefined
  region: string
  restApiId: string
  documentationPartId: string
}
export type DocumentationPartArn = `arn:${string}:apigateway:${string}::/restapis/${string}/documentation/parts/${string}`
export function documentationPartArn(parameters: DocumentationPartArnParameters): DocumentationPartArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/restapis/${parameters.restApiId}/documentation/parts/${parameters.documentationPartId}`
}

export interface DocumentationPartsArnParameters {
  partition?: string | undefined
  region: string
  restApiId: string
}
export type DocumentationPartsArn = `arn:${string}:apigateway:${string}::/restapis/${string}/documentation/parts`
export function documentationPartsArn(parameters: DocumentationPartsArnParameters): DocumentationPartsArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/restapis/${parameters.restApiId}/documentation/parts`
}

export interface DocumentationVersionArnParameters {
  partition?: string | undefined
  region: string
  restApiId: string
  documentationVersionId: string
}
export type DocumentationVersionArn = `arn:${string}:apigateway:${string}::/restapis/${string}/documentation/versions/${string}`
export function documentationVersionArn(parameters: DocumentationVersionArnParameters): DocumentationVersionArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/restapis/${parameters.restApiId}/documentation/versions/${parameters.documentationVersionId}`
}

export interface DocumentationVersionsArnParameters {
  partition?: string | undefined
  region: string
  restApiId: string
}
export type DocumentationVersionsArn = `arn:${string}:apigateway:${string}::/restapis/${string}/documentation/versions`
export function documentationVersionsArn(parameters: DocumentationVersionsArnParameters): DocumentationVersionsArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/restapis/${parameters.restApiId}/documentation/versions`
}

export interface DomainNameArnParameters {
  partition?: string | undefined
  region: string
  domainName: string
}
export type DomainNameArn = `arn:${string}:apigateway:${string}::/domainnames/${string}`
export function domainNameArn(parameters: DomainNameArnParameters): DomainNameArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/domainnames/${parameters.domainName}`
}

export interface DomainNamesArnParameters {
  partition?: string | undefined
  region: string
}
export type DomainNamesArn = `arn:${string}:apigateway:${string}::/domainnames`
export function domainNamesArn(parameters: DomainNamesArnParameters): DomainNamesArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/domainnames`
}

export interface GatewayResponseArnParameters {
  partition?: string | undefined
  region: string
  restApiId: string
  responseType: string
}
export type GatewayResponseArn = `arn:${string}:apigateway:${string}::/restapis/${string}/gatewayresponses/${string}`
export function gatewayResponseArn(parameters: GatewayResponseArnParameters): GatewayResponseArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/restapis/${parameters.restApiId}/gatewayresponses/${parameters.responseType}`
}

export interface GatewayResponsesArnParameters {
  partition?: string | undefined
  region: string
  restApiId: string
}
export type GatewayResponsesArn = `arn:${string}:apigateway:${string}::/restapis/${string}/gatewayresponses`
export function gatewayResponsesArn(parameters: GatewayResponsesArnParameters): GatewayResponsesArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/restapis/${parameters.restApiId}/gatewayresponses`
}

export interface MethodArnParameters {
  partition?: string | undefined
  region: string
  restApiId: string
  resourceId: string
  httpMethodType: string
}
export type MethodArn = `arn:${string}:apigateway:${string}::/restapis/${string}/resources/${string}/methods/${string}`
export function methodArn(parameters: MethodArnParameters): MethodArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/restapis/${parameters.restApiId}/resources/${parameters.resourceId}/methods/${parameters.httpMethodType}`
}

export interface MethodResponseArnParameters {
  partition?: string | undefined
  region: string
  restApiId: string
  resourceId: string
  httpMethodType: string
  statusCode: string
}
export type MethodResponseArn = `arn:${string}:apigateway:${string}::/restapis/${string}/resources/${string}/methods/${string}/responses/${string}`
export function methodResponseArn(parameters: MethodResponseArnParameters): MethodResponseArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/restapis/${parameters.restApiId}/resources/${parameters.resourceId}/methods/${parameters.httpMethodType}/responses/${parameters.statusCode}`
}

export interface RequestValidatorArnParameters {
  partition?: string | undefined
  region: string
  restApiId: string
  requestValidatorId: string
}
export type RequestValidatorArn = `arn:${string}:apigateway:${string}::/restapis/${string}/requestvalidators/${string}`
export function requestValidatorArn(parameters: RequestValidatorArnParameters): RequestValidatorArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/restapis/${parameters.restApiId}/requestvalidators/${parameters.requestValidatorId}`
}

export interface RequestValidatorsArnParameters {
  partition?: string | undefined
  region: string
  restApiId: string
}
export type RequestValidatorsArn = `arn:${string}:apigateway:${string}::/restapis/${string}/requestvalidators`
export function requestValidatorsArn(parameters: RequestValidatorsArnParameters): RequestValidatorsArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/restapis/${parameters.restApiId}/requestvalidators`
}

export interface ResourceArnParameters {
  partition?: string | undefined
  region: string
  restApiId: string
  resourceId: string
}
export type ResourceArn = `arn:${string}:apigateway:${string}::/restapis/${string}/resources/${string}`
export function resourceArn(parameters: ResourceArnParameters): ResourceArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/restapis/${parameters.restApiId}/resources/${parameters.resourceId}`
}

export interface ResourcesArnParameters {
  partition?: string | undefined
  region: string
  restApiId: string
}
export type ResourcesArn = `arn:${string}:apigateway:${string}::/restapis/${string}/resources`
export function resourcesArn(parameters: ResourcesArnParameters): ResourcesArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/restapis/${parameters.restApiId}/resources`
}

export interface RestApiArnParameters {
  partition?: string | undefined
  region: string
  restApiId: string
}
export type RestApiArn = `arn:${string}:apigateway:${string}::/restapis/${string}`
export function restApiArn(parameters: RestApiArnParameters): RestApiArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/restapis/${parameters.restApiId}`
}

export interface RestApisArnParameters {
  partition?: string | undefined
  region: string
}
export type RestApisArn = `arn:${string}:apigateway:${string}::/restapis`
export function restApisArn(parameters: RestApisArnParameters): RestApisArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/restapis`
}

export interface SdkArnParameters {
  partition?: string | undefined
  region: string
  restApiId: string
  stageName: string
  sdkType: string
}
export type SdkArn = `arn:${string}:apigateway:${string}::/restapis/${string}/stages/${string}/sdks/${string}`
export function sdkArn(parameters: SdkArnParameters): SdkArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/restapis/${parameters.restApiId}/stages/${parameters.stageName}/sdks/${parameters.sdkType}`
}

export interface TemplateArnParameters {
  partition?: string | undefined
  region: string
  modelName: string
}
export type TemplateArn = `arn:${string}:apigateway:${string}::/restapis/models/${string}/template`
export function templateArn(parameters: TemplateArnParameters): TemplateArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/restapis/models/${parameters.modelName}/template`
}

export interface UsagePlanArnParameters {
  partition?: string | undefined
  region: string
  usagePlanId: string
}
export type UsagePlanArn = `arn:${string}:apigateway:${string}::/usageplans/${string}`
export function usagePlanArn(parameters: UsagePlanArnParameters): UsagePlanArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/usageplans/${parameters.usagePlanId}`
}

export interface UsagePlansArnParameters {
  partition?: string | undefined
  region: string
}
export type UsagePlansArn = `arn:${string}:apigateway:${string}::/usageplans`
export function usagePlansArn(parameters: UsagePlansArnParameters): UsagePlansArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/usageplans`
}

export interface UsagePlanKeyArnParameters {
  partition?: string | undefined
  region: string
  usagePlanId: string
  id: string
}
export type UsagePlanKeyArn = `arn:${string}:apigateway:${string}::/usageplans/${string}/keys/${string}`
export function usagePlanKeyArn(parameters: UsagePlanKeyArnParameters): UsagePlanKeyArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/usageplans/${parameters.usagePlanId}/keys/${parameters.id}`
}

export interface UsagePlanKeysArnParameters {
  partition?: string | undefined
  region: string
  usagePlanId: string
}
export type UsagePlanKeysArn = `arn:${string}:apigateway:${string}::/usageplans/${string}/keys`
export function usagePlanKeysArn(parameters: UsagePlanKeysArnParameters): UsagePlanKeysArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/usageplans/${parameters.usagePlanId}/keys`
}

export interface TagsArnParameters {
  partition?: string | undefined
  region: string
  urlEncodedResourceArn: string
}
export type TagsArn = `arn:${string}:apigateway:${string}::/tags/${string}`
export function tagsArn(parameters: TagsArnParameters): TagsArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/tags/${parameters.urlEncodedResourceArn}`
}