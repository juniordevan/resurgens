import Image from "next/image";
import "./fonts.css"

export default function Home() {
  return (
    <div>
      <div className="bg-black px-[5vw] py-[1vw] flex items-center justify-between">
          <h1 className="text-white text-[1.2vw]">RESURGENS</h1>
          <img src="/logo.png" alt="" className="w-[10vw] h-[5vw] object-contain"/>
      </div>
      <nav className="bg-[#DBE2EF]">
          <ul className="text-[1.2vw] flex justify-between px-[8vw] items-center py-[1vw]">
            <li><input type="text" name="" id="" className="w-[20vw] h-[3vw] text-[1vw] p-[1vw] rounded-full" placeholder="Cari di toko"/></li>
            <li>Home</li>
            <li>Shop</li>
            <li>Categories</li>
            <li>About</li>
            <li><img src="/cart.svg" alt="" className="w-[2vw] h-[2vw]"/></li>
          </ul>
      </nav>

      <section className="flex relative justify-center items-center ">
        <div className="w-1/2 h-[74vh] bg-[#EAE4E4] flex  items-center">
        <div className="ms-[6vw] mt-[6vw] space-y-[1vw] flex flex-col justify-center items-center">
          <p className="text-[1vw] max-w-[17vw]  text-center">Explore Our Curated Collection Of Stylish Clothing And Accessories Tailored To Your Unique Taste.</p>
          <button className="bg-black px-[2vw] py-[1vw] rounded-[0.5vw] text-[1vw] text-white font-bold">Explore Now</button>
        </div>
        </div>
        <div className="w-1/2 h-[74vh] bg-[#1D1D1E]"></div>
        <img src="/man.png" alt="" className="z-20 w-[30vw] h-[30vw] object-contain absolute top-[4vw]"/>
        <h1 className="absolute text-[10vw] z-10 text-white top-[1.5vw]">WELCOME</h1>
      </section>

      <section className="px-[8vw] mt-[8vw]">
        <h1 className="font-semibold text-[1.5vw]">Kategori Populer</h1>
        <div className="grid grid-cols-5 mt-[3vw]">
            <div className="flex items-center justify-center">
              <div className="z-0 px-[1vw] py-[2vw] bg-[#D9D9D9] flex items-center justify-center relative rounded-[1vw]">
                <img src="/kaos.png" alt=""  className="w-[10vw] h-[10vw] object-contain"/>
                <h1 className="absolute z-10 text-white font-semibold text-[2vw]">Kaos</h1>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="z-0 px-[1vw] py-[2vw] bg-[#D9D9D9] flex items-center justify-center relative rounded-[1vw]">
                <img src="/celana.png" alt=""  className="w-[10vw] h-[10vw] object-contain"/>
                <h1 className="absolute z-10 text-white font-semibold text-[2vw]">Celana</h1>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="z-0 px-[1vw] py-[2vw] bg-[#D9D9D9] flex items-center justify-center relative rounded-[1vw]">
                <img src="/tracktop.png" alt=""  className="w-[10vw] h-[10vw] object-contain"/>
                <h1 className="absolute z-10 text-white font-semibold text-[2vw]">Tracktop</h1>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="z-0 px-[1vw] py-[2vw] bg-[#D9D9D9] flex items-center justify-center relative rounded-[1vw]">
                <img src="/hoodie.png" alt=""  className="w-[10vw] h-[10vw] object-contain"/>
                <h1 className="absolute z-10 text-white font-semibold text-[2vw]">Hoodie</h1>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="z-0 px-[1vw] py-[2vw] bg-[#D9D9D9] flex items-center justify-center relative rounded-[1vw]">
                <img src="/sweater.png" alt=""  className="w-[10vw] h-[10vw] object-contain"/>
                <h1 className="absolute z-10 text-white font-semibold text-[2vw]">Sweater</h1>
              </div>
            </div>
        </div>
      </section>

      <section className="px-[8vw] mt-[8vw]">
        <h1 className="font-semibold text-[1.5vw]">Produk Unggulan</h1>
        <div className="grid grid-cols-3 mt-[3vw]">
            <div className="flex items-center justify-center">
              <div className="bg-white shadow-lg py-[1vw] px-[2vw] flex items-center justify-center">
                  <div className="space-y-[0.4vw]"> 
                    <img src="/prada.png" alt=""  className="w-[15vw] h-[15vw] object-contain"/>
                    <div className="flex space-x-[0.5vw]">
                      <div className="w-[2vw] h-[2vw] rounded-full bg-black border-[0.2vw]"></div>
                      <div className="w-[2vw] h-[2vw] rounded-full bg-white border-[0.2vw]"></div>
                    </div>
                    <p className="text-[1vw]">Prada</p>
                    <p className="text-[1vw]">VELVET BLOUSON JACKET</p>
                    <div className="flex items-center text-[1vw] space-x-[0.7vw]">
                      <p className="font-semibold text-red-500">Rp. 350.000</p>
                      <p className="font-normal text-gray-400"><s>Rp. 650.000</s></p>
                    </div>
                  </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-white shadow-lg py-[1vw] px-[2vw] flex items-center justify-center">
                  <div className="space-y-[0.4vw]"> 
                    <img src="/nike.png" alt=""  className="w-[15vw] h-[15vw] object-contain"/>
                    <div className="flex space-x-[0.5vw]">
                      <div className="w-[2vw] h-[2vw] rounded-full bg-black border-[0.2vw]"></div>
                      <div className="w-[2vw] h-[2vw] rounded-full bg-white border-[0.2vw]"></div>
                    </div>
                    <p className="text-[1vw]">Nike</p>
                    <p className="text-[1vw]">BIG SWOOSH</p>
                    <div className="flex items-center text-[1vw] space-x-[0.7vw]">
                      <p className="font-semibold text-red-500">Rp. 350.000</p>
                      <p className="font-normal text-gray-400"><s>Rp. 650.000</s></p>
                    </div>
                  </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-white shadow-lg py-[1vw] px-[2vw] flex items-center justify-center">
                  <div className="space-y-[0.4vw]"> 
                    <img src="/stussy.png" alt=""  className="w-[15vw] h-[15vw] object-contain"/>
                    <div className="flex space-x-[0.5vw]">
                      <div className="w-[2vw] h-[2vw] rounded-full bg-black border-[0.2vw]"></div>
                      <div className="w-[2vw] h-[2vw] rounded-full bg-white border-[0.2vw]"></div>
                    </div>
                    <p className="text-[1vw]">Stussy</p>
                    <p className="text-[1vw]">8 BALL</p>
                    <div className="flex items-center text-[1vw] space-x-[0.7vw]">
                      <p className="font-semibold text-red-500">Rp. 350.000</p>
                      <p className="font-normal text-gray-400"><s>Rp. 650.000</s></p>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </section>

      <footer className="bg-[#EAE4E4] px-[8vw] py-[2vw] flex justify-between items-center mt-[10vw]">
          <div className="space-y-[0.6vw]">
            <h1 className="text-[2vw] font-bold">About</h1>
            <div>
              <p className="text-[1vw] font-medium">Tentang Resurgens</p>
              <p className="text-[1vw] font-medium">Hubungi Kami</p>
            </div>
          </div>
          
          <div className="space-y-[0.6vw]">
            <h1 className="text-[2vw] font-bold">Bantuan & Dukungan</h1>
            <div className="grid grid-cols-2">
              <p className="text-[1vw] font-medium">FAQ</p>
              <p className="text-[1vw] font-medium">Subscribe</p>
              <p className="text-[1vw] font-medium">Instagram</p>
              <p className="text-[1vw] font-medium">Tiktok</p>
            </div>
          </div>
          <div>
            <h1 className="text-[4vw] font-bold">rv.</h1>
          </div>
      </footer> 
    </div>
  );
}
