import React from 'react';
import { cekTahun, cekHari } from "../utils/waktu";
const Hello = () => {
    return (
      <>
      <p>Hello, selamat datang </p>
      <p>Tahun sekarang adalah {cekTahun{}}</p>
      <p>Tanggal Sekarang adalah {cekHari{}}</p>
    </>
    );   
};

export default Hello;