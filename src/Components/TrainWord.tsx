import React, {useState} from 'react'
import './../css/TrainWord.css'
import { useAppDispatch, useAppSelector } from './hooks';
import { deleteWords } from '../redux/slice';


interface Props {
  word1: string;
  word2: string;
  id: string; 
}

const TrainWord: React.FC<Props> = ({word1, word2, id, }) => {
   
  const main = useAppSelector(store => store.words.words)
console.log(main)
   const dispatch = useAppDispatch();
  const [second, setSecond] = useState<string>(word1);

  const checkWordR = (
    //event: MouseEvent
  ) => {
        // event.preventDefault();
        setSecond(word2); 
    }

    const checkWordE = () => {
        setSecond(word1);
  }

    return (
      <div className="train__content">
            <input className="input" value={second}
          onChange={(e) => setSecond(e.target.value)} />
            <div className="btn__section">
               <button className="btn1" onClick={() => checkWordR()}>rus</button>
                <button className="btn1" onClick={() => checkWordE()}>eng</button>
                <button className="btn1" onClick={() => dispatch(deleteWords(id))}>del</button>
        </div>
            </div>
  )
}

export default TrainWord;
