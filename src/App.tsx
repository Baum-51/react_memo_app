import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='FormArea'>
          <div className='TitleArea'>
            <h4 className='MemoTitle'>メモタイトル</h4>
            <input type='text' className='MemoTitleForm'></input>
          </div>
          <div className='MainArea'>
            <h4 className='MainTitle'>詳細</h4>
            <input type='text' className='MainTitleForm'></input>
          </div>
          <div className='FriendArea'>
            <h4 className='FriendTitle'>該当者</h4>
            <select className='FriendForm'>
              <option>友人A</option>
              <option>友人B</option>
              <option>友人CDEFG</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
