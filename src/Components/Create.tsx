import React from 'react';
import "./../css/Create.css";
import { addWords } from './../redux/slice';
import { useAppDispatch, useAppSelector } from './hooks';
import { TWords } from './module';
import {TModule} from './module2'

interface Props {
  english: string;
  setEnglish: React.Dispatch<React.SetStateAction<string>>;
  rus: string;
  setRus: React.Dispatch<React.SetStateAction<string>>;
  handlerAdd: (engWord: string, rusWord: string) => void;
  // module: TModule[];
}

const Create: React.FC<Props> = ({ english, setEnglish, rus, setRus, handlerAdd,   }) => {
  
  // const mdlv = useAppSelector(store => store.modules.module);
  

  return (
    <div className="create__content">
      
      <input value={english} onChange={(e) => setEnglish(e.target.value)} className="create__element" type="text" placeholder="" />
      <input value={rus} onChange={(e) => setRus(e.target.value)}  className="create__element" type="text" placeholder="" />
      <button onClick={() => handlerAdd(english, rus)}>ADD</button>
      {/* <div>{`${module}`}</div> */}
    </div>
  )
}

export default Create;
