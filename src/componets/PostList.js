import React, {
    Component
} from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        axios.get('/api/location/search/?query=(query)')
            .then(response => {
                console.log(response)
                this.setState({
                    posts: response.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const {
            posts
        } = this.state
        return ( 
            <div>
            List of Posts



            
           </div>
        )
    }
}
export default PostList