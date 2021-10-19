import { useSelector } from "react-redux";

function AttemptedChallengeList() {

    const user = useSelector(store => store.user);
    
    return <div>
        <h2>Attempted Challenges:</h2>
    </div>
}

export default AttemptedChallengeList;