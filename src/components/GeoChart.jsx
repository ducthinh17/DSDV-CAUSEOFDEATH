import React, {useEffect, useState} from 'react';
import 'leaflet/dist/leaflet.css';
import {MapContainer, GeoJSON, TileLayer, useMap,} from 'react-leaflet';
import L from 'leaflet';
import data from '../data/data.json'
const {features} = data;
let mapRef;

const GeoChart = function ({isDashboard = false}){
    const [selected, setSelected] = useState({});
    /* function determining what should happen onmouseover, this function updates our state*/
    function highlightFeature(e) {
        var layer = e.target;
        const { Disease, Deaths, Name } = e.target.feature.properties;
        // setSelected({
        //     disease: Disease,
        //     deaths: Deaths,
        //     name: Name,
        // });
        layer.setStyle({
            weight: 1,
            fillColor: "#00ffff",
            color: '#666',
            dashArray: '',
            fillOpacity: 0.5
        });
            layer.bringToFront();
           }

    function popUp(e){
        var layer = e.target;
        layer.bindPopup(
            "Name: "+e.target.feature.properties.name+"<br>"+
            "Top Cause: "+e.target.feature.properties.disease+"<br>"+
            "Death Count: "+e.target.feature.properties.deaths+"<br>"
        )
    }
    function zoomToFeature(e) {
        mapRef.fitBounds(e.target.getBounds());
    }
    function clickFunction(e){
        popUp(e)
        zoomToFeature(e)
    }
    /*resets our state i.e no properties should be displayed when a feature is not clicked or hovered over */
    function resetHighlight (e){
        e.target.setStyle(style(e.target.feature));
    }

    /* this function is called when a feature in the map is hovered over or when a mouse moves out of it, the function calls two functions
     highlightFeature and resetHighlight*/
    const onEachFeature= (feature, layer)=> {
        layer.on({
            click: clickFunction,
            mouseover: highlightFeature,
            mouseout: resetHighlight,
        });
    }


    const style = (feature => {
        return ({
            fillColor: feature.properties.color,
            weight: 1,
            opacity: 1,
            color: 'black',
            fillOpacity: 0.5
        });
    });
    const mapStyle = {
        height: '74vh',
        width: '100%',
        margin: '0 auto',
        background: '#141b2d'
    }
    const feature = features.map(feature=>{
        return(feature);
    });
    return(
        <div className='container'>
            <div className="">
                <div className="">
                    <MapContainer zoom={4}
                                  scrollWheelZoom={true}
                                  style={mapStyle}
                                  center={[28.3949, 84.1240]}
                                  whenReady={e=>{
                                      mapRef=e.target;
                                  }}
                    >
                        <TileLayer
                            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"

                        />
                        {feature && (
                            <GeoJSON data={feature}
                                     style={style}
                                     onEachFeature={onEachFeature}/>
                        )}
                        <div className="legend">
                            <div style={{ "--color": "#7FFFD4" }}>Cardiovascular</div>
                            <div style={{ "--color": "#FFA07A" }}>Neoplasm</div>
                            <div style={{ "--color": "#ADFF2F" }}>Neonatal</div>
                        </div>
                    </MapContainer>
                </div>
            </div>
        </div>

    )
}

export default GeoChart;

