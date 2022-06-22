import React, {useState} from 'react'
import { useAppSelector } from './hooks';
import { TWords } from './module';
import TrainWord from './TrainWord';
import { useAppDispatch } from './hooks';
import './../css/Train.css'
import MixWord from './MixWord'

const Train: React.FC= () => {
  const wrd = useAppSelector(store => store.words.words)
  const dispatch = useAppDispatch();
  const [mix, setMix] = useState<boolean>(false);
  const [local, setLocal] = useState<TWords[]>(wrd);

  const mixUp = () => {
      let mixResult = [...local].sort(() => Math.random() - 0.5)
      setLocal(mixResult);
      setMix(true);
  }
  
  const reset = () => {
    setMix(false)
  }

  return (
    <div className="train__box">
      <div className="buttn__box">
        <button className="buttn" onClick={()=>mixUp()}>mix</button>
        <button className="buttn" onClick={()=>reset()}>reset</button>
        </div>
      {
        mix ? (
          local?.map((ele) => <MixWord key={ele.id} word1={ele.word1} word2={ele.word2} />)
        )
          :
          (
            wrd.map(w => <TrainWord key={w.id} word1={w.word1} word2={w.word2} id={w.id} />
            )
          )
    }</div>
  )
}

export default Train;
