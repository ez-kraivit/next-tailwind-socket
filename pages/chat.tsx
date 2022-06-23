import Head from 'next/head'
import type { ReactElement } from 'react'
import { useState } from 'react';

import Blank from '../layouts/blank'

export default function Page() {
  return (
    <>
    <div>asdasd</div>
    </>
    // <div className={styles.container}>
    // </div>
  )
}


Page.getLayout = (page: ReactElement) => {
    return (<Blank> {page} </Blank>)
  }
  