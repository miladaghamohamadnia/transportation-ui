import {LayerExtension} from '@deck.gl/core';


class PointTripsLayer extends LayerExtension {
  getShaders() {
    return {
      inject: {
            // decalaration of attributes
           'vs:#decl': `\
            uniform float trailLength;
            attribute float instanceTimestamps;
            attribute float instanceNextTimestamps;
            varying float vTime;
            `,
            // Timestamp of the vertex
           'vs:#main-end': `\
            vTime = instanceTimestamps + (instanceNextTimestamps - instanceTimestamps) * vPathPosition.y / vPathLength;
            `,
           'fs:#decl': `\
            uniform float trailLength;
            uniform float currentTime;
            varying float vTime;
            `,
            // Drop the segments outside of the time window
           'fs:#main-start': `\
            if(vTime > currentTime || vTime < currentTime - trailLength) {
            discard;
            }
            `,
            // Fade the color (currentTime - 100%, end of trail - 0%)
           'fs:DECKGL_FILTER_COLOR': 'color.a = 1.0;'
        }
    };
  }

  // updateState(params) {
  //   const {highlightRed = true} = params.props;
  //   for (const model of this.getModels()) {
  //     model.setUniforms({highlightRed});
  //   }
  // }

  // getSubLayerProps() {
  //   const {highlightRed = true} = params.props;
  //   return {
  //     highlightRed
  //   };
  // }
}


export {PointTripsLayer};