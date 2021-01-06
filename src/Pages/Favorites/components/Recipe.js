import React from 'react';


class Recipe extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            likes: 0
        }
    }

    addLike = () => {     // addLike is a click handler. 
        this.setState(prevState => {    
            /* setState's structure allows you to make a copy of the current state and then 
            you can alter that instead of mutating the actual state of the component which you 
            cannot do. That is why you use prevState here. PrevState is the copy, and this.setState
            is persisting it to your state. Whatever property you access from the copy and changes
            you make to it becomes the new state of that property.
            */
            return {
                likes: prevState.likes + 1
            }
        });
      };
    

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