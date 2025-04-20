import { Command } from '@effect/cli'
import { FetchHttpClient } from '@effect/platform'
import { NodeContext, NodeRuntime } from '@effect/platform-node'
import { Effect, HashSet, Sink, Stream } from 'effect'
import pkg from '../package.json' with { type: 'json' }
import { writeArnPackage } from './arn.js'
import { writeIamPackage } from './iam.js'
import { PackagesBasePath } from './shared/fs.js'

const cli = Command.run(
  Command.make('generate', {}, () =>
    Effect.all([writeArnPackage]).pipe(Effect.asVoid),
  ),
  { name: pkg.name, version: pkg.version },
)

Effect.suspend(() => cli(process.argv)).pipe(
  Effect.provide(PackagesBasePath.layer),
  Effect.provide(NodeContext.layer),
  Effect.provide(FetchHttpClient.layer),
  Effect.scoped,
  NodeRuntime.runMain,
)
