import React from 'react';
import '../../Js/script';
import Raymond from '../../Image/anggota/humas/emon3.png';
import Casyel from '../../Image/anggota/humas/casey3.png';
import Vico from '../../Image/anggota/humas/rafe3.png';
import Jessica from '../../Image/anggota/humas/jessica2.png';
import Tristan from '../../Image/anggota/humas/tristan3.png';
import Hana from '../../Image/anggota/humas/hana3.png';

const Humas = () => {
  return (
    <>
      <div className="body genealogy-body genealogy-scroll">
        <div className="genealogy-tree">
          <h1 className="text-3xl text-center">Hubungan Masyarakat</h1>
          <ul>
            <li>
              <div>
                <div class="relative  flex w-96 flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none border pe-5 mx-auto ">
                  <div class="relative mx-0 mt-4 flex items-center  overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                    <img src={Raymond} alt="Raymond Surya" class="relative  h-[100px] w-[100px] !rounded-full object-cover object-center " />
                    <div class="flex w-full flex-col ">
                      <div class="flex items-center ">
                        <h1 class=" font-sans text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">Raymond Surya</h1>
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
                        <img src={Tristan} alt="Tristan Vivaldy" class="relative inline- h-[100px] w-[100px] !rounded-full object-cover object-center" />
                        <div class="flex w-full flex-col ">
                          <div class="flex items-center ">
                            <h1 class=" font-sans text-3xl text-left font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">Tristan Vivaldy</h1>
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
                            <img src={Casyel} alt="Casyel Bersheba L." class="relative w-full h-[100px]  !rounded-full object-cover object-center " />
                          </div>
                          <div class="flex w-full flex-col ">
                            <div class="flex items-center justify-center ">
                              <h1 class=" font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center"> Casyel Bersheba L.</h1>
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
                            <img src={Hana} alt="Hana Saputri" class="relative w-full h-[100px]  !rounded-full object-cover object-center " />
                          </div>
                          <div class="flex w-full flex-col ">
                            <div class="flex items-center justify-center ">
                              <h1 class=" font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center px-2">Hana Saputri</h1>
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
                            <img src={Jessica} alt="Jessica Alvina L." class="relative w-full h-[100px]  !rounded-full object-cover object-center " />
                          </div>
                          <div class="flex w-full flex-col ">
                            <div class="flex items-center justify-center ">
                              <h1 class=" font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center px-3">Jessica Alvina L.</h1>
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
                            <img src={Vico} alt="Vico Rafelino" class="relative w-full h-[100px]  !rounded-full object-cover object-center " />
                          </div>
                          <div class="flex w-full flex-col ">
                            <div class="flex items-center justify-center ">
                              <h1 class=" font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center px-3">Vico Rafelino</h1>
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

export default Humas;
