function QuienesSomos() {
  return (
    <section className="quienes bg-late-sunset aspect-[4/3] bg-cover bg-top">
      <div className="quienes_info grid grid-cols-1 md:grid-cols-2 gap-5 bg-cover bg-top p-10 md:p-16 pt-12">
        <p className="quienes_info-text text-light-bg font-text text-justify px-5 md:px-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
          praesentium neque consequuntur omnis doloremque quam sequi dolores.
          Impedit commodi recusandae quo, labore voluptates a fugiat nihil atque
          nemo consectetur unde. Reiciendis ducimus perferendis optio est cumque
          culpa? Eaque eius neque illo accusantium earum harum omnis repellendus
          inventore voluptatum aut sequi facere nemo architecto quod, quaerat
          in? Nisi illum odit accusamus.
        </p>
        <h2 className="quienes_info-title font-h2 text-light-bg self-center justify-self-start py-10 md:py-20 px-5 md:px-24">
          Quiénes Somos
        </h2>
      </div>
      <div className="quienes_services p-10 md:p-16 mt-40">
        <h3 className="quienes_services-title self-center text-center font-h2 text-light-neutral-purple ">
          Qué ofrecemos
        </h3>
        <div className="quienes_services-group grid grid-cols-1 md:grid-cols-3 gap-5 p-4">
          <div className="quienes_services-group--service flex flex-col items-center gap-3">
            <img
              src="https://placehold.jp/150x150.png"
              alt=""
              className="quienes_services-group--service__img rounded-full h-36 w-36"
            />
            <p className="quienes_services-group--service__text font-text text-light-neutral-purple">
              Service 1
            </p>
          </div>
          <div className="quienes_services-group--service flex flex-col items-center gap-3">
            <img
              src="https://placehold.jp/150x150.png"
              alt=""
              className="quienes_services-group--service__img rounded-full h-36 w-36"
            />
            <p className="quienes_services-group--service__text text-light-neutral-purple font-text">
              Service 2
            </p>
          </div>
          <div className="quienes_services-group--service flex flex-col items-center gap-3">
            <img
              src="https://placehold.jp/150x150.png"
              alt=""
              className="quienes_services-group--service__img rounded-full h-36 w-36"
            />
            <p className="quienes_services-group--service__text text-light-neutral-purple font-text">
              Service 3
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuienesSomos;
