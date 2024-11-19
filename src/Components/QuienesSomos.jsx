function QuienesSomos() {
  return (
    <section id="quienes_somos" className="quienes bg-late-sunset w-full bg-cover bg-top max-w-[1440px] max-w-full scroll-smooth">
      <div className="quienes_info grid grid-cols-1 sm:grid-cols-2 gap-5 p-6 sm:p-10 md:p-16 pt-8 sm:pt-12">
        <p className="quienes_info-text text-light-bg font-text text-justify px-2 sm:px-5 md:px-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
          praesentium neque consequuntur omnis doloremque quam sequi dolores.
          Impedit commodi recusandae quo, labore voluptates a fugiat nihil atque
          nemo consectetur unde. Reiciendis ducimus perferendis optio est cumque
          culpa? Eaque eius neque illo accusantium earum harum omnis repellendus
          inventore voluptatum aut sequi facere nemo architecto quod, quaerat
          in? Nisi illum odit accusamus.
        </p>
        <h2 className="quienes_info-title font-h2 text-light-bg self-center py-6 sm:py-10 md:py-20 px-2 sm:px-5 md:px-24">
          Quiénes Somos
        </h2>
      </div>  
      <div className="quienes_services p-6 sm:p-10 md:p-16 mt-12 sm:mt-16 md:mt-20 lg:mt-24 w-full">
        <h3 className="quienes_services-title text-center font-h2 text-light-neutral-purple mb-8">
          Qué ofrecemos
        </h3>
        <div className="quienes_services-group flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          <div className="quienes_services-group--service flex flex-col items-center gap-3">
            <img
              src="https://placehold.jp/150x150.png"
              alt="Service 1"
              className="rounded-full h-24 w-24 sm:h-32 sm:w-32"
            />
            <p className="quienes_services-group--service__text font-text text-light-neutral-purple text-center">
              Service 1
            </p>
          </div>
          <div className="quienes_services-group--service flex flex-col items-center gap-3">
            <img
              src="https://placehold.jp/150x150.png"
              alt="Service 2"
              className="rounded-full h-24 w-24 sm:h-32 sm:w-32"
            />
            <p className="quienes_services-group--service__text font-text text-light-neutral-purple text-center">
              Service 2
            </p>
          </div>
          <div className="quienes_services-group--service flex flex-col items-center gap-3">
            <img
              src="https://placehold.jp/150x150.png"
              alt="Service 3"
              className="rounded-full h-24 w-24 sm:h-32 sm:w-32"
            />
            <p className="quienes_services-group--service__text font-text text-light-neutral-purple text-center">
              Service 3
            </p>
          </div>
        </div>
      </div>
    </section>

  );
}

export default QuienesSomos;
