import { HomeContainer } from "./styles/Home.styled"
import { useEffect, useState } from "react"
import { HomePostsCard } from "./Card"
const HomeCom = () => {
  const [posts, setPosts] = useState([])
  useEffect(async () => {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/albums/1/photos"
    ).then((x) => x.json())

    setPosts(data)
  }, [])
  return (
    <HomeContainer>
      <div className='mainbar'>
        <div className='main-widget'>
          <div className='blog-posts'>
            {posts.map((x, i) => (
              <HomePostsCard post={x} />
            ))}
          </div>
        </div>
      </div>
      <div className='sidebar'></div>
    </HomeContainer>
  )
}

export default HomeCom
