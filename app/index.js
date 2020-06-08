const React = require('react')
import BannerApp from './Components/BannerApp'

const ReactDOM = require('react-dom')
require('./index.css')


class App extends React.Component {
    render(){
        return (
            <div><BannerApp/></div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))