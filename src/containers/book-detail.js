import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
	render(){
		if (!this.props.book) {
			return (
					<div>SElect A Book</div>
				)
		}
		return (
			<div>
				<h3> detials for: </h3>
				<div>{this.props.book.title}</div>
				<h3>number of pages</h3>
				<div>{this.props.book.pages}</div>
			</div>
			)
	}
}

function mapStateToProps(state) {
	return {
		book : state.activeBook
	}
}

export default connect(mapStateToProps)(BookDetail)
