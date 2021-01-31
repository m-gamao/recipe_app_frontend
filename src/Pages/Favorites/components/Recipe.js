import React from "react";
import { connect } from "react-redux";
import { incrementFavLikeCounter } from "../../../Store/middleware/favoritesAsync";

class Recipe extends React.Component {
  state = {
    likes: this.props.likes.length,
  };

  // Using the setState method to increment the count of likes for the current recipe.
  handlePersistLike = () => {
    this.setState((prevState) => {
      return {
        likes: prevState.likes + 1,
      };
    });
    this.props.incrementFavLikeCounter(this.props.favorite_id);
  };

  // componentDidMount() {
  //     // this.setState({ likes: this.props.likes }) //set the likes value of the state to the likes value of the props.
  //     //that way you can call in the props from the parent and it would save to the db
  // }

  render() {
    return (
      <div className="recipeListItem">
        <div className="image_wrapper">
          <a href={this.props.url} target="_blank" rel="noopener noreferrer">
            <img src={this.props.image} alt="recipe-thumbnail" />
          </a>
        </div>
        <h3>{this.props.name}</h3>
        <h4>Yield: {this.props.servingSize}</h4>
        <button onClick={this.handlePersistLike} id={this.props.recipeId}>
          Likes: {this.state.likes}{" "}
        </button>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         incrementFavLikeCounter: id => dispatch(incrementFavLikeCounter(id))
//     }
// }

export default connect(null, { incrementFavLikeCounter })(Recipe);
