/*
 * Tyler Deans
 * January 23, 2015
 */



function TypeInferenceModel(_simModel) {
    // save a link to the model
    this.simModel = _simModel;
}

function getQuestionType() {
    var randomQuestion = getRandomInt(1, 5);

    if (randomQuestion === 1) {
        return "addition";
    } else if (randomQuestion === 2) {
        return "multiplcation";
    } else if (randomQuestion === 3) {
        return "condition";
    } else  {
        return "if statement";
    }
}

function getVarType() {
    var randomQuestion = getRandomInt(1, 4);

    if (randomQuestion === 1) {
        return "int";
    } else if (randomQuestion === 2) {
        return "bool";
    } else  {
        return "string";
    }
}

TypeInferenceModel.prototype.randomExpression = function() {
    var string1 = "e1";
    var string2 = "e2";
    var string3 = "e3";
    var randomVar = getRandomInt(1, 4); // random integer between 1 and 3
    var randomType = getRandomInt(1, 4);

    var questionType = getQuestionType();
    var varType = getVarType();

    if (questionType === "addition") {
        if (randomVar === 1) {
            this.typeInferenceString = "<pre>val e1 = e2 + e3</pre></br>";
            this.question = "<h3>What is the type of " + string1 + "?</h3>";
            this.typeInferenceString += this.question;
            return "int";

        } else if (randomVar === 2) {
            this.typeInferenceString = "<pre>val e1 = e2 + e3</pre></br>";
            this.question = "<h3>What is the type of " + string2 + "?</h3>";
            this.typeInferenceString += this.question;
            return "int";
        } else {
            this.typeInferenceString = "<pre>val e1 = e2 + e3</pre></br>";
            this.question = "<h3>What is the type of " + string3 + "?</h3>";
            this.typeInferenceString += this.question;
            return "int";
        }
    } else if (questionType === "multiplcation") {
        if (randomVar === 1) {
            this.typeInferenceString = "<pre>val e1 = e2 * e3</pre></br>";
            this.question = "<h3>What is the type of " + string1 + "?</h3>";
            this.typeInferenceString += this.question;
            return "int";
        } else if (randomVar === 2) {
            this.typeInferenceString = "<pre>val e1 = e2 * e3</pre></br>";
            this.question = "<h3>What is the type of " + string2 + "?</h3>";
            this.typeInferenceString += this.question;
            return "int";
        } else {
            this.typeInferenceString = "<pre>val e1 = e2 * e3</pre></br>";
            this.question = "<h3>What is the type of " + string3 + "?</h3>";
            this.typeInferenceString += this.question;
            return "int";
        }
    } else if (questionType === "condition") {
        if (randomVar === 1) {
            this.typeInferenceString = "<pre>val e1 = e2 < e3</pre></br>";
            this.question = "<h3>What is the type of " + string1 + "?</h3>";
            this.typeInferenceString += this.question;
            return "bool"
        } else if (randomVar === 2) {
            this.typeInferenceString = "<pre>val e1 = e2 < e3</pre></br>";
            this.question = "<h3>What is the type of " + string2 + "?</h3>";
            this.typeInferenceString += this.question;
            return "int";
        } else {
            this.typeInferenceString = "<pre>val e1 = e2 < e3</pre></br>";
            this.question = "<h3>What is the type of " + string3 + "?</h3>";
            this.typeInferenceString += this.question;
            return "int";
        }
    } else {
        if (randomVar == 1) {
            this.typeInferenceString = "<pre>if e1 then e2 else e3</pre></br>";
            this.question = "<h3>What is the type of " + string1 + "?</h3>";
            this.typeInferenceString += this.question;
            return "bool";
        } else if (randomVar == 2 || randomVar == 3) {
            if (randomVar == 2) {
                this.typeInferenceString = "<pre>if e1 then e2 else e3</pre></br>";
                this.question = "<h3>If e2 is type " + varType + ", what is the type of e3?</h3>";
                this.typeInferenceString += this.question;

                if (varType === "string") {
                    return "string";
                } else if (varType === "bool") {
                    return "bool";
                } else {
                    return "int";
                }
            } else if (randomVar == 2) {                
                this.typeInferenceString = "<pre>if e1 then e2 else e3</pre></br>";
                this.question = "<h3>If e2 is type " + varType + ", what is the type of e3?</h3>";
                this.typeInferenceString += this.question;

                if (varType === "string") {
                    return "string";
                } else if (varType === "bool") {
                    return "bool";
                } else {
                    return "int";
                }
            }
            
        } 
    }

}
/*
* I need to figure out how to pass the question string
* which is called before this method is called 
* making this.question undefined
*/
TypeInferenceModel.prototype.getQuestion = function() {
    return this.question;
}

TypeInferenceModel.prototype.getExpression = function() {
    return this.typeInferenceString;
}