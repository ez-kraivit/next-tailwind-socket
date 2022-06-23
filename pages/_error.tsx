import { NextPage, NextPageContext } from 'next';
import Image from 'next/image';
import A404 from "../assets/images/404.png";
import A404Group from "../assets/images/404-group.png";
interface Props {
    statusCode?: number
}

const Error404 = () => {
    return (
        <div className="container min-h-screen min-w-full">
            <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
                <div className="xl:pt-24 w-full xl:w-2/4 relative pb-12 lg:pb-0">
                    <div className="relative">
                        <div className="absolute">
                            <Image src={A404}  />
                        </div>
                        <div className="absolute mt-10 pt-10">
                            <div>
                                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                    ดูเหมือนว่าคุณจะค้นหาไม่พบหน้านี้
                                </h1>
                                <p className="my-2 text-gray-800">ขอโทษด้วยหน้าที่คุณค้นหาไม่มีอยู่ในรายการของระบบ</p>
                                <button className="sm:w-full lg:w-auto my-2  py-4 px-8 rounded-2xl border-b-4 border-b-pink-600 bg-pink-500 py-3 font-bold text-white hover:bg-pink-400 active:translate-y-[0.125rem] active:border-b-pink-400">
                                    กลับสู่หน้าหลัก!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Error: NextPage<Props> = ({ statusCode }) => {
    return (
        <p>
        {statusCode === 404
            ? <Error404 />
            : "An error occurred on client"}
        </p>
    );
  }
  
  Error.getInitialProps = ({ res, err }: NextPageContext) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default Error
