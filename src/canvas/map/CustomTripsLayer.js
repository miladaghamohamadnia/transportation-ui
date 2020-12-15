
import {PathLayer} from '@deck.gl/layers';

const defaultProps = {
  trailLength: {type: 'number', value: 120, min: 0},
  currentTime: {type: 'number', value: 0, min: 0},
  getTimestamps: {type: 'accessor', value: null},
  getTrailtime: {type: 'accessor', value: null},
  getTrailNexttime: {type: 'accessor', value: null},
};

export default class CustomTripsLayer extends PathLayer {
  getShaders() {
    const shaders = super.getShaders();
    
    shaders.inject = {
     'vs:#decl': `\
      uniform float trailLength;
      attribute float instanceTimestamps;
      attribute float instanceNextTimestamps;
    //   attribute float instanceTrailtime;
    //   attribute float instanceNextTrailtime;
      varying float vTime;
    //   varying float vTrail;
      `,
      // Timestamp of the vertex
     'vs:#main-end': `\
     float deltaT = (instanceNextTimestamps - instanceTimestamps);
     vTime = instanceTimestamps + deltaT * (vPathPosition.y) / vPathLength;
    //  vTrail = instanceTrailtime + deltaT * (vPathPosition.y) / vPathLength;
    //   vTrail = 1.0*(instanceTrailtime);
    `,

     'fs:#decl': `\
      uniform float trailLength;
      uniform float currentTime;
      varying float vTime;
    //   varying float vTrail;
      `,
      // Drop the segments outside of the time window
     'fs:#main-start': `\
        if( vTime > currentTime || vTime < currentTime - trailLength ) {
            discard;
        }
        // if( vTime > currentTime ) {
        //     discard;
        // }
        // if( vTime < currentTime - trailLength ) {
        // if( vTime > currentTime || vTime < currentTime - vTrail ) {
        //     discard;
        // }
      `,
      // Fade the color (currentTime - 100%, end of trail - 0%)
    //   'fs:DECKGL_FILTER_COLOR': 'color.a *= 1.0 - (currentTime - vTime) / trailLength;'
      'fs:DECKGL_FILTER_COLOR': 'color.a = 1.0;',
    //   'fs:DECKGL_FILTER_COLOR': `\
    //   if( vTime > currentTime || vTime < (currentTime - vTrail) ) {
    //     color = vec4(1.0, 0.0, 0.0, 1.0);
    // }else {
    //     color.a=0.01;
    //     }
    //    `, 
      'fs:#main-end': `\

        // vec2 st = gl_FragCoord.xy;
        // vec2 cen = vec2(500.0, 500.0);
        // float radius = 20.0;
        // float cir = circle(st, cen, radius);
        // vec3 color = vec3( cir, 0.0, 0.0) ;
        // gl_FragColor = vec4( color, 1.0 );
        // gl_FragColor = vec4( vec3(pointPos, 0.0, 0.0), 1.0 );
      `,
    };
    return shaders;
  }

  initializeState(params) {
    super.initializeState(params);

    const attributeManager = this.getAttributeManager();
    attributeManager.addInstanced({
      timestamps: {
        size: 1,
        accessor: 'getTimestamps',
        shaderAttributes: {
          instanceTimestamps: {
            vertexOffset: 0
          },
          instanceNextTimestamps: {
            vertexOffset: 1
          }
        }
      },
      trailnexttime: {
        size: 1,
        accessor: 'getTrailNexttime',
        shaderAttributes: {
            instanceNextTrailtime: {
            vertexOffset: 0
          }
        }
      },
      trailtime: {
        size: 1,
        accessor: 'getTrailtime',
        shaderAttributes: {
          instanceTrailtime: {
            vertexOffset: 0
          }
        }
      },
    }); 
  }


  draw(params) {
    const {trailLength, currentTime} = this.props;

    params.uniforms = Object.assign({}, params.uniforms, {
      trailLength,
      currentTime    
    });
    super.draw(params);
  }
}

CustomTripsLayer.layerName = 'CustomTripsLayer';
CustomTripsLayer.defaultProps = defaultProps;


