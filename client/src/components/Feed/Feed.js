import React, { Component } from 'react';
import API from "../../utils/API"

class Feed extends Component {
    state = {
        foods: [],
        chef: "",
        description: "",
        availability: "",
        city: "",
        range: "",
    };
    
    // Runs the loadFeed function for the feed when the component mounts (aka page loads)
    componentDidMount() {
        this.loadFeed();
    }

    // Loads the feed from an API call to our Database.
    loadFeed = () => {
        API.getChefs()
            .then( res => 
                this.setState( 
                    {
                    foods: res.data.foods, 
                    chef: res.data.chef,
                    description: res.data.description,
                    availability: res.data.availability,
                    city: res.data.city,
                    range: res.data.range,
                    }
                )
            )
            .catch(err => console.log(err))
            // ^ Console logs an error after the request has been made
    };

    // *REQUIRED* Function definition for 'userSubmitQuery'
    // userSubmitQuery = () => {}

    // *REQUIRED* Function definition for 'clicking on a Chef'
    // selectChef = () => {}

    // The render function for the "Feed" component.
    render() {
        return (

            // NAVBAR GOES HERE (seperate component)

            // SEARCH BOX GOES HERE (seperate component)

            // FEED CONTAINER GOES HERE
                // LIST GOES INSIDE OF FEED CONTAINER
            <div>
                <li>
                    <p>Here's where all the information would go
                        I'm thinking we add a <button>button</button> here 
                        that will change the state and update it when the user
                        makes a search/query for a Chef.
                    </p>
                </li>
            </div>

            // FOOTER GOES HERE (seperate component)

        )
    };
};

export default Feed;

// Essentially, loading the feed should load all chefs available at first and then
// there should be a search box for the user to submit a query to look for specific chefs
// when they click the 'search' button, it should reload the feed with the new queried results
// those new results should then be added to the state of the Feed component, which should also
// re-render the entire feed.

// For reference go to this Youtube video
// https://www.youtube.com/watch?v=fcna-jJtAXk