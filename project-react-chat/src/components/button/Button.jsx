import './button.css';


export const Button = (props) => {
    return (
        <div className="button">
        <button onClick={props.handle}>{props.name}<h5>Start</h5></button>
        </div>
    );
    };