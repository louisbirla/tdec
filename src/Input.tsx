import { worker } from 'cluster'
import * as React from 'react'

export const Input: React.FC = () => {
  const [word, setWord] = React.useState<string>('')
  const [tdec, seTDEC] = React.useState<string>('')
  const [stage, setStage] = React.useState<string>('typing')
  const calcWord = () => {
    if (word === '') {
      seTDEC(`how could i change that`)
    } else if (word.trim() === '') {
      seTDEC(`WOWOW you are so smart`)
    } else {
      let change = word.replace('tdec', 'MCHARG')
      if (change !== word) {
        seTDEC(change)
      } else {
        change = word.replace(/t.+c/g, 'TDEC')
        if (change !== word) {
          seTDEC(change)
        } else {
          change = word.replace('te', 'TDE')
          if (change !== word) {
            seTDEC(change)
          } else {
            change = word.replace(/t([aeiouyw]+)?c?/g, 'TDEC')
            if (change !== word) {
              seTDEC(change)
            } else {
              seTDEC(word + 'DEC')
            }
          }
        }
      }
    }
    setStage('revealed')
  }
  const again = () => {
    setWord('')
    seTDEC('')
    setStage('typing')
  }
  if (stage === 'typing') {
    return (
      <>
        <input
          placeholder='tdec your word here'
          value={word}
          onChange={(e) => setWord(e.target.value.toLowerCase())}
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              calcWord()
            }
          }}
        />
        <div>
          <button onClick={calcWord}>generatdec</button>
        </div>
      </>
    )
  } else {
    return (
      <>
        <h2>{tdec}</h2>
        <button onClick={again}>again</button>
        <p>pls ignore the bad styling</p>
      </>
    )
  }
}
