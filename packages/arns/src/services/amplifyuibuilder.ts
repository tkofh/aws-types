export interface CodegenJobResourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
  environmentName: string
  id: string
}
export type CodegenJobResourceArn = `arn:${string}:amplifyuibuilder:${string}:${string}:app/${string}/environment/${string}/codegen-jobs/${string}`
export function codegenJobResourceArn(parameters: CodegenJobResourceArnParameters): CodegenJobResourceArn {
  return `arn:${parameters.partition ?? ''}:amplifyuibuilder:${parameters.region}:${parameters.account}:app/${parameters.appId}/environment/${parameters.environmentName}/codegen-jobs/${parameters.id}`
}

export interface ComponentResourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
  environmentName: string
  id: string
}
export type ComponentResourceArn = `arn:${string}:amplifyuibuilder:${string}:${string}:app/${string}/environment/${string}/components/${string}`
export function componentResourceArn(parameters: ComponentResourceArnParameters): ComponentResourceArn {
  return `arn:${parameters.partition ?? ''}:amplifyuibuilder:${parameters.region}:${parameters.account}:app/${parameters.appId}/environment/${parameters.environmentName}/components/${parameters.id}`
}

export interface FormResourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
  environmentName: string
  id: string
}
export type FormResourceArn = `arn:${string}:amplifyuibuilder:${string}:${string}:app/${string}/environment/${string}/forms/${string}`
export function formResourceArn(parameters: FormResourceArnParameters): FormResourceArn {
  return `arn:${parameters.partition ?? ''}:amplifyuibuilder:${parameters.region}:${parameters.account}:app/${parameters.appId}/environment/${parameters.environmentName}/forms/${parameters.id}`
}

export interface ThemeResourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
  environmentName: string
  id: string
}
export type ThemeResourceArn = `arn:${string}:amplifyuibuilder:${string}:${string}:app/${string}/environment/${string}/themes/${string}`
export function themeResourceArn(parameters: ThemeResourceArnParameters): ThemeResourceArn {
  return `arn:${parameters.partition ?? ''}:amplifyuibuilder:${parameters.region}:${parameters.account}:app/${parameters.appId}/environment/${parameters.environmentName}/themes/${parameters.id}`
}