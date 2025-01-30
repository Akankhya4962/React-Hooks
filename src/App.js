import "./App.css";
import React from "react";
import HookExampleOne from "./useStatehook/HookExampleOne";
import HookExampleTwo from "./useStatehook/HookExampleTwo";
import HookExampleThree from "./useStatehook/HookExampleThree";

import EffectExampleOne from "./useEffectHook/EffectExampleOne";
import EffectExampleTwo from "./useEffectHook/EffectExampleTwo";
import EffectExampleThree from "./useEffectHook/EffectExampleThree";
import EffectExampleFour from "./useEffectHook/EffectExampleFour";
import EffectDataFetch from "./useEffectHook/EffectDataFetch";
import ComponentC from "./useContextHook/ComponentC";

import ReducerHookegOne from "./useReducer/ReducerHookegOne";
import ReducerHookegTwo from "./useReducer/ReducerHookegTwo";
import ReducerHookegThree from "./useReducer/ReducerHookegThree";
import ReducerHookegFour from "./useReducer/ReducerHookegFour";
import DataFetchStateEffect from "./useReducer/DataFetchStateEffect";
import DataFetchReducer from "./useReducer/DataFetchReducer";
import CallbackHookeg from "./useCallbackHook/CallbackHookeg";
import CallbackHoolegTwo from "./useCallbackHook/CallbackHoolegTwo";
import Counter from "./useMemoHook/Counter";
import DoubleNumber from "./useMemoHook/DoubleNumber";
import RefHookegOne from "./useRefHook/RefHookegOne";
import RefHookegTwo from "./useRefHook/RefHookegTwo";
import CustomHookOne from "./CustomHooks/CustomHookOne";
import CustomHookTwo from "./CustomHooks/CustomHookTwo";
import CustomHookThree from "./CustomHooks/CustomHookThree";
import CustomHookFour from "./CustomHooks/CustomHookFour";

export const userContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <>
      <h1>React hooks working and examples</h1>
      {/* useState Hook */}
      {/* <HookExampleOne />
      <br/>
      <HookExampleTwo/>
      <br/>
      <HookExampleThree/>
      <br/> */}
      {/* useEffect */}
      {/* <EffectExampleOne/>
      <br/>
      <EffectExampleTwo/>
      <br/>
      <EffectExampleThree/>
      <br/>
      <EffectExampleFour/>
      <br/>
      <EffectDataFetch/> */}
      {/* useContext */}
      <userContext.Provider value={'Ruchi'}>
        <ChannelContext.Provider value='learning react'>
          <ComponentC/>
        </ChannelContext.Provider>
      </userContext.Provider>
      {/* useReducer */}
      {/* <ReducerHookegOne/>
      <ReducerHookegTwo/>
      <ReducerHookegThree/>
      <ReducerHookegFour/>
      <DataFetchStateEffect/>
      <DataFetchReducer/> */}
      {/* useCallback */}
      <CallbackHookeg />
      <CallbackHoolegTwo/>
      {/* useMemo */}
      <Counter />
      <DoubleNumber />
      {/* useRef */}
      {/* <RefHookegOne />
      <RefHookegTwo /> */}
      {/* custom hook */}
      {/* <CustomHookOne />
      <CustomHookTwo />
      <CustomHookThree/>
      <CustomHookFour/> */}
    </>
  );
}

export default App;
