import React, { useEffect, useState } from 'react'

const UseEffectApi = () => {
  const [user, setUser]=useState([])
    const getUser=async()=>{
       const resp= await fetch("https://api.github.com/users");
       setUser(await resp.json());   
    }
    useEffect(()=>{
        getUser()
    },[])
  return (
    <div>
      <h1>List Of Github Uers</h1>
      <div className="container-fluid">
        <div className="row text-center">
          {user.map((item)=>(
            <div key={item.id}
            className="col-md-3 mt-4" >
              <img src={item.avatar_url} alt="" />
                <h2>{item.login}</h2>
                <a href={`//${item.html_url}`}>View Profile</a>
            </div>
            ))}
        </div>
        </div>
        </div>
        )
}
export default UseEffectApi;
               