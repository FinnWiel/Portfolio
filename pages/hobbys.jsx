import React from 'react'
import Hero from '../components/Hero'
import Hobby from '../components/Hobby'

function hobbys() {
  return (
    <div>
      <Hero heading="Hobby's" message='What I do for fun!' link='/' linkcontent='Home' />
      <Hobby />
    </div>
  )
}

export default hobbys
