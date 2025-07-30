import {userState} from 'react '

function QuestionForm(){
    const [inputValue, serInputValue] = userState('Ask your questions here...')
    return (
        <div>
    <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
    />
    <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
</div>
    )
}

export default QuestionForm