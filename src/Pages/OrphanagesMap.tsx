import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';

import mapMarkerImg from '../Images/Local.svg';
import '../Styles/Pages/orphanages-map.css';



const mapIcon = Leaflet.icon({

  iconUrl: mapMarkerImg,
  iconSize: [50, 60],
  iconAnchor: [25, 60],
  popupAnchor: [170, 2],

})


function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato</h2>
          <p>Muitas crianças estão esperando a sua Visita :)</p>
        </header>

        <footer>
          <strong>Guarda</strong>
          <span>Cubo</span>
        </footer>
      </aside>

      <Map
        center={[40.5462125, -7.3450345]}
        zoom={12}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          icon={mapIcon}
          position={[40.5462125, -7.3450345]}

        >

          <Popup closeButton={false} minWidth={240} maxwidth={240} className="map-popup">
            Lar das meninas
            <Link to="/orphanage/1">
              <FiArrowRight size={20} color="FFF" />

            </Link>
          </Popup>

        </Marker>
      </Map>

      <Link to="/orphanage/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  )
}

export default OrphanagesMap;