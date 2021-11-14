import { HomeContainer } from "./styles/Home.styled"
import { useEffect, useState } from "react"
import { HomePostsCard } from "./Card"
import { Home } from "react-iconly"
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
      <div className='asidebar'>
        <section className='widget-left'>
          <div className='widget profiles'>
            <h4>Profiles</h4>
            <ul>
              <li>
                <div className='team-member'>
                  <img
                    src='https://yt3.ggpht.com/ytc/AKedOLQm_nrlQC4AtL7_8xJoOAeQ2nTl5IL_I_Q6IzXiFg=s48-c-k-c0x00ffffff-no-rj'
                    alt=''
                  />
                </div>
              </li>
              <li>
                <div className='team-member'>
                  <img
                    src='https://yt3.ggpht.com/ytc/AKedOLQm_nrlQC4AtL7_8xJoOAeQ2nTl5IL_I_Q6IzXiFg=s48-c-k-c0x00ffffff-no-rj'
                    alt=''
                  />
                </div>
              </li>
            </ul>
          </div>
          <div className='widget popular'>
            <h4>Popular Posts</h4>
            <ul className='item'>
              {[...new Array(4)].map((x, i) => (
                <li className='post'>
                  <div className='item-content'>
                    <h5>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eos, minima.
                    </h5>
                    <div className='info'>
                      <p>Add on , Chrome</p>
                      <p>8:10 OM</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className='widget labels'>
            <h4>Labels</h4>
            <div className='label-list'>
              <ul>
                {[...new Array(10)].map((x, i) => (
                  <li>
                    <span>cookies</span>20 <Home set='broken' size='small' />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </HomeContainer>
  )
}

export default HomeCom
