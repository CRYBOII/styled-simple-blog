import {
  Calling,
  Category,
  ChevronUpCircle,
  Document,
  Folder,
  Home,
  Lock,
  Search,
  Send,
  ShieldDone,
  User,
} from "react-iconly"
import { StyledSidebar } from "./styles/Sidebar.styled"

const Sidebar = () => {
  return (
    <StyledSidebar>
      <ul className='nav-menu'>
        <li>
          <a href=''>
            <Folder set='broken' size='small' />
            <span>Home</span>
          </a>
        </li>
        <li className='break'>
          <a href=''>
            <Category set='broken' size='small' />
            <span>Category</span>
          </a>
        </li>
        <li>
          <a href=''>
            <User set='broken' size='small' />
            <span>Abot</span>
          </a>
        </li>
        <li className='break'>
          <a href=''>
            <Calling set='broken' size='small' />
            <span>Contect</span>
          </a>
        </li>
        <li>
          <a href=''>
            <Document set='broken' size='small' />
            <span>Sitemap</span>
          </a>
        </li>
        <li>
          <a href=''>
            <ShieldDone set='broken' size='small' />
            <span>Security</span>
          </a>
        </li>
        <li>
          <a href=''>
            <Lock set='broken' size='small' />
            <span>Cookies</span>
          </a>
        </li>

        <li className='socials'>
          <ul class='sosmed-link'>
            <li>
              <a
                aria-label='Social media'
                rel='nofollow noreferrer noopener'
                role='button'
                target='_blank'
                title='Facebook'
              >
                <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M24,3H8A5,5,0,0,0,3,8V24a5,5,0,0,0,5,5H24a5,5,0,0,0,5-5V8A5,5,0,0,0,24,3Zm3,21a3,3,0,0,1-3,3H17V18h4a1,1,0,0,0,0-2H17V14a2,2,0,0,1,2-2h2a1,1,0,0,0,0-2H19a4,4,0,0,0-4,4v2H12a1,1,0,0,0,0,2h3v9H8a3,3,0,0,1-3-3V8A3,3,0,0,1,8,5H24a3,3,0,0,1,3,3Z'></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                aria-label='Social media'
                rel='nofollow noreferrer noopener'
                role='button'
                target='_blank'
                title='Instagram'
              >
                <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
                  <g>
                    <path d='M22,3H10a7,7,0,0,0-7,7V22a7,7,0,0,0,7,7H22a7,7,0,0,0,7-7V10A7,7,0,0,0,22,3Zm5,19a5,5,0,0,1-5,5H10a5,5,0,0,1-5-5V10a5,5,0,0,1,5-5H22a5,5,0,0,1,5,5Z'></path>
                    <path
                      class='svg-c'
                      d='M16,9.5A6.5,6.5,0,1,0,22.5,16,6.51,6.51,0,0,0,16,9.5Zm0,11A4.5,4.5,0,1,1,20.5,16,4.51,4.51,0,0,1,16,20.5Z'
                    ></path>
                    <circle class='svg-c' cx='23' cy='9' r='1'></circle>
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a
                aria-label='Social media'
                rel='nofollow noreferrer noopener'
                role='button'
                target='_blank'
                title='Twitter'
              >
                <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
                  <g>
                    <path d='M13.35,28A13.66,13.66,0,0,1,2.18,22.16a1,1,0,0,1,.69-1.56l2.84-.39A12,12,0,0,1,5.44,4.35a1,1,0,0,1,1.7.31,9.87,9.87,0,0,0,5.33,5.68,7.39,7.39,0,0,1,7.24-6.15,7.29,7.29,0,0,1,5.88,3H29a1,1,0,0,1,.9.56,1,1,0,0,1-.11,1.06L27,12.27c0,.14,0,.28-.05.41a12.46,12.46,0,0,1,.09,1.43A13.82,13.82,0,0,1,13.35,28ZM4.9,22.34A11.63,11.63,0,0,0,13.35,26,11.82,11.82,0,0,0,25.07,14.11,11.42,11.42,0,0,0,25,12.77a1.11,1.11,0,0,1,0-.26c0-.22.05-.43.06-.65a1,1,0,0,1,.22-.58l1.67-2.11H25.06a1,1,0,0,1-.85-.47,5.3,5.3,0,0,0-4.5-2.51,5.41,5.41,0,0,0-5.36,5.45,1.07,1.07,0,0,1-.4.83,1,1,0,0,1-.87.2A11.83,11.83,0,0,1,6,7,10,10,0,0,0,8.57,20.12a1,1,0,0,1,.37,1.05,1,1,0,0,1-.83.74Z'></path>
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a
                aria-label='Social media'
                rel='nofollow noreferrer noopener'
                role='button'
                target='_blank'
                title='Youtube'
              >
                <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
                  <g>
                    <path d='M29.73,9.9A5,5,0,0,0,25.1,5.36a115.19,115.19,0,0,0-18.2,0A5,5,0,0,0,2.27,9.9a69,69,0,0,0,0,12.2A5,5,0,0,0,6.9,26.64c3,.24,6.06.36,9.1.36s6.08-.12,9.1-.36a5,5,0,0,0,4.63-4.54A69,69,0,0,0,29.73,9.9Zm-2,12A3,3,0,0,1,25,24.65a113.8,113.8,0,0,1-17.9,0,3,3,0,0,1-2.78-2.72,65.26,65.26,0,0,1,0-11.86A3,3,0,0,1,7.05,7.35C10,7.12,13,7,16,7s6,.12,9,.35a3,3,0,0,1,2.78,2.72A65.26,65.26,0,0,1,27.73,21.93Z'></path>
                    <path
                      class='svg-c'
                      d='M21.45,15.11l-8-4A1,1,0,0,0,12,12v8a1,1,0,0,0,.47.85A1,1,0,0,0,13,21a1,1,0,0,0,.45-.11l8-4a1,1,0,0,0,0-1.78ZM14,18.38V13.62L18.76,16Z'
                    ></path>
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a
                aria-label='Social media'
                rel='nofollow noreferrer noopener'
                role='button'
                target='_blank'
                title='Đăng ký blog này'
              >
                <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
                  <g>
                    <path d='M24,3H8A5,5,0,0,0,3,8V24a5,5,0,0,0,5,5H24a5,5,0,0,0,5-5V8A5,5,0,0,0,24,3Zm3,21a3,3,0,0,1-3,3H8a3,3,0,0,1-3-3V8A3,3,0,0,1,8,5H24a3,3,0,0,1,3,3Z'></path>
                    <path
                      class='svg-c'
                      d='M22,15H20.44A3.91,3.91,0,0,0,21,13a4,4,0,0,0-4-4H13a4,4,0,0,0-4,4v6a4,4,0,0,0,4,4h6a4,4,0,0,0,4-4V16A1,1,0,0,0,22,15ZM11,13a2,2,0,0,1,2-2h4a2,2,0,0,1,0,4H11Zm10,6a2,2,0,0,1-2,2H13a2,2,0,0,1-2-2V17H21Z'
                    ></path>
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <ul className='nav-mobile'>
        <li>
          <Home set='broken' />
        </li>
        <li>
          <Search set='broken' />
        </li>
        <li>
          <Category set='broken' />
        </li>
        <li>
          <Send set='broken' />
        </li>
        <li>
          <ChevronUpCircle set='broken' />
        </li>
        <li className='svg'>
          <svg
            class='landing-bg'
            fill='none'
            height='36'
            viewBox='0 0 1440 36'
            width='1440'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='mask'>
              <mask
                height='258'
                id='mask0'
                mask-type='alpha'
                maskUnits='userSpaceOnUse'
                width='2739'
                x='-651'
                y='-1'
              >
                <path
                  clip-rule='evenodd'
                  d='M1440.08 94.7682C1840.62 52.9509 2088 327.189 2088 239.643C2088 107.292 1474.85 -0.00012207 718.5 -0.00012207C454.994 -0.00012207 208.87 13.4321 0 36C-390.66 78.2098 -651 153.401 -651 239.643C-651 324.848 -395.883 48.847 -13.028 91.3391L-18.0044 157.143H1435.1L1440.08 94.7682Z'
                  fill-rule='evenodd'
                  id='mask_2'
                ></path>
              </mask>
              <g mask='url(#mask0)'>
                <rect height='161' id='bg' width='1440' y='-0.00012207'></rect>
              </g>
            </g>
          </svg>
        </li>
      </ul>
    </StyledSidebar>
  )
}

export default Sidebar
