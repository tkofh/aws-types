export interface ElasticIpArnParameters {
  partition?: string | undefined
  region: string
  account: string
  allocationId: string
}
export type ElasticIpArn = `arn:${string}:ec2:${string}:${string}:elastic-ip/${string}`
export function elasticIpArn(parameters: ElasticIpArnParameters): ElasticIpArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:elastic-ip/${parameters.allocationId}`
}

export interface CapacityReservationFleetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  capacityReservationFleetId: string
}
export type CapacityReservationFleetArn = `arn:${string}:ec2:${string}:${string}:capacity-reservation-fleet/${string}`
export function capacityReservationFleetArn(parameters: CapacityReservationFleetArnParameters): CapacityReservationFleetArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:capacity-reservation-fleet/${parameters.capacityReservationFleetId}`
}

export interface CapacityReservationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  capacityReservationId: string
}
export type CapacityReservationArn = `arn:${string}:ec2:${string}:${string}:capacity-reservation/${string}`
export function capacityReservationArn(parameters: CapacityReservationArnParameters): CapacityReservationArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:capacity-reservation/${parameters.capacityReservationId}`
}

export interface CarrierGatewayArnParameters {
  partition?: string | undefined
  region: string
  account: string
  carrierGatewayId: string
}
export type CarrierGatewayArn = `arn:${string}:ec2:${string}:${string}:carrier-gateway/${string}`
export function carrierGatewayArn(parameters: CarrierGatewayArnParameters): CarrierGatewayArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:carrier-gateway/${parameters.carrierGatewayId}`
}

export interface CertificateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  certificateId: string
}
export type CertificateArn = `arn:${string}:acm:${string}:${string}:certificate/${string}`
export function certificateArn(parameters: CertificateArnParameters): CertificateArn {
  return `arn:${parameters.partition ?? ''}:acm:${parameters.region}:${parameters.account}:certificate/${parameters.certificateId}`
}

export interface ClientVpnEndpointArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clientVpnEndpointId: string
}
export type ClientVpnEndpointArn = `arn:${string}:ec2:${string}:${string}:client-vpn-endpoint/${string}`
export function clientVpnEndpointArn(parameters: ClientVpnEndpointArnParameters): ClientVpnEndpointArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:client-vpn-endpoint/${parameters.clientVpnEndpointId}`
}

export interface CustomerGatewayArnParameters {
  partition?: string | undefined
  region: string
  account: string
  customerGatewayId: string
}
export type CustomerGatewayArn = `arn:${string}:ec2:${string}:${string}:customer-gateway/${string}`
export function customerGatewayArn(parameters: CustomerGatewayArnParameters): CustomerGatewayArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:customer-gateway/${parameters.customerGatewayId}`
}

export interface DedicatedHostArnParameters {
  partition?: string | undefined
  region: string
  account: string
  dedicatedHostId: string
}
export type DedicatedHostArn = `arn:${string}:ec2:${string}:${string}:dedicated-host/${string}`
export function dedicatedHostArn(parameters: DedicatedHostArnParameters): DedicatedHostArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:dedicated-host/${parameters.dedicatedHostId}`
}

export interface DhcpOptionsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  dhcpOptionsId: string
}
export type DhcpOptionsArn = `arn:${string}:ec2:${string}:${string}:dhcp-options/${string}`
export function dhcpOptionsArn(parameters: DhcpOptionsArnParameters): DhcpOptionsArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:dhcp-options/${parameters.dhcpOptionsId}`
}

export interface EgressOnlyInternetGatewayArnParameters {
  partition?: string | undefined
  region: string
  account: string
  egressOnlyInternetGatewayId: string
}
export type EgressOnlyInternetGatewayArn = `arn:${string}:ec2:${string}:${string}:egress-only-internet-gateway/${string}`
export function egressOnlyInternetGatewayArn(parameters: EgressOnlyInternetGatewayArnParameters): EgressOnlyInternetGatewayArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:egress-only-internet-gateway/${parameters.egressOnlyInternetGatewayId}`
}

export interface ElasticGpuArnParameters {
  partition?: string | undefined
  region: string
  account: string
  elasticGpuId: string
}
export type ElasticGpuArn = `arn:${string}:ec2:${string}:${string}:elastic-gpu/${string}`
export function elasticGpuArn(parameters: ElasticGpuArnParameters): ElasticGpuArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:elastic-gpu/${parameters.elasticGpuId}`
}

export interface ElasticInferenceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  acceleratorId: string
}
export type ElasticInferenceArn = `arn:${string}:elastic-inference:${string}:${string}:elastic-inference-accelerator/${string}`
export function elasticInferenceArn(parameters: ElasticInferenceArnParameters): ElasticInferenceArn {
  return `arn:${parameters.partition ?? ''}:elastic-inference:${parameters.region}:${parameters.account}:elastic-inference-accelerator/${parameters.acceleratorId}`
}

export interface ExportImageTaskArnParameters {
  partition?: string | undefined
  region: string
  account: string
  exportImageTaskId: string
}
export type ExportImageTaskArn = `arn:${string}:ec2:${string}:${string}:export-image-task/${string}`
export function exportImageTaskArn(parameters: ExportImageTaskArnParameters): ExportImageTaskArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:export-image-task/${parameters.exportImageTaskId}`
}

export interface ExportInstanceTaskArnParameters {
  partition?: string | undefined
  region: string
  account: string
  exportTaskId: string
}
export type ExportInstanceTaskArn = `arn:${string}:ec2:${string}:${string}:export-instance-task/${string}`
export function exportInstanceTaskArn(parameters: ExportInstanceTaskArnParameters): ExportInstanceTaskArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:export-instance-task/${parameters.exportTaskId}`
}

export interface FleetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  fleetId: string
}
export type FleetArn = `arn:${string}:ec2:${string}:${string}:fleet/${string}`
export function fleetArn(parameters: FleetArnParameters): FleetArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:fleet/${parameters.fleetId}`
}

export interface FpgaImageArnParameters {
  partition?: string | undefined
  region: string
  account: string
  fpgaImageId: string
}
export type FpgaImageArn = `arn:${string}:ec2:${string}:${string}:fpga-image/${string}`
export function fpgaImageArn(parameters: FpgaImageArnParameters): FpgaImageArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:fpga-image/${parameters.fpgaImageId}`
}

export interface HostReservationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  hostReservationId: string
}
export type HostReservationArn = `arn:${string}:ec2:${string}:${string}:host-reservation/${string}`
export function hostReservationArn(parameters: HostReservationArnParameters): HostReservationArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:host-reservation/${parameters.hostReservationId}`
}

export interface ImageArnParameters {
  partition?: string | undefined
  region: string
  imageId: string
}
export type ImageArn = `arn:${string}:ec2:${string}::image/${string}`
export function imageArn(parameters: ImageArnParameters): ImageArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}::image/${parameters.imageId}`
}

export interface ImportImageTaskArnParameters {
  partition?: string | undefined
  region: string
  account: string
  importImageTaskId: string
}
export type ImportImageTaskArn = `arn:${string}:ec2:${string}:${string}:import-image-task/${string}`
export function importImageTaskArn(parameters: ImportImageTaskArnParameters): ImportImageTaskArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:import-image-task/${parameters.importImageTaskId}`
}

export interface ImportSnapshotTaskArnParameters {
  partition?: string | undefined
  region: string
  account: string
  importSnapshotTaskId: string
}
export type ImportSnapshotTaskArn = `arn:${string}:ec2:${string}:${string}:import-snapshot-task/${string}`
export function importSnapshotTaskArn(parameters: ImportSnapshotTaskArnParameters): ImportSnapshotTaskArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:import-snapshot-task/${parameters.importSnapshotTaskId}`
}

export interface InstanceConnectEndpointArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceConnectEndpointId: string
}
export type InstanceConnectEndpointArn = `arn:${string}:ec2:${string}:${string}:instance-connect-endpoint/${string}`
export function instanceConnectEndpointArn(parameters: InstanceConnectEndpointArnParameters): InstanceConnectEndpointArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:instance-connect-endpoint/${parameters.instanceConnectEndpointId}`
}

export interface InstanceEventWindowArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceEventWindowId: string
}
export type InstanceEventWindowArn = `arn:${string}:ec2:${string}:${string}:instance-event-window/${string}`
export function instanceEventWindowArn(parameters: InstanceEventWindowArnParameters): InstanceEventWindowArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:instance-event-window/${parameters.instanceEventWindowId}`
}

export interface InstanceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
}
export type InstanceArn = `arn:${string}:ec2:${string}:${string}:instance/${string}`
export function instanceArn(parameters: InstanceArnParameters): InstanceArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}`
}

export interface InternetGatewayArnParameters {
  partition?: string | undefined
  region: string
  account: string
  internetGatewayId: string
}
export type InternetGatewayArn = `arn:${string}:ec2:${string}:${string}:internet-gateway/${string}`
export function internetGatewayArn(parameters: InternetGatewayArnParameters): InternetGatewayArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:internet-gateway/${parameters.internetGatewayId}`
}

export interface IpamExternalResourceVerificationTokenArnParameters {
  partition?: string | undefined
  account: string
  ipamExternalResourceVerificationTokenId: string
}
export type IpamExternalResourceVerificationTokenArn = `arn:${string}:ec2::${string}:ipam-external-resource-verification-token/${string}`
export function ipamExternalResourceVerificationTokenArn(parameters: IpamExternalResourceVerificationTokenArnParameters): IpamExternalResourceVerificationTokenArn {
  return `arn:${parameters.partition ?? ''}:ec2::${parameters.account}:ipam-external-resource-verification-token/${parameters.ipamExternalResourceVerificationTokenId}`
}

export interface IpamArnParameters {
  partition?: string | undefined
  account: string
  ipamId: string
}
export type IpamArn = `arn:${string}:ec2::${string}:ipam/${string}`
export function ipamArn(parameters: IpamArnParameters): IpamArn {
  return `arn:${parameters.partition ?? ''}:ec2::${parameters.account}:ipam/${parameters.ipamId}`
}

export interface IpamPoolArnParameters {
  partition?: string | undefined
  account: string
  ipamPoolId: string
}
export type IpamPoolArn = `arn:${string}:ec2::${string}:ipam-pool/${string}`
export function ipamPoolArn(parameters: IpamPoolArnParameters): IpamPoolArn {
  return `arn:${parameters.partition ?? ''}:ec2::${parameters.account}:ipam-pool/${parameters.ipamPoolId}`
}

export interface IpamResourceDiscoveryAssociationArnParameters {
  partition?: string | undefined
  account: string
  ipamResourceDiscoveryAssociationId: string
}
export type IpamResourceDiscoveryAssociationArn = `arn:${string}:ec2::${string}:ipam-resource-discovery-association/${string}`
export function ipamResourceDiscoveryAssociationArn(parameters: IpamResourceDiscoveryAssociationArnParameters): IpamResourceDiscoveryAssociationArn {
  return `arn:${parameters.partition ?? ''}:ec2::${parameters.account}:ipam-resource-discovery-association/${parameters.ipamResourceDiscoveryAssociationId}`
}

export interface IpamResourceDiscoveryArnParameters {
  partition?: string | undefined
  account: string
  ipamResourceDiscoveryId: string
}
export type IpamResourceDiscoveryArn = `arn:${string}:ec2::${string}:ipam-resource-discovery/${string}`
export function ipamResourceDiscoveryArn(parameters: IpamResourceDiscoveryArnParameters): IpamResourceDiscoveryArn {
  return `arn:${parameters.partition ?? ''}:ec2::${parameters.account}:ipam-resource-discovery/${parameters.ipamResourceDiscoveryId}`
}

export interface IpamScopeArnParameters {
  partition?: string | undefined
  account: string
  ipamScopeId: string
}
export type IpamScopeArn = `arn:${string}:ec2::${string}:ipam-scope/${string}`
export function ipamScopeArn(parameters: IpamScopeArnParameters): IpamScopeArn {
  return `arn:${parameters.partition ?? ''}:ec2::${parameters.account}:ipam-scope/${parameters.ipamScopeId}`
}

export interface CoipPoolArnParameters {
  partition?: string | undefined
  region: string
  account: string
  ipv4PoolCoipId: string
}
export type CoipPoolArn = `arn:${string}:ec2:${string}:${string}:coip-pool/${string}`
export function coipPoolArn(parameters: CoipPoolArnParameters): CoipPoolArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:coip-pool/${parameters.ipv4PoolCoipId}`
}

export interface Ipv4poolEc2ArnParameters {
  partition?: string | undefined
  region: string
  account: string
  ipv4PoolEc2Id: string
}
export type Ipv4poolEc2Arn = `arn:${string}:ec2:${string}:${string}:ipv4pool-ec2/${string}`
export function ipv4poolEc2Arn(parameters: Ipv4poolEc2ArnParameters): Ipv4poolEc2Arn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:ipv4pool-ec2/${parameters.ipv4PoolEc2Id}`
}

export interface Ipv6poolEc2ArnParameters {
  partition?: string | undefined
  region: string
  account: string
  ipv6PoolEc2Id: string
}
export type Ipv6poolEc2Arn = `arn:${string}:ec2:${string}:${string}:ipv6pool-ec2/${string}`
export function ipv6poolEc2Arn(parameters: Ipv6poolEc2ArnParameters): Ipv6poolEc2Arn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:ipv6pool-ec2/${parameters.ipv6PoolEc2Id}`
}

export interface KeyPairArnParameters {
  partition?: string | undefined
  region: string
  account: string
  keyPairName: string
}
export type KeyPairArn = `arn:${string}:ec2:${string}:${string}:key-pair/${string}`
export function keyPairArn(parameters: KeyPairArnParameters): KeyPairArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:key-pair/${parameters.keyPairName}`
}

export interface LaunchTemplateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  launchTemplateId: string
}
export type LaunchTemplateArn = `arn:${string}:ec2:${string}:${string}:launch-template/${string}`
export function launchTemplateArn(parameters: LaunchTemplateArnParameters): LaunchTemplateArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:launch-template/${parameters.launchTemplateId}`
}

export interface LicenseConfigurationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  licenseConfigurationId: string
}
export type LicenseConfigurationArn = `arn:${string}:license-manager:${string}:${string}:license-configuration:${string}`
export function licenseConfigurationArn(parameters: LicenseConfigurationArnParameters): LicenseConfigurationArn {
  return `arn:${parameters.partition ?? ''}:license-manager:${parameters.region}:${parameters.account}:license-configuration:${parameters.licenseConfigurationId}`
}

export interface LocalGatewayArnParameters {
  partition?: string | undefined
  region: string
  account: string
  localGatewayId: string
}
export type LocalGatewayArn = `arn:${string}:ec2:${string}:${string}:local-gateway/${string}`
export function localGatewayArn(parameters: LocalGatewayArnParameters): LocalGatewayArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:local-gateway/${parameters.localGatewayId}`
}

export interface LocalGatewayRouteTableVirtualInterfaceGroupAssociationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  localGatewayRouteTableVirtualInterfaceGroupAssociationId: string
}
export type LocalGatewayRouteTableVirtualInterfaceGroupAssociationArn = `arn:${string}:ec2:${string}:${string}:local-gateway-route-table-virtual-interface-group-association/${string}`
export function localGatewayRouteTableVirtualInterfaceGroupAssociationArn(parameters: LocalGatewayRouteTableVirtualInterfaceGroupAssociationArnParameters): LocalGatewayRouteTableVirtualInterfaceGroupAssociationArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:local-gateway-route-table-virtual-interface-group-association/${parameters.localGatewayRouteTableVirtualInterfaceGroupAssociationId}`
}

export interface LocalGatewayRouteTableVpcAssociationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  localGatewayRouteTableVpcAssociationId: string
}
export type LocalGatewayRouteTableVpcAssociationArn = `arn:${string}:ec2:${string}:${string}:local-gateway-route-table-vpc-association/${string}`
export function localGatewayRouteTableVpcAssociationArn(parameters: LocalGatewayRouteTableVpcAssociationArnParameters): LocalGatewayRouteTableVpcAssociationArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:local-gateway-route-table-vpc-association/${parameters.localGatewayRouteTableVpcAssociationId}`
}

export interface LocalGatewayRouteTableArnParameters {
  partition?: string | undefined
  region: string
  account: string
  localGatewayRoutetableId: string
}
export type LocalGatewayRouteTableArn = `arn:${string}:ec2:${string}:${string}:local-gateway-route-table/${string}`
export function localGatewayRouteTableArn(parameters: LocalGatewayRouteTableArnParameters): LocalGatewayRouteTableArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:local-gateway-route-table/${parameters.localGatewayRoutetableId}`
}

export interface LocalGatewayVirtualInterfaceGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  localGatewayVirtualInterfaceGroupId: string
}
export type LocalGatewayVirtualInterfaceGroupArn = `arn:${string}:ec2:${string}:${string}:local-gateway-virtual-interface-group/${string}`
export function localGatewayVirtualInterfaceGroupArn(parameters: LocalGatewayVirtualInterfaceGroupArnParameters): LocalGatewayVirtualInterfaceGroupArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:local-gateway-virtual-interface-group/${parameters.localGatewayVirtualInterfaceGroupId}`
}

export interface LocalGatewayVirtualInterfaceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  localGatewayVirtualInterfaceId: string
}
export type LocalGatewayVirtualInterfaceArn = `arn:${string}:ec2:${string}:${string}:local-gateway-virtual-interface/${string}`
export function localGatewayVirtualInterfaceArn(parameters: LocalGatewayVirtualInterfaceArnParameters): LocalGatewayVirtualInterfaceArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:local-gateway-virtual-interface/${parameters.localGatewayVirtualInterfaceId}`
}

export interface NatgatewayArnParameters {
  partition?: string | undefined
  region: string
  account: string
  natGatewayId: string
}
export type NatgatewayArn = `arn:${string}:ec2:${string}:${string}:natgateway/${string}`
export function natgatewayArn(parameters: NatgatewayArnParameters): NatgatewayArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:natgateway/${parameters.natGatewayId}`
}

export interface NetworkAclArnParameters {
  partition?: string | undefined
  region: string
  account: string
  naclId: string
}
export type NetworkAclArn = `arn:${string}:ec2:${string}:${string}:network-acl/${string}`
export function networkAclArn(parameters: NetworkAclArnParameters): NetworkAclArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:network-acl/${parameters.naclId}`
}

export interface NetworkInsightsAccessScopeAnalysisArnParameters {
  partition?: string | undefined
  region: string
  account: string
  networkInsightsAccessScopeAnalysisId: string
}
export type NetworkInsightsAccessScopeAnalysisArn = `arn:${string}:ec2:${string}:${string}:network-insights-access-scope-analysis/${string}`
export function networkInsightsAccessScopeAnalysisArn(parameters: NetworkInsightsAccessScopeAnalysisArnParameters): NetworkInsightsAccessScopeAnalysisArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:network-insights-access-scope-analysis/${parameters.networkInsightsAccessScopeAnalysisId}`
}

export interface NetworkInsightsAccessScopeArnParameters {
  partition?: string | undefined
  region: string
  account: string
  networkInsightsAccessScopeId: string
}
export type NetworkInsightsAccessScopeArn = `arn:${string}:ec2:${string}:${string}:network-insights-access-scope/${string}`
export function networkInsightsAccessScopeArn(parameters: NetworkInsightsAccessScopeArnParameters): NetworkInsightsAccessScopeArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:network-insights-access-scope/${parameters.networkInsightsAccessScopeId}`
}

export interface NetworkInsightsAnalysisArnParameters {
  partition?: string | undefined
  region: string
  account: string
  networkInsightsAnalysisId: string
}
export type NetworkInsightsAnalysisArn = `arn:${string}:ec2:${string}:${string}:network-insights-analysis/${string}`
export function networkInsightsAnalysisArn(parameters: NetworkInsightsAnalysisArnParameters): NetworkInsightsAnalysisArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:network-insights-analysis/${parameters.networkInsightsAnalysisId}`
}

export interface NetworkInsightsPathArnParameters {
  partition?: string | undefined
  region: string
  account: string
  networkInsightsPathId: string
}
export type NetworkInsightsPathArn = `arn:${string}:ec2:${string}:${string}:network-insights-path/${string}`
export function networkInsightsPathArn(parameters: NetworkInsightsPathArnParameters): NetworkInsightsPathArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:network-insights-path/${parameters.networkInsightsPathId}`
}

export interface NetworkInterfaceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  networkInterfaceId: string
}
export type NetworkInterfaceArn = `arn:${string}:ec2:${string}:${string}:network-interface/${string}`
export function networkInterfaceArn(parameters: NetworkInterfaceArnParameters): NetworkInterfaceArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:network-interface/${parameters.networkInterfaceId}`
}

export interface PlacementGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  placementGroupName: string
}
export type PlacementGroupArn = `arn:${string}:ec2:${string}:${string}:placement-group/${string}`
export function placementGroupArn(parameters: PlacementGroupArnParameters): PlacementGroupArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:placement-group/${parameters.placementGroupName}`
}

export interface PrefixListArnParameters {
  partition?: string | undefined
  region: string
  account: string
  prefixListId: string
}
export type PrefixListArn = `arn:${string}:ec2:${string}:${string}:prefix-list/${string}`
export function prefixListArn(parameters: PrefixListArnParameters): PrefixListArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:prefix-list/${parameters.prefixListId}`
}

export interface ReplaceRootVolumeTaskArnParameters {
  partition?: string | undefined
  region: string
  account: string
  replaceRootVolumeTaskId: string
}
export type ReplaceRootVolumeTaskArn = `arn:${string}:ec2:${string}:${string}:replace-root-volume-task/${string}`
export function replaceRootVolumeTaskArn(parameters: ReplaceRootVolumeTaskArnParameters): ReplaceRootVolumeTaskArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:replace-root-volume-task/${parameters.replaceRootVolumeTaskId}`
}

export interface ReservedInstancesArnParameters {
  partition?: string | undefined
  region: string
  account: string
  reservationId: string
}
export type ReservedInstancesArn = `arn:${string}:ec2:${string}:${string}:reserved-instances/${string}`
export function reservedInstancesArn(parameters: ReservedInstancesArnParameters): ReservedInstancesArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:reserved-instances/${parameters.reservationId}`
}

export interface GroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  groupName: string
}
export type GroupArn = `arn:${string}:resource-groups:${string}:${string}:group/${string}`
export function groupArn(parameters: GroupArnParameters): GroupArn {
  return `arn:${parameters.partition ?? ''}:resource-groups:${parameters.region}:${parameters.account}:group/${parameters.groupName}`
}

export interface RoleArnParameters {
  partition?: string | undefined
  account: string
  roleNameWithPath: string
}
export type RoleArn = `arn:${string}:iam::${string}:role/${string}`
export function roleArn(parameters: RoleArnParameters): RoleArn {
  return `arn:${parameters.partition ?? ''}:iam::${parameters.account}:role/${parameters.roleNameWithPath}`
}

export interface RouteTableArnParameters {
  partition?: string | undefined
  region: string
  account: string
  routeTableId: string
}
export type RouteTableArn = `arn:${string}:ec2:${string}:${string}:route-table/${string}`
export function routeTableArn(parameters: RouteTableArnParameters): RouteTableArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:route-table/${parameters.routeTableId}`
}

export interface SecurityGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  securityGroupId: string
}
export type SecurityGroupArn = `arn:${string}:ec2:${string}:${string}:security-group/${string}`
export function securityGroupArn(parameters: SecurityGroupArnParameters): SecurityGroupArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:security-group/${parameters.securityGroupId}`
}

export interface SecurityGroupRuleArnParameters {
  partition?: string | undefined
  region: string
  account: string
  securityGroupRuleId: string
}
export type SecurityGroupRuleArn = `arn:${string}:ec2:${string}:${string}:security-group-rule/${string}`
export function securityGroupRuleArn(parameters: SecurityGroupRuleArnParameters): SecurityGroupRuleArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:security-group-rule/${parameters.securityGroupRuleId}`
}

export interface SnapshotArnParameters {
  partition?: string | undefined
  region: string
  snapshotId: string
}
export type SnapshotArn = `arn:${string}:ec2:${string}::snapshot/${string}`
export function snapshotArn(parameters: SnapshotArnParameters): SnapshotArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}::snapshot/${parameters.snapshotId}`
}

export interface SpotFleetRequestArnParameters {
  partition?: string | undefined
  region: string
  account: string
  spotFleetRequestId: string
}
export type SpotFleetRequestArn = `arn:${string}:ec2:${string}:${string}:spot-fleet-request/${string}`
export function spotFleetRequestArn(parameters: SpotFleetRequestArnParameters): SpotFleetRequestArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:spot-fleet-request/${parameters.spotFleetRequestId}`
}

export interface SpotInstancesRequestArnParameters {
  partition?: string | undefined
  region: string
  account: string
  spotInstanceRequestId: string
}
export type SpotInstancesRequestArn = `arn:${string}:ec2:${string}:${string}:spot-instances-request/${string}`
export function spotInstancesRequestArn(parameters: SpotInstancesRequestArnParameters): SpotInstancesRequestArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:spot-instances-request/${parameters.spotInstanceRequestId}`
}

export interface SubnetCidrReservationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  subnetCidrReservationId: string
}
export type SubnetCidrReservationArn = `arn:${string}:ec2:${string}:${string}:subnet-cidr-reservation/${string}`
export function subnetCidrReservationArn(parameters: SubnetCidrReservationArnParameters): SubnetCidrReservationArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:subnet-cidr-reservation/${parameters.subnetCidrReservationId}`
}

export interface SubnetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  subnetId: string
}
export type SubnetArn = `arn:${string}:ec2:${string}:${string}:subnet/${string}`
export function subnetArn(parameters: SubnetArnParameters): SubnetArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:subnet/${parameters.subnetId}`
}

export interface TrafficMirrorFilterArnParameters {
  partition?: string | undefined
  region: string
  account: string
  trafficMirrorFilterId: string
}
export type TrafficMirrorFilterArn = `arn:${string}:ec2:${string}:${string}:traffic-mirror-filter/${string}`
export function trafficMirrorFilterArn(parameters: TrafficMirrorFilterArnParameters): TrafficMirrorFilterArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:traffic-mirror-filter/${parameters.trafficMirrorFilterId}`
}

export interface TrafficMirrorFilterRuleArnParameters {
  partition?: string | undefined
  region: string
  account: string
  trafficMirrorFilterRuleId: string
}
export type TrafficMirrorFilterRuleArn = `arn:${string}:ec2:${string}:${string}:traffic-mirror-filter-rule/${string}`
export function trafficMirrorFilterRuleArn(parameters: TrafficMirrorFilterRuleArnParameters): TrafficMirrorFilterRuleArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:traffic-mirror-filter-rule/${parameters.trafficMirrorFilterRuleId}`
}

export interface TrafficMirrorSessionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  trafficMirrorSessionId: string
}
export type TrafficMirrorSessionArn = `arn:${string}:ec2:${string}:${string}:traffic-mirror-session/${string}`
export function trafficMirrorSessionArn(parameters: TrafficMirrorSessionArnParameters): TrafficMirrorSessionArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:traffic-mirror-session/${parameters.trafficMirrorSessionId}`
}

export interface TrafficMirrorTargetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  trafficMirrorTargetId: string
}
export type TrafficMirrorTargetArn = `arn:${string}:ec2:${string}:${string}:traffic-mirror-target/${string}`
export function trafficMirrorTargetArn(parameters: TrafficMirrorTargetArnParameters): TrafficMirrorTargetArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:traffic-mirror-target/${parameters.trafficMirrorTargetId}`
}

export interface TransitGatewayAttachmentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  transitGatewayAttachmentId: string
}
export type TransitGatewayAttachmentArn = `arn:${string}:ec2:${string}:${string}:transit-gateway-attachment/${string}`
export function transitGatewayAttachmentArn(parameters: TransitGatewayAttachmentArnParameters): TransitGatewayAttachmentArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:transit-gateway-attachment/${parameters.transitGatewayAttachmentId}`
}

export interface TransitGatewayConnectPeerArnParameters {
  partition?: string | undefined
  region: string
  account: string
  transitGatewayConnectPeerId: string
}
export type TransitGatewayConnectPeerArn = `arn:${string}:ec2:${string}:${string}:transit-gateway-connect-peer/${string}`
export function transitGatewayConnectPeerArn(parameters: TransitGatewayConnectPeerArnParameters): TransitGatewayConnectPeerArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:transit-gateway-connect-peer/${parameters.transitGatewayConnectPeerId}`
}

export interface TransitGatewayArnParameters {
  partition?: string | undefined
  region: string
  account: string
  transitGatewayId: string
}
export type TransitGatewayArn = `arn:${string}:ec2:${string}:${string}:transit-gateway/${string}`
export function transitGatewayArn(parameters: TransitGatewayArnParameters): TransitGatewayArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:transit-gateway/${parameters.transitGatewayId}`
}

export interface TransitGatewayMulticastDomainArnParameters {
  partition?: string | undefined
  region: string
  account: string
  transitGatewayMulticastDomainId: string
}
export type TransitGatewayMulticastDomainArn = `arn:${string}:ec2:${string}:${string}:transit-gateway-multicast-domain/${string}`
export function transitGatewayMulticastDomainArn(parameters: TransitGatewayMulticastDomainArnParameters): TransitGatewayMulticastDomainArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:transit-gateway-multicast-domain/${parameters.transitGatewayMulticastDomainId}`
}

export interface TransitGatewayPolicyTableArnParameters {
  partition?: string | undefined
  region: string
  account: string
  transitGatewayPolicyTableId: string
}
export type TransitGatewayPolicyTableArn = `arn:${string}:ec2:${string}:${string}:transit-gateway-policy-table/${string}`
export function transitGatewayPolicyTableArn(parameters: TransitGatewayPolicyTableArnParameters): TransitGatewayPolicyTableArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:transit-gateway-policy-table/${parameters.transitGatewayPolicyTableId}`
}

export interface TransitGatewayRouteTableAnnouncementArnParameters {
  partition?: string | undefined
  region: string
  account: string
  transitGatewayRouteTableAnnouncementId: string
}
export type TransitGatewayRouteTableAnnouncementArn = `arn:${string}:ec2:${string}:${string}:transit-gateway-route-table-announcement/${string}`
export function transitGatewayRouteTableAnnouncementArn(parameters: TransitGatewayRouteTableAnnouncementArnParameters): TransitGatewayRouteTableAnnouncementArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:transit-gateway-route-table-announcement/${parameters.transitGatewayRouteTableAnnouncementId}`
}

export interface TransitGatewayRouteTableArnParameters {
  partition?: string | undefined
  region: string
  account: string
  transitGatewayRouteTableId: string
}
export type TransitGatewayRouteTableArn = `arn:${string}:ec2:${string}:${string}:transit-gateway-route-table/${string}`
export function transitGatewayRouteTableArn(parameters: TransitGatewayRouteTableArnParameters): TransitGatewayRouteTableArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:transit-gateway-route-table/${parameters.transitGatewayRouteTableId}`
}

export interface VerifiedAccessEndpointArnParameters {
  partition?: string | undefined
  region: string
  account: string
  verifiedAccessEndpointId: string
}
export type VerifiedAccessEndpointArn = `arn:${string}:ec2:${string}:${string}:verified-access-endpoint/${string}`
export function verifiedAccessEndpointArn(parameters: VerifiedAccessEndpointArnParameters): VerifiedAccessEndpointArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:verified-access-endpoint/${parameters.verifiedAccessEndpointId}`
}

export interface VerifiedAccessGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  verifiedAccessGroupId: string
}
export type VerifiedAccessGroupArn = `arn:${string}:ec2:${string}:${string}:verified-access-group/${string}`
export function verifiedAccessGroupArn(parameters: VerifiedAccessGroupArnParameters): VerifiedAccessGroupArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:verified-access-group/${parameters.verifiedAccessGroupId}`
}

export interface VerifiedAccessInstanceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  verifiedAccessInstanceId: string
}
export type VerifiedAccessInstanceArn = `arn:${string}:ec2:${string}:${string}:verified-access-instance/${string}`
export function verifiedAccessInstanceArn(parameters: VerifiedAccessInstanceArnParameters): VerifiedAccessInstanceArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:verified-access-instance/${parameters.verifiedAccessInstanceId}`
}

export interface VerifiedAccessPolicyArnParameters {
  partition?: string | undefined
  region: string
  account: string
  verifiedAccessPolicyId: string
}
export type VerifiedAccessPolicyArn = `arn:${string}:ec2:${string}:${string}:verified-access-policy/${string}`
export function verifiedAccessPolicyArn(parameters: VerifiedAccessPolicyArnParameters): VerifiedAccessPolicyArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:verified-access-policy/${parameters.verifiedAccessPolicyId}`
}

export interface VerifiedAccessTrustProviderArnParameters {
  partition?: string | undefined
  region: string
  account: string
  verifiedAccessTrustProviderId: string
}
export type VerifiedAccessTrustProviderArn = `arn:${string}:ec2:${string}:${string}:verified-access-trust-provider/${string}`
export function verifiedAccessTrustProviderArn(parameters: VerifiedAccessTrustProviderArnParameters): VerifiedAccessTrustProviderArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:verified-access-trust-provider/${parameters.verifiedAccessTrustProviderId}`
}

export interface VolumeArnParameters {
  partition?: string | undefined
  region: string
  account: string
  volumeId: string
}
export type VolumeArn = `arn:${string}:ec2:${string}:${string}:volume/${string}`
export function volumeArn(parameters: VolumeArnParameters): VolumeArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:volume/${parameters.volumeId}`
}

export interface VpcEndpointConnectionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  vpcEndpointConnectionId: string
}
export type VpcEndpointConnectionArn = `arn:${string}:ec2:${string}:${string}:vpc-endpoint-connection/${string}`
export function vpcEndpointConnectionArn(parameters: VpcEndpointConnectionArnParameters): VpcEndpointConnectionArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:vpc-endpoint-connection/${parameters.vpcEndpointConnectionId}`
}

export interface VpcEndpointArnParameters {
  partition?: string | undefined
  region: string
  account: string
  vpcEndpointId: string
}
export type VpcEndpointArn = `arn:${string}:ec2:${string}:${string}:vpc-endpoint/${string}`
export function vpcEndpointArn(parameters: VpcEndpointArnParameters): VpcEndpointArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:vpc-endpoint/${parameters.vpcEndpointId}`
}

export interface VpcEndpointServiceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  vpcEndpointServiceId: string
}
export type VpcEndpointServiceArn = `arn:${string}:ec2:${string}:${string}:vpc-endpoint-service/${string}`
export function vpcEndpointServiceArn(parameters: VpcEndpointServiceArnParameters): VpcEndpointServiceArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:vpc-endpoint-service/${parameters.vpcEndpointServiceId}`
}

export interface VpcEndpointServicePermissionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  vpcEndpointServicePermissionId: string
}
export type VpcEndpointServicePermissionArn = `arn:${string}:ec2:${string}:${string}:vpc-endpoint-service-permission/${string}`
export function vpcEndpointServicePermissionArn(parameters: VpcEndpointServicePermissionArnParameters): VpcEndpointServicePermissionArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:vpc-endpoint-service-permission/${parameters.vpcEndpointServicePermissionId}`
}

export interface VpcFlowLogArnParameters {
  partition?: string | undefined
  region: string
  account: string
  vpcFlowLogId: string
}
export type VpcFlowLogArn = `arn:${string}:ec2:${string}:${string}:vpc-flow-log/${string}`
export function vpcFlowLogArn(parameters: VpcFlowLogArnParameters): VpcFlowLogArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:vpc-flow-log/${parameters.vpcFlowLogId}`
}

export interface VpcArnParameters {
  partition?: string | undefined
  region: string
  account: string
  vpcId: string
}
export type VpcArn = `arn:${string}:ec2:${string}:${string}:vpc/${string}`
export function vpcArn(parameters: VpcArnParameters): VpcArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:vpc/${parameters.vpcId}`
}

export interface VpcPeeringConnectionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  vpcPeeringConnectionId: string
}
export type VpcPeeringConnectionArn = `arn:${string}:ec2:${string}:${string}:vpc-peering-connection/${string}`
export function vpcPeeringConnectionArn(parameters: VpcPeeringConnectionArnParameters): VpcPeeringConnectionArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:vpc-peering-connection/${parameters.vpcPeeringConnectionId}`
}

export interface VpnConnectionDeviceTypeArnParameters {
  partition?: string | undefined
  region: string
  account: string
  vpnConnectionDeviceTypeId: string
}
export type VpnConnectionDeviceTypeArn = `arn:${string}:ec2:${string}:${string}:vpn-connection-device-type/${string}`
export function vpnConnectionDeviceTypeArn(parameters: VpnConnectionDeviceTypeArnParameters): VpnConnectionDeviceTypeArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:vpn-connection-device-type/${parameters.vpnConnectionDeviceTypeId}`
}

export interface VpnConnectionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  vpnConnectionId: string
}
export type VpnConnectionArn = `arn:${string}:ec2:${string}:${string}:vpn-connection/${string}`
export function vpnConnectionArn(parameters: VpnConnectionArnParameters): VpnConnectionArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:vpn-connection/${parameters.vpnConnectionId}`
}

export interface VpnGatewayArnParameters {
  partition?: string | undefined
  region: string
  account: string
  vpnGatewayId: string
}
export type VpnGatewayArn = `arn:${string}:ec2:${string}:${string}:vpn-gateway/${string}`
export function vpnGatewayArn(parameters: VpnGatewayArnParameters): VpnGatewayArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:vpn-gateway/${parameters.vpnGatewayId}`
}