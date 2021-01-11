import './input.css';

const Input = (props) => {
    return (
        <div id='input'>
            <input onChange={props.change} value={props.value} spellCheck="false" type="text" placeholder='New Task' required/>
            <button type='submit' id='add' onClick={props.submit}><i className="fa fa-plus-square" aria-hidden="true"></i></button>
        </div>
    )
}

export default Input;