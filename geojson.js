const busStops= [
[-73.993584, 40.750580],
[-73.994, 40.7483],
[-73.995, 40.7461],
[-73.996, 40.7438],
[-73.997, 40.7416],
[-73.998, 40.7393],
[-73.999, 40.7371],
[-74.000, 40.7348],
[-74.001, 40.7325],
[-74.002, 40.7303],
[-74.003, 40.728],
[-74.005, 40.7258],
[-74.006, 40.7235],
[-74.007, 40.7213],
[-74.008, 40.719],
[-74.009, 40.7168],
[-74.010, 40.7145],
[-74.011, 40.7123],
[-74.012, 40.71]];

const geojson = {
  'type': 'FeatureCollection',
  'features': [
      {
          'type': 'Feature',
          'properties': {
              'message': 'Start',
              'iconSize': [50, 50]
          },
          'geometry': {
              'type': 'Point',
              'coordinates': [-73.993584, 40.750580]
          }
      },
      {
          'type': 'Feature',
          'properties': {
              'message': 'Stop',
              'iconSize': [50, 50]
          },
          'geometry': {
              'type': 'Point',
              'coordinates': [-73.994, 40.7483]
          }
      },
      {
          'type': 'Feature',
          'properties': {
              'message': 'Stop',
              'iconSize': [50, 50]
          },
          'geometry': {
              'type': 'Point',
              'coordinates': [-73.995, 40.7461]
          }
      },
      {
          'type': 'Feature',
          'properties': {
              'message': 'Stop',
              'iconSize': [50, 50]
          },
          'geometry': {
              'type': 'Point',
              'coordinates': [-73.996, 40.7438]
          }
      },            
      {
          'type': 'Feature',
          'properties': {
              'message': 'Stop',
              'iconSize': [50, 50]
          },
          'geometry': {
              'type': 'Point',
              'coordinates': [-73.997, 40.7416]
          }
      },            
      {
          'type': 'Feature',
          'properties': {
              'message': 'Stop',
              'iconSize': [50, 50]
          },
          'geometry': {
              'type': 'Point',
              'coordinates': [-73.998, 40.7393]
          }
      },            
      {
          'type': 'Feature',
          'properties': {
              'message': 'Stop',
              'iconSize': [50, 50]
          },
          'geometry': {
              'type': 'Point',
              'coordinates': [-73.999, 40.7371]
          }
      },            
      {
          'type': 'Feature',
          'properties': {
              'message': 'Stop',
              'iconSize': [50, 50]
          },
          'geometry': {
              'type': 'Point',
              'coordinates': [-74.000, 40.7348]
          }
      },            
      {
          'type': 'Feature',
          'properties': {
              'message': 'Middle',
              'iconSize': [50, 50]
          },
          'geometry': {
              'type': 'Point',
              'coordinates': [-74.001, 40.7325]
          }
      },
      {
          'type': 'Feature',
          'properties': {
              'message': 'Stop',
              'iconSize': [50, 50]
          },
          'geometry': {
              'type': 'Point',
              'coordinates': [-74.002, 40.7303]
          }
      },
      {
          'type': 'Feature',
          'properties': {
              'message': 'Stop',
              'iconSize': [50, 50]
          },
          'geometry': {
              'type': 'Point',
              'coordinates': [-74.003, 40.728]
          }
      },
      {
          'type': 'Feature',
          'properties': {
              'message': 'Stop',
              'iconSize': [50, 50]
          },
          'geometry': {
              'type': 'Point',
              'coordinates': [-74.005, 40.7258]
          }
      },
      {
          'type': 'Feature',
          'properties': {
              'message': 'Stop',
              'iconSize': [50, 50]
          },
          'geometry': {
              'type': 'Point',
              'coordinates': [-74.006, 40.7235]
          }
      },
      {
          'type': 'Feature',
          'properties': {
              'message': 'Stop',
              'iconSize': [50, 50]
          },
          'geometry': {
              'type': 'Point',
              'coordinates': [-74.007, 40.7213]
          }
      },
      {
          'type': 'Feature',
          'properties': {
              'message': 'Stop',
              'iconSize': [50, 50]
          },
          'geometry': {
              'type': 'Point',
              'coordinates': [-74.008, 40.719]
          }
      },
      {
          'type': 'Feature',
          'properties': {
              'message': 'Stop',
              'iconSize': [50, 50]
          },
          'geometry': {
              'type': 'Point',
              'coordinates': [-74.009, 40.7168]
          }
      },
      {
          'type': 'Feature',
          'properties': {
              'message': 'Stop',
              'iconSize': [50, 50]
          },
          'geometry': {
              'type': 'Point',
              'coordinates': [-74.010, 40.7145]
          }
      },
      {
          'type': 'Feature',
          'properties': {
              'message': 'Stop',
              'iconSize': [50, 50]
          },
          'geometry': {
              'type': 'Point',
              'coordinates': [-74.011, 40.7123]
          }
      },
      {
          'type': 'Feature',
          'properties': {
              'message': 'End',
              'iconSize': [50, 50]
          },
          'geometry': {
              'type': 'Point',
              'coordinates': [-74.012, 40.71]
          }
      }
  ]
};

// geojson.features.push({
//   'type': 'Feature',
//   'properties': {
//       'message': 'Start',
//       'iconSize': [60, 60]
//   },
//   'geometry': {
//       'type': 'Point',
//       'coordinates': [`${busStops[11][0]}`, `${busStops[11][1]}`]
//   }
// })
