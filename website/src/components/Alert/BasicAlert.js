import React from 'react'
import Alert from './Alert'
import Container from '../Container/Container'

function BasicAlert() {
  return (
    <Container>
      <Alert
        alertTitle="Info alert"
        description="This is an example of an informational alert."
      />
    </Container>
  )
}

export default BasicAlert
