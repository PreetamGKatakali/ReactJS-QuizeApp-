import React from "react";

function QuizeResult(props){
    return(
        <div className="heading-txt">
            QuizeResult {props.resultscore}<br></br>
            TotalScore {props.totalscore}
        </div>
    )
}

export default QuizeResult