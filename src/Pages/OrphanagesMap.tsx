import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import mapMarkerImg from '../Images/Local.svg';
import '../Styles/Pages/orphanages-map.css';
import MapIcon from '../utils/mapIcon';
import api from '../service/api';


interface Orphanage {

  id: number;
  latitude: number;
  longitude: number;
  name: string;
}


function OrphanagesMap() {

  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  console.log(orphanages);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    })
  }, []);


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

        {orphanages.map(orphanage => {
          return (
            <Marker
              key={orphanage.id}
              icon={MapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
            >

              <Popup closeButton={false} minWidth={240} maxwidth={240} className="map-popup">
                {orphanage.name}
                <Link to={`/orphanage/${orphanage.id}`}>
                  <FiArrowRight size={20} color="FFF" />
                </Link>
              </Popup>
            </Marker>
          )
        })}
      </Map>


      <Link to="/orphanage/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  )
}

export default OrphanagesMap;