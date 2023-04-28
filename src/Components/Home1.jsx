import { useNavigate } from 'react-router-dom';
import '../App.css';

const Home1 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="max-w-4xl mx-auto text-center mt-5 mb-5 text-black">
        <h2 className="text-6xl font-bold sm:text-3xl">SENAT MAHASISWA FAKULTAS TEKNOLOGI INFORMASI MARANATHA</h2>
        <p className="mt-4 text-3xl text-black-300">"No Limits, No Boundaries"</p>
      </div>
    </>
  );
};

export default Home1;
