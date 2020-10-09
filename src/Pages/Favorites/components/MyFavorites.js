// import React from 'react'
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

// const MyFavorites = props => {
//   const FavoriteCards = props.favorites.length > 0 ?
//     props.favorites.map(t => (<p key={f.id}><Link to={`/favorites/${f.id}`}>{f.attributes.name}</Link></p>)) :
//     null

//   return favoriteCards
// }

// // we provide mapStateToProps to Redux in order to tell Redux:
// // "Excuse me Redux, would you please provide use access to your state
// // so that we may pick and choose the pieces of state we would like availble
// // to this particular component as props."

// const mapStateToProps = state => {
//   return {
//     favorites: state.myFavorites
//   }
// }

// export default connect(null)(MyFavorites)