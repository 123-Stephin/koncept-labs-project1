import { useEffect } from 'react';
import React ,{useRef} from 'react'
import './AddNew.css'

function AddNew() {

    const nameRef = useRef();
    const ageRef = useRef();
    const domainRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const enteredName = nameRef.current.value;
        const enteredAge = ageRef.current.value;
        const enteredDomain = domainRef.current.value;
        const datas ={
            name: enteredName,
            age: enteredAge,
            domain: enteredDomain
        }

        fetch("https://project-bd1df-default-rtdb.firebaseio.com/.json",{
            method: "POST",
            body: JSON.stringify(datas),
            headers:
            {
                'Content-Type': 'application/json'
            }
        })
    }

    useEffect(()=>{
        nameRef.current.focus()
    },[])


  return (
    <div>
        <form className='post' onSubmit={handleSubmit} >
            <label style={{color: "darkred",fontSize :'28px'}}>Add your new data here..</label>
            <input type="text" placeholder='Enter name' ref={nameRef} />
            <br></br>
            <input type="text" placeholder='Enter age' ref={ageRef} />
            <br></br>
            <input type="text" placeholder=' Enter domain' ref={domainRef}/>
            <br></br>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddNew
