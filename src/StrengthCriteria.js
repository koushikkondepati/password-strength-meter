const StrengthCriteria = function(){
    return(
        <div className="strengthCriteriaList">
            <ul>
                <li>Minimum 8 characters long</li>
                <li>Atleast 1 special character</li>
                <li>Atleast 1 number</li>
                <li>Atleast 1 capital letter</li>
            </ul>
        </div>
    )
}

export default StrengthCriteria;