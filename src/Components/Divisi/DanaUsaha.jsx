import React from 'react';
import '../../Js/script';
import Darren from '../../Image/anggota/danus/darren3.png';
import Christopher from '../../Image/anggota/danus/ceha4.png';
import Olivia from '../../Image/anggota/danus/olip4.png';
import Joshua from '../../Image/anggota/danus/joshua3.png';
import Veronica from '../../Image/anggota/danus/vero4.png';

const DanaUsaha = () => {
  return (
    <>
      <div className="body genealogy-body genealogy-scroll">
        <div className="genealogy-tree">
          <h1 className="text-3xl text-center">Dana Usaha</h1>
          <ul>
            <li>
              <div>
                <div class="relative flex w-96 flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none border pe-5 mx-auto">
                  <div class="relative mx-0 mt-4 flex items-center  overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                    <img src={Darren} alt="Darren Zavier H." class="relative inline- h-[100px] w-[100px] !rounded-full object-cover object-center" />
                    <div class="flex w-full flex-col ">
                      <div class="flex items-center ">
                        <h1 class=" font-sans text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">Darren Zavier H. </h1>
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
                        <img src={Christopher} alt="Christopher Richard A." class="relative inline- h-[100px] w-[100px] !rounded-full object-cover object-center" />
                        <div class="flex w-full flex-col ">
                          <div class="flex items-center ">
                            <h1 class=" font-sans text-2xl text-left font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">Christopher Richard A.</h1>
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
                            <img src={Olivia} alt="Olivia Justine A." class="relative w-full h-[100px]  !rounded-full object-cover object-center " />
                          </div>
                          <div class="flex w-full flex-col ">
                            <div class="flex items-center justify-center ">
                              <h1 class=" font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center px-2">Olivia Justine A.</h1>
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
                            <img src={Veronica} alt="Veronica Marcella A." class="relative w-full h-[100px]  !rounded-full object-cover object-center " />
                          </div>
                          <div class="flex w-full flex-col ">
                            <div class="flex items-center justify-center ">
                              <h1 class=" font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center px-3">Veronica Marcella A.</h1>
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
                            <img src={Joshua} alt="Joshua Subianto" class="relative w-full h-[100px]  !rounded-full object-cover object-center " />
                          </div>
                          <div class="flex w-full flex-col ">
                            <div class="flex items-center justify-center ">
                              <h1 class=" font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center px-2"> Joshua Subianto</h1>
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

export default DanaUsaha;
