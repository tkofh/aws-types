import { fileURLToPath } from 'node:url'
import { FileSystem, Path } from '@effect/platform'
import { Schema } from '@effect/schema'
import { Effect, Stream } from 'effect'

export const Resource = Schema.Struct({
  arn: Schema.String,
  conditionKeys: Schema.Array(Schema.String).pipe(Schema.optional),
  resource: Schema.String,
})

export type Resource = Schema.Schema.Type<typeof Resource>

export const PrivilegeResourceType = Schema.Struct({
  condition_keys: Schema.Array(Schema.String),
  dependent_actions: Schema.Array(Schema.String),
  resource_type: Schema.String,
})

export type PrivilegeResourceType = Schema.Schema.Type<
  typeof PrivilegeResourceType
>

export const Privilege = Schema.Struct({
  access_level: Schema.String,
  description: Schema.String,
  privilege: Schema.String,
  resource_types: Schema.Array(PrivilegeResourceType),
})

export type Privilege = Schema.Schema.Type<typeof Privilege>

export const Condition = Schema.Struct({
  condition: Schema.String,
  description: Schema.String,
  type: Schema.String,
})

export type Condition = Schema.Schema.Type<typeof Condition>

export const Service = Schema.Struct({
  conditions: Schema.Array(Condition),
  prefix: Schema.String,
  privileges: Schema.Array(Privilege),
  resources: Schema.Array(Resource),
  service_name: Schema.String,
})

export type Service = Schema.Schema.Type<typeof Service>

export const IamData = Schema.parseJson(Schema.Array(Service))

export const data = Stream.fromIterableEffect(
  Effect.all([FileSystem.FileSystem, Path.Path]).pipe(
    Effect.flatMap(([fs, path]) =>
      fs.readFileString(
        path.resolve(
          path.dirname(fileURLToPath(import.meta.url)),
          './data.json',
        ),
      ),
    ),
    Effect.flatMap(Schema.decodeUnknown(IamData)),
  ),
)
