var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css');

class Badge extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.img}
          alt='Avatar'
          style={{width: 100, height: 100}}
        />
        <h1>Name: {this.props.name}</h1>
        <h3>Username: {this.props.username}</h3>
      </div>
    )
  }
}

Badge.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

ReactDOM.render(
  <Badge
    name='Weder Ribas'
    username='wederribas'
    img={'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/005/070/1b9/2b6b46c.jpg'}
  />,
  document.getElementById('root')
);
