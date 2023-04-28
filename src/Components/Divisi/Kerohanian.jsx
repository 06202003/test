import React from 'react';
import '../../Js/script';
import Sherlyn from '../../Image/anggota/kerohanian/sherlyn.png';
import Femmy from '../../Image/anggota/kerohanian/femmy.png';
import Rafael from '../../Image/anggota/kerohanian/rc.png';
import Nathanael from '../../Image/anggota/kerohanian/nathanael.png';
import Nathaniel from '../../Image/anggota/kerohanian/valen.png';

const Kerohanian = () => {
  return (
    <>
      <div className="body genealogy-body genealogy-scroll">
        <div className="genealogy-tree">
          <h1 className="text-3xl text-center">Kerohanian</h1>
          <ul>
            <li>
              <div>
                <div class="relative flex w-96 flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none border pe-5 mx-auto">
                  <div class="relative mx-0 mt-4 flex items-center  overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                    <img src={Sherlyn} alt="Sherlyn Nathania" class="relative inline- h-[100px] w-[100px] !rounded-full object-cover object-center" />
                    <div class="flex w-full flex-col ">
                      <div class="flex items-center ">
                        <h1 class=" font-sans text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">Sherlyn Nathania </h1>
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
                        <img src={Femmy} alt="Femmy Friscilla S." class="relative inline- h-[100px] w-[100px] !rounded-full object-cover object-center" />
                        <div class="flex w-full flex-col ">
                          <div class="flex items-center ">
                            <h1 class=" font-sans text-3xl text-left font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">Femmy Friscilla S.</h1>
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
                            <img src={Nathanael} alt="Nathanael Kanaya C." class="relative w-full h-[100px]  !rounded-full object-cover object-center " />
                          </div>
                          <div class="flex w-full flex-col ">
                            <div class="flex items-center justify-center ">
                              <h1 class=" font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center px-2"> Nathanael Kanaya C.</h1>
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
                            <img src={Rafael} alt="Rafael Cavin E." class="relative w-full h-[100px]  !rounded-full object-cover object-center " />
                          </div>
                          <div class="flex w-full flex-col ">
                            <div class="flex items-center justify-center ">
                              <h1 class=" font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center px-2">Rafael Cavin E. T.</h1>
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
                            <img src={Nathaniel} alt="Nathaniel Valentino R." class="relative w-full h-[100px]  !rounded-full object-cover object-center " />
                          </div>
                          <div class="flex w-full flex-col ">
                            <div class="flex items-center justify-center ">
                              <h1 class=" font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center px-3">Nathaniel Valentino R.</h1>
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

export default Kerohanian;
