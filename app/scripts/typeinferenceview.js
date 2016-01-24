function TypeInferenceView(_simView) {
	// keep a link to the view
	this.simView = _simView;
}


/*
	draws the let expression
	uses the let expression string from the racket let expression model

*/

TypeInferenceView.prototype.drawExpression = function(_typeQuestion) {
	
	$( '#typeInferenceDiv').append( _typeQuestion.typeInferenceString );
}
