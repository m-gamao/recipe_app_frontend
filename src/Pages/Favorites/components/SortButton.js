import React, { Component } from 'react'


class SortButton extends Component {

    render() {
        
        return (
            
                <div className="sort_buttons" style={{ display: 'flex', margin: '50px 0', width: '100%' }}>
                    <div className="sort_btn">
                        <button 
                            style={{ width: '150px' }}
                            onClick={ this.handleSortResultsAlphabetically }
                        >
                            Sort Results Alphabetically
                        </button>
                    </div>
                </div>
            
        )
    }
}


export default SortButton
   