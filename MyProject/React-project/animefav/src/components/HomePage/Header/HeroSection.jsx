return (
 <section className="lg:py-16">
   <div className="grid grid-cols-1 sm:grid-cols-12">
     <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
       <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
         <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-lime-500">
           Hello, Je suis Tamoor{" "}
         </span>
         <br></br>
       </h1>
       <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
         Développeur-web basé à Montréal
       </p>
       <div className="flex mt-4 items-center justify-center sm:justify-start p-4">
         <IOSSwitch 
           checked={isAvailable} 
           onChange={toggleAvailability} 
         />
         <div className="flex ml-3 text-white text-lg whitespace-nowrap">
           {isAvailable ? "Disponible pour embauche" : "Non disponible pour embauche"}
         </div>
       </div>
       <div className="mt-4">
         <Link
           href="/#contact"
           className="px-4 inline-block py-1 w-full sm:w-fit rounded-full bg-black text-white border-2 border-lime-400 hover:bg-lime-400 hover:text-black transition-colors duration-300">
           <span className="block rounded-full px-5 py-2">
             Engenge-moi
           </span>
         </Link>
         <Link
           href="/"
           className="px-1 inline-block py-1 w-full sm:w-fit mt-3 rounded-full m-2 bg-black text-white border-2 border-lime-400 hover:bg-lime-400 hover:text-black transition-colors duration-300">
           <span className="block rounded-full px-5 py-2">
             Télécharger CV
           </span>
         </Link>
       </div>
     </div>
     <div className="col-span-4 place-self-center mt-4 lg:mt-0">
       <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
         <Image
           src="/images/hero-image.png"
           alt="hero image"
           className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
           width={300}
           height={300}
         />
       </div>
     </div>
   </div>
 </section>
);
};

export default HeroSection;
