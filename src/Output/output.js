import './output.css';

const Output = (props) => {

    return (
            <div onClick={props.done} key={props.key} className='item' id={props.id}>
                <p className='task'>{props.task}</p>
                <button className='delete-btn' onClick={props.delete}><i className="fa fa-trash" aria-hidden="true"></i></button>
            </div>
    )
}

export default Output;