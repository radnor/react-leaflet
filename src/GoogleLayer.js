import { PropTypes } from 'react';

import BaseTileLayer from './BaseTileLayer';

export default class GoogleLayer extends BaseTileLayer {
  static propTypes = {
    layerName: PropTypes.string,
  };

  componentWillMount() {
    super.componentWillMount();
    const { layerName, ...props } = this.props;
    this.leafletElement = new L.Google(props);
    this.leafletElement.options.layerName = layerName;
  }
}
