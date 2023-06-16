import Image from 'next/image';
import { AiOutlineSearch, AiFillCamera } from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi';

const Main: React.FC = () => {
  const googleLogo: string =
    'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';

  return (
    <div className="items-center flex flex-col mt-28 ">
      <Image src={googleLogo} alt="google" height={100} width={270} />
      <form className="flex border mt-7 px-5 py-2 rounded-full w-2/5  items-center hover:shadow-md">
        <AiOutlineSearch className="text-xl text-slate-400" />
        <input type="text" className="w-full focus:outline-none ml-4" />
        <BiMicrophone className="text-3xl text-slate-400 mr-5" />
        <AiFillCamera className="text-3xl text-slate-400" />
      </form>
      <div className="mt-7">
        <button className="bg-slate-100 mr-3 py-2 px-4 text-sm rounded hover:border">
          Google Search
        </button>
        <button className="bg-slate-100  py-2 px-4 text-sm rounded hover:border">
          Im Feeling Lucky
        </button>
      </div>
    </div>
  );
};
export default Main;
