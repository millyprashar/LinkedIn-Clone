import React, { forwardRef } from 'react'
import './Post.css'
import InputOption from './InputOption'
import { Avatar } from '@mui/material'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbsUpDownOutlined } from '@mui/icons-material'

const Post = forwardRef(({ name, description, message, photoURL }, ref) => {

  return (
    <div ref={ref} className="post">
        <div className="post__header">
            <Avatar src={photoURL}/>
        <div className="post__info">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
        </div>
        <div className="post__body">
            <p>{message}</p>
        </div>
        <div className="post__buttons">
            <InputOption Icon={ThumbsUpDownOutlined} title="Like" color="gray" />
            <InputOption Icon={ChatOutlined} title="Comment" color="gray" />
            <InputOption Icon={ShareOutlined} title="Share" color="gray" />
            <InputOption Icon={SendOutlined} title="Send" color="gray" />

        </div>
    </div>
  )
})

export default Post