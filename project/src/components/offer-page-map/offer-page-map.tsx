import 'leaflet/dist/leaflet.css';
import { Icon, Marker, LayerGroup } from 'leaflet';
import { useRef, useEffect } from 'react';
import { City, Offer, Point } from '../../types/types';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import useMap from '../../hooks/use-map';
import './offer-page-map.css';

type OfferPageMapProps = {
  currentOfferLocation: Point;
  currentCity: City;
  nearbyOffers: Offer[];
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [27, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [27, 39]
});

function OfferPageMap({ currentOfferLocation, currentCity, nearbyOffers }: OfferPageMapProps): JSX.Element {
  const { location: { latitude, longitude, zoom }} = currentCity;
  const { latitude: currentLatitude, longitude: currentLongitude } = currentOfferLocation;

  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity);
  const markerGroup = useRef(new LayerGroup());

  useEffect(() => {
    if (map) {
      markerGroup.current.addTo(map);
      markerGroup.current.clearLayers();
      map.setView({lat: latitude, lng: longitude}, zoom);

      const nearbyPoints = nearbyOffers?.map((nearbyOffer) => nearbyOffer.location);
      nearbyPoints.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });

        marker.setIcon(defaultCustomIcon).addTo(markerGroup.current);
      });

      const currentMarker = new Marker({
        lat: currentLatitude,
        lng: currentLongitude
      });

      currentMarker.setIcon(currentCustomIcon).addTo(markerGroup.current);
    }
  }, [latitude, longitude, zoom, currentLatitude, currentLongitude, map, nearbyOffers,]);

  return <div className="offer-page-map-container" ref={mapRef}></div>;
}

export default OfferPageMap;
