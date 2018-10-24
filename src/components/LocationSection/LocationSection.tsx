import leaflet from 'leaflet'
import React from 'react'
import { AttributionControl, Map, Popup, TileLayer } from 'react-leaflet'
import ContentContainer from '../ContentContainer/ContentContainer'
import SubHeadline from '../SubHeadline/SubHeadline'
import ExtendedMarker from './ExtendedMarker'

const position = { lat: 51.7207185, lng: 8.737179 }
const zoom = 15

const markerIcon = leaflet.icon({
  iconAnchor: [12, 12],
  iconSize: [24, 24],
  iconUrl: require('../Header/javascript.svg'),
})

const LocationSection: React.SFC = () => (
  <ContentContainer>
    <SubHeadline>Location</SubHeadline>
    <Map center={position} zoom={zoom} attributionControl={false}>
      <AttributionControl position="bottomright" prefix={false} />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <ExtendedMarker position={position} icon={markerIcon}>
        <Popup offset={[0, -6]}>
          dSPACE
          <br />
          Rathenaustraße 26
          <br />
          33102 Paderborn
        </Popup>
      </ExtendedMarker>
    </Map>
  </ContentContainer>
)

export default LocationSection
