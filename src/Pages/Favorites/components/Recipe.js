import React from 'react';


class Recipe extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            likeCount: 0
        }
    }

    incrementLike = () => {
        this.setState({
            likeCount: this.state.likeCount += 1
        })
    }

    render() {
        return (
            <div className="recipeListItem" >
                <h2>{this.props.name}</h2>
                <a href={this.props.url} target="_blank" rel="noopener noreferrer">
                    <img src={this.props.image} alt="recipe-thumbnail"/>
                </a>
                <h4>Yield: { this.props.servingSize }</h4>
                <button onClick={this.incrementLike}>likes ({this.state.likeCount} )</button>
            </div>
        )
    }
}

export default Recipe; 