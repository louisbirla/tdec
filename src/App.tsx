import * as React from 'react'

import { Input } from './Input'

export const App: React.FC = () => (
  <main>
    <img src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-1/s480x480/11246848_10206905028849967_3784188516299339410_n.jpg?_nc_cat=100&_nc_sid=dbb9e7&_nc_ohc=flIcnvJ1ZEUAX-Frn1x&_nc_ht=scontent-dfw5-2.xx&_nc_tp=7&oh=96924b40df75b48876ae88bb5e4dd0df&oe=5ED723C7' />
    <h1>TDEC Generator</h1>
    <p>Experience unlimitdec power</p>
    <Input />
    <p>
      Brought to you by the <a href='https://birla.io'>CTO of TDEC</a>
    </p>
  </main>
)
