import Footer from '../Components/Footer';
import NavigationBar from '../Components/NavigationBar';

import keytag from '../Image/keytag.png';
import lanyard from '../Image/lanyard.png';
import pnobo from '../Image/pnobo.png';
import pnoli from '../Image/pnoli.png';
import ngampus from '../Image/ngampus.png';
import notebook from '../Image/notebook.png';
import tokoSemafit from '../Image/tokoSemafit.png';

const Merchandise = () => {
  return (
    <>
      <NavigationBar />
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 mb-12">
          <img className="rounded-lg" src={tokoSemafit} />
        </div>
        <div className="grid grid-cols-3 gap-10  items-center">
          {/* Keytag */}
          <div className="">
            <img className="rounded-lg" src={keytag} />
          </div>
          <div className="col-span-2 ">
            <h1 className="text-5xl py-3">Keytag Noli & Nobo</h1>
            <h2 className="text-xl py-2">
              <i>Jangan Biarkan kunci yang kamu miliki tercecer. Desain yang menarik dan mudah dikenali.</i>
            </h2>
            <h1 className="text-5xl py-3">Rp 5.000,00</h1>
          </div>
          {/* Keytag */}

          {/* Lanyard */}
          <div className="col-span-2 text-right">
            <h1 className="text-5xl py-3">Lanyard</h1>
            <h2 className="text-xl py-2">
              <i>Ayo hiasi kartu mahasiswa kamu dengan desain lanyard yang unik.</i>
            </h2>
            <h1 className="text-5xl py-3">Rp 25.000,00</h1>
          </div>
          <div className="">
            <img className="rounded-lg" src={lanyard} />
          </div>
          {/* Lanyard */}

          {/* Notebook */}
          <div className="">
            <img className="rounded-lg" src={notebook} />
          </div>
          <div className="col-span-2 ">
            <h1 className="text-5xl py-3">Notebook</h1>
            <h2 className="text-xl py-2">
              <i> Kamu selalu bawa buku ke kampus? Kami menawarkan notebook dengan desain yang unik untuk kamu bawa ke kampus.</i>
            </h2>
            <h1 className="text-5xl py-3">Rp 25.000,00</h1>
          </div>
          {/* Notebook */}

          {/* Bundle Noli */}
          <div className="col-span-2 text-right">
            <h1 className="text-5xl py-3">Bundle Noli</h1>
            <h2 className="text-xl py-2">
              <i>Dalam bundle ini kamu akan mendapatkan keytag dengan desain noli dan lanyard dengan motif yang kamu ingin.</i>
            </h2>
            <h1 className="text-5xl py-3">Rp 27.000,00</h1>
          </div>
          <div className="">
            <img className="rounded-lg" src={pnoli} />
          </div>
          {/* Bundle Noli */}

          {/* Bundle Nobo */}
          <div className="">
            <img className="rounded-lg" src={pnobo} />
          </div>
          <div className="col-span-2 ">
            <h1 className="text-5xl py-3">Bundle Nobo</h1>
            <h2 className="text-xl py-2">
              <i>Dalam bundle ini kamu akan mendapatkan keytag dengan desain nobo dan lanyard dengan motif yang kamu ingin.</i>
            </h2>
            <h1 className="text-5xl py-3">Rp 27.000,00</h1>
          </div>
          {/* Bundle Nobo */}

          {/* Bundle Anak Ngampus */}
          <div className="col-span-2 ">
            <h1 className="text-5xl py-3">Bundle Anak Ngampus</h1>
            <h2 className="text-xl py-2">
              <i>Dalam bundle ini kamu akan mendapatkan notebook "No Limits No Boundaries" dengan sebuah lanyard dengan motif yang kamu ingin.</i>
            </h2>
            <h1 className="text-5xl py-3">Rp 40.000,00</h1>
          </div>
          <div className="">
            <img className="rounded-lg" src={ngampus} />
          </div>
          {/* Bundle Anak Ngampus */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Merchandise;
