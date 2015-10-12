import MapComponent from './MapComponent'

export default class MapControl extends MapComponent {
  componentDidMount() {
    super.componentDidMount();
    this.props.map.addControl(this.leafletElement);
  }

  componentWillUnmount() {
    super.componentWillUnmount();
    this.props.map.removeControl(this.leafletElement);
  }
}
