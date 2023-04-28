import React from 'react';
import '../../Js/script';
import Elmosius from '../../Image/anggota/akademik/elmo4.png';
import Laurentius from '../../Image/anggota/akademik/ontoseno3.png';
import Kevin from '../../Image/anggota/akademik/kevin2.png';
import Cristianto from '../../Image/anggota/akademik/arthurito3.png';
import Josephine from '../../Image/anggota/akademik/josephine3.png';
import Karina from '../../Image/anggota/akademik/karina4.png';

const Akademik = () => {
  return (
    <>
      <div className="body genealogy-body genealogy-scroll">
        <div className="genealogy-tree">
          <h1 className="text-3xl text-center">Akademik</h1>
          <ul>
            <li>
              <div>
                <div class="relative flex w-96 flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none border pe-5 mx-auto">
                  <div class="relative mx-0 mt-4 flex items-center  overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                    <img src={Elmosius} alt="Elmosius Suli" class="relative inline- h-[100px] w-[100px] !rounded-full object-cover object-center" />
                    <div class="flex w-full flex-col ">
                      <div class="flex items-center ">
                        <h1 class=" font-sans text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">Elmosius Suli</h1>
                      </div>
                      <p class=" font-sans  text-2xl text-left font-light leading-relaxed text-blue-gray-900 antialiased">Koordinator</p>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="active">
                <li>
                  <div>
                    <div class="relative flex  w-96 flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none border pe-5 mx-auto">
                      <div class="relative mx-0 mt-4 flex items-center  overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                        <img src={Laurentius} alt="Laurentius Gusti O." class="relative inline- h-[100px] w-[100px] !rounded-full object-cover object-center" />
                        <div class="flex w-full flex-col ">
                          <div class="flex items-center ">
                            <h1 class=" font-sans text-3xl text-left font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">Laurentius Gusti O.</h1>
                          </div>
                          <p class=" font-sans  text-2xl text-left font-light leading-relaxed text-blue-gray-900 antialiased">Wakil Koordinator</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="active">
                    <li>
                      <div>
                        <div class="relative flex w-full max-w-[40rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none border ">
                          <div class="relative mx-0 mt-4 flex items-center  overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                            <img src={Kevin} alt="Kevin Owen" class="relative w-full h-[100px]  !rounded-full object-cover object-center " />
                          </div>
                          <div class="flex w-full flex-col ">
                            <div class="flex items-center justify-center ">
                              <h1 class=" font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center"> Kevin Owen</h1>
                            </div>
                            <p class=" font-sans  text-2xl font-light leading-relaxed text-blue-gray-900 antialiased text-center">Anggota</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div class="relative flex w-full max-w-[40rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none border ">
                          <div class="relative mx-0 mt-4 flex items-center  overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                            <img src={Cristianto} alt="Cristianto T. Arthurito" class="relative w-full h-[100px]  !rounded-full object-cover object-center " />
                          </div>
                          <div class="flex w-full flex-col ">
                            <div class="flex items-center justify-center ">
                              <h1 class=" font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center px-2">Cristianto T. Arthurito</h1>
                            </div>
                            <p class=" font-sans  text-2xl font-light leading-relaxed text-blue-gray-900 antialiased text-center">Anggota</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div class="relative flex w-full max-w-[40rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none border ">
                          <div class="relative mx-0 mt-4 flex items-center  overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                            <img src={Josephine} alt="Josephine Alvina L." class="relative w-full h-[100px]  !rounded-full object-cover object-center " />
                          </div>
                          <div class="flex w-full flex-col ">
                            <div class="flex items-center justify-center ">
                              <h1 class=" font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center px-3">Josephine Alvina L.</h1>
                            </div>
                            <p class=" font-sans  text-2xl font-light leading-relaxed text-blue-gray-900 antialiased text-center">Anggota</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div class="relative flex w-full max-w-[40rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none border ">
                          <div class="relative mx-0 mt-4 flex items-center  overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                            <img src={Karina} alt="Karina Kartikadewi" class="relative w-full h-[100px]  !rounded-full object-cover object-center " />
                          </div>
                          <div class="flex w-full flex-col ">
                            <div class="flex items-center justify-center ">
                              <h1 class=" font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center px-3">Karina Kartikadewi</h1>
                            </div>
                            <p class=" font-sans  text-2xl font-light leading-relaxed text-blue-gray-900 antialiased text-center">Anggota</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Akademik;
