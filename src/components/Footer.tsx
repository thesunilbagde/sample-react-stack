import React from 'react'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'

export const Footer =  () => (
  <div css={tw`  mt-4`}>
    <Link css={tw`px-2 border-2 border-purple-400 `} to='/'>All</Link>
    <Link css={tw`px-2 border-2 border-purple-400 border-l-0`} to='/active'>Active</Link>
    <Link css={tw`px-2 border-2 border-purple-400 border-l-0 `} to='/completed'>Completed</Link>
  </div>
)
