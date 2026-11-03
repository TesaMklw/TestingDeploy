import React, { useState } from 'react';

function App() {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [alamat, setAlamat] = useState('');
    return (
        <div className="input-data">
            <style>{`
                .input-data {
                    text-align: left;
                    margin: 8px;
                    font-family: "Times New Roman", Times, serif;
                    color: black;
                }
                .input-data label {
                    display: inline-block;
                    width: 70px;
                }
                .input-data input {
                    width: 170px;
                    padding: 2px 4px;
                    margin-bottom: 6px;
                    font-family: "Times New Roman", Times, serif;
                    background: white;
                    color: black;
                    border: 1px solid #767676;
                    color-scheme: light;
                }
            `}</style>

            <h2>Input Data</h2>
            <div>
                <label>Nama: </label>
                <input
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Masukkan Nama ..."
                />
                <br />
                <label>Email: </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Masukkan Email ..."
                />
                <br />
                <label>Alamat: </label>
                <input
                    type="text"
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                    placeholder="Masukkan Alamat ..."
                />
            </div>
            <div>
                <h3>Hasil Inputan:</h3>
                <p>Nama: {nama}</p>
                <p>Email: {email}</p>
                <p>Alamat: {alamat}</p>
            </div>
        </div>
    );
}

export default App;
