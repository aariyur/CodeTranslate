import Head from 'next/head';
import React from 'react';
import { useState } from 'react';
import styles from './styles/index.module.css';
import Textarea from './textarea';
import CodeMirror from '@uiw/react-codemirror';

export default function Home() {
  const [language, setLanguage] = useState('C++');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState('');

  async function onSubmit(event) {
    event.preventDefault();
    if(code.trim().length == 0){
      setResult('Please enter your code!')
      return;
    }
    if (loading) {
      return;
    }
    setLoading(true);
    setResult('');
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({language, code }),
    });
    const data = await response.json();
    setResult(data.result);
    setLoading(false);
  };

  

  return (
    <div>
      <Head>
        <title>Code Translator</title>
      </Head>
      <div className='container'>
        <main className={styles.main}>
          <h1>Code Translator</h1>
          
          <form onSubmit={onSubmit}>
            <div className="lang">
              <label>Programming Language</label>
              <select
                name="Programming Language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="c++">C++</option>
                <option value="java">Java</option>
                <option value="Python2">Python</option>
                <option value="Python3">Python3</option>
                <option value="C">C</option>
                <option value="C#">Java</option>
                <option value="Javascript">Javascript</option>
                <option value="Ruby">Ruby</option>
                <option value="Swift">Swift</option>
                <option value="Go">Go</option>
                <option value="Scala">Scala</option>
                <option value="Kotlin">Kotlin</option>
                <option value="PHP">PHP</option>
                <option value="Rust">Rust</option>
                <option value="Typescript">Typescript</option>
                <option value="Erlang">Erlang</option>
                <option value="Elixir">Elixir</option>
                <option value="Racket">Racket</option>
                <option value="Dart">Dart</option>

              </select>
            </div>
            <div className='codebox'>
              <CodeMirror
                value={code}
                options={{
                  theme: 'dracula',
                  keyMap: 'sublime',
                  mode: 'python',
                }}
                onChange={(editor, data, value) => {
                  setCode(editor);
                }}
                className="w-96 h-80"
              />
            </div>
            

            
            <input className ="btn" type="submit" value="Translate Code" />
          </form>
          {(loading) && (
            <div>
              <h3>Translating Code</h3>
              <p>Loading...</p>
            </div>
          )}
          {!loading && (
            <Textarea value={result}></Textarea>
          )}
          
        </main>
      </div>
      
    </div>
  );
}