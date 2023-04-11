import React, { useEffect } from 'react'
import { testService } from '../api/user'

const ServicePage = (): JSX.Element => {
  useEffect(() => {
    testService()
  }, [])
  return (
    <>
      <p>Service</p>
    </>
  )
}

export default ServicePage
