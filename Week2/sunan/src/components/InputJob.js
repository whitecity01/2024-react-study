import './InputJob.css';
function InputJob(){
    return <div className="inputbox"> 
        <input className='text' placeholder="할 일을 입력하세요."></input>
        <button className='addjobbutton'>+</button>
    </div>;
}
export default InputJob;