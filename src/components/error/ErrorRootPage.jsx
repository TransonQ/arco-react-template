import { Button, Card, Result } from '@arco-design/web-react'
import styled from 'styled-components'

export function ErrorRootPage() {
  return (
    <Center>
      <Box>
        <Card>
          <Result
            status="error"
            title="Something went wrong. Please try again. "
            // subTitle="Please try again"
            extra={[
              <Button
                key="again"
                style={{ margin: '0 16px' }}
              >
                Again
              </Button>,
              <Button
                key="back"
                type="primary"
              >
                Back
              </Button>,
            ]}
          ></Result>
        </Card>
      </Box>
    </Center>
  )
}

const Center = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
`

const Box = styled.div`
  min-width: 40%;
`
