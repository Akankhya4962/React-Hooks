import React, {useState, useEffect} from 'react'
import axios from 'axios'

const EffectDataFetch = () => {
    const [posts, setPosts] = useState({})//[]
    const [id, setId] = useState(1)
    const [idFormBntClick, setidFormBntClick] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFormBntClick}`)
            .then (res => {
                console.log(res.data)
                setPosts(res.data)
            }).catch(err => {
                console.log(err);
            }
        )
    }, [idFormBntClick])

    const handleClick = () => {
        setidFormBntClick(id)
    }

    return (
        <div>
            <h2 style={{color: 'purple'}}><u>useEffect Hook example (Data Fetching) </u></h2>
            <input type='text' value={id} onChange={e => setId(e.target.value)}/>
            <button type='button' onClick={handleClick}> Fetch Post</button>
            <p>{posts.title}</p>
            {/* <ul>
                {
                    posts.map(post => <li key={post.is}>{post.title}</li>)
                }
            </ul> */}
        </div>
    )
}

export default EffectDataFetch
