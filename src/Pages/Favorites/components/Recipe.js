import React from 'react';


class Recipe extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            likes: 0
        }
    }

    addLike = () => {     // addLike is a click handler
        let newCount = this.state.likes + 1;
          this.setState({
          likes: newCount
        });
      };
    
    componentDidMount(props) {
        this.setState({ likes: this.props.likes }) //set the likes value of the state to the likes value of the props.
        //that way you can call in the props from the parent and it would save to the db
    }

    render() {
        return (
            <div className="recipeListItem" >
                <h2>{this.props.name}</h2>
                <a href={this.props.url} target="_blank" rel="noopener noreferrer">
                    <img src={this.props.image} alt="recipe-thumbnail"/>
                </a>
                <h4>Yield: { this.props.servingSize }</h4>
                <button onClick={this.addLike} id={this.props.recipeId}>Likes: {this.state.likes} </button>
            </div>
        )
    }
}

export default Recipe; 