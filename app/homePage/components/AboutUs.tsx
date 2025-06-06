export function AboutUs() {
  return (
    <div id="about_us">
      <section className="py-24 relative h-screen flex flex-col items-center justify-start text-white">
        <h1 className="text-center text-black text-4xl font-bold mb-10">
          About Us
        </h1>
        <div className="w-full flex max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Beatae obcaecati, laborum dicta cupiditate accusantium dolore
                  doloribus aut repudiandae nihil dignissimos impedit earum
                  molestiae modi sint? Ipsum earum aliquid quisquam facilis.
                </p>
              </div>
            </div>
            <img
              className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
              src="https://pagedone.io/asset/uploads/1717751272.png"
              alt="about Us image"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
