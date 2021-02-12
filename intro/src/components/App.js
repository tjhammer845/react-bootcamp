import { Component } from 'react'
import Home from './Home'
import About from './About'
import Topics from './Topics'
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div className="App" >
                <BrowserRouter>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/topics'>Topics</Link></li>
                    </ul>

                    <hr />

                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/topics' component={Topics} />
                </BrowserRouter>
            </div>
        )
    }
}

export default App
