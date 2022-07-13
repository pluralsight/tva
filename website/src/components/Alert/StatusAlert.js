import React from 'react'
import Alert from './Alert'
import Container from '../Container/Container'

function StatusAlert() {
  return (
    <Container column>
      <Alert
        alertTitle="Info alert"
        description="This is an example of an informational alert."
      />
      <br />
      <Alert
        alertTitle="Success alert"
        kind="success"
        description="This is an example of an success alert."
      />
      <br />
      <Alert
        alertTitle="Warning alert"
        kind="warning"
        description="This is an example of an warning alert."
      />
      <br />
      <Alert
        alertTitle="Danger alert"
        kind="danger"
        description="This is an example of an danger alert."
      />
    </Container>
  )
}

export default StatusAlert
