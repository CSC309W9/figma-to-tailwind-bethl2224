// app/page.js
export default function Home() {
  return (
    <div className="w-[1769px] h-[1151px] relative bg-gradient-to-b from-[#db4439] to-[#75241e] overflow-hidden">
      <div className="w-[150px] h-[52px] left-[1567px] top-[58px] absolute">
        <div className="w-[150px] h-[52px] left-0 top-0 absolute bg-[#eaecd7] rounded-[49px]" />
        <div className="relative w-full h-full">
          <div className="absolute left-[49.5px] top-3 flex items-center justify-start text-[#db4439] text-base font-black font-['Inknut_Antiqua']">
            Click
          </div>
        </div>
      </div>
      <div className="origin-top-left rotate-[-8.64deg] w-[543px] h-[590.40px] left-[1068.69px] top-[226px] absolute ">
        <div className="w-[538px] h-[590.40px] left-[-75px] top-0 absolute bg-[#d9d9d9] rotate-25" />
        <img
          className="w-[629.99px] h-[600.71px] left-[-80.51px] top-[0.62px] absolute rotate-25"
          src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg"
        />
      </div>
      <div className="w-[680px] left-[143px] top-[313px] absolute flex flex-col justify-start text-[#eaecd7] text-[110px] font-black font-['Inknut_Antiqua'] leading-[134.20px]">
        <div>BlaBla </div>
        <div>Coffee !</div>
      </div>
      <div className="w-[680px] left-[148px] top-[740px] absolute justify-start text-[#eaecd7] text-[40px] font-semibold font-['Inknut_Antiqua'] leading-[48.80px]">
        Your NO.1 Choice{" "}
      </div>
      <div className="w-full h-[102px] absolute top-[46px] bg-transparent flex items-center justify-start space-x-8 px-8">
        <div className="text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']">
          Home
        </div>
        <div className="text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']">
          Menu
        </div>
        <div className="text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']">
          Login
        </div>
      </div>

      <div className="w-[1804px] h-[102px] left-[-35px] top-[1049px] absolute bg-white flex items-center justify-around">
        <div className="text-[#db4439] text-2xl font-black font-['Inknut_Antiqua'] leading-[29.28px]">
          Contact Information
        </div>

        <div className="text-[#db4439] text-2xl font-black font-['Inknut_Antiqua'] leading-[29.28px]">
          Company Policy
        </div>

        <div className="text-[#db4439] text-2xl font-black font-['Inknut_Antiqua'] leading-[29.28px]">
          Be our partner today
        </div>
      </div>
    </div>
  );
}
