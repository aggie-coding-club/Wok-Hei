import React from 'react'
import { Card, CardContent, CardFooter } from './ui/card'
import Markdown from './MarkDown'

type Props = {
  role: string,
  content: string
}

const MessageBox = ({ role, content } : Props) => {
  return (
    <Card>
      <CardContent className='p-6 text-sm'>
        <Markdown text={content} />
      </CardContent>
      {/* if ai */}
      {role !== 'user' && <CardFooter className='border-t bg-muted/50 px-6 py-3 text-xs text-muted-foreground'>
        Disclaimer: this is ai
      </CardFooter>}
    </Card>
  )
}

export default MessageBox
