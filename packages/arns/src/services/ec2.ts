import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ElasticIpArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly allocationId: string
}
class ElasticIpArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'elastic-ip',
  `arn:${string}:ec2:${string}:${string}:elastic-ip/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'elastic-ip' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly allocationId: string
  constructor(parameters: ElasticIpArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.allocationId = parameters.allocationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:elastic-ip/${this.allocationId}` as const
  }
}
export type { ElasticIpArn }
export function elasticIpArn<Partition extends ArnPartition = 'aws'>(
  parameters: ElasticIpArnParameters<Partition>,
) {
  return new ElasticIpArn<Partition>(parameters)
}

export interface CapacityReservationFleetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly capacityReservationFleetId: string
}
class CapacityReservationFleetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'capacity-reservation-fleet',
  `arn:${string}:ec2:${string}:${string}:capacity-reservation-fleet/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'capacity-reservation-fleet' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly capacityReservationFleetId: string
  constructor(parameters: CapacityReservationFleetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.capacityReservationFleetId = parameters.capacityReservationFleetId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:capacity-reservation-fleet/${this.capacityReservationFleetId}` as const
  }
}
export type { CapacityReservationFleetArn }
export function capacityReservationFleetArn<
  Partition extends ArnPartition = 'aws',
>(parameters: CapacityReservationFleetArnParameters<Partition>) {
  return new CapacityReservationFleetArn<Partition>(parameters)
}

export interface CapacityReservationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly capacityReservationId: string
}
class CapacityReservationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'capacity-reservation',
  `arn:${string}:ec2:${string}:${string}:capacity-reservation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'capacity-reservation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly capacityReservationId: string
  constructor(parameters: CapacityReservationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.capacityReservationId = parameters.capacityReservationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:capacity-reservation/${this.capacityReservationId}` as const
  }
}
export type { CapacityReservationArn }
export function capacityReservationArn<Partition extends ArnPartition = 'aws'>(
  parameters: CapacityReservationArnParameters<Partition>,
) {
  return new CapacityReservationArn<Partition>(parameters)
}

export interface CarrierGatewayArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly carrierGatewayId: string
}
class CarrierGatewayArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'carrier-gateway',
  `arn:${string}:ec2:${string}:${string}:carrier-gateway/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'carrier-gateway' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly carrierGatewayId: string
  constructor(parameters: CarrierGatewayArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.carrierGatewayId = parameters.carrierGatewayId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:carrier-gateway/${this.carrierGatewayId}` as const
  }
}
export type { CarrierGatewayArn }
export function carrierGatewayArn<Partition extends ArnPartition = 'aws'>(
  parameters: CarrierGatewayArnParameters<Partition>,
) {
  return new CarrierGatewayArn<Partition>(parameters)
}

export interface CertificateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly certificateId: string
}
class CertificateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'certificate',
  `arn:${string}:acm:${string}:${string}:certificate/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'certificate' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly certificateId: string
  constructor(parameters: CertificateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.certificateId = parameters.certificateId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:acm:${this.region}:${this.account}:certificate/${this.certificateId}` as const
  }
}
export type { CertificateArn }
export function certificateArn<Partition extends ArnPartition = 'aws'>(
  parameters: CertificateArnParameters<Partition>,
) {
  return new CertificateArn<Partition>(parameters)
}

export interface ClientVpnEndpointArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clientVpnEndpointId: string
}
class ClientVpnEndpointArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'client-vpn-endpoint',
  `arn:${string}:ec2:${string}:${string}:client-vpn-endpoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'client-vpn-endpoint' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clientVpnEndpointId: string
  constructor(parameters: ClientVpnEndpointArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clientVpnEndpointId = parameters.clientVpnEndpointId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:client-vpn-endpoint/${this.clientVpnEndpointId}` as const
  }
}
export type { ClientVpnEndpointArn }
export function clientVpnEndpointArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClientVpnEndpointArnParameters<Partition>,
) {
  return new ClientVpnEndpointArn<Partition>(parameters)
}

export interface CustomerGatewayArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly customerGatewayId: string
}
class CustomerGatewayArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'customer-gateway',
  `arn:${string}:ec2:${string}:${string}:customer-gateway/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'customer-gateway' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly customerGatewayId: string
  constructor(parameters: CustomerGatewayArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.customerGatewayId = parameters.customerGatewayId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:customer-gateway/${this.customerGatewayId}` as const
  }
}
export type { CustomerGatewayArn }
export function customerGatewayArn<Partition extends ArnPartition = 'aws'>(
  parameters: CustomerGatewayArnParameters<Partition>,
) {
  return new CustomerGatewayArn<Partition>(parameters)
}

export interface DedicatedHostArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dedicatedHostId: string
}
class DedicatedHostArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'dedicated-host',
  `arn:${string}:ec2:${string}:${string}:dedicated-host/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dedicated-host' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dedicatedHostId: string
  constructor(parameters: DedicatedHostArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.dedicatedHostId = parameters.dedicatedHostId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:dedicated-host/${this.dedicatedHostId}` as const
  }
}
export type { DedicatedHostArn }
export function dedicatedHostArn<Partition extends ArnPartition = 'aws'>(
  parameters: DedicatedHostArnParameters<Partition>,
) {
  return new DedicatedHostArn<Partition>(parameters)
}

export interface DhcpOptionsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dhcpOptionsId: string
}
class DhcpOptionsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'dhcp-options',
  `arn:${string}:ec2:${string}:${string}:dhcp-options/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dhcp-options' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dhcpOptionsId: string
  constructor(parameters: DhcpOptionsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.dhcpOptionsId = parameters.dhcpOptionsId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:dhcp-options/${this.dhcpOptionsId}` as const
  }
}
export type { DhcpOptionsArn }
export function dhcpOptionsArn<Partition extends ArnPartition = 'aws'>(
  parameters: DhcpOptionsArnParameters<Partition>,
) {
  return new DhcpOptionsArn<Partition>(parameters)
}

export interface EgressOnlyInternetGatewayArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly egressOnlyInternetGatewayId: string
}
class EgressOnlyInternetGatewayArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'egress-only-internet-gateway',
  `arn:${string}:ec2:${string}:${string}:egress-only-internet-gateway/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'egress-only-internet-gateway' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly egressOnlyInternetGatewayId: string
  constructor(parameters: EgressOnlyInternetGatewayArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.egressOnlyInternetGatewayId = parameters.egressOnlyInternetGatewayId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:egress-only-internet-gateway/${this.egressOnlyInternetGatewayId}` as const
  }
}
export type { EgressOnlyInternetGatewayArn }
export function egressOnlyInternetGatewayArn<
  Partition extends ArnPartition = 'aws',
>(parameters: EgressOnlyInternetGatewayArnParameters<Partition>) {
  return new EgressOnlyInternetGatewayArn<Partition>(parameters)
}

export interface ElasticGpuArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly elasticGpuId: string
}
class ElasticGpuArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'elastic-gpu',
  `arn:${string}:ec2:${string}:${string}:elastic-gpu/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'elastic-gpu' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly elasticGpuId: string
  constructor(parameters: ElasticGpuArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.elasticGpuId = parameters.elasticGpuId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:elastic-gpu/${this.elasticGpuId}` as const
  }
}
export type { ElasticGpuArn }
export function elasticGpuArn<Partition extends ArnPartition = 'aws'>(
  parameters: ElasticGpuArnParameters<Partition>,
) {
  return new ElasticGpuArn<Partition>(parameters)
}

export interface ElasticInferenceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly acceleratorId: string
}
class ElasticInferenceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'elastic-inference',
  `arn:${string}:elastic-inference:${string}:${string}:elastic-inference-accelerator/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'elastic-inference' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly acceleratorId: string
  constructor(parameters: ElasticInferenceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.acceleratorId = parameters.acceleratorId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elastic-inference:${this.region}:${this.account}:elastic-inference-accelerator/${this.acceleratorId}` as const
  }
}
export type { ElasticInferenceArn }
export function elasticInferenceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ElasticInferenceArnParameters<Partition>,
) {
  return new ElasticInferenceArn<Partition>(parameters)
}

export interface ExportImageTaskArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly exportImageTaskId: string
}
class ExportImageTaskArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'export-image-task',
  `arn:${string}:ec2:${string}:${string}:export-image-task/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'export-image-task' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly exportImageTaskId: string
  constructor(parameters: ExportImageTaskArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.exportImageTaskId = parameters.exportImageTaskId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:export-image-task/${this.exportImageTaskId}` as const
  }
}
export type { ExportImageTaskArn }
export function exportImageTaskArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExportImageTaskArnParameters<Partition>,
) {
  return new ExportImageTaskArn<Partition>(parameters)
}

export interface ExportInstanceTaskArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly exportTaskId: string
}
class ExportInstanceTaskArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'export-instance-task',
  `arn:${string}:ec2:${string}:${string}:export-instance-task/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'export-instance-task' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly exportTaskId: string
  constructor(parameters: ExportInstanceTaskArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.exportTaskId = parameters.exportTaskId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:export-instance-task/${this.exportTaskId}` as const
  }
}
export type { ExportInstanceTaskArn }
export function exportInstanceTaskArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExportInstanceTaskArnParameters<Partition>,
) {
  return new ExportInstanceTaskArn<Partition>(parameters)
}

export interface FleetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fleetId: string
}
class FleetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'fleet',
  `arn:${string}:ec2:${string}:${string}:fleet/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'fleet' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fleetId: string
  constructor(parameters: FleetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.fleetId = parameters.fleetId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:fleet/${this.fleetId}` as const
  }
}
export type { FleetArn }
export function fleetArn<Partition extends ArnPartition = 'aws'>(
  parameters: FleetArnParameters<Partition>,
) {
  return new FleetArn<Partition>(parameters)
}

export interface FpgaImageArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fpgaImageId: string
}
class FpgaImageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'fpga-image',
  `arn:${string}:ec2:${string}:${string}:fpga-image/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'fpga-image' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fpgaImageId: string
  constructor(parameters: FpgaImageArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.fpgaImageId = parameters.fpgaImageId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:fpga-image/${this.fpgaImageId}` as const
  }
}
export type { FpgaImageArn }
export function fpgaImageArn<Partition extends ArnPartition = 'aws'>(
  parameters: FpgaImageArnParameters<Partition>,
) {
  return new FpgaImageArn<Partition>(parameters)
}

export interface HostReservationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly hostReservationId: string
}
class HostReservationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'host-reservation',
  `arn:${string}:ec2:${string}:${string}:host-reservation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'host-reservation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly hostReservationId: string
  constructor(parameters: HostReservationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.hostReservationId = parameters.hostReservationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:host-reservation/${this.hostReservationId}` as const
  }
}
export type { HostReservationArn }
export function hostReservationArn<Partition extends ArnPartition = 'aws'>(
  parameters: HostReservationArnParameters<Partition>,
) {
  return new HostReservationArn<Partition>(parameters)
}

export interface ImageArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly imageId: string
}
class ImageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'image',
  `arn:${string}:ec2:${string}::image/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'image' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly imageId: string
  constructor(parameters: ImageArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.imageId = parameters.imageId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}::image/${this.imageId}` as const
  }
}
export type { ImageArn }
export function imageArn<Partition extends ArnPartition = 'aws'>(
  parameters: ImageArnParameters<Partition>,
) {
  return new ImageArn<Partition>(parameters)
}

export interface ImportImageTaskArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly importImageTaskId: string
}
class ImportImageTaskArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'import-image-task',
  `arn:${string}:ec2:${string}:${string}:import-image-task/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'import-image-task' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly importImageTaskId: string
  constructor(parameters: ImportImageTaskArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.importImageTaskId = parameters.importImageTaskId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:import-image-task/${this.importImageTaskId}` as const
  }
}
export type { ImportImageTaskArn }
export function importImageTaskArn<Partition extends ArnPartition = 'aws'>(
  parameters: ImportImageTaskArnParameters<Partition>,
) {
  return new ImportImageTaskArn<Partition>(parameters)
}

export interface ImportSnapshotTaskArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly importSnapshotTaskId: string
}
class ImportSnapshotTaskArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'import-snapshot-task',
  `arn:${string}:ec2:${string}:${string}:import-snapshot-task/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'import-snapshot-task' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly importSnapshotTaskId: string
  constructor(parameters: ImportSnapshotTaskArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.importSnapshotTaskId = parameters.importSnapshotTaskId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:import-snapshot-task/${this.importSnapshotTaskId}` as const
  }
}
export type { ImportSnapshotTaskArn }
export function importSnapshotTaskArn<Partition extends ArnPartition = 'aws'>(
  parameters: ImportSnapshotTaskArnParameters<Partition>,
) {
  return new ImportSnapshotTaskArn<Partition>(parameters)
}

export interface InstanceConnectEndpointArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceConnectEndpointId: string
}
class InstanceConnectEndpointArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'instance-connect-endpoint',
  `arn:${string}:ec2:${string}:${string}:instance-connect-endpoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'instance-connect-endpoint' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceConnectEndpointId: string
  constructor(parameters: InstanceConnectEndpointArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceConnectEndpointId = parameters.instanceConnectEndpointId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:instance-connect-endpoint/${this.instanceConnectEndpointId}` as const
  }
}
export type { InstanceConnectEndpointArn }
export function instanceConnectEndpointArn<
  Partition extends ArnPartition = 'aws',
>(parameters: InstanceConnectEndpointArnParameters<Partition>) {
  return new InstanceConnectEndpointArn<Partition>(parameters)
}

export interface InstanceEventWindowArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceEventWindowId: string
}
class InstanceEventWindowArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'instance-event-window',
  `arn:${string}:ec2:${string}:${string}:instance-event-window/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'instance-event-window' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceEventWindowId: string
  constructor(parameters: InstanceEventWindowArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceEventWindowId = parameters.instanceEventWindowId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:instance-event-window/${this.instanceEventWindowId}` as const
  }
}
export type { InstanceEventWindowArn }
export function instanceEventWindowArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceEventWindowArnParameters<Partition>,
) {
  return new InstanceEventWindowArn<Partition>(parameters)
}

export interface InstanceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
}
class InstanceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'instance',
  `arn:${string}:ec2:${string}:${string}:instance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'instance' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  constructor(parameters: InstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:instance/${this.instanceId}` as const
  }
}
export type { InstanceArn }
export function instanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceArnParameters<Partition>,
) {
  return new InstanceArn<Partition>(parameters)
}

export interface InternetGatewayArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly internetGatewayId: string
}
class InternetGatewayArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'internet-gateway',
  `arn:${string}:ec2:${string}:${string}:internet-gateway/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'internet-gateway' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly internetGatewayId: string
  constructor(parameters: InternetGatewayArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.internetGatewayId = parameters.internetGatewayId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:internet-gateway/${this.internetGatewayId}` as const
  }
}
export type { InternetGatewayArn }
export function internetGatewayArn<Partition extends ArnPartition = 'aws'>(
  parameters: InternetGatewayArnParameters<Partition>,
) {
  return new InternetGatewayArn<Partition>(parameters)
}

export interface IpamExternalResourceVerificationTokenArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly ipamExternalResourceVerificationTokenId: string
}
class IpamExternalResourceVerificationTokenArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ipam-external-resource-verification-token',
  `arn:${string}:ec2::${string}:ipam-external-resource-verification-token/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'ipam-external-resource-verification-token' as const
  readonly partition: Partition
  readonly account: string
  readonly ipamExternalResourceVerificationTokenId: string
  constructor(
    parameters: IpamExternalResourceVerificationTokenArnParameters<Partition>,
  ) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.ipamExternalResourceVerificationTokenId =
      parameters.ipamExternalResourceVerificationTokenId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2::${this.account}:ipam-external-resource-verification-token/${this.ipamExternalResourceVerificationTokenId}` as const
  }
}
export type { IpamExternalResourceVerificationTokenArn }
export function ipamExternalResourceVerificationTokenArn<
  Partition extends ArnPartition = 'aws',
>(parameters: IpamExternalResourceVerificationTokenArnParameters<Partition>) {
  return new IpamExternalResourceVerificationTokenArn<Partition>(parameters)
}

export interface IpamArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly ipamId: string
}
class IpamArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ipam',
  `arn:${string}:ec2::${string}:ipam/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ipam' as const
  readonly partition: Partition
  readonly account: string
  readonly ipamId: string
  constructor(parameters: IpamArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.ipamId = parameters.ipamId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2::${this.account}:ipam/${this.ipamId}` as const
  }
}
export type { IpamArn }
export function ipamArn<Partition extends ArnPartition = 'aws'>(
  parameters: IpamArnParameters<Partition>,
) {
  return new IpamArn<Partition>(parameters)
}

export interface IpamPoolArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly ipamPoolId: string
}
class IpamPoolArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ipam-pool',
  `arn:${string}:ec2::${string}:ipam-pool/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ipam-pool' as const
  readonly partition: Partition
  readonly account: string
  readonly ipamPoolId: string
  constructor(parameters: IpamPoolArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.ipamPoolId = parameters.ipamPoolId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2::${this.account}:ipam-pool/${this.ipamPoolId}` as const
  }
}
export type { IpamPoolArn }
export function ipamPoolArn<Partition extends ArnPartition = 'aws'>(
  parameters: IpamPoolArnParameters<Partition>,
) {
  return new IpamPoolArn<Partition>(parameters)
}

export interface IpamResourceDiscoveryAssociationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly ipamResourceDiscoveryAssociationId: string
}
class IpamResourceDiscoveryAssociationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ipam-resource-discovery-association',
  `arn:${string}:ec2::${string}:ipam-resource-discovery-association/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'ipam-resource-discovery-association' as const
  readonly partition: Partition
  readonly account: string
  readonly ipamResourceDiscoveryAssociationId: string
  constructor(
    parameters: IpamResourceDiscoveryAssociationArnParameters<Partition>,
  ) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.ipamResourceDiscoveryAssociationId =
      parameters.ipamResourceDiscoveryAssociationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2::${this.account}:ipam-resource-discovery-association/${this.ipamResourceDiscoveryAssociationId}` as const
  }
}
export type { IpamResourceDiscoveryAssociationArn }
export function ipamResourceDiscoveryAssociationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: IpamResourceDiscoveryAssociationArnParameters<Partition>) {
  return new IpamResourceDiscoveryAssociationArn<Partition>(parameters)
}

export interface IpamResourceDiscoveryArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly ipamResourceDiscoveryId: string
}
class IpamResourceDiscoveryArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ipam-resource-discovery',
  `arn:${string}:ec2::${string}:ipam-resource-discovery/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ipam-resource-discovery' as const
  readonly partition: Partition
  readonly account: string
  readonly ipamResourceDiscoveryId: string
  constructor(parameters: IpamResourceDiscoveryArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.ipamResourceDiscoveryId = parameters.ipamResourceDiscoveryId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2::${this.account}:ipam-resource-discovery/${this.ipamResourceDiscoveryId}` as const
  }
}
export type { IpamResourceDiscoveryArn }
export function ipamResourceDiscoveryArn<
  Partition extends ArnPartition = 'aws',
>(parameters: IpamResourceDiscoveryArnParameters<Partition>) {
  return new IpamResourceDiscoveryArn<Partition>(parameters)
}

export interface IpamScopeArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly ipamScopeId: string
}
class IpamScopeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ipam-scope',
  `arn:${string}:ec2::${string}:ipam-scope/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ipam-scope' as const
  readonly partition: Partition
  readonly account: string
  readonly ipamScopeId: string
  constructor(parameters: IpamScopeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.ipamScopeId = parameters.ipamScopeId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2::${this.account}:ipam-scope/${this.ipamScopeId}` as const
  }
}
export type { IpamScopeArn }
export function ipamScopeArn<Partition extends ArnPartition = 'aws'>(
  parameters: IpamScopeArnParameters<Partition>,
) {
  return new IpamScopeArn<Partition>(parameters)
}

export interface CoipPoolArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly ipv4PoolCoipId: string
}
class CoipPoolArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'coip-pool',
  `arn:${string}:ec2:${string}:${string}:coip-pool/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'coip-pool' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly ipv4PoolCoipId: string
  constructor(parameters: CoipPoolArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.ipv4PoolCoipId = parameters.ipv4PoolCoipId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:coip-pool/${this.ipv4PoolCoipId}` as const
  }
}
export type { CoipPoolArn }
export function coipPoolArn<Partition extends ArnPartition = 'aws'>(
  parameters: CoipPoolArnParameters<Partition>,
) {
  return new CoipPoolArn<Partition>(parameters)
}

export interface Ipv4poolEc2ArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly ipv4PoolEc2Id: string
}
class Ipv4poolEc2Arn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ipv4pool-ec2',
  `arn:${string}:ec2:${string}:${string}:ipv4pool-ec2/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ipv4pool-ec2' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly ipv4PoolEc2Id: string
  constructor(parameters: Ipv4poolEc2ArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.ipv4PoolEc2Id = parameters.ipv4PoolEc2Id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:ipv4pool-ec2/${this.ipv4PoolEc2Id}` as const
  }
}
export type { Ipv4poolEc2Arn }
export function ipv4poolEc2Arn<Partition extends ArnPartition = 'aws'>(
  parameters: Ipv4poolEc2ArnParameters<Partition>,
) {
  return new Ipv4poolEc2Arn<Partition>(parameters)
}

export interface Ipv6poolEc2ArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly ipv6PoolEc2Id: string
}
class Ipv6poolEc2Arn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ipv6pool-ec2',
  `arn:${string}:ec2:${string}:${string}:ipv6pool-ec2/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ipv6pool-ec2' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly ipv6PoolEc2Id: string
  constructor(parameters: Ipv6poolEc2ArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.ipv6PoolEc2Id = parameters.ipv6PoolEc2Id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:ipv6pool-ec2/${this.ipv6PoolEc2Id}` as const
  }
}
export type { Ipv6poolEc2Arn }
export function ipv6poolEc2Arn<Partition extends ArnPartition = 'aws'>(
  parameters: Ipv6poolEc2ArnParameters<Partition>,
) {
  return new Ipv6poolEc2Arn<Partition>(parameters)
}

export interface KeyPairArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly keyPairName: string
}
class KeyPairArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'key-pair',
  `arn:${string}:ec2:${string}:${string}:key-pair/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'key-pair' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly keyPairName: string
  constructor(parameters: KeyPairArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.keyPairName = parameters.keyPairName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:key-pair/${this.keyPairName}` as const
  }
}
export type { KeyPairArn }
export function keyPairArn<Partition extends ArnPartition = 'aws'>(
  parameters: KeyPairArnParameters<Partition>,
) {
  return new KeyPairArn<Partition>(parameters)
}

export interface LaunchTemplateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly launchTemplateId: string
}
class LaunchTemplateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'launch-template',
  `arn:${string}:ec2:${string}:${string}:launch-template/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'launch-template' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly launchTemplateId: string
  constructor(parameters: LaunchTemplateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.launchTemplateId = parameters.launchTemplateId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:launch-template/${this.launchTemplateId}` as const
  }
}
export type { LaunchTemplateArn }
export function launchTemplateArn<Partition extends ArnPartition = 'aws'>(
  parameters: LaunchTemplateArnParameters<Partition>,
) {
  return new LaunchTemplateArn<Partition>(parameters)
}

export interface LicenseConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly licenseConfigurationId: string
}
class LicenseConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'license-configuration',
  `arn:${string}:license-manager:${string}:${string}:license-configuration:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'license-configuration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly licenseConfigurationId: string
  constructor(parameters: LicenseConfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.licenseConfigurationId = parameters.licenseConfigurationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:license-manager:${this.region}:${this.account}:license-configuration:${this.licenseConfigurationId}` as const
  }
}
export type { LicenseConfigurationArn }
export function licenseConfigurationArn<Partition extends ArnPartition = 'aws'>(
  parameters: LicenseConfigurationArnParameters<Partition>,
) {
  return new LicenseConfigurationArn<Partition>(parameters)
}

export interface LocalGatewayArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly localGatewayId: string
}
class LocalGatewayArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'local-gateway',
  `arn:${string}:ec2:${string}:${string}:local-gateway/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'local-gateway' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly localGatewayId: string
  constructor(parameters: LocalGatewayArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.localGatewayId = parameters.localGatewayId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:local-gateway/${this.localGatewayId}` as const
  }
}
export type { LocalGatewayArn }
export function localGatewayArn<Partition extends ArnPartition = 'aws'>(
  parameters: LocalGatewayArnParameters<Partition>,
) {
  return new LocalGatewayArn<Partition>(parameters)
}

export interface LocalGatewayRouteTableVirtualInterfaceGroupAssociationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly localGatewayRouteTableVirtualInterfaceGroupAssociationId: string
}
class LocalGatewayRouteTableVirtualInterfaceGroupAssociationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'local-gateway-route-table-virtual-interface-group-association',
  `arn:${string}:ec2:${string}:${string}:local-gateway-route-table-virtual-interface-group-association/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'local-gateway-route-table-virtual-interface-group-association' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly localGatewayRouteTableVirtualInterfaceGroupAssociationId: string
  constructor(
    parameters: LocalGatewayRouteTableVirtualInterfaceGroupAssociationArnParameters<Partition>,
  ) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.localGatewayRouteTableVirtualInterfaceGroupAssociationId =
      parameters.localGatewayRouteTableVirtualInterfaceGroupAssociationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:local-gateway-route-table-virtual-interface-group-association/${this.localGatewayRouteTableVirtualInterfaceGroupAssociationId}` as const
  }
}
export type { LocalGatewayRouteTableVirtualInterfaceGroupAssociationArn }
export function localGatewayRouteTableVirtualInterfaceGroupAssociationArn<
  Partition extends ArnPartition = 'aws',
>(
  parameters: LocalGatewayRouteTableVirtualInterfaceGroupAssociationArnParameters<Partition>,
) {
  return new LocalGatewayRouteTableVirtualInterfaceGroupAssociationArn<Partition>(
    parameters,
  )
}

export interface LocalGatewayRouteTableVpcAssociationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly localGatewayRouteTableVpcAssociationId: string
}
class LocalGatewayRouteTableVpcAssociationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'local-gateway-route-table-vpc-association',
  `arn:${string}:ec2:${string}:${string}:local-gateway-route-table-vpc-association/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'local-gateway-route-table-vpc-association' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly localGatewayRouteTableVpcAssociationId: string
  constructor(
    parameters: LocalGatewayRouteTableVpcAssociationArnParameters<Partition>,
  ) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.localGatewayRouteTableVpcAssociationId =
      parameters.localGatewayRouteTableVpcAssociationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:local-gateway-route-table-vpc-association/${this.localGatewayRouteTableVpcAssociationId}` as const
  }
}
export type { LocalGatewayRouteTableVpcAssociationArn }
export function localGatewayRouteTableVpcAssociationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: LocalGatewayRouteTableVpcAssociationArnParameters<Partition>) {
  return new LocalGatewayRouteTableVpcAssociationArn<Partition>(parameters)
}

export interface LocalGatewayRouteTableArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly localGatewayRouteTableId: string
}
class LocalGatewayRouteTableArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'local-gateway-route-table',
  `arn:${string}:ec2:${string}:${string}:local-gateway-route-table/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'local-gateway-route-table' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly localGatewayRouteTableId: string
  constructor(parameters: LocalGatewayRouteTableArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.localGatewayRouteTableId = parameters.localGatewayRouteTableId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:local-gateway-route-table/${this.localGatewayRouteTableId}` as const
  }
}
export type { LocalGatewayRouteTableArn }
export function localGatewayRouteTableArn<
  Partition extends ArnPartition = 'aws',
>(parameters: LocalGatewayRouteTableArnParameters<Partition>) {
  return new LocalGatewayRouteTableArn<Partition>(parameters)
}

export interface LocalGatewayVirtualInterfaceGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly localGatewayVirtualInterfaceGroupId: string
}
class LocalGatewayVirtualInterfaceGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'local-gateway-virtual-interface-group',
  `arn:${string}:ec2:${string}:${string}:local-gateway-virtual-interface-group/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'local-gateway-virtual-interface-group' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly localGatewayVirtualInterfaceGroupId: string
  constructor(
    parameters: LocalGatewayVirtualInterfaceGroupArnParameters<Partition>,
  ) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.localGatewayVirtualInterfaceGroupId =
      parameters.localGatewayVirtualInterfaceGroupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:local-gateway-virtual-interface-group/${this.localGatewayVirtualInterfaceGroupId}` as const
  }
}
export type { LocalGatewayVirtualInterfaceGroupArn }
export function localGatewayVirtualInterfaceGroupArn<
  Partition extends ArnPartition = 'aws',
>(parameters: LocalGatewayVirtualInterfaceGroupArnParameters<Partition>) {
  return new LocalGatewayVirtualInterfaceGroupArn<Partition>(parameters)
}

export interface LocalGatewayVirtualInterfaceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly localGatewayVirtualInterfaceId: string
}
class LocalGatewayVirtualInterfaceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'local-gateway-virtual-interface',
  `arn:${string}:ec2:${string}:${string}:local-gateway-virtual-interface/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'local-gateway-virtual-interface' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly localGatewayVirtualInterfaceId: string
  constructor(
    parameters: LocalGatewayVirtualInterfaceArnParameters<Partition>,
  ) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.localGatewayVirtualInterfaceId =
      parameters.localGatewayVirtualInterfaceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:local-gateway-virtual-interface/${this.localGatewayVirtualInterfaceId}` as const
  }
}
export type { LocalGatewayVirtualInterfaceArn }
export function localGatewayVirtualInterfaceArn<
  Partition extends ArnPartition = 'aws',
>(parameters: LocalGatewayVirtualInterfaceArnParameters<Partition>) {
  return new LocalGatewayVirtualInterfaceArn<Partition>(parameters)
}

export interface NatGatewayArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly natGatewayId: string
}
class NatGatewayArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'natgateway',
  `arn:${string}:ec2:${string}:${string}:natgateway/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'natgateway' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly natGatewayId: string
  constructor(parameters: NatGatewayArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.natGatewayId = parameters.natGatewayId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:natgateway/${this.natGatewayId}` as const
  }
}
export type { NatGatewayArn }
export function natGatewayArn<Partition extends ArnPartition = 'aws'>(
  parameters: NatGatewayArnParameters<Partition>,
) {
  return new NatGatewayArn<Partition>(parameters)
}

export interface NetworkAclArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly naclId: string
}
class NetworkAclArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'network-acl',
  `arn:${string}:ec2:${string}:${string}:network-acl/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'network-acl' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly naclId: string
  constructor(parameters: NetworkAclArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.naclId = parameters.naclId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:network-acl/${this.naclId}` as const
  }
}
export type { NetworkAclArn }
export function networkAclArn<Partition extends ArnPartition = 'aws'>(
  parameters: NetworkAclArnParameters<Partition>,
) {
  return new NetworkAclArn<Partition>(parameters)
}

export interface NetworkInsightsAccessScopeAnalysisArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkInsightsAccessScopeAnalysisId: string
}
class NetworkInsightsAccessScopeAnalysisArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'network-insights-access-scope-analysis',
  `arn:${string}:ec2:${string}:${string}:network-insights-access-scope-analysis/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'network-insights-access-scope-analysis' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkInsightsAccessScopeAnalysisId: string
  constructor(
    parameters: NetworkInsightsAccessScopeAnalysisArnParameters<Partition>,
  ) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.networkInsightsAccessScopeAnalysisId =
      parameters.networkInsightsAccessScopeAnalysisId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:network-insights-access-scope-analysis/${this.networkInsightsAccessScopeAnalysisId}` as const
  }
}
export type { NetworkInsightsAccessScopeAnalysisArn }
export function networkInsightsAccessScopeAnalysisArn<
  Partition extends ArnPartition = 'aws',
>(parameters: NetworkInsightsAccessScopeAnalysisArnParameters<Partition>) {
  return new NetworkInsightsAccessScopeAnalysisArn<Partition>(parameters)
}

export interface NetworkInsightsAccessScopeArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkInsightsAccessScopeId: string
}
class NetworkInsightsAccessScopeArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'network-insights-access-scope',
  `arn:${string}:ec2:${string}:${string}:network-insights-access-scope/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'network-insights-access-scope' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkInsightsAccessScopeId: string
  constructor(parameters: NetworkInsightsAccessScopeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.networkInsightsAccessScopeId = parameters.networkInsightsAccessScopeId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:network-insights-access-scope/${this.networkInsightsAccessScopeId}` as const
  }
}
export type { NetworkInsightsAccessScopeArn }
export function networkInsightsAccessScopeArn<
  Partition extends ArnPartition = 'aws',
>(parameters: NetworkInsightsAccessScopeArnParameters<Partition>) {
  return new NetworkInsightsAccessScopeArn<Partition>(parameters)
}

export interface NetworkInsightsAnalysisArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkInsightsAnalysisId: string
}
class NetworkInsightsAnalysisArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'network-insights-analysis',
  `arn:${string}:ec2:${string}:${string}:network-insights-analysis/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'network-insights-analysis' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkInsightsAnalysisId: string
  constructor(parameters: NetworkInsightsAnalysisArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.networkInsightsAnalysisId = parameters.networkInsightsAnalysisId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:network-insights-analysis/${this.networkInsightsAnalysisId}` as const
  }
}
export type { NetworkInsightsAnalysisArn }
export function networkInsightsAnalysisArn<
  Partition extends ArnPartition = 'aws',
>(parameters: NetworkInsightsAnalysisArnParameters<Partition>) {
  return new NetworkInsightsAnalysisArn<Partition>(parameters)
}

export interface NetworkInsightsPathArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkInsightsPathId: string
}
class NetworkInsightsPathArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'network-insights-path',
  `arn:${string}:ec2:${string}:${string}:network-insights-path/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'network-insights-path' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkInsightsPathId: string
  constructor(parameters: NetworkInsightsPathArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.networkInsightsPathId = parameters.networkInsightsPathId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:network-insights-path/${this.networkInsightsPathId}` as const
  }
}
export type { NetworkInsightsPathArn }
export function networkInsightsPathArn<Partition extends ArnPartition = 'aws'>(
  parameters: NetworkInsightsPathArnParameters<Partition>,
) {
  return new NetworkInsightsPathArn<Partition>(parameters)
}

export interface NetworkInterfaceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkInterfaceId: string
}
class NetworkInterfaceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'network-interface',
  `arn:${string}:ec2:${string}:${string}:network-interface/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'network-interface' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkInterfaceId: string
  constructor(parameters: NetworkInterfaceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.networkInterfaceId = parameters.networkInterfaceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:network-interface/${this.networkInterfaceId}` as const
  }
}
export type { NetworkInterfaceArn }
export function networkInterfaceArn<Partition extends ArnPartition = 'aws'>(
  parameters: NetworkInterfaceArnParameters<Partition>,
) {
  return new NetworkInterfaceArn<Partition>(parameters)
}

export interface PlacementGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly placementGroupName: string
}
class PlacementGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'placement-group',
  `arn:${string}:ec2:${string}:${string}:placement-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'placement-group' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly placementGroupName: string
  constructor(parameters: PlacementGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.placementGroupName = parameters.placementGroupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:placement-group/${this.placementGroupName}` as const
  }
}
export type { PlacementGroupArn }
export function placementGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: PlacementGroupArnParameters<Partition>,
) {
  return new PlacementGroupArn<Partition>(parameters)
}

export interface PrefixListArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly prefixListId: string
}
class PrefixListArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'prefix-list',
  `arn:${string}:ec2:${string}:${string}:prefix-list/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'prefix-list' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly prefixListId: string
  constructor(parameters: PrefixListArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.prefixListId = parameters.prefixListId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:prefix-list/${this.prefixListId}` as const
  }
}
export type { PrefixListArn }
export function prefixListArn<Partition extends ArnPartition = 'aws'>(
  parameters: PrefixListArnParameters<Partition>,
) {
  return new PrefixListArn<Partition>(parameters)
}

export interface ReplaceRootVolumeTaskArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly replaceRootVolumeTaskId: string
}
class ReplaceRootVolumeTaskArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'replace-root-volume-task',
  `arn:${string}:ec2:${string}:${string}:replace-root-volume-task/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'replace-root-volume-task' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly replaceRootVolumeTaskId: string
  constructor(parameters: ReplaceRootVolumeTaskArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.replaceRootVolumeTaskId = parameters.replaceRootVolumeTaskId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:replace-root-volume-task/${this.replaceRootVolumeTaskId}` as const
  }
}
export type { ReplaceRootVolumeTaskArn }
export function replaceRootVolumeTaskArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ReplaceRootVolumeTaskArnParameters<Partition>) {
  return new ReplaceRootVolumeTaskArn<Partition>(parameters)
}

export interface ReservedInstancesArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly reservationId: string
}
class ReservedInstancesArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'reserved-instances',
  `arn:${string}:ec2:${string}:${string}:reserved-instances/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'reserved-instances' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly reservationId: string
  constructor(parameters: ReservedInstancesArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.reservationId = parameters.reservationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:reserved-instances/${this.reservationId}` as const
  }
}
export type { ReservedInstancesArn }
export function reservedInstancesArn<Partition extends ArnPartition = 'aws'>(
  parameters: ReservedInstancesArnParameters<Partition>,
) {
  return new ReservedInstancesArn<Partition>(parameters)
}

export interface GroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly groupName: string
}
class GroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'group',
  `arn:${string}:resource-groups:${string}:${string}:group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'group' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly groupName: string
  constructor(parameters: GroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.groupName = parameters.groupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:resource-groups:${this.region}:${this.account}:group/${this.groupName}` as const
  }
}
export type { GroupArn }
export function groupArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupArnParameters<Partition>,
) {
  return new GroupArn<Partition>(parameters)
}

export interface RoleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly roleNameWithPath: string
}
class RoleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'role',
  `arn:${string}:iam::${string}:role/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'role' as const
  readonly partition: Partition
  readonly account: string
  readonly roleNameWithPath: string
  constructor(parameters: RoleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.roleNameWithPath = parameters.roleNameWithPath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:role/${this.roleNameWithPath}` as const
  }
}
export type { RoleArn }
export function roleArn<Partition extends ArnPartition = 'aws'>(
  parameters: RoleArnParameters<Partition>,
) {
  return new RoleArn<Partition>(parameters)
}

export interface RouteTableArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly routeTableId: string
}
class RouteTableArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'route-table',
  `arn:${string}:ec2:${string}:${string}:route-table/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'route-table' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly routeTableId: string
  constructor(parameters: RouteTableArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.routeTableId = parameters.routeTableId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:route-table/${this.routeTableId}` as const
  }
}
export type { RouteTableArn }
export function routeTableArn<Partition extends ArnPartition = 'aws'>(
  parameters: RouteTableArnParameters<Partition>,
) {
  return new RouteTableArn<Partition>(parameters)
}

export interface SecurityGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly securityGroupId: string
}
class SecurityGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'security-group',
  `arn:${string}:ec2:${string}:${string}:security-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'security-group' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly securityGroupId: string
  constructor(parameters: SecurityGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.securityGroupId = parameters.securityGroupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:security-group/${this.securityGroupId}` as const
  }
}
export type { SecurityGroupArn }
export function securityGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: SecurityGroupArnParameters<Partition>,
) {
  return new SecurityGroupArn<Partition>(parameters)
}

export interface SecurityGroupRuleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly securityGroupRuleId: string
}
class SecurityGroupRuleArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'security-group-rule',
  `arn:${string}:ec2:${string}:${string}:security-group-rule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'security-group-rule' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly securityGroupRuleId: string
  constructor(parameters: SecurityGroupRuleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.securityGroupRuleId = parameters.securityGroupRuleId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:security-group-rule/${this.securityGroupRuleId}` as const
  }
}
export type { SecurityGroupRuleArn }
export function securityGroupRuleArn<Partition extends ArnPartition = 'aws'>(
  parameters: SecurityGroupRuleArnParameters<Partition>,
) {
  return new SecurityGroupRuleArn<Partition>(parameters)
}

export interface SnapshotArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly snapshotId: string
}
class SnapshotArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'snapshot',
  `arn:${string}:ec2:${string}::snapshot/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'snapshot' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly snapshotId: string
  constructor(parameters: SnapshotArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.snapshotId = parameters.snapshotId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}::snapshot/${this.snapshotId}` as const
  }
}
export type { SnapshotArn }
export function snapshotArn<Partition extends ArnPartition = 'aws'>(
  parameters: SnapshotArnParameters<Partition>,
) {
  return new SnapshotArn<Partition>(parameters)
}

export interface SpotFleetRequestArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly spotFleetRequestId: string
}
class SpotFleetRequestArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'spot-fleet-request',
  `arn:${string}:ec2:${string}:${string}:spot-fleet-request/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'spot-fleet-request' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly spotFleetRequestId: string
  constructor(parameters: SpotFleetRequestArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.spotFleetRequestId = parameters.spotFleetRequestId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:spot-fleet-request/${this.spotFleetRequestId}` as const
  }
}
export type { SpotFleetRequestArn }
export function spotFleetRequestArn<Partition extends ArnPartition = 'aws'>(
  parameters: SpotFleetRequestArnParameters<Partition>,
) {
  return new SpotFleetRequestArn<Partition>(parameters)
}

export interface SpotInstancesRequestArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly spotInstanceRequestId: string
}
class SpotInstancesRequestArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'spot-instances-request',
  `arn:${string}:ec2:${string}:${string}:spot-instances-request/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'spot-instances-request' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly spotInstanceRequestId: string
  constructor(parameters: SpotInstancesRequestArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.spotInstanceRequestId = parameters.spotInstanceRequestId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:spot-instances-request/${this.spotInstanceRequestId}` as const
  }
}
export type { SpotInstancesRequestArn }
export function spotInstancesRequestArn<Partition extends ArnPartition = 'aws'>(
  parameters: SpotInstancesRequestArnParameters<Partition>,
) {
  return new SpotInstancesRequestArn<Partition>(parameters)
}

export interface SubnetCidrReservationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly subnetCidrReservationId: string
}
class SubnetCidrReservationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'subnet-cidr-reservation',
  `arn:${string}:ec2:${string}:${string}:subnet-cidr-reservation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'subnet-cidr-reservation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly subnetCidrReservationId: string
  constructor(parameters: SubnetCidrReservationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.subnetCidrReservationId = parameters.subnetCidrReservationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:subnet-cidr-reservation/${this.subnetCidrReservationId}` as const
  }
}
export type { SubnetCidrReservationArn }
export function subnetCidrReservationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: SubnetCidrReservationArnParameters<Partition>) {
  return new SubnetCidrReservationArn<Partition>(parameters)
}

export interface SubnetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly subnetId: string
}
class SubnetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'subnet',
  `arn:${string}:ec2:${string}:${string}:subnet/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'subnet' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly subnetId: string
  constructor(parameters: SubnetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.subnetId = parameters.subnetId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:subnet/${this.subnetId}` as const
  }
}
export type { SubnetArn }
export function subnetArn<Partition extends ArnPartition = 'aws'>(
  parameters: SubnetArnParameters<Partition>,
) {
  return new SubnetArn<Partition>(parameters)
}

export interface TrafficMirrorFilterArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly trafficMirrorFilterId: string
}
class TrafficMirrorFilterArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'traffic-mirror-filter',
  `arn:${string}:ec2:${string}:${string}:traffic-mirror-filter/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'traffic-mirror-filter' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly trafficMirrorFilterId: string
  constructor(parameters: TrafficMirrorFilterArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.trafficMirrorFilterId = parameters.trafficMirrorFilterId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:traffic-mirror-filter/${this.trafficMirrorFilterId}` as const
  }
}
export type { TrafficMirrorFilterArn }
export function trafficMirrorFilterArn<Partition extends ArnPartition = 'aws'>(
  parameters: TrafficMirrorFilterArnParameters<Partition>,
) {
  return new TrafficMirrorFilterArn<Partition>(parameters)
}

export interface TrafficMirrorFilterRuleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly trafficMirrorFilterRuleId: string
}
class TrafficMirrorFilterRuleArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'traffic-mirror-filter-rule',
  `arn:${string}:ec2:${string}:${string}:traffic-mirror-filter-rule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'traffic-mirror-filter-rule' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly trafficMirrorFilterRuleId: string
  constructor(parameters: TrafficMirrorFilterRuleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.trafficMirrorFilterRuleId = parameters.trafficMirrorFilterRuleId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:traffic-mirror-filter-rule/${this.trafficMirrorFilterRuleId}` as const
  }
}
export type { TrafficMirrorFilterRuleArn }
export function trafficMirrorFilterRuleArn<
  Partition extends ArnPartition = 'aws',
>(parameters: TrafficMirrorFilterRuleArnParameters<Partition>) {
  return new TrafficMirrorFilterRuleArn<Partition>(parameters)
}

export interface TrafficMirrorSessionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly trafficMirrorSessionId: string
}
class TrafficMirrorSessionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'traffic-mirror-session',
  `arn:${string}:ec2:${string}:${string}:traffic-mirror-session/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'traffic-mirror-session' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly trafficMirrorSessionId: string
  constructor(parameters: TrafficMirrorSessionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.trafficMirrorSessionId = parameters.trafficMirrorSessionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:traffic-mirror-session/${this.trafficMirrorSessionId}` as const
  }
}
export type { TrafficMirrorSessionArn }
export function trafficMirrorSessionArn<Partition extends ArnPartition = 'aws'>(
  parameters: TrafficMirrorSessionArnParameters<Partition>,
) {
  return new TrafficMirrorSessionArn<Partition>(parameters)
}

export interface TrafficMirrorTargetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly trafficMirrorTargetId: string
}
class TrafficMirrorTargetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'traffic-mirror-target',
  `arn:${string}:ec2:${string}:${string}:traffic-mirror-target/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'traffic-mirror-target' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly trafficMirrorTargetId: string
  constructor(parameters: TrafficMirrorTargetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.trafficMirrorTargetId = parameters.trafficMirrorTargetId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:traffic-mirror-target/${this.trafficMirrorTargetId}` as const
  }
}
export type { TrafficMirrorTargetArn }
export function trafficMirrorTargetArn<Partition extends ArnPartition = 'aws'>(
  parameters: TrafficMirrorTargetArnParameters<Partition>,
) {
  return new TrafficMirrorTargetArn<Partition>(parameters)
}

export interface TransitGatewayAttachmentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly transitGatewayAttachmentId: string
}
class TransitGatewayAttachmentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'transit-gateway-attachment',
  `arn:${string}:ec2:${string}:${string}:transit-gateway-attachment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'transit-gateway-attachment' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly transitGatewayAttachmentId: string
  constructor(parameters: TransitGatewayAttachmentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.transitGatewayAttachmentId = parameters.transitGatewayAttachmentId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:transit-gateway-attachment/${this.transitGatewayAttachmentId}` as const
  }
}
export type { TransitGatewayAttachmentArn }
export function transitGatewayAttachmentArn<
  Partition extends ArnPartition = 'aws',
>(parameters: TransitGatewayAttachmentArnParameters<Partition>) {
  return new TransitGatewayAttachmentArn<Partition>(parameters)
}

export interface TransitGatewayConnectPeerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly transitGatewayConnectPeerId: string
}
class TransitGatewayConnectPeerArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'transit-gateway-connect-peer',
  `arn:${string}:ec2:${string}:${string}:transit-gateway-connect-peer/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'transit-gateway-connect-peer' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly transitGatewayConnectPeerId: string
  constructor(parameters: TransitGatewayConnectPeerArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.transitGatewayConnectPeerId = parameters.transitGatewayConnectPeerId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:transit-gateway-connect-peer/${this.transitGatewayConnectPeerId}` as const
  }
}
export type { TransitGatewayConnectPeerArn }
export function transitGatewayConnectPeerArn<
  Partition extends ArnPartition = 'aws',
>(parameters: TransitGatewayConnectPeerArnParameters<Partition>) {
  return new TransitGatewayConnectPeerArn<Partition>(parameters)
}

export interface TransitGatewayArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly transitGatewayId: string
}
class TransitGatewayArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'transit-gateway',
  `arn:${string}:ec2:${string}:${string}:transit-gateway/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'transit-gateway' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly transitGatewayId: string
  constructor(parameters: TransitGatewayArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.transitGatewayId = parameters.transitGatewayId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:transit-gateway/${this.transitGatewayId}` as const
  }
}
export type { TransitGatewayArn }
export function transitGatewayArn<Partition extends ArnPartition = 'aws'>(
  parameters: TransitGatewayArnParameters<Partition>,
) {
  return new TransitGatewayArn<Partition>(parameters)
}

export interface TransitGatewayMulticastDomainArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly transitGatewayMulticastDomainId: string
}
class TransitGatewayMulticastDomainArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'transit-gateway-multicast-domain',
  `arn:${string}:ec2:${string}:${string}:transit-gateway-multicast-domain/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'transit-gateway-multicast-domain' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly transitGatewayMulticastDomainId: string
  constructor(
    parameters: TransitGatewayMulticastDomainArnParameters<Partition>,
  ) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.transitGatewayMulticastDomainId =
      parameters.transitGatewayMulticastDomainId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:transit-gateway-multicast-domain/${this.transitGatewayMulticastDomainId}` as const
  }
}
export type { TransitGatewayMulticastDomainArn }
export function transitGatewayMulticastDomainArn<
  Partition extends ArnPartition = 'aws',
>(parameters: TransitGatewayMulticastDomainArnParameters<Partition>) {
  return new TransitGatewayMulticastDomainArn<Partition>(parameters)
}

export interface TransitGatewayPolicyTableArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly transitGatewayPolicyTableId: string
}
class TransitGatewayPolicyTableArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'transit-gateway-policy-table',
  `arn:${string}:ec2:${string}:${string}:transit-gateway-policy-table/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'transit-gateway-policy-table' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly transitGatewayPolicyTableId: string
  constructor(parameters: TransitGatewayPolicyTableArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.transitGatewayPolicyTableId = parameters.transitGatewayPolicyTableId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:transit-gateway-policy-table/${this.transitGatewayPolicyTableId}` as const
  }
}
export type { TransitGatewayPolicyTableArn }
export function transitGatewayPolicyTableArn<
  Partition extends ArnPartition = 'aws',
>(parameters: TransitGatewayPolicyTableArnParameters<Partition>) {
  return new TransitGatewayPolicyTableArn<Partition>(parameters)
}

export interface TransitGatewayRouteTableAnnouncementArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly transitGatewayRouteTableAnnouncementId: string
}
class TransitGatewayRouteTableAnnouncementArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'transit-gateway-route-table-announcement',
  `arn:${string}:ec2:${string}:${string}:transit-gateway-route-table-announcement/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'transit-gateway-route-table-announcement' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly transitGatewayRouteTableAnnouncementId: string
  constructor(
    parameters: TransitGatewayRouteTableAnnouncementArnParameters<Partition>,
  ) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.transitGatewayRouteTableAnnouncementId =
      parameters.transitGatewayRouteTableAnnouncementId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:transit-gateway-route-table-announcement/${this.transitGatewayRouteTableAnnouncementId}` as const
  }
}
export type { TransitGatewayRouteTableAnnouncementArn }
export function transitGatewayRouteTableAnnouncementArn<
  Partition extends ArnPartition = 'aws',
>(parameters: TransitGatewayRouteTableAnnouncementArnParameters<Partition>) {
  return new TransitGatewayRouteTableAnnouncementArn<Partition>(parameters)
}

export interface TransitGatewayRouteTableArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly transitGatewayRouteTableId: string
}
class TransitGatewayRouteTableArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'transit-gateway-route-table',
  `arn:${string}:ec2:${string}:${string}:transit-gateway-route-table/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'transit-gateway-route-table' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly transitGatewayRouteTableId: string
  constructor(parameters: TransitGatewayRouteTableArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.transitGatewayRouteTableId = parameters.transitGatewayRouteTableId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:transit-gateway-route-table/${this.transitGatewayRouteTableId}` as const
  }
}
export type { TransitGatewayRouteTableArn }
export function transitGatewayRouteTableArn<
  Partition extends ArnPartition = 'aws',
>(parameters: TransitGatewayRouteTableArnParameters<Partition>) {
  return new TransitGatewayRouteTableArn<Partition>(parameters)
}

export interface VerifiedAccessEndpointArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly verifiedAccessEndpointId: string
}
class VerifiedAccessEndpointArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'verified-access-endpoint',
  `arn:${string}:ec2:${string}:${string}:verified-access-endpoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'verified-access-endpoint' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly verifiedAccessEndpointId: string
  constructor(parameters: VerifiedAccessEndpointArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.verifiedAccessEndpointId = parameters.verifiedAccessEndpointId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:verified-access-endpoint/${this.verifiedAccessEndpointId}` as const
  }
}
export type { VerifiedAccessEndpointArn }
export function verifiedAccessEndpointArn<
  Partition extends ArnPartition = 'aws',
>(parameters: VerifiedAccessEndpointArnParameters<Partition>) {
  return new VerifiedAccessEndpointArn<Partition>(parameters)
}

export interface VerifiedAccessGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly verifiedAccessGroupId: string
}
class VerifiedAccessGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'verified-access-group',
  `arn:${string}:ec2:${string}:${string}:verified-access-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'verified-access-group' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly verifiedAccessGroupId: string
  constructor(parameters: VerifiedAccessGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.verifiedAccessGroupId = parameters.verifiedAccessGroupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:verified-access-group/${this.verifiedAccessGroupId}` as const
  }
}
export type { VerifiedAccessGroupArn }
export function verifiedAccessGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: VerifiedAccessGroupArnParameters<Partition>,
) {
  return new VerifiedAccessGroupArn<Partition>(parameters)
}

export interface VerifiedAccessInstanceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly verifiedAccessInstanceId: string
}
class VerifiedAccessInstanceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'verified-access-instance',
  `arn:${string}:ec2:${string}:${string}:verified-access-instance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'verified-access-instance' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly verifiedAccessInstanceId: string
  constructor(parameters: VerifiedAccessInstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.verifiedAccessInstanceId = parameters.verifiedAccessInstanceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:verified-access-instance/${this.verifiedAccessInstanceId}` as const
  }
}
export type { VerifiedAccessInstanceArn }
export function verifiedAccessInstanceArn<
  Partition extends ArnPartition = 'aws',
>(parameters: VerifiedAccessInstanceArnParameters<Partition>) {
  return new VerifiedAccessInstanceArn<Partition>(parameters)
}

export interface VerifiedAccessPolicyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly verifiedAccessPolicyId: string
}
class VerifiedAccessPolicyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'verified-access-policy',
  `arn:${string}:ec2:${string}:${string}:verified-access-policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'verified-access-policy' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly verifiedAccessPolicyId: string
  constructor(parameters: VerifiedAccessPolicyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.verifiedAccessPolicyId = parameters.verifiedAccessPolicyId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:verified-access-policy/${this.verifiedAccessPolicyId}` as const
  }
}
export type { VerifiedAccessPolicyArn }
export function verifiedAccessPolicyArn<Partition extends ArnPartition = 'aws'>(
  parameters: VerifiedAccessPolicyArnParameters<Partition>,
) {
  return new VerifiedAccessPolicyArn<Partition>(parameters)
}

export interface VerifiedAccessTrustProviderArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly verifiedAccessTrustProviderId: string
}
class VerifiedAccessTrustProviderArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'verified-access-trust-provider',
  `arn:${string}:ec2:${string}:${string}:verified-access-trust-provider/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'verified-access-trust-provider' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly verifiedAccessTrustProviderId: string
  constructor(parameters: VerifiedAccessTrustProviderArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.verifiedAccessTrustProviderId =
      parameters.verifiedAccessTrustProviderId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:verified-access-trust-provider/${this.verifiedAccessTrustProviderId}` as const
  }
}
export type { VerifiedAccessTrustProviderArn }
export function verifiedAccessTrustProviderArn<
  Partition extends ArnPartition = 'aws',
>(parameters: VerifiedAccessTrustProviderArnParameters<Partition>) {
  return new VerifiedAccessTrustProviderArn<Partition>(parameters)
}

export interface VolumeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly volumeId: string
}
class VolumeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'volume',
  `arn:${string}:ec2:${string}:${string}:volume/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'volume' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly volumeId: string
  constructor(parameters: VolumeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.volumeId = parameters.volumeId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:volume/${this.volumeId}` as const
  }
}
export type { VolumeArn }
export function volumeArn<Partition extends ArnPartition = 'aws'>(
  parameters: VolumeArnParameters<Partition>,
) {
  return new VolumeArn<Partition>(parameters)
}

export interface VpcEndpointConnectionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vpcEndpointConnectionId: string
}
class VpcEndpointConnectionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'vpc-endpoint-connection',
  `arn:${string}:ec2:${string}:${string}:vpc-endpoint-connection/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpc-endpoint-connection' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vpcEndpointConnectionId: string
  constructor(parameters: VpcEndpointConnectionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.vpcEndpointConnectionId = parameters.vpcEndpointConnectionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:vpc-endpoint-connection/${this.vpcEndpointConnectionId}` as const
  }
}
export type { VpcEndpointConnectionArn }
export function vpcEndpointConnectionArn<
  Partition extends ArnPartition = 'aws',
>(parameters: VpcEndpointConnectionArnParameters<Partition>) {
  return new VpcEndpointConnectionArn<Partition>(parameters)
}

export interface VpcEndpointArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vpcEndpointId: string
}
class VpcEndpointArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'vpc-endpoint',
  `arn:${string}:ec2:${string}:${string}:vpc-endpoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpc-endpoint' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vpcEndpointId: string
  constructor(parameters: VpcEndpointArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.vpcEndpointId = parameters.vpcEndpointId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:vpc-endpoint/${this.vpcEndpointId}` as const
  }
}
export type { VpcEndpointArn }
export function vpcEndpointArn<Partition extends ArnPartition = 'aws'>(
  parameters: VpcEndpointArnParameters<Partition>,
) {
  return new VpcEndpointArn<Partition>(parameters)
}

export interface VpcEndpointServiceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vpcEndpointServiceId: string
}
class VpcEndpointServiceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'vpc-endpoint-service',
  `arn:${string}:ec2:${string}:${string}:vpc-endpoint-service/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpc-endpoint-service' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vpcEndpointServiceId: string
  constructor(parameters: VpcEndpointServiceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.vpcEndpointServiceId = parameters.vpcEndpointServiceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:vpc-endpoint-service/${this.vpcEndpointServiceId}` as const
  }
}
export type { VpcEndpointServiceArn }
export function vpcEndpointServiceArn<Partition extends ArnPartition = 'aws'>(
  parameters: VpcEndpointServiceArnParameters<Partition>,
) {
  return new VpcEndpointServiceArn<Partition>(parameters)
}

export interface VpcEndpointServicePermissionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vpcEndpointServicePermissionId: string
}
class VpcEndpointServicePermissionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'vpc-endpoint-service-permission',
  `arn:${string}:ec2:${string}:${string}:vpc-endpoint-service-permission/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpc-endpoint-service-permission' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vpcEndpointServicePermissionId: string
  constructor(
    parameters: VpcEndpointServicePermissionArnParameters<Partition>,
  ) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.vpcEndpointServicePermissionId =
      parameters.vpcEndpointServicePermissionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:vpc-endpoint-service-permission/${this.vpcEndpointServicePermissionId}` as const
  }
}
export type { VpcEndpointServicePermissionArn }
export function vpcEndpointServicePermissionArn<
  Partition extends ArnPartition = 'aws',
>(parameters: VpcEndpointServicePermissionArnParameters<Partition>) {
  return new VpcEndpointServicePermissionArn<Partition>(parameters)
}

export interface VpcFlowLogArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vpcFlowLogId: string
}
class VpcFlowLogArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'vpc-flow-log',
  `arn:${string}:ec2:${string}:${string}:vpc-flow-log/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpc-flow-log' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vpcFlowLogId: string
  constructor(parameters: VpcFlowLogArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.vpcFlowLogId = parameters.vpcFlowLogId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:vpc-flow-log/${this.vpcFlowLogId}` as const
  }
}
export type { VpcFlowLogArn }
export function vpcFlowLogArn<Partition extends ArnPartition = 'aws'>(
  parameters: VpcFlowLogArnParameters<Partition>,
) {
  return new VpcFlowLogArn<Partition>(parameters)
}

export interface VpcArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vpcId: string
}
class VpcArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'vpc',
  `arn:${string}:ec2:${string}:${string}:vpc/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpc' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vpcId: string
  constructor(parameters: VpcArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.vpcId = parameters.vpcId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:vpc/${this.vpcId}` as const
  }
}
export type { VpcArn }
export function vpcArn<Partition extends ArnPartition = 'aws'>(
  parameters: VpcArnParameters<Partition>,
) {
  return new VpcArn<Partition>(parameters)
}

export interface VpcPeeringConnectionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vpcPeeringConnectionId: string
}
class VpcPeeringConnectionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'vpc-peering-connection',
  `arn:${string}:ec2:${string}:${string}:vpc-peering-connection/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpc-peering-connection' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vpcPeeringConnectionId: string
  constructor(parameters: VpcPeeringConnectionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.vpcPeeringConnectionId = parameters.vpcPeeringConnectionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:vpc-peering-connection/${this.vpcPeeringConnectionId}` as const
  }
}
export type { VpcPeeringConnectionArn }
export function vpcPeeringConnectionArn<Partition extends ArnPartition = 'aws'>(
  parameters: VpcPeeringConnectionArnParameters<Partition>,
) {
  return new VpcPeeringConnectionArn<Partition>(parameters)
}

export interface VpnConnectionDeviceTypeArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vpnConnectionDeviceTypeId: string
}
class VpnConnectionDeviceTypeArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'vpn-connection-device-type',
  `arn:${string}:ec2:${string}:${string}:vpn-connection-device-type/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpn-connection-device-type' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vpnConnectionDeviceTypeId: string
  constructor(parameters: VpnConnectionDeviceTypeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.vpnConnectionDeviceTypeId = parameters.vpnConnectionDeviceTypeId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:vpn-connection-device-type/${this.vpnConnectionDeviceTypeId}` as const
  }
}
export type { VpnConnectionDeviceTypeArn }
export function vpnConnectionDeviceTypeArn<
  Partition extends ArnPartition = 'aws',
>(parameters: VpnConnectionDeviceTypeArnParameters<Partition>) {
  return new VpnConnectionDeviceTypeArn<Partition>(parameters)
}

export interface VpnConnectionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vpnConnectionId: string
}
class VpnConnectionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'vpn-connection',
  `arn:${string}:ec2:${string}:${string}:vpn-connection/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpn-connection' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vpnConnectionId: string
  constructor(parameters: VpnConnectionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.vpnConnectionId = parameters.vpnConnectionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:vpn-connection/${this.vpnConnectionId}` as const
  }
}
export type { VpnConnectionArn }
export function vpnConnectionArn<Partition extends ArnPartition = 'aws'>(
  parameters: VpnConnectionArnParameters<Partition>,
) {
  return new VpnConnectionArn<Partition>(parameters)
}

export interface VpnGatewayArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vpnGatewayId: string
}
class VpnGatewayArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'vpn-gateway',
  `arn:${string}:ec2:${string}:${string}:vpn-gateway/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpn-gateway' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vpnGatewayId: string
  constructor(parameters: VpnGatewayArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.vpnGatewayId = parameters.vpnGatewayId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:vpn-gateway/${this.vpnGatewayId}` as const
  }
}
export type { VpnGatewayArn }
export function vpnGatewayArn<Partition extends ArnPartition = 'aws'>(
  parameters: VpnGatewayArnParameters<Partition>,
) {
  return new VpnGatewayArn<Partition>(parameters)
}
