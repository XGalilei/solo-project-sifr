import { useHistory } from "react-router";
import ChallengeList from "../ChallengeList/ChallengeList";

function ChallengePage() {

    const history = useHistory();

    const handleAdd = () => {
        history.push('/add-challenge');
    }

    return <div>
        <button className="btn"
        onClick={handleAdd}
        >
            Add New Challenge
        </button>
        <ChallengeList />
    </div>;
}

export default ChallengePage;