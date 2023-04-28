import React from 'react';
import '../Js/script';
import LogoSema from '../Image/LogoSema.png';

const Logo = () => {
  return (
    <>
      <div className="container px-20 my-10">
        <div className="flex flex-row justify-center items-center">
          <div className="basis-1/3 ">
            <img className="logo mx-auto" src={LogoSema} alt="Logo Semafit" />
          </div>
          <div className="basis-2/3">
            <ul className="list-disc ps-10">
              <li>
                <h3 className="text-xl mb-3 font-semibold">Logo FIT</h3>
                <p className="mb-3">[SEMAFIT merupakan bagian dari Fakultas Teknologi Informasi Universitas Kristen Maranatha]</p>
              </li>
              <li>
                <h3 className="text-xl mb-3 font-semibold">Warna Hijau</h3>
                <p className="mb-3">
                  [<i>Fresh</i> dan <i>Organic</i>. Warna ini mengartikan bahwa SEMAFIT memiliki amanat untuk bisa mengadakan aktifitas yang me-<i>refresh</i> dan meningkatkan kemampuan dari setiap mahasiswa FIT ketika perkembangan
                  teknologi berkembang pesat.]
                </p>
              </li>
              <li>
                <h3 className="text-xl mb-3 font-semibold">Warna Orange</h3>
                <p className="mb-3">[Energic dan Youthful. Mahasiswa IT seringkali terkesan dingin dan sulit berbaur. SEMAFIT memiliki amanat untuk mengadakan aktifitas yang bisa meningkatkan kemampuan bersosialisasi mahasiswa.]</p>
              </li>
              <li>
                <h3 className="text-xl mb-3 font-semibold">Panah</h3>
                <p className="mb-3">[Informasi teknologi yang akan terus bergerak maju ke berbagai arah dalam kehidupan]</p>
              </li>
              <li>
                <h3 className="text-xl mb-3 font-semibold">Tiga Pita</h3>
                <p className="mb-3">[SEMAFIT mengawasi seluruh kegiatan mahasiswa pada FIT, yang terbagi kedalam 3 jurusan yaitu D3 IT, S1 IT dan S1 SI.]</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
