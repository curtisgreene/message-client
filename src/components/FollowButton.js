import React from 'react'
import { followUser, unfollowUser } from '../api/index'
import { Button } from 'semantic-ui-react'
// props = currentUser and user thats being shown

export default function FollowButton(props){

  const handleFollowUser = () => {
    followUser(props.user.id) //from api/index
    .then( res => props.handleChange(res) )

  }

  const handleUnfollowUser = () => {
    unfollowUser(props.user.id) //from api/index
    .then( user => props.handleChange(user) )
  }

  let follower_ids = props.user.followers.map( follower => follower.id )
  if (follower_ids.includes(props.currentUser.id)) {
    return (
      <Button animated onClick={handleUnfollowUser} primary>
        <Button.Content visible>Following</Button.Content>
          <Button.Content hidden>Unfollow</Button.Content>
      </Button>
    )
  } else
  return (
      <Button onClick={handleFollowUser} primary>Follow</Button>
  )
}
