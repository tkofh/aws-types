import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface IpElasticArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAllocation: string
}
class IpElasticArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'elastic-ip',
  `arn:${string}:ec2:${string}:${string}:elastic-ip/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'elastic-ip' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAllocation: string
  constructor(parameters: IpElasticArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAllocation = parameters.idAllocation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:elastic-ip/${this.idAllocation}` as const
  }
}
export type { IpElasticArn }
export function ipElasticArn<Partition extends ArnPartition = 'aws'>(
  parameters: IpElasticArnParameters<Partition>,
) {
  return new IpElasticArn<Partition>(parameters)
}

export interface FleetReservationCapacityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFleetReservationCapacity: string
}
class FleetReservationCapacityArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'capacity-reservation-fleet',
  `arn:${string}:ec2:${string}:${string}:capacity-reservation-fleet/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'capacity-reservation-fleet' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFleetReservationCapacity: string
  constructor(parameters: FleetReservationCapacityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idFleetReservationCapacity = parameters.idFleetReservationCapacity
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:capacity-reservation-fleet/${this.idFleetReservationCapacity}` as const
  }
}
export type { FleetReservationCapacityArn }
export function fleetReservationCapacityArn<
  Partition extends ArnPartition = 'aws',
>(parameters: FleetReservationCapacityArnParameters<Partition>) {
  return new FleetReservationCapacityArn<Partition>(parameters)
}

export interface ReservationCapacityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idReservationCapacity: string
}
class ReservationCapacityArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'capacity-reservation',
  `arn:${string}:ec2:${string}:${string}:capacity-reservation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'capacity-reservation' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idReservationCapacity: string
  constructor(parameters: ReservationCapacityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idReservationCapacity = parameters.idReservationCapacity
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:capacity-reservation/${this.idReservationCapacity}` as const
  }
}
export type { ReservationCapacityArn }
export function reservationCapacityArn<Partition extends ArnPartition = 'aws'>(
  parameters: ReservationCapacityArnParameters<Partition>,
) {
  return new ReservationCapacityArn<Partition>(parameters)
}

export interface GatewayCarrierArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGatewayCarrier: string
}
class GatewayCarrierArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'carrier-gateway',
  `arn:${string}:ec2:${string}:${string}:carrier-gateway/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'carrier-gateway' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGatewayCarrier: string
  constructor(parameters: GatewayCarrierArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGatewayCarrier = parameters.idGatewayCarrier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:carrier-gateway/${this.idGatewayCarrier}` as const
  }
}
export type { GatewayCarrierArn }
export function gatewayCarrierArn<Partition extends ArnPartition = 'aws'>(
  parameters: GatewayCarrierArnParameters<Partition>,
) {
  return new GatewayCarrierArn<Partition>(parameters)
}

export interface CertificateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCertificate: string
}
class CertificateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'certificate',
  `arn:${string}:acm:${string}:${string}:certificate/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'certificate' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCertificate: string
  constructor(parameters: CertificateArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idCertificate = parameters.idCertificate
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:acm:${this.region}:${this.account}:certificate/${this.idCertificate}` as const
  }
}
export type { CertificateArn }
export function certificateArn<Partition extends ArnPartition = 'aws'>(
  parameters: CertificateArnParameters<Partition>,
) {
  return new CertificateArn<Partition>(parameters)
}

export interface EndpointVpnClientArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEndpointVpnClient: string
}
class EndpointVpnClientArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'client-vpn-endpoint',
  `arn:${string}:ec2:${string}:${string}:client-vpn-endpoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'client-vpn-endpoint' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEndpointVpnClient: string
  constructor(parameters: EndpointVpnClientArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idEndpointVpnClient = parameters.idEndpointVpnClient
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:client-vpn-endpoint/${this.idEndpointVpnClient}` as const
  }
}
export type { EndpointVpnClientArn }
export function endpointVpnClientArn<Partition extends ArnPartition = 'aws'>(
  parameters: EndpointVpnClientArnParameters<Partition>,
) {
  return new EndpointVpnClientArn<Partition>(parameters)
}

export interface GatewayCustomerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGatewayCustomer: string
}
class GatewayCustomerArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'customer-gateway',
  `arn:${string}:ec2:${string}:${string}:customer-gateway/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'customer-gateway' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGatewayCustomer: string
  constructor(parameters: GatewayCustomerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGatewayCustomer = parameters.idGatewayCustomer
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:customer-gateway/${this.idGatewayCustomer}` as const
  }
}
export type { GatewayCustomerArn }
export function gatewayCustomerArn<Partition extends ArnPartition = 'aws'>(
  parameters: GatewayCustomerArnParameters<Partition>,
) {
  return new GatewayCustomerArn<Partition>(parameters)
}

export interface HostDedicatedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idHostDedicated: string
}
class HostDedicatedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'dedicated-host',
  `arn:${string}:ec2:${string}:${string}:dedicated-host/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dedicated-host' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idHostDedicated: string
  constructor(parameters: HostDedicatedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idHostDedicated = parameters.idHostDedicated
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:dedicated-host/${this.idHostDedicated}` as const
  }
}
export type { HostDedicatedArn }
export function hostDedicatedArn<Partition extends ArnPartition = 'aws'>(
  parameters: HostDedicatedArnParameters<Partition>,
) {
  return new HostDedicatedArn<Partition>(parameters)
}

export interface OptionsDhcpArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idOptionsDhcp: string
}
class OptionsDhcpArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'dhcp-options',
  `arn:${string}:ec2:${string}:${string}:dhcp-options/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dhcp-options' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idOptionsDhcp: string
  constructor(parameters: OptionsDhcpArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idOptionsDhcp = parameters.idOptionsDhcp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:dhcp-options/${this.idOptionsDhcp}` as const
  }
}
export type { OptionsDhcpArn }
export function optionsDhcpArn<Partition extends ArnPartition = 'aws'>(
  parameters: OptionsDhcpArnParameters<Partition>,
) {
  return new OptionsDhcpArn<Partition>(parameters)
}

export interface GatewayInternetOnlyEgressArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGatewayInternetOnlyEgress: string
}
class GatewayInternetOnlyEgressArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'egress-only-internet-gateway',
  `arn:${string}:ec2:${string}:${string}:egress-only-internet-gateway/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'egress-only-internet-gateway' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGatewayInternetOnlyEgress: string
  constructor(parameters: GatewayInternetOnlyEgressArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGatewayInternetOnlyEgress = parameters.idGatewayInternetOnlyEgress
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:egress-only-internet-gateway/${this.idGatewayInternetOnlyEgress}` as const
  }
}
export type { GatewayInternetOnlyEgressArn }
export function gatewayInternetOnlyEgressArn<
  Partition extends ArnPartition = 'aws',
>(parameters: GatewayInternetOnlyEgressArnParameters<Partition>) {
  return new GatewayInternetOnlyEgressArn<Partition>(parameters)
}

export interface GpuElasticArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGpuElastic: string
}
class GpuElasticArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'elastic-gpu',
  `arn:${string}:ec2:${string}:${string}:elastic-gpu/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'elastic-gpu' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGpuElastic: string
  constructor(parameters: GpuElasticArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGpuElastic = parameters.idGpuElastic
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:elastic-gpu/${this.idGpuElastic}` as const
  }
}
export type { GpuElasticArn }
export function gpuElasticArn<Partition extends ArnPartition = 'aws'>(
  parameters: GpuElasticArnParameters<Partition>,
) {
  return new GpuElasticArn<Partition>(parameters)
}

export interface InferenceElasticArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAccelerator: string
}
class InferenceElasticArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'elastic-inference',
  `arn:${string}:elastic-inference:${string}:${string}:elastic-inference-accelerator/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'elastic-inference' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAccelerator: string
  constructor(parameters: InferenceElasticArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAccelerator = parameters.idAccelerator
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elastic-inference:${this.region}:${this.account}:elastic-inference-accelerator/${this.idAccelerator}` as const
  }
}
export type { InferenceElasticArn }
export function inferenceElasticArn<Partition extends ArnPartition = 'aws'>(
  parameters: InferenceElasticArnParameters<Partition>,
) {
  return new InferenceElasticArn<Partition>(parameters)
}

export interface TaskImageExportArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTaskImageExport: string
}
class TaskImageExportArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'export-image-task',
  `arn:${string}:ec2:${string}:${string}:export-image-task/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'export-image-task' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTaskImageExport: string
  constructor(parameters: TaskImageExportArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idTaskImageExport = parameters.idTaskImageExport
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:export-image-task/${this.idTaskImageExport}` as const
  }
}
export type { TaskImageExportArn }
export function taskImageExportArn<Partition extends ArnPartition = 'aws'>(
  parameters: TaskImageExportArnParameters<Partition>,
) {
  return new TaskImageExportArn<Partition>(parameters)
}

export interface TaskInstanceExportArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTaskExport: string
}
class TaskInstanceExportArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'export-instance-task',
  `arn:${string}:ec2:${string}:${string}:export-instance-task/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'export-instance-task' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTaskExport: string
  constructor(parameters: TaskInstanceExportArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idTaskExport = parameters.idTaskExport
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:export-instance-task/${this.idTaskExport}` as const
  }
}
export type { TaskInstanceExportArn }
export function taskInstanceExportArn<Partition extends ArnPartition = 'aws'>(
  parameters: TaskInstanceExportArnParameters<Partition>,
) {
  return new TaskInstanceExportArn<Partition>(parameters)
}

export interface FleetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFleet: string
}
class FleetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'fleet',
  `arn:${string}:ec2:${string}:${string}:fleet/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'fleet' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFleet: string
  constructor(parameters: FleetArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idFleet = parameters.idFleet
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:fleet/${this.idFleet}` as const
  }
}
export type { FleetArn }
export function fleetArn<Partition extends ArnPartition = 'aws'>(
  parameters: FleetArnParameters<Partition>,
) {
  return new FleetArn<Partition>(parameters)
}

export interface ImageFpgaArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idImageFpga: string
}
class ImageFpgaArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'fpga-image',
  `arn:${string}:ec2:${string}:${string}:fpga-image/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'fpga-image' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idImageFpga: string
  constructor(parameters: ImageFpgaArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idImageFpga = parameters.idImageFpga
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:fpga-image/${this.idImageFpga}` as const
  }
}
export type { ImageFpgaArn }
export function imageFpgaArn<Partition extends ArnPartition = 'aws'>(
  parameters: ImageFpgaArnParameters<Partition>,
) {
  return new ImageFpgaArn<Partition>(parameters)
}

export interface ReservationHostArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idReservationHost: string
}
class ReservationHostArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'host-reservation',
  `arn:${string}:ec2:${string}:${string}:host-reservation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'host-reservation' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idReservationHost: string
  constructor(parameters: ReservationHostArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idReservationHost = parameters.idReservationHost
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:host-reservation/${this.idReservationHost}` as const
  }
}
export type { ReservationHostArn }
export function reservationHostArn<Partition extends ArnPartition = 'aws'>(
  parameters: ReservationHostArnParameters<Partition>,
) {
  return new ReservationHostArn<Partition>(parameters)
}

export interface ImageArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idImage: string
}
class ImageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'image',
  `arn:${string}:ec2:${string}::image/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'image' as const
  readonly partition: string
  readonly region: string
  readonly idImage: string
  constructor(parameters: ImageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idImage = parameters.idImage
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}::image/${this.idImage}` as const
  }
}
export type { ImageArn }
export function imageArn<Partition extends ArnPartition = 'aws'>(
  parameters: ImageArnParameters<Partition>,
) {
  return new ImageArn<Partition>(parameters)
}

export interface TaskImageImportArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTaskImageImport: string
}
class TaskImageImportArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'import-image-task',
  `arn:${string}:ec2:${string}:${string}:import-image-task/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'import-image-task' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTaskImageImport: string
  constructor(parameters: TaskImageImportArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idTaskImageImport = parameters.idTaskImageImport
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:import-image-task/${this.idTaskImageImport}` as const
  }
}
export type { TaskImageImportArn }
export function taskImageImportArn<Partition extends ArnPartition = 'aws'>(
  parameters: TaskImageImportArnParameters<Partition>,
) {
  return new TaskImageImportArn<Partition>(parameters)
}

export interface TaskSnapshotImportArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTaskSnapshotImport: string
}
class TaskSnapshotImportArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'import-snapshot-task',
  `arn:${string}:ec2:${string}:${string}:import-snapshot-task/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'import-snapshot-task' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTaskSnapshotImport: string
  constructor(parameters: TaskSnapshotImportArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idTaskSnapshotImport = parameters.idTaskSnapshotImport
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:import-snapshot-task/${this.idTaskSnapshotImport}` as const
  }
}
export type { TaskSnapshotImportArn }
export function taskSnapshotImportArn<Partition extends ArnPartition = 'aws'>(
  parameters: TaskSnapshotImportArnParameters<Partition>,
) {
  return new TaskSnapshotImportArn<Partition>(parameters)
}

export interface EndpointConnectInstanceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEndpointConnectInstance: string
}
class EndpointConnectInstanceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'instance-connect-endpoint',
  `arn:${string}:ec2:${string}:${string}:instance-connect-endpoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'instance-connect-endpoint' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEndpointConnectInstance: string
  constructor(parameters: EndpointConnectInstanceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idEndpointConnectInstance = parameters.idEndpointConnectInstance
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:instance-connect-endpoint/${this.idEndpointConnectInstance}` as const
  }
}
export type { EndpointConnectInstanceArn }
export function endpointConnectInstanceArn<
  Partition extends ArnPartition = 'aws',
>(parameters: EndpointConnectInstanceArnParameters<Partition>) {
  return new EndpointConnectInstanceArn<Partition>(parameters)
}

export interface WindowEventInstanceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWindowEventInstance: string
}
class WindowEventInstanceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'instance-event-window',
  `arn:${string}:ec2:${string}:${string}:instance-event-window/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'instance-event-window' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWindowEventInstance: string
  constructor(parameters: WindowEventInstanceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idWindowEventInstance = parameters.idWindowEventInstance
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:instance-event-window/${this.idWindowEventInstance}` as const
  }
}
export type { WindowEventInstanceArn }
export function windowEventInstanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: WindowEventInstanceArnParameters<Partition>,
) {
  return new WindowEventInstanceArn<Partition>(parameters)
}

export interface InstanceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
}
class InstanceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'instance',
  `arn:${string}:ec2:${string}:${string}:instance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'instance' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  constructor(parameters: InstanceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:instance/${this.idInstance}` as const
  }
}
export type { InstanceArn }
export function instanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceArnParameters<Partition>,
) {
  return new InstanceArn<Partition>(parameters)
}

export interface GatewayInternetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGatewayInternet: string
}
class GatewayInternetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'internet-gateway',
  `arn:${string}:ec2:${string}:${string}:internet-gateway/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'internet-gateway' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGatewayInternet: string
  constructor(parameters: GatewayInternetArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGatewayInternet = parameters.idGatewayInternet
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:internet-gateway/${this.idGatewayInternet}` as const
  }
}
export type { GatewayInternetArn }
export function gatewayInternetArn<Partition extends ArnPartition = 'aws'>(
  parameters: GatewayInternetArnParameters<Partition>,
) {
  return new GatewayInternetArn<Partition>(parameters)
}

export interface TokenVerificationResourceExternalIpamArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idTokenVerificationResourceExternalIpam: string
}
class TokenVerificationResourceExternalIpamArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ipam-external-resource-verification-token',
  `arn:${string}:ec2::${string}:ipam-external-resource-verification-token/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'ipam-external-resource-verification-token' as const
  readonly partition: string
  readonly account: string
  readonly idTokenVerificationResourceExternalIpam: string
  constructor(
    parameters: TokenVerificationResourceExternalIpamArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idTokenVerificationResourceExternalIpam =
      parameters.idTokenVerificationResourceExternalIpam
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2::${this.account}:ipam-external-resource-verification-token/${this.idTokenVerificationResourceExternalIpam}` as const
  }
}
export type { TokenVerificationResourceExternalIpamArn }
export function tokenVerificationResourceExternalIpamArn<
  Partition extends ArnPartition = 'aws',
>(parameters: TokenVerificationResourceExternalIpamArnParameters<Partition>) {
  return new TokenVerificationResourceExternalIpamArn<Partition>(parameters)
}

export interface IpamArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly idIpam: string
}
class IpamArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ipam',
  `arn:${string}:ec2::${string}:ipam/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ipam' as const
  readonly partition: string
  readonly account: string
  readonly idIpam: string
  constructor(parameters: IpamArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idIpam = parameters.idIpam
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2::${this.account}:ipam/${this.idIpam}` as const
  }
}
export type { IpamArn }
export function ipamArn<Partition extends ArnPartition = 'aws'>(
  parameters: IpamArnParameters<Partition>,
) {
  return new IpamArn<Partition>(parameters)
}

export interface PoolIpamArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly idPoolIpam: string
}
class PoolIpamArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ipam-pool',
  `arn:${string}:ec2::${string}:ipam-pool/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ipam-pool' as const
  readonly partition: string
  readonly account: string
  readonly idPoolIpam: string
  constructor(parameters: PoolIpamArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idPoolIpam = parameters.idPoolIpam
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2::${this.account}:ipam-pool/${this.idPoolIpam}` as const
  }
}
export type { PoolIpamArn }
export function poolIpamArn<Partition extends ArnPartition = 'aws'>(
  parameters: PoolIpamArnParameters<Partition>,
) {
  return new PoolIpamArn<Partition>(parameters)
}

export interface AssociationDiscoveryResourceIpamArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idAssociationDiscoveryResourceIpam: string
}
class AssociationDiscoveryResourceIpamArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ipam-resource-discovery-association',
  `arn:${string}:ec2::${string}:ipam-resource-discovery-association/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'ipam-resource-discovery-association' as const
  readonly partition: string
  readonly account: string
  readonly idAssociationDiscoveryResourceIpam: string
  constructor(
    parameters: AssociationDiscoveryResourceIpamArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idAssociationDiscoveryResourceIpam =
      parameters.idAssociationDiscoveryResourceIpam
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2::${this.account}:ipam-resource-discovery-association/${this.idAssociationDiscoveryResourceIpam}` as const
  }
}
export type { AssociationDiscoveryResourceIpamArn }
export function associationDiscoveryResourceIpamArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AssociationDiscoveryResourceIpamArnParameters<Partition>) {
  return new AssociationDiscoveryResourceIpamArn<Partition>(parameters)
}

export interface DiscoveryResourceIpamArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idDiscoveryResourceIpam: string
}
class DiscoveryResourceIpamArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ipam-resource-discovery',
  `arn:${string}:ec2::${string}:ipam-resource-discovery/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ipam-resource-discovery' as const
  readonly partition: string
  readonly account: string
  readonly idDiscoveryResourceIpam: string
  constructor(parameters: DiscoveryResourceIpamArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idDiscoveryResourceIpam = parameters.idDiscoveryResourceIpam
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2::${this.account}:ipam-resource-discovery/${this.idDiscoveryResourceIpam}` as const
  }
}
export type { DiscoveryResourceIpamArn }
export function discoveryResourceIpamArn<
  Partition extends ArnPartition = 'aws',
>(parameters: DiscoveryResourceIpamArnParameters<Partition>) {
  return new DiscoveryResourceIpamArn<Partition>(parameters)
}

export interface ScopeIpamArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idScopeIpam: string
}
class ScopeIpamArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ipam-scope',
  `arn:${string}:ec2::${string}:ipam-scope/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ipam-scope' as const
  readonly partition: string
  readonly account: string
  readonly idScopeIpam: string
  constructor(parameters: ScopeIpamArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idScopeIpam = parameters.idScopeIpam
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2::${this.account}:ipam-scope/${this.idScopeIpam}` as const
  }
}
export type { ScopeIpamArn }
export function scopeIpamArn<Partition extends ArnPartition = 'aws'>(
  parameters: ScopeIpamArnParameters<Partition>,
) {
  return new ScopeIpamArn<Partition>(parameters)
}

export interface PoolCoipArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCoipPoolIpv4: string
}
class PoolCoipArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'coip-pool',
  `arn:${string}:ec2:${string}:${string}:coip-pool/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'coip-pool' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCoipPoolIpv4: string
  constructor(parameters: PoolCoipArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idCoipPoolIpv4 = parameters.idCoipPoolIpv4
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:coip-pool/${this.idCoipPoolIpv4}` as const
  }
}
export type { PoolCoipArn }
export function poolCoipArn<Partition extends ArnPartition = 'aws'>(
  parameters: PoolCoipArnParameters<Partition>,
) {
  return new PoolCoipArn<Partition>(parameters)
}

export interface Ec2Ipv4poolArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEc2PoolIpv4: string
}
class Ec2Ipv4poolArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ipv4pool-ec2',
  `arn:${string}:ec2:${string}:${string}:ipv4pool-ec2/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ipv4pool-ec2' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEc2PoolIpv4: string
  constructor(parameters: Ec2Ipv4poolArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idEc2PoolIpv4 = parameters.idEc2PoolIpv4
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:ipv4pool-ec2/${this.idEc2PoolIpv4}` as const
  }
}
export type { Ec2Ipv4poolArn }
export function ec2Ipv4poolArn<Partition extends ArnPartition = 'aws'>(
  parameters: Ec2Ipv4poolArnParameters<Partition>,
) {
  return new Ec2Ipv4poolArn<Partition>(parameters)
}

export interface Ec2Ipv6poolArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEc2PoolIpv6: string
}
class Ec2Ipv6poolArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ipv6pool-ec2',
  `arn:${string}:ec2:${string}:${string}:ipv6pool-ec2/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ipv6pool-ec2' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEc2PoolIpv6: string
  constructor(parameters: Ec2Ipv6poolArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idEc2PoolIpv6 = parameters.idEc2PoolIpv6
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:ipv6pool-ec2/${this.idEc2PoolIpv6}` as const
  }
}
export type { Ec2Ipv6poolArn }
export function ec2Ipv6poolArn<Partition extends ArnPartition = 'aws'>(
  parameters: Ec2Ipv6poolArnParameters<Partition>,
) {
  return new Ec2Ipv6poolArn<Partition>(parameters)
}

export interface PairKeyArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePairKey: string
}
class PairKeyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'key-pair',
  `arn:${string}:ec2:${string}:${string}:key-pair/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'key-pair' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePairKey: string
  constructor(parameters: PairKeyArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.namePairKey = parameters.namePairKey
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:key-pair/${this.namePairKey}` as const
  }
}
export type { PairKeyArn }
export function pairKeyArn<Partition extends ArnPartition = 'aws'>(
  parameters: PairKeyArnParameters<Partition>,
) {
  return new PairKeyArn<Partition>(parameters)
}

export interface TemplateLaunchArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTemplateLaunch: string
}
class TemplateLaunchArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'launch-template',
  `arn:${string}:ec2:${string}:${string}:launch-template/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'launch-template' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTemplateLaunch: string
  constructor(parameters: TemplateLaunchArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idTemplateLaunch = parameters.idTemplateLaunch
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:launch-template/${this.idTemplateLaunch}` as const
  }
}
export type { TemplateLaunchArn }
export function templateLaunchArn<Partition extends ArnPartition = 'aws'>(
  parameters: TemplateLaunchArnParameters<Partition>,
) {
  return new TemplateLaunchArn<Partition>(parameters)
}

export interface ConfigurationLicenseArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConfigurationLicense: string
}
class ConfigurationLicenseArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'license-configuration',
  `arn:${string}:license-manager:${string}:${string}:license-configuration:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'license-configuration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConfigurationLicense: string
  constructor(parameters: ConfigurationLicenseArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idConfigurationLicense = parameters.idConfigurationLicense
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:license-manager:${this.region}:${this.account}:license-configuration:${this.idConfigurationLicense}` as const
  }
}
export type { ConfigurationLicenseArn }
export function configurationLicenseArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigurationLicenseArnParameters<Partition>,
) {
  return new ConfigurationLicenseArn<Partition>(parameters)
}

export interface GatewayLocalArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGatewayLocal: string
}
class GatewayLocalArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'local-gateway',
  `arn:${string}:ec2:${string}:${string}:local-gateway/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'local-gateway' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGatewayLocal: string
  constructor(parameters: GatewayLocalArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGatewayLocal = parameters.idGatewayLocal
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:local-gateway/${this.idGatewayLocal}` as const
  }
}
export type { GatewayLocalArn }
export function gatewayLocalArn<Partition extends ArnPartition = 'aws'>(
  parameters: GatewayLocalArnParameters<Partition>,
) {
  return new GatewayLocalArn<Partition>(parameters)
}

export interface AssociationGroupInterfaceVirtualTableRouteGatewayLocalArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAssociationGroupInterfaceVirtualTableRouteGatewayLocal: string
}
class AssociationGroupInterfaceVirtualTableRouteGatewayLocalArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'local-gateway-route-table-virtual-interface-group-association',
  `arn:${string}:ec2:${string}:${string}:local-gateway-route-table-virtual-interface-group-association/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'local-gateway-route-table-virtual-interface-group-association' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAssociationGroupInterfaceVirtualTableRouteGatewayLocal: string
  constructor(
    parameters: AssociationGroupInterfaceVirtualTableRouteGatewayLocalArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAssociationGroupInterfaceVirtualTableRouteGatewayLocal =
      parameters.idAssociationGroupInterfaceVirtualTableRouteGatewayLocal
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:local-gateway-route-table-virtual-interface-group-association/${this.idAssociationGroupInterfaceVirtualTableRouteGatewayLocal}` as const
  }
}
export type { AssociationGroupInterfaceVirtualTableRouteGatewayLocalArn }
export function associationGroupInterfaceVirtualTableRouteGatewayLocalArn<
  Partition extends ArnPartition = 'aws',
>(
  parameters: AssociationGroupInterfaceVirtualTableRouteGatewayLocalArnParameters<Partition>,
) {
  return new AssociationGroupInterfaceVirtualTableRouteGatewayLocalArn<Partition>(
    parameters,
  )
}

export interface AssociationVpcTableRouteGatewayLocalArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAssociationVpcTableRouteGatewayLocal: string
}
class AssociationVpcTableRouteGatewayLocalArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'local-gateway-route-table-vpc-association',
  `arn:${string}:ec2:${string}:${string}:local-gateway-route-table-vpc-association/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'local-gateway-route-table-vpc-association' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAssociationVpcTableRouteGatewayLocal: string
  constructor(
    parameters: AssociationVpcTableRouteGatewayLocalArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAssociationVpcTableRouteGatewayLocal =
      parameters.idAssociationVpcTableRouteGatewayLocal
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:local-gateway-route-table-vpc-association/${this.idAssociationVpcTableRouteGatewayLocal}` as const
  }
}
export type { AssociationVpcTableRouteGatewayLocalArn }
export function associationVpcTableRouteGatewayLocalArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AssociationVpcTableRouteGatewayLocalArnParameters<Partition>) {
  return new AssociationVpcTableRouteGatewayLocalArn<Partition>(parameters)
}

export interface TableRouteGatewayLocalArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTableRouteGatewayLocal: string
}
class TableRouteGatewayLocalArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'local-gateway-route-table',
  `arn:${string}:ec2:${string}:${string}:local-gateway-route-table/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'local-gateway-route-table' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTableRouteGatewayLocal: string
  constructor(parameters: TableRouteGatewayLocalArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idTableRouteGatewayLocal = parameters.idTableRouteGatewayLocal
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:local-gateway-route-table/${this.idTableRouteGatewayLocal}` as const
  }
}
export type { TableRouteGatewayLocalArn }
export function tableRouteGatewayLocalArn<
  Partition extends ArnPartition = 'aws',
>(parameters: TableRouteGatewayLocalArnParameters<Partition>) {
  return new TableRouteGatewayLocalArn<Partition>(parameters)
}

export interface GroupInterfaceVirtualGatewayLocalArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroupInterfaceVirtualGatewayLocal: string
}
class GroupInterfaceVirtualGatewayLocalArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'local-gateway-virtual-interface-group',
  `arn:${string}:ec2:${string}:${string}:local-gateway-virtual-interface-group/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'local-gateway-virtual-interface-group' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroupInterfaceVirtualGatewayLocal: string
  constructor(
    parameters: GroupInterfaceVirtualGatewayLocalArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGroupInterfaceVirtualGatewayLocal =
      parameters.idGroupInterfaceVirtualGatewayLocal
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:local-gateway-virtual-interface-group/${this.idGroupInterfaceVirtualGatewayLocal}` as const
  }
}
export type { GroupInterfaceVirtualGatewayLocalArn }
export function groupInterfaceVirtualGatewayLocalArn<
  Partition extends ArnPartition = 'aws',
>(parameters: GroupInterfaceVirtualGatewayLocalArnParameters<Partition>) {
  return new GroupInterfaceVirtualGatewayLocalArn<Partition>(parameters)
}

export interface InterfaceVirtualGatewayLocalArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInterfaceVirtualGatewayLocal: string
}
class InterfaceVirtualGatewayLocalArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'local-gateway-virtual-interface',
  `arn:${string}:ec2:${string}:${string}:local-gateway-virtual-interface/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'local-gateway-virtual-interface' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInterfaceVirtualGatewayLocal: string
  constructor(
    parameters: InterfaceVirtualGatewayLocalArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInterfaceVirtualGatewayLocal =
      parameters.idInterfaceVirtualGatewayLocal
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:local-gateway-virtual-interface/${this.idInterfaceVirtualGatewayLocal}` as const
  }
}
export type { InterfaceVirtualGatewayLocalArn }
export function interfaceVirtualGatewayLocalArn<
  Partition extends ArnPartition = 'aws',
>(parameters: InterfaceVirtualGatewayLocalArnParameters<Partition>) {
  return new InterfaceVirtualGatewayLocalArn<Partition>(parameters)
}

export interface GatewayNatArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGatewayNat: string
}
class GatewayNatArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'natgateway',
  `arn:${string}:ec2:${string}:${string}:natgateway/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'natgateway' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGatewayNat: string
  constructor(parameters: GatewayNatArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGatewayNat = parameters.idGatewayNat
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:natgateway/${this.idGatewayNat}` as const
  }
}
export type { GatewayNatArn }
export function gatewayNatArn<Partition extends ArnPartition = 'aws'>(
  parameters: GatewayNatArnParameters<Partition>,
) {
  return new GatewayNatArn<Partition>(parameters)
}

export interface AclNetworkArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idNacl: string
}
class AclNetworkArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'network-acl',
  `arn:${string}:ec2:${string}:${string}:network-acl/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'network-acl' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idNacl: string
  constructor(parameters: AclNetworkArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idNacl = parameters.idNacl
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:network-acl/${this.idNacl}` as const
  }
}
export type { AclNetworkArn }
export function aclNetworkArn<Partition extends ArnPartition = 'aws'>(
  parameters: AclNetworkArnParameters<Partition>,
) {
  return new AclNetworkArn<Partition>(parameters)
}

export interface AnalysisScopeAccessInsightsNetworkArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAnalysisScopeAccessInsightsNetwork: string
}
class AnalysisScopeAccessInsightsNetworkArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'network-insights-access-scope-analysis',
  `arn:${string}:ec2:${string}:${string}:network-insights-access-scope-analysis/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'network-insights-access-scope-analysis' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAnalysisScopeAccessInsightsNetwork: string
  constructor(
    parameters: AnalysisScopeAccessInsightsNetworkArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAnalysisScopeAccessInsightsNetwork =
      parameters.idAnalysisScopeAccessInsightsNetwork
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:network-insights-access-scope-analysis/${this.idAnalysisScopeAccessInsightsNetwork}` as const
  }
}
export type { AnalysisScopeAccessInsightsNetworkArn }
export function analysisScopeAccessInsightsNetworkArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AnalysisScopeAccessInsightsNetworkArnParameters<Partition>) {
  return new AnalysisScopeAccessInsightsNetworkArn<Partition>(parameters)
}

export interface ScopeAccessInsightsNetworkArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idScopeAccessInsightsNetwork: string
}
class ScopeAccessInsightsNetworkArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'network-insights-access-scope',
  `arn:${string}:ec2:${string}:${string}:network-insights-access-scope/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'network-insights-access-scope' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idScopeAccessInsightsNetwork: string
  constructor(parameters: ScopeAccessInsightsNetworkArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idScopeAccessInsightsNetwork = parameters.idScopeAccessInsightsNetwork
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:network-insights-access-scope/${this.idScopeAccessInsightsNetwork}` as const
  }
}
export type { ScopeAccessInsightsNetworkArn }
export function scopeAccessInsightsNetworkArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ScopeAccessInsightsNetworkArnParameters<Partition>) {
  return new ScopeAccessInsightsNetworkArn<Partition>(parameters)
}

export interface AnalysisInsightsNetworkArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAnalysisInsightsNetwork: string
}
class AnalysisInsightsNetworkArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'network-insights-analysis',
  `arn:${string}:ec2:${string}:${string}:network-insights-analysis/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'network-insights-analysis' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAnalysisInsightsNetwork: string
  constructor(parameters: AnalysisInsightsNetworkArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAnalysisInsightsNetwork = parameters.idAnalysisInsightsNetwork
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:network-insights-analysis/${this.idAnalysisInsightsNetwork}` as const
  }
}
export type { AnalysisInsightsNetworkArn }
export function analysisInsightsNetworkArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AnalysisInsightsNetworkArnParameters<Partition>) {
  return new AnalysisInsightsNetworkArn<Partition>(parameters)
}

export interface PathInsightsNetworkArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPathInsightsNetwork: string
}
class PathInsightsNetworkArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'network-insights-path',
  `arn:${string}:ec2:${string}:${string}:network-insights-path/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'network-insights-path' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPathInsightsNetwork: string
  constructor(parameters: PathInsightsNetworkArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPathInsightsNetwork = parameters.idPathInsightsNetwork
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:network-insights-path/${this.idPathInsightsNetwork}` as const
  }
}
export type { PathInsightsNetworkArn }
export function pathInsightsNetworkArn<Partition extends ArnPartition = 'aws'>(
  parameters: PathInsightsNetworkArnParameters<Partition>,
) {
  return new PathInsightsNetworkArn<Partition>(parameters)
}

export interface InterfaceNetworkArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInterfaceNetwork: string
}
class InterfaceNetworkArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'network-interface',
  `arn:${string}:ec2:${string}:${string}:network-interface/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'network-interface' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInterfaceNetwork: string
  constructor(parameters: InterfaceNetworkArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInterfaceNetwork = parameters.idInterfaceNetwork
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:network-interface/${this.idInterfaceNetwork}` as const
  }
}
export type { InterfaceNetworkArn }
export function interfaceNetworkArn<Partition extends ArnPartition = 'aws'>(
  parameters: InterfaceNetworkArnParameters<Partition>,
) {
  return new InterfaceNetworkArn<Partition>(parameters)
}

export interface GroupPlacementArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupPlacement: string
}
class GroupPlacementArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'placement-group',
  `arn:${string}:ec2:${string}:${string}:placement-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'placement-group' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupPlacement: string
  constructor(parameters: GroupPlacementArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupPlacement = parameters.nameGroupPlacement
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:placement-group/${this.nameGroupPlacement}` as const
  }
}
export type { GroupPlacementArn }
export function groupPlacementArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupPlacementArnParameters<Partition>,
) {
  return new GroupPlacementArn<Partition>(parameters)
}

export interface ListPrefixArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idListPrefix: string
}
class ListPrefixArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'prefix-list',
  `arn:${string}:ec2:${string}:${string}:prefix-list/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'prefix-list' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idListPrefix: string
  constructor(parameters: ListPrefixArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idListPrefix = parameters.idListPrefix
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:prefix-list/${this.idListPrefix}` as const
  }
}
export type { ListPrefixArn }
export function listPrefixArn<Partition extends ArnPartition = 'aws'>(
  parameters: ListPrefixArnParameters<Partition>,
) {
  return new ListPrefixArn<Partition>(parameters)
}

export interface TaskVolumeRootReplaceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTaskVolumeRootReplace: string
}
class TaskVolumeRootReplaceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'replace-root-volume-task',
  `arn:${string}:ec2:${string}:${string}:replace-root-volume-task/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'replace-root-volume-task' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTaskVolumeRootReplace: string
  constructor(parameters: TaskVolumeRootReplaceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idTaskVolumeRootReplace = parameters.idTaskVolumeRootReplace
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:replace-root-volume-task/${this.idTaskVolumeRootReplace}` as const
  }
}
export type { TaskVolumeRootReplaceArn }
export function taskVolumeRootReplaceArn<
  Partition extends ArnPartition = 'aws',
>(parameters: TaskVolumeRootReplaceArnParameters<Partition>) {
  return new TaskVolumeRootReplaceArn<Partition>(parameters)
}

export interface InstancesReservedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idReservation: string
}
class InstancesReservedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'reserved-instances',
  `arn:${string}:ec2:${string}:${string}:reserved-instances/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'reserved-instances' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idReservation: string
  constructor(parameters: InstancesReservedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idReservation = parameters.idReservation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:reserved-instances/${this.idReservation}` as const
  }
}
export type { InstancesReservedArn }
export function instancesReservedArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstancesReservedArnParameters<Partition>,
) {
  return new InstancesReservedArn<Partition>(parameters)
}

export interface GroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroup: string
}
class GroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'group',
  `arn:${string}:resource-groups:${string}:${string}:group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'group' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroup: string
  constructor(parameters: GroupArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroup = parameters.nameGroup
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:resource-groups:${this.region}:${this.account}:group/${this.nameGroup}` as const
  }
}
export type { GroupArn }
export function groupArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupArnParameters<Partition>,
) {
  return new GroupArn<Partition>(parameters)
}

export interface RoleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly pathWithNameRole: string
}
class RoleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'role',
  `arn:${string}:iam::${string}:role/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'role' as const
  readonly partition: string
  readonly account: string
  readonly pathWithNameRole: string
  constructor(parameters: RoleArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.pathWithNameRole = parameters.pathWithNameRole
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:role/${this.pathWithNameRole}` as const
  }
}
export type { RoleArn }
export function roleArn<Partition extends ArnPartition = 'aws'>(
  parameters: RoleArnParameters<Partition>,
) {
  return new RoleArn<Partition>(parameters)
}

export interface TableRouteArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTableRoute: string
}
class TableRouteArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'route-table',
  `arn:${string}:ec2:${string}:${string}:route-table/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'route-table' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTableRoute: string
  constructor(parameters: TableRouteArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idTableRoute = parameters.idTableRoute
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:route-table/${this.idTableRoute}` as const
  }
}
export type { TableRouteArn }
export function tableRouteArn<Partition extends ArnPartition = 'aws'>(
  parameters: TableRouteArnParameters<Partition>,
) {
  return new TableRouteArn<Partition>(parameters)
}

export interface GroupSecurityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroupSecurity: string
}
class GroupSecurityArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'security-group',
  `arn:${string}:ec2:${string}:${string}:security-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'security-group' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroupSecurity: string
  constructor(parameters: GroupSecurityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGroupSecurity = parameters.idGroupSecurity
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:security-group/${this.idGroupSecurity}` as const
  }
}
export type { GroupSecurityArn }
export function groupSecurityArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupSecurityArnParameters<Partition>,
) {
  return new GroupSecurityArn<Partition>(parameters)
}

export interface RuleGroupSecurityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idRuleGroupSecurity: string
}
class RuleGroupSecurityArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'security-group-rule',
  `arn:${string}:ec2:${string}:${string}:security-group-rule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'security-group-rule' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idRuleGroupSecurity: string
  constructor(parameters: RuleGroupSecurityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idRuleGroupSecurity = parameters.idRuleGroupSecurity
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:security-group-rule/${this.idRuleGroupSecurity}` as const
  }
}
export type { RuleGroupSecurityArn }
export function ruleGroupSecurityArn<Partition extends ArnPartition = 'aws'>(
  parameters: RuleGroupSecurityArnParameters<Partition>,
) {
  return new RuleGroupSecurityArn<Partition>(parameters)
}

export interface SnapshotArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idSnapshot: string
}
class SnapshotArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'snapshot',
  `arn:${string}:ec2:${string}::snapshot/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'snapshot' as const
  readonly partition: string
  readonly region: string
  readonly idSnapshot: string
  constructor(parameters: SnapshotArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idSnapshot = parameters.idSnapshot
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}::snapshot/${this.idSnapshot}` as const
  }
}
export type { SnapshotArn }
export function snapshotArn<Partition extends ArnPartition = 'aws'>(
  parameters: SnapshotArnParameters<Partition>,
) {
  return new SnapshotArn<Partition>(parameters)
}

export interface RequestFleetSpotArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idRequestFleetSpot: string
}
class RequestFleetSpotArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'spot-fleet-request',
  `arn:${string}:ec2:${string}:${string}:spot-fleet-request/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'spot-fleet-request' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idRequestFleetSpot: string
  constructor(parameters: RequestFleetSpotArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idRequestFleetSpot = parameters.idRequestFleetSpot
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:spot-fleet-request/${this.idRequestFleetSpot}` as const
  }
}
export type { RequestFleetSpotArn }
export function requestFleetSpotArn<Partition extends ArnPartition = 'aws'>(
  parameters: RequestFleetSpotArnParameters<Partition>,
) {
  return new RequestFleetSpotArn<Partition>(parameters)
}

export interface RequestInstancesSpotArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idRequestInstanceSpot: string
}
class RequestInstancesSpotArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'spot-instances-request',
  `arn:${string}:ec2:${string}:${string}:spot-instances-request/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'spot-instances-request' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idRequestInstanceSpot: string
  constructor(parameters: RequestInstancesSpotArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idRequestInstanceSpot = parameters.idRequestInstanceSpot
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:spot-instances-request/${this.idRequestInstanceSpot}` as const
  }
}
export type { RequestInstancesSpotArn }
export function requestInstancesSpotArn<Partition extends ArnPartition = 'aws'>(
  parameters: RequestInstancesSpotArnParameters<Partition>,
) {
  return new RequestInstancesSpotArn<Partition>(parameters)
}

export interface ReservationCidrSubnetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idReservationCidrSubnet: string
}
class ReservationCidrSubnetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'subnet-cidr-reservation',
  `arn:${string}:ec2:${string}:${string}:subnet-cidr-reservation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'subnet-cidr-reservation' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idReservationCidrSubnet: string
  constructor(parameters: ReservationCidrSubnetArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idReservationCidrSubnet = parameters.idReservationCidrSubnet
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:subnet-cidr-reservation/${this.idReservationCidrSubnet}` as const
  }
}
export type { ReservationCidrSubnetArn }
export function reservationCidrSubnetArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ReservationCidrSubnetArnParameters<Partition>) {
  return new ReservationCidrSubnetArn<Partition>(parameters)
}

export interface SubnetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSubnet: string
}
class SubnetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'subnet',
  `arn:${string}:ec2:${string}:${string}:subnet/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'subnet' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSubnet: string
  constructor(parameters: SubnetArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSubnet = parameters.idSubnet
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:subnet/${this.idSubnet}` as const
  }
}
export type { SubnetArn }
export function subnetArn<Partition extends ArnPartition = 'aws'>(
  parameters: SubnetArnParameters<Partition>,
) {
  return new SubnetArn<Partition>(parameters)
}

export interface FilterMirrorTrafficArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFilterMirrorTraffic: string
}
class FilterMirrorTrafficArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'traffic-mirror-filter',
  `arn:${string}:ec2:${string}:${string}:traffic-mirror-filter/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'traffic-mirror-filter' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFilterMirrorTraffic: string
  constructor(parameters: FilterMirrorTrafficArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idFilterMirrorTraffic = parameters.idFilterMirrorTraffic
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:traffic-mirror-filter/${this.idFilterMirrorTraffic}` as const
  }
}
export type { FilterMirrorTrafficArn }
export function filterMirrorTrafficArn<Partition extends ArnPartition = 'aws'>(
  parameters: FilterMirrorTrafficArnParameters<Partition>,
) {
  return new FilterMirrorTrafficArn<Partition>(parameters)
}

export interface RuleFilterMirrorTrafficArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idRuleFilterMirrorTraffic: string
}
class RuleFilterMirrorTrafficArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'traffic-mirror-filter-rule',
  `arn:${string}:ec2:${string}:${string}:traffic-mirror-filter-rule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'traffic-mirror-filter-rule' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idRuleFilterMirrorTraffic: string
  constructor(parameters: RuleFilterMirrorTrafficArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idRuleFilterMirrorTraffic = parameters.idRuleFilterMirrorTraffic
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:traffic-mirror-filter-rule/${this.idRuleFilterMirrorTraffic}` as const
  }
}
export type { RuleFilterMirrorTrafficArn }
export function ruleFilterMirrorTrafficArn<
  Partition extends ArnPartition = 'aws',
>(parameters: RuleFilterMirrorTrafficArnParameters<Partition>) {
  return new RuleFilterMirrorTrafficArn<Partition>(parameters)
}

export interface SessionMirrorTrafficArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSessionMirrorTraffic: string
}
class SessionMirrorTrafficArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'traffic-mirror-session',
  `arn:${string}:ec2:${string}:${string}:traffic-mirror-session/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'traffic-mirror-session' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSessionMirrorTraffic: string
  constructor(parameters: SessionMirrorTrafficArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSessionMirrorTraffic = parameters.idSessionMirrorTraffic
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:traffic-mirror-session/${this.idSessionMirrorTraffic}` as const
  }
}
export type { SessionMirrorTrafficArn }
export function sessionMirrorTrafficArn<Partition extends ArnPartition = 'aws'>(
  parameters: SessionMirrorTrafficArnParameters<Partition>,
) {
  return new SessionMirrorTrafficArn<Partition>(parameters)
}

export interface TargetMirrorTrafficArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTargetMirrorTraffic: string
}
class TargetMirrorTrafficArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'traffic-mirror-target',
  `arn:${string}:ec2:${string}:${string}:traffic-mirror-target/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'traffic-mirror-target' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTargetMirrorTraffic: string
  constructor(parameters: TargetMirrorTrafficArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idTargetMirrorTraffic = parameters.idTargetMirrorTraffic
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:traffic-mirror-target/${this.idTargetMirrorTraffic}` as const
  }
}
export type { TargetMirrorTrafficArn }
export function targetMirrorTrafficArn<Partition extends ArnPartition = 'aws'>(
  parameters: TargetMirrorTrafficArnParameters<Partition>,
) {
  return new TargetMirrorTrafficArn<Partition>(parameters)
}

export interface AttachmentGatewayTransitArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAttachmentGatewayTransit: string
}
class AttachmentGatewayTransitArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'transit-gateway-attachment',
  `arn:${string}:ec2:${string}:${string}:transit-gateway-attachment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'transit-gateway-attachment' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAttachmentGatewayTransit: string
  constructor(parameters: AttachmentGatewayTransitArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAttachmentGatewayTransit = parameters.idAttachmentGatewayTransit
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:transit-gateway-attachment/${this.idAttachmentGatewayTransit}` as const
  }
}
export type { AttachmentGatewayTransitArn }
export function attachmentGatewayTransitArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AttachmentGatewayTransitArnParameters<Partition>) {
  return new AttachmentGatewayTransitArn<Partition>(parameters)
}

export interface PeerConnectGatewayTransitArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPeerConnectGatewayTransit: string
}
class PeerConnectGatewayTransitArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'transit-gateway-connect-peer',
  `arn:${string}:ec2:${string}:${string}:transit-gateway-connect-peer/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'transit-gateway-connect-peer' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPeerConnectGatewayTransit: string
  constructor(parameters: PeerConnectGatewayTransitArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPeerConnectGatewayTransit = parameters.idPeerConnectGatewayTransit
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:transit-gateway-connect-peer/${this.idPeerConnectGatewayTransit}` as const
  }
}
export type { PeerConnectGatewayTransitArn }
export function peerConnectGatewayTransitArn<
  Partition extends ArnPartition = 'aws',
>(parameters: PeerConnectGatewayTransitArnParameters<Partition>) {
  return new PeerConnectGatewayTransitArn<Partition>(parameters)
}

export interface GatewayTransitArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGatewayTransit: string
}
class GatewayTransitArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'transit-gateway',
  `arn:${string}:ec2:${string}:${string}:transit-gateway/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'transit-gateway' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGatewayTransit: string
  constructor(parameters: GatewayTransitArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGatewayTransit = parameters.idGatewayTransit
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:transit-gateway/${this.idGatewayTransit}` as const
  }
}
export type { GatewayTransitArn }
export function gatewayTransitArn<Partition extends ArnPartition = 'aws'>(
  parameters: GatewayTransitArnParameters<Partition>,
) {
  return new GatewayTransitArn<Partition>(parameters)
}

export interface DomainMulticastGatewayTransitArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDomainMulticastGatewayTransit: string
}
class DomainMulticastGatewayTransitArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'transit-gateway-multicast-domain',
  `arn:${string}:ec2:${string}:${string}:transit-gateway-multicast-domain/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'transit-gateway-multicast-domain' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDomainMulticastGatewayTransit: string
  constructor(
    parameters: DomainMulticastGatewayTransitArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDomainMulticastGatewayTransit =
      parameters.idDomainMulticastGatewayTransit
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:transit-gateway-multicast-domain/${this.idDomainMulticastGatewayTransit}` as const
  }
}
export type { DomainMulticastGatewayTransitArn }
export function domainMulticastGatewayTransitArn<
  Partition extends ArnPartition = 'aws',
>(parameters: DomainMulticastGatewayTransitArnParameters<Partition>) {
  return new DomainMulticastGatewayTransitArn<Partition>(parameters)
}

export interface TablePolicyGatewayTransitArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTablePolicyGatewayTransit: string
}
class TablePolicyGatewayTransitArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'transit-gateway-policy-table',
  `arn:${string}:ec2:${string}:${string}:transit-gateway-policy-table/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'transit-gateway-policy-table' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTablePolicyGatewayTransit: string
  constructor(parameters: TablePolicyGatewayTransitArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idTablePolicyGatewayTransit = parameters.idTablePolicyGatewayTransit
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:transit-gateway-policy-table/${this.idTablePolicyGatewayTransit}` as const
  }
}
export type { TablePolicyGatewayTransitArn }
export function tablePolicyGatewayTransitArn<
  Partition extends ArnPartition = 'aws',
>(parameters: TablePolicyGatewayTransitArnParameters<Partition>) {
  return new TablePolicyGatewayTransitArn<Partition>(parameters)
}

export interface AnnouncementTableRouteGatewayTransitArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAnnouncementTableRouteGatewayTransit: string
}
class AnnouncementTableRouteGatewayTransitArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'transit-gateway-route-table-announcement',
  `arn:${string}:ec2:${string}:${string}:transit-gateway-route-table-announcement/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'transit-gateway-route-table-announcement' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAnnouncementTableRouteGatewayTransit: string
  constructor(
    parameters: AnnouncementTableRouteGatewayTransitArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAnnouncementTableRouteGatewayTransit =
      parameters.idAnnouncementTableRouteGatewayTransit
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:transit-gateway-route-table-announcement/${this.idAnnouncementTableRouteGatewayTransit}` as const
  }
}
export type { AnnouncementTableRouteGatewayTransitArn }
export function announcementTableRouteGatewayTransitArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AnnouncementTableRouteGatewayTransitArnParameters<Partition>) {
  return new AnnouncementTableRouteGatewayTransitArn<Partition>(parameters)
}

export interface TableRouteGatewayTransitArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTableRouteGatewayTransit: string
}
class TableRouteGatewayTransitArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'transit-gateway-route-table',
  `arn:${string}:ec2:${string}:${string}:transit-gateway-route-table/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'transit-gateway-route-table' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTableRouteGatewayTransit: string
  constructor(parameters: TableRouteGatewayTransitArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idTableRouteGatewayTransit = parameters.idTableRouteGatewayTransit
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:transit-gateway-route-table/${this.idTableRouteGatewayTransit}` as const
  }
}
export type { TableRouteGatewayTransitArn }
export function tableRouteGatewayTransitArn<
  Partition extends ArnPartition = 'aws',
>(parameters: TableRouteGatewayTransitArnParameters<Partition>) {
  return new TableRouteGatewayTransitArn<Partition>(parameters)
}

export interface EndpointAccessVerifiedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEndpointAccessVerified: string
}
class EndpointAccessVerifiedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'verified-access-endpoint',
  `arn:${string}:ec2:${string}:${string}:verified-access-endpoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'verified-access-endpoint' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEndpointAccessVerified: string
  constructor(parameters: EndpointAccessVerifiedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idEndpointAccessVerified = parameters.idEndpointAccessVerified
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:verified-access-endpoint/${this.idEndpointAccessVerified}` as const
  }
}
export type { EndpointAccessVerifiedArn }
export function endpointAccessVerifiedArn<
  Partition extends ArnPartition = 'aws',
>(parameters: EndpointAccessVerifiedArnParameters<Partition>) {
  return new EndpointAccessVerifiedArn<Partition>(parameters)
}

export interface GroupAccessVerifiedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroupAccessVerified: string
}
class GroupAccessVerifiedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'verified-access-group',
  `arn:${string}:ec2:${string}:${string}:verified-access-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'verified-access-group' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroupAccessVerified: string
  constructor(parameters: GroupAccessVerifiedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGroupAccessVerified = parameters.idGroupAccessVerified
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:verified-access-group/${this.idGroupAccessVerified}` as const
  }
}
export type { GroupAccessVerifiedArn }
export function groupAccessVerifiedArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupAccessVerifiedArnParameters<Partition>,
) {
  return new GroupAccessVerifiedArn<Partition>(parameters)
}

export interface InstanceAccessVerifiedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstanceAccessVerified: string
}
class InstanceAccessVerifiedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'verified-access-instance',
  `arn:${string}:ec2:${string}:${string}:verified-access-instance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'verified-access-instance' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstanceAccessVerified: string
  constructor(parameters: InstanceAccessVerifiedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstanceAccessVerified = parameters.idInstanceAccessVerified
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:verified-access-instance/${this.idInstanceAccessVerified}` as const
  }
}
export type { InstanceAccessVerifiedArn }
export function instanceAccessVerifiedArn<
  Partition extends ArnPartition = 'aws',
>(parameters: InstanceAccessVerifiedArnParameters<Partition>) {
  return new InstanceAccessVerifiedArn<Partition>(parameters)
}

export interface PolicyAccessVerifiedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPolicyAccessVerified: string
}
class PolicyAccessVerifiedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'verified-access-policy',
  `arn:${string}:ec2:${string}:${string}:verified-access-policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'verified-access-policy' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPolicyAccessVerified: string
  constructor(parameters: PolicyAccessVerifiedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPolicyAccessVerified = parameters.idPolicyAccessVerified
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:verified-access-policy/${this.idPolicyAccessVerified}` as const
  }
}
export type { PolicyAccessVerifiedArn }
export function policyAccessVerifiedArn<Partition extends ArnPartition = 'aws'>(
  parameters: PolicyAccessVerifiedArnParameters<Partition>,
) {
  return new PolicyAccessVerifiedArn<Partition>(parameters)
}

export interface ProviderTrustAccessVerifiedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idProviderTrustAccessVerified: string
}
class ProviderTrustAccessVerifiedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'verified-access-trust-provider',
  `arn:${string}:ec2:${string}:${string}:verified-access-trust-provider/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'verified-access-trust-provider' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idProviderTrustAccessVerified: string
  constructor(parameters: ProviderTrustAccessVerifiedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idProviderTrustAccessVerified =
      parameters.idProviderTrustAccessVerified
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:verified-access-trust-provider/${this.idProviderTrustAccessVerified}` as const
  }
}
export type { ProviderTrustAccessVerifiedArn }
export function providerTrustAccessVerifiedArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ProviderTrustAccessVerifiedArnParameters<Partition>) {
  return new ProviderTrustAccessVerifiedArn<Partition>(parameters)
}

export interface VolumeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idVolume: string
}
class VolumeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'volume',
  `arn:${string}:ec2:${string}:${string}:volume/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'volume' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idVolume: string
  constructor(parameters: VolumeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idVolume = parameters.idVolume
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:volume/${this.idVolume}` as const
  }
}
export type { VolumeArn }
export function volumeArn<Partition extends ArnPartition = 'aws'>(
  parameters: VolumeArnParameters<Partition>,
) {
  return new VolumeArn<Partition>(parameters)
}

export interface ConnectionEndpointVpcArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConnectionEndpointVpc: string
}
class ConnectionEndpointVpcArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'vpc-endpoint-connection',
  `arn:${string}:ec2:${string}:${string}:vpc-endpoint-connection/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpc-endpoint-connection' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConnectionEndpointVpc: string
  constructor(parameters: ConnectionEndpointVpcArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idConnectionEndpointVpc = parameters.idConnectionEndpointVpc
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:vpc-endpoint-connection/${this.idConnectionEndpointVpc}` as const
  }
}
export type { ConnectionEndpointVpcArn }
export function connectionEndpointVpcArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ConnectionEndpointVpcArnParameters<Partition>) {
  return new ConnectionEndpointVpcArn<Partition>(parameters)
}

export interface EndpointVpcArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEndpointVpc: string
}
class EndpointVpcArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'vpc-endpoint',
  `arn:${string}:ec2:${string}:${string}:vpc-endpoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpc-endpoint' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEndpointVpc: string
  constructor(parameters: EndpointVpcArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idEndpointVpc = parameters.idEndpointVpc
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:vpc-endpoint/${this.idEndpointVpc}` as const
  }
}
export type { EndpointVpcArn }
export function endpointVpcArn<Partition extends ArnPartition = 'aws'>(
  parameters: EndpointVpcArnParameters<Partition>,
) {
  return new EndpointVpcArn<Partition>(parameters)
}

export interface ServiceEndpointVpcArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idServiceEndpointVpc: string
}
class ServiceEndpointVpcArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'vpc-endpoint-service',
  `arn:${string}:ec2:${string}:${string}:vpc-endpoint-service/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpc-endpoint-service' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idServiceEndpointVpc: string
  constructor(parameters: ServiceEndpointVpcArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idServiceEndpointVpc = parameters.idServiceEndpointVpc
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:vpc-endpoint-service/${this.idServiceEndpointVpc}` as const
  }
}
export type { ServiceEndpointVpcArn }
export function serviceEndpointVpcArn<Partition extends ArnPartition = 'aws'>(
  parameters: ServiceEndpointVpcArnParameters<Partition>,
) {
  return new ServiceEndpointVpcArn<Partition>(parameters)
}

export interface PermissionServiceEndpointVpcArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPermissionServiceEndpointVpc: string
}
class PermissionServiceEndpointVpcArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'vpc-endpoint-service-permission',
  `arn:${string}:ec2:${string}:${string}:vpc-endpoint-service-permission/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpc-endpoint-service-permission' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPermissionServiceEndpointVpc: string
  constructor(
    parameters: PermissionServiceEndpointVpcArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPermissionServiceEndpointVpc =
      parameters.idPermissionServiceEndpointVpc
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:vpc-endpoint-service-permission/${this.idPermissionServiceEndpointVpc}` as const
  }
}
export type { PermissionServiceEndpointVpcArn }
export function permissionServiceEndpointVpcArn<
  Partition extends ArnPartition = 'aws',
>(parameters: PermissionServiceEndpointVpcArnParameters<Partition>) {
  return new PermissionServiceEndpointVpcArn<Partition>(parameters)
}

export interface LogFlowVpcArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idLogFlowVpc: string
}
class LogFlowVpcArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'vpc-flow-log',
  `arn:${string}:ec2:${string}:${string}:vpc-flow-log/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpc-flow-log' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idLogFlowVpc: string
  constructor(parameters: LogFlowVpcArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idLogFlowVpc = parameters.idLogFlowVpc
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:vpc-flow-log/${this.idLogFlowVpc}` as const
  }
}
export type { LogFlowVpcArn }
export function logFlowVpcArn<Partition extends ArnPartition = 'aws'>(
  parameters: LogFlowVpcArnParameters<Partition>,
) {
  return new LogFlowVpcArn<Partition>(parameters)
}

export interface VpcArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idVpc: string
}
class VpcArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'vpc',
  `arn:${string}:ec2:${string}:${string}:vpc/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpc' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idVpc: string
  constructor(parameters: VpcArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idVpc = parameters.idVpc
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:vpc/${this.idVpc}` as const
  }
}
export type { VpcArn }
export function vpcArn<Partition extends ArnPartition = 'aws'>(
  parameters: VpcArnParameters<Partition>,
) {
  return new VpcArn<Partition>(parameters)
}

export interface ConnectionPeeringVpcArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConnectionPeeringVpc: string
}
class ConnectionPeeringVpcArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'vpc-peering-connection',
  `arn:${string}:ec2:${string}:${string}:vpc-peering-connection/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpc-peering-connection' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConnectionPeeringVpc: string
  constructor(parameters: ConnectionPeeringVpcArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idConnectionPeeringVpc = parameters.idConnectionPeeringVpc
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:vpc-peering-connection/${this.idConnectionPeeringVpc}` as const
  }
}
export type { ConnectionPeeringVpcArn }
export function connectionPeeringVpcArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConnectionPeeringVpcArnParameters<Partition>,
) {
  return new ConnectionPeeringVpcArn<Partition>(parameters)
}

export interface TypeDeviceConnectionVpnArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTypeDeviceConnectionVpn: string
}
class TypeDeviceConnectionVpnArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'vpn-connection-device-type',
  `arn:${string}:ec2:${string}:${string}:vpn-connection-device-type/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpn-connection-device-type' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTypeDeviceConnectionVpn: string
  constructor(parameters: TypeDeviceConnectionVpnArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idTypeDeviceConnectionVpn = parameters.idTypeDeviceConnectionVpn
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:vpn-connection-device-type/${this.idTypeDeviceConnectionVpn}` as const
  }
}
export type { TypeDeviceConnectionVpnArn }
export function typeDeviceConnectionVpnArn<
  Partition extends ArnPartition = 'aws',
>(parameters: TypeDeviceConnectionVpnArnParameters<Partition>) {
  return new TypeDeviceConnectionVpnArn<Partition>(parameters)
}

export interface ConnectionVpnArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConnectionVpn: string
}
class ConnectionVpnArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'vpn-connection',
  `arn:${string}:ec2:${string}:${string}:vpn-connection/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpn-connection' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConnectionVpn: string
  constructor(parameters: ConnectionVpnArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idConnectionVpn = parameters.idConnectionVpn
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:vpn-connection/${this.idConnectionVpn}` as const
  }
}
export type { ConnectionVpnArn }
export function connectionVpnArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConnectionVpnArnParameters<Partition>,
) {
  return new ConnectionVpnArn<Partition>(parameters)
}

export interface GatewayVpnArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGatewayVpn: string
}
class GatewayVpnArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'vpn-gateway',
  `arn:${string}:ec2:${string}:${string}:vpn-gateway/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpn-gateway' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGatewayVpn: string
  constructor(parameters: GatewayVpnArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGatewayVpn = parameters.idGatewayVpn
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:vpn-gateway/${this.idGatewayVpn}` as const
  }
}
export type { GatewayVpnArn }
export function gatewayVpnArn<Partition extends ArnPartition = 'aws'>(
  parameters: GatewayVpnArnParameters<Partition>,
) {
  return new GatewayVpnArn<Partition>(parameters)
}
