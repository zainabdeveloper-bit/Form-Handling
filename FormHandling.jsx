import React,{useState} from "react";
function FormHandling(){
    const [name,setname]=useState("")
    const [option,setoption]=useState("")
    const [agree,setagree]=useState(false)
    function getFormData(e){
        console.log(name,option,agree);
        e.preventDefault()

    }
    return(
        <div>
            <h2> Form handling in react js</h2>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="Enter Your name" onChange={(e)=>setname(e.target.value)}/>
                <br />

                <select onChange={(e)=>setoption(e.target.value)}>
                    <option>select any option</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <br />
                </select>
                <br />
                < input type="Checkbox" onChange={(e)=>setagree(e.target.checked)}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default FormHandling;