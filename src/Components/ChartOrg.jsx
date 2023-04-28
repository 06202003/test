import React from 'react';
import '../Js/script';
import Yehezkiel from '../Image/anggota/BPH/yehezkiel2.png';
import Nathan from '../Image/anggota/BPH/nathan4.png';
import Felisa from '../Image/anggota/BPH/felisa2.png';
import Yovie from '../Image/anggota/BPH/yovie4.png';
import Tabitha from '../Image/anggota/BPH/tabitha3.png';

const ChartOrg = () => {
  return (
    <>
      <div className="body genealogy-body genealogy-scroll">
        <div className="genealogy-tree">
          <h1 className="text-3xl mt-2 text-center">Badan Pengurus Harian</h1>
          <ul>
            <li>
              <a href="javascript:void(0);">
                <div class="relative flex w-[40rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none border pe-5">
                  <div class="relative mx-0 mt-4 flex items-center  overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                    <img src={Yehezkiel} alt="Yehezkiel David Setiawan" class="relative inline- h-[200px] w-[200px] !rounded-full object-cover object-center" />
                    <div class="flex w-full flex-col ">
                      <div class="flex items-center ">
                        <h1 class=" font-sans text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">Yehezkiel David Setiawan</h1>
                      </div>
                      <p class=" font-sans  text-2xl text-left font-light leading-relaxed text-blue-gray-900 antialiased">Ketua</p>
                    </div>
                  </div>
                </div>
              </a>
              <ul className="active">
                <li>
                  <a href="javascript:void(0);">
                    <div class="relative flex  w-[40rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none border pe-5">
                      <div class="relative mx-0 mt-4 flex items-center  overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                        <img src={Nathan} alt="Nathan Joshua" class="relative inline- h-[200px] w-[200px] !rounded-full object-cover object-center" />
                        <div class="flex w-full flex-col ">
                          <div class="flex items-center ">
                            <h1 class=" font-sans text-3xl text-left font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">Nathan Joshua</h1>
                          </div>
                          <p class=" font-sans  text-2xl text-left font-light leading-relaxed text-blue-gray-900 antialiased">Wakil Ketua</p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <ul className="active">
                    <li>
                      <a href="javascript:void(0);">
                        <div class="relative flex w-full max-w-[40rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none border ">
                          <div class="relative mx-0 mt-4 flex items-center  overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                            <img src={Yovie} alt="Yovie Adhisti M." class="relative w-full h-[200px]  !rounded-full object-cover object-center " />
                          </div>
                          <div class="flex w-full flex-col ">
                            <div class="flex items-center justify-center ">
                              <h1 class=" font-sans text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center"> Yovie Adhisti M.</h1>
                            </div>
                            <p class=" font-sans  text-2xl font-light leading-relaxed text-blue-gray-900 antialiased text-center">Bendahara</p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <div class="relative flex w-full max-w-[40rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none border ">
                          <div class="relative mx-0 mt-4 flex items-center  overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                            <img src={Felisa} alt="Felisa Angeline O." class="relative w-full h-[200px]  !rounded-full object-cover object-center " />
                          </div>
                          <div class="flex w-full flex-col ">
                            <div class="flex items-center justify-center ">
                              <h1 class=" font-sans text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center px-2">Felisa Angeline O.</h1>
                            </div>
                            <p class=" font-sans  text-2xl font-light leading-relaxed text-blue-gray-900 antialiased text-center">Sekretaris Eksekutif</p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <div class="relative flex w-full max-w-[40rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none border ">
                          <div class="relative mx-0 mt-4 flex items-center  overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                            <img src={Tabitha} alt="Tabitha Emmanuella K." class="relative w-full h-[200px]  !rounded-full object-cover object-center " />
                          </div>
                          <div class="flex w-full flex-col ">
                            <div class="flex items-center justify-center ">
                              <h1 class=" font-sans text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center px-3">Tabitha Emmanuella K.</h1>
                            </div>
                            <p class=" font-sans  text-2xl font-light leading-relaxed text-blue-gray-900 antialiased text-center">Sekretaris Administratif</p>
                          </div>
                        </div>
                      </a>
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

export default ChartOrg;
