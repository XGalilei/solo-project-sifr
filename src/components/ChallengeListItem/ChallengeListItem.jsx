import { useSelector } from "react-redux";

function ChallengeListItem(props) {

    const user = useSelector(store => store.user);

    return <div>
        <h4>{props.challenge.title}</h4>
        <p>Created by: {props.challenge.creator_id}</p>
        <p>Success Rate: {}</p>
        <p>{props.challenge.encrypted}</p>

        <button
        disabled={props.challenge.creator_id === user.id}
        >Attempt Challenge</button>
    </div>;
}

export default ChallengeListItem;