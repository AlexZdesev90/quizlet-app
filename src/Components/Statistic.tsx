import React from 'react'
import { useAppSelector } from './hooks';

const Statistic:React.FC = () => {

  const wds = useAppSelector(store => store.words.words)
  return (
    <div><h4>Counts of words:</h4>{wds.length}</div>
  )
}

export default Statistic;
