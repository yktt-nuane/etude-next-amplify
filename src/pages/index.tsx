import { Button, Center } from '@mantine/core'
import { log } from 'next-axiom'

export default function Home() {
  log.debug('Home')
  return (
    <>
      <Center style={{ width: 400, height: 200 }}>
        <Button>Hello</Button>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </Center>
    </>
  )
}
