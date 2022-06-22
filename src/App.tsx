import React, { useEffect, useState } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/NavBar';
import Create from './Components/Create';
import ChooseModule from './Components/ChooseModule';
import Train from './Components/Train';
import Statistic from './Components/Statistic';
import { addWords, deleteWords } from './redux/slice';
import { useAppDispatch, useAppSelector } from './Components/hooks';
import { TWords } from './Components/module';
import { TModule } from './Components/module2';

const App = () => {
  const stateBase = useAppSelector(store => store.words.words);
  const modu = useAppSelector(store => store.modules.module)
  // const [module, setModule] = useState<TModule[]>(modu);
  const [words, setWords] = useState<TWords[]>(stateBase);
  const [textInEnglish, setTextInEnglish] = useState<string>("");
  const [textInRus, setTextInRus] = useState<string>("");

const dispatch = useAppDispatch();
const handlerAdd = (engWord: string, rusWord: string) => {
  
  let update = [
    ...words,
    {
      id: Math.round(Math.random()*100).toString(),
      word1: engWord,
      word2: rusWord,
    }
  ]

  dispatch(addWords([engWord, rusWord]));
  setWords(update);
  setTextInEnglish("");
  setTextInRus("");
}
  
  console.log(module)
 
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Create english={textInEnglish} setEnglish={setTextInEnglish} rus={textInRus} setRus={setTextInRus}
          handlerAdd={handlerAdd} />} />
        <Route path="/choose" element={<ChooseModule />}/>
        <Route path="/train" element={<Train/>} />
        <Route path="/statistic" element={<Statistic/>}/>
      </Routes>
    </div>
  );
}

export default App;
