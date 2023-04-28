import Footer from '../Components/Footer';
import NavigationBar from '../Components/NavigationBar';
import ChartOrg from '../Components/ChartOrg';
import React from 'react';
import Divisi from '../Components/Divisi';
import Nobo from '../Image/Nobo.png';
import Noli from '../Image/Noli.png';
import Logo from '../Components/Logo';
import AboutSatu from '../Image/fullteam.png';

const About = () => {
  return (
    <>
      <NavigationBar />
      <div className="container max-w-screen-xl mx-auto my-5">
        <h1 className="text-5xl font-extrabold text-center">Who We Are</h1>
        <section>
          <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8 ">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2  border-4">
              <img alt="Student" src={AboutSatu} className="h-40 w-full object-cover sm:h-56 md:h-full" />

              <div className="bg-green-600 my-auto  p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-xl  ">
                  <h2 className="text-3xl text-center font-bold text-white md:text-3xl">S E M A F I T</h2>

                  <p className="hidden text-white/90 text-md sm:mt-4 sm:block">
                    Terbentuk pada 1 Agustus 2005 berdasarkan Surat Keputusan Dekan FIT Maranatha No. 009/SK/DFIT/UKM/V/2006. SEMAFIT merupakan organisasi mahasiswa yang berperan sebagai badan eksekutif dan sebagai wadah aspirasi mahasiswa
                    FIT UKM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-5xl font-extrabold text-center">Our Logo</h1>
          <Logo />
        </section>

        <section>
          <h1 className="text-5xl font-extrabold text-center">Organizational Structure</h1>
          <ChartOrg />
          <Divisi />
        </section>
        <section>
          <h1 className="text-5xl font-extrabold text-center mt-5">Our Mascot</h1>
          <div className="container mx-auto ">
            <div className="flex flex-row justify-center items-center">
              <div className="basis-1/3 ">
                <img className="mascot mx-auto" src={Noli} alt="Noli" />
              </div>
              <div className="basis-1/3">
                <h1 className="my-3 text-center text-3xl">Noli & Nobo</h1>
                <h5 className="mt-3 mb-8 text-center text-xl">
                  "<b>No li</b>mits, <b>No bo</b>undaries."
                </h5>
                <h5 className="my-3 text-center text-3xl">YETI</h5>
                <h5 className="my-3 text-center text-xl">
                  "<b>Y</b>uk <b>E</b>ksplor <b>T</b>eknologi <b>I</b>nformasi."
                </h5>
              </div>
              <div className="basis-1/3">
                <img className="mascot mx-auto" src={Nobo} alt="Nobo" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default About;
