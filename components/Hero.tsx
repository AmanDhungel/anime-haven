import Image from "next/image";

function Hero() {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
        <Image
          src="https://static.vecteezy.com/system/resources/previews/035/916/301/non_2x/ai-generated-male-anime-characters-transparent-background-free-png.png"
          alt="anime"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex-1 flex flex-col gap-10 items-center">
        <Image
          src="./logo.svg"
          alt="logo"
          width={101}
          height={96}
          className="object-contain"
        />
        <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg ml-10 font-bold leading-[120%]">
          Explore Your <span className="text-green-400">Anime Haven</span>
        </h1>
      </div>
    </header>
  );
}

export default Hero;
