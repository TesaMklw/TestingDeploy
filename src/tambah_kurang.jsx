import React, { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <style>{`
                :root {
                    color-scheme: light;
                    background: white;
                    color: black;
                    --bg: white;
                    --text: black;
                    --text-h: black;
                }
                html, body {
                    font-family: "Times New Roman", Times, serif;
                    text-align: left;
                    color: black;
                    background: white;
                    font-size: 16px;
                    color-scheme: light;
                }
                body {
                    margin: 8px;
                }
                #root {
                    width: auto;
                    max-width: none;
                    margin: 0;
                    text-align: left;
                    border: none;
                    min-height: 0;
                    display: block;
                    background: white;
                    color: black;
                    color-scheme: light;
                }
                h2, h3 {
                    font-family: "Times New Roman", Times, serif;
                    font-weight: bold;
                    color: black;
                    letter-spacing: normal;
                    line-height: normal;
                }
                h2 {
                    font-size: 1.5em;
                    margin: 0.83em 0;
                }
                h3 {
                    font-size: 1.17em;
                    margin: 1em 0;
                }
                p {
                    margin: 1em 0;
                }
                button {
                    font-family: "Times New Roman", Times, serif;
                    font-size: 13px;
                    padding: 1px 6px;
                    margin-right: 4px;
                    background: #efefef;
                    color: black;
                    border: 1px solid #767676;
                }
                hr {
                    border: none;
                    border-top: 1px solid black;
                    border-bottom: 1px solid black;
                    height: 3px;
                    background: transparent;
                    margin: 0.6em 0 1em;
                }
            `}</style>

            <div>
                <h2>Penambahan dan Pengurangan</h2>
                <h2>Hasil Hitungan: {count}</h2>
                <button onClick={() => setCount(count + 1)}>Tambah</button>
                <button onClick={() => setCount(count - 1)}>Kurang</button>
                <hr />
            </div>
        </div>
    );
}

export default App;
