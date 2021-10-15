import { useState } from "react";

function NewChallengeForm () {

    const [title, setTitle] = useState('');
    const [cipher, setCipher] = useState();

    const submitChallenge = () => {

    }

    return <div>
        <form onSubmit={() => submitChallenge()}>

        </form>
    </div>;
}

export default NewChallengeForm;