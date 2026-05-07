import Image from "next/image"
import heroshap1 from "../../../../public/hero-shape1.png"
import hero from "../../../../public/hero.png"

export default function Hero() {
  return (
    <section className="bg-[var(--prim-light)] px-[8px] py-12 lg:px-[10%]">
      
      {/* Container principal */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 lg:flex-row">
        
        {/* coluna esquerda */}
        <div className="w-full lg:w-1/2">
          <div className="hero-content">
            
            <h1 className="GolosText text-5xl font-semibold leading-[1.85] text-[var(--black)] md:text-6xl lg:text-[5rem]">
              seu PC começa aqui.
              
              <span className="mt-2 flex items-center gap-3">
                <Image
                  src={heroshap1}
                  alt="Ícone decorativo"
                  className="h-10 w-10 md:h-12 md:w-12"
                />
                <span className="text-[var(--second)]">
                  Peças de qualidade
                </span>
              </span>

              <span className="block">
                Com tecnologia e desenvolvimento
              </span>
            </h1>

            <p className="GolosText mt-5 text-lg text-[var(--black)] md:text-xl">
              Frete grátis nas compras acima de{" "}
              <span className="font-mono text-[var(--second)]">
                R$ 500,00
              </span>
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="GolosText cursor-pointer rounded-md bg-[var(--second)] px-6 py-3 text-lg text-[var(--white)] transition-all duration-300 hover:opacity-90">
                Comprar
              </button>

              <button className="GolosText cursor-pointer rounded-md border border-[var(--black)] px-6 py-3 text-lg text-[var(--black)] transition-all duration-300 hover:bg-[var(--black)] hover:text-[var(--white)]">
                Ver detalhes
              </button>
            </div>
          </div>
        </div>

        {/* coluna direita */}
        <div className="w-full lg:w-1/2">
          <div className="hero-image relative">
            
            {/* shapes */}
            <div className="hero-shape1"></div>
            <div className="hero-shape2"></div>
            <div className="hero-shape3"></div>
            <div className="hero-shape4"></div>

            {/* estrelas */}
            <div className="star-shape"></div>
            <div className="star-shape2"></div>
            <div className="star-shape3"></div>

            <Image
              src={hero}
              alt="Banner com peças de computador"
              className="relative z-10 w-full md:w-[88%] lg:w-[80%]"
            />
          </div>
        </div>

      </div>
    </section>
  )
}