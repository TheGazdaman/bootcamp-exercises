import React from 'react';

export default class MovieFavorite extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {        // initial state of this component
      favorite: null
    };
  
    }


    componentDidMount = () => {
      fetch(`http://www.mycinema.test:8080/api/movies/favorite?user_id=1&movie_id=${this.props.movie_id}`)     // movie id is in the props
      .then(response => response.json())
      .then(json_data => {
        this.setState({
          favorite: json_data.favorite // specifikuji přesnou cestu k informaci. It will always trigger re-render();
        })
      })
  
    }

    handleSubmit = (event) => {
      event.preventDefaut();

      //console.log(this.state.favorite);
      

      fetch(`http://www.mycinema.test:8080/api/movies/favorite/toggle`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        "movie_id": this.props.movie_id,
        "user_id": 1
        
        
        })
      })
      .then(response => response.json())
          .then(json_data => {
            this.setState({
              favorite: json_data.favorite 
            })
          })
    }
    render() {
      // console.log(this.props.movie_id)

      //console.log(this.state);

      // use this.state.favorite to prepare different html output
      let label = 'Loading...';

        if (this.state.favorite === true) {
          label = 'Unfavor this movie';
        } else if (this.state.favorite === false) {          
          label = 'Favor this movie';
        }
//console.log(this.state.favorite);

      return (
        <>
        <h2>This is MovieFavorite component! Favoriting movie { this.props.movie_id } </h2>
        <form action="" onSubmit={ this.handleSubmit }>
        <button>{ label }</button>
        </form>
        </>

      )
    }
  }