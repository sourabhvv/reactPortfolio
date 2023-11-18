import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai'
import {FcDribbble}  from 'react-icons/fc'
function HeaderSocial() {
  return (
    <div className="header__socials">
        <a href="https://www.facebook.com/" target="_blank"><AiFillLinkedin/></a>
        <a href="https://www.facebook.com/" target="_blank"><AiFillGithub/></a>
        <a href="https://www.facebook.com/" target="_blank"><FcDribbble/></a>

    </div>
  )
}

export default HeaderSocial