import React, { PropTypes } from 'react';
import MapLayer from './MapLayer';
import { Map, markerClusterGroup, layerGroup } from 'leaflet';

export default class MarkerClusterGroup extends MapLayer {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    layerGroup: PropTypes.instanceOf(layerGroup),
    map: PropTypes.instanceOf(Map),
  };

  componentWillMount() {
    super.componentWillMount();
    const { map, ...props } = this.props;
    this.leafletElement = markerClusterGroup(props);
  }

  componentDidMount() {
    super.componentDidMount();
    (this.props.layerGroup || this.props.map).addLayer(this.leafletElement);
  }

  render() {
    const children = React.Children.map(this.props.children, child => {
      return child ? React.cloneElement(child, {
        layerGroup: this.leafletElement,
        map: this.props.map,
      }) : null;
    });

    return <div>{children}</div>;
  }
}
