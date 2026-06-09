import React from 'react'
import Main from '../Main/Main'
import Healthy from '../Healthy/Healthy'
import Events from '../Events/Events'
import Delivery from '../Delivery/Delivery'
import Comments from '../Comments/Comments'
import Articles from '../Articles/Articles'

const HomePage = () => {
  return (
    <div>
      <Main />
      <Healthy />
      <Events />
      <Delivery />
      <Comments />
      <Articles />
    </div>
  )
}

export default HomePage