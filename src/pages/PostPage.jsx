import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const api_server = 'http://localhost:3002'
export default function PostPage() {
    const navigate = useNavigate()
    const [task, setTask] = useState(null)

    const { id } = useParams()
    const url = `http://localhost:3002/post/${id}`

    useEffect(
        () => {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    const keys = Object.keys(data)
                    if (keys.includes('error')) {
                        navigate('/404')
                    } else {
                        setTask(data.data)
                    }

                })
        }
    )

    return (

        <>
            {
        task ? (
<div className="card">
                <img src={`http://localhost:3002/${task.img}`} alt="img-anime" />
                <div className="card-body">

                    <h3 className="card-title">{task.title}</h3>
                    <p className="card-text">{task.author}</p>

                    <p className="card-text">{task.description}</p>




                </div>

            </div>
         
        ) : (
          <div>loading...</div>

        )
      }
        </>

    )
}