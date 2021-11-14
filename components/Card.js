import { PostCard } from "./styles/Card.styled"

export const HomePostsCard = ({ post: { thumbnailUrl, id, title, url } }) => {
  return (
    <PostCard>
      <div className='post-thumbnail'>
        <a href={url} target='_blank' rel='noopener noreferrer'>
          <img src={thumbnailUrl} alt='' />
        </a>
      </div>
      <div className='post-content'>
        <div className='post-headline'>
          <div className='post-label'>
            <a href=''>#facebook</a>
          </div>
          <div className='post-title'>
            <a href={url} target='_blank' rel='noopener noreferrer'>
              {title}
            </a>
          </div>
          <div className='post-info'>
            <div className='post-header'>
              <p>JERA</p>
              <p>9:59 CH</p>
            </div>
          </div>
        </div>
      </div>
    </PostCard>
  )
}
