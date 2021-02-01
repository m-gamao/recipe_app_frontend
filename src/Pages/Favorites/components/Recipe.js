// outputs the grid of favorite recipes and also the hearts for liking recipes and the counter.

import React from "react";
import { connect } from "react-redux";
import { incrementFavLikeCounter } from "../../../Store/middleware/favoritesAsync";
import Heart from "react-animated-heart";

class Recipe extends React.Component {
  state = {
    likes: this.props.likes.length,
    isClick: false,
  };

  // Using the setState method to increment the count of likes for the current recipe.
  // prevState is the copy of the current state.
  handlePersistLike = () => {
    this.setState((prevState) => {
      return {
        likes: prevState.likes + 1,
        isClick: !prevState.isClick,
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
        <h4>
          Yield: {this.props.servingSize}
          <br></br>
          Likes: {this.state.likes}{" "}
        </h4>
        <div className="HeartButton">
          {/* Below, the bang operator (!) either returns true or false. If prevState.isClick
          is false, then clicking on the heart changes it to true. And vice versa. If it's true and
          you click it again, it brings it back to false.
          Depends if the value is a boolean. */}
          <Heart
            id={this.props.recipeId}
            isClick={this.state.isClick}
            onClick={this.handlePersistLike}
          />
        </div>
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
