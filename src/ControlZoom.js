import { PropTypes } from 'react';
import Leaflet, { Map } from 'leaflet';

import MapControl from './MapControl';

export default class ControlZoom extends MapControl {
  static propTypes = {
    map: PropTypes.instanceOf(Map),
    position: PropTypes.string,
    zoomInText: PropTypes.string,
    zoomInTitle: PropTypes.string,
    zoomOutText: PropTypes.string,
    zoomOutTitle: PropTypes.string,
  };

  componentWillMount() {
    const { map, position, zoomInText, zoomOutText, zoomInTitle, zoomOutTitle, ...props } = this.props;
    this.leafletElement = Leaflet.control.zoom(this.props);
  }

  render() {
    return null;
  }
}
