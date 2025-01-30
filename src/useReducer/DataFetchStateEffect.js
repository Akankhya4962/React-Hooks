import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DataFetchStateEffect = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                setLoading(false)
                setPost(res.data)
                setError('')
                console.log("res", res, post);
                
            })
            .catch(err => {
                setLoading(false);
                setPost({})
                setError('Something went wrong !')
            })
    }, [])

  return (
    <div>
      <h2 style={{ color: "purple" }}>
        <u>Data Fetching using useState and useEffect Hook</u>
      </h2>
      {loading ? 'Loading' : post.title}
      {error ? 'error' : null}

    </div>
  )
}

export default DataFetchStateEffect
