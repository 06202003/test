import React from 'react';
import '../../Js/script';
import Rasyaad from '../../Image/anggota/Nondik/acad5.png';
import Rosi from '../../Image/anggota/Nondik/oci3.png';
import Agus from '../../Image/anggota/Nondik/dhio4.png';
import Alessandro from '../../Image/anggota/Nondik/mike3.png';
import Cherno from '../../Image/anggota/Nondik/cherno4.png';

const NonAkademik = () => {
  return (
    <>
      <div className="body genealogy-body genealogy-scroll">
        <div className="genealogy-tree">
          <h1 className="text-3xl text-center">Non Akademik</h1>
          <ul>
            <li>
              <div>
                <div class="relative flex w-96 flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none border pe-5 mx-auto">
                  <div class="relative mx-0 mt-4 flex items-center  overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                    <img src={Rasyaad} alt="Rasyaad Hildebrand Gunawan" class="relative inline- h-[100px] w-[100px] !rounded-full object-cover object-center" />
                    <div class="flex w-full flex-col ">
                      <div class="flex items-center ">
                        <h1 class=" font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">Rasyaad Hildebrand G.</h1>
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
                        <img src={Rosi} alt="Rosi Rachel Dame Tiarasi" class="relative inline- h-[100px] w-[100px] !rounded-full object-cover object-center" />
                        <div class="flex w-full flex-col ">
                          <div class="flex items-center ">
                            <h1 class=" font-sans text-2xl text-left font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">Rosi Rachel D.</h1>
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
                            <img src={Agus} alt="Agus Ghanidhio P." class="relative w-full h-[100px]  !rounded-full object-cover object-center " />
                          </div>
                          <div class="flex w-full flex-col ">
                            <div class="flex items-center justify-center ">
                              <h1 class=" font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center px-2"> Agus Ghanidhio P.</h1>
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
                            <img src={Alessandro} alt="Alessandro Michael C." class="relative w-full h-[100px]  !rounded-full object-cover object-center " />
                          </div>
                          <div class="flex w-full flex-col ">
                            <div class="flex items-center justify-center ">
                              <h1 class=" font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center px-2">Alessandro Michael C.</h1>
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
                            <img src={Cherno} alt="Cherno Salwa J." class="relative w-full h-[100px]  !rounded-full object-cover object-center " />
                          </div>
                          <div class="flex w-full flex-col ">
                            <div class="flex items-center justify-center ">
                              <h1 class=" font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center px-3">Cherno Salwa J.</h1>
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

export default NonAkademik;
