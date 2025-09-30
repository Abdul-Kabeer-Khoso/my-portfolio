const TextBox = (props) => {
    return <div className={props.classes}>
        <p className={props.textClasses}>{props.text}</p>
    </div>
}

export default TextBox;