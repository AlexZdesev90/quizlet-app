import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from './hooks';
import { addModule } from '../redux/moduleSlice';
import { Link } from 'react-router-dom';
import { TModule } from './module2';

type Props = {
}

const ChooseModule: React.FC<Props> = ({}) => {

  const dispatch = useAppDispatch();
  const module = useAppSelector(store => store.modules.module);
  const [mod, setMod] = useState<string>("");
  // const [createWords, setCreateWords] = useState(false)

  const handlerFun = (mod: string) => {
    dispatch(addModule(mod));
    // setModule(mod);
  }
  // console.log(module)
  return (
    <div>
      <input value={mod} onChange={(e) => setMod(e.target.value) } />
      <button onClick={() => handlerFun(mod)}>
        <Link to="/">CreateModule</Link>
      </button>
     {/* <div>{mod}</div> */}
    </div>
  )
}

export default ChooseModule;
