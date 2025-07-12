import Link from "next/link";

export default function ProfilePage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-12 md:py-20">
            <h1 className="text-5xl font-bold mb-8">Hello!</h1>
            <h2 className="text-3xl font-bold mb-10">My name is Travis Zhang.</h2>
            <p className="text-xl mb-8">
                I&#39;m the developer of{" "}
                <Link target={'_blank'} href="https://canyonjs.org" className="bg-[#0071c2] text-white px-1 rounded">
                    Canyonjs
                </Link>
                . Canyonjs is a tool for collecting end-to-end test coverage of JavaScript, which can help developers evaluate code test situations more efficiently. Currently, I work at
                {" "}
                <Link target={'_blank'} href={'https://trip.com'} className="bg-[#0071c2] text-white px-1 rounded">
                    Trip.com
                </Link>
                {" "}
                Group in Shanghai.
            </p>
            <p className="text-xl mb-8">
                You can follow me on
                {" "}
                <Link target={'_blank'} href="https://x.com/wr_zhang25" className="bg-[#0071c2] text-white px-1 rounded">
                    X
                </Link>
                {" "}. I&#39;ll share knowledge about JavaScript coverage and frontend technology tips there. My Chinese name is 张涛 (zhāng tāo). I also have an
                {" "}
                <Link target={'_blank'} href="https://x.com/wr_zhang25" className="bg-[#0071c2] text-white px-1 rounded">
                    X
                </Link>
                {" "}
                account that is only updated in Chinese to record snippets of my life.
            </p>
            <p className="text-xl">
                In my free time, I&#39;m enthusiastic about open-source projects and also help my wife take care of our children. Additionally, I like cycling and traveling. Recently, I got a Japanese driver's license.
            </p>
        </div>
    );
}
