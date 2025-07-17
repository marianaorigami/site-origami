import Footer from "@/components/Footer";
import Header from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Header />

      <div className="flex w-full pt-24 flex-col items-center">
        <div className="text-center">
          <p className="text-brand-gray">Como nasceu a Origami</p>
          <h2 className="text-4xl md:text-5xl font-black bg-text-gradient bg-clip-text text-transparent mb-12">Quem Somos</h2>
        </div>

        <div className="container flex max-w-6xl mx-auto pb-16 flex-col items-start gap-4">
          <div className="flex justify-center items-center gap-[10px] w-full">
            <div className="flex-1 text-black text-justify font-poppins font-normal tracking-[-0.96px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              et condimentum risus, at euismod ligula. Donec elementum quam
              placerat placerat elementum. Fusce facilisis magna eget mauris
              condimentum congue. Aenean fermentum ipsum urna, eget elementum
              sapien placerat iaculis. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ut ut feugiat metus. Pellentesque luctus turpis
              vel nisl auctor, in ultrices sapien iaculis. Donec varius
              efficitur velit, eget ullamcorper metus facilisis ac. Proin ut
              venenatis nisi. Vestibulum eget mauris sit amet enim fringilla
              sodales. Vestibulum fermentum, mauris ac consequat ultrices, ipsum
              augue malesuada ipsum, quis luctus tellus tortor ut lacus. Duis
              egestas tellus non lobortis feugiat. Sed eget turpis luctus lectus
              maximus lacinia. Maecenas vitae suscipit diam. Ut congue, diam
              vitae accumsan consectetur, tellus massa iaculis enim, vel euismod
              lacus justo sed augue. Maecenas fermentum facilisis aliquet.
              <br />
              <br />
              Quisque mollis aliquet suscipit. In ultricies mattis rutrum. Donec
              viverra non leo et eleifend. Donec mollis ac turpis a vehicula.
              Quisque consequat consequat efficitur. Fusce in egestas libero,
              quis pellentesque est. Phasellus lorem ex, accumsan at posuere
              rutrum, bibendum eget magna.
              <br />
              <br />
              In iaculis urna ut odio dictum semper. Pellentesque sit amet felis
              nulla. Donec eu ligula lobortis, convallis metus non, ultrices
              tortor. Integer ornare orci ut leo egestas ornare. Aliquam erat
              massa, mattis eget nibh vulputate, aliquet congue ante. Quisque
              pretium mattis facilisis. Nunc ac ultrices quam, sit amet mollis
              leo. Maecenas fermentum magna quis quam interdum dictum.
              Pellentesque pretium lacinia ex.
            </div>
          </div>

          <div className="flex items-center flex-col md:flex-row gap-9 w-full">
            <div className="flex text-black text-justify font-poppins font-normal tracking-[-0.96px] w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur et condimentum risus, at euismod ligula. Donec
              elementum quam placerat placerat elementum. Fusce facilisis
              magna eget mauris condimentum congue. Aenean fermentum ipsum
              urna, eget elementum sapien placerat iaculis. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Ut ut feugiat metus.
              Pellentesque luctus turpis vel nisl auctor, in ultrices sapien
              iaculis. Donec varius efficitur velit, eget ullamcorper metus
              facilisis ac. Proin ut venenatis nisi. Vestibulum eget mauris
              sit amet enim fringilla sodales. Vestibulum fermentum, mauris ac
              consequat ultrices, ipsum augue malesuada ipsum, quis luctus
              tellus tortor ut lacus. Duis egestas tellus non lobortis
              feugiat. Sed eget turpis luctus lectus maximus lacinia. Maecenas
              vitae suscipit diam. Ut congue, diam vitae accumsan consectetur,
              tellus massa iaculis enim, vel euismod lacus justo sed augue.
              Maecenas fermentum facilisis aliquet.
            </div>
            <div className="w-[259px] h-[197px] bg-[#D9D9D9]"></div>
          </div>

          <div className="flex justify-center items-center gap-[10px] w-full">
            <div className="flex-1 text-black text-justify font-poppins font-normal tracking-[-0.96px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              et condimentum risus, at euismod ligula. Donec elementum quam
              placerat placerat elementum. Fusce facilisis magna eget mauris
              condimentum congue. Aenean fermentum ipsum urna, eget elementum
              sapien placerat iaculis. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ut ut feugiat metus. Pellentesque luctus turpis
              vel nisl auctor, in ultrices sapien iaculis. Donec varius
              efficitur velit, eget ullamcorper metus facilisis ac. Proin ut
              venenatis nisi. Vestibulum eget mauris sit amet enim fringilla
              sodales. Vestibulum fermentum, mauris ac consequat ultrices, ipsum
              augue malesuada ipsum, quis luctus tellus tortor ut lacus. Duis
              egestas tellus non lobortis feugiat. Sed eget turpis luctus lectus
              maximus lacinia. Maecenas vitae suscipit diam. Ut congue, diam
              vitae accumsan consectetur, tellus massa iaculis enim, vel euismod
              lacus justo sed augue. Maecenas fermentum facilisis aliquet.
              <br />
              <br />
              Quisque mollis aliquet suscipit. In ultricies mattis rutrum. Donec
              viverra non leo et eleifend. Donec mollis ac turpis a vehicula.
              Quisque consequat consequat efficitur. Fusce in egestas libero,
              quis pellentesque est. Phasellus lorem ex, accumsan at posuere
              rutrum, bibendum eget magna.
              <br />
              <br />
              In iaculis urna ut odio dictum semper. Pellentesque sit amet felis
              nulla. Donec eu ligula lobortis, convallis metus non, ultrices
              tortor. Integer ornare orci ut leo egestas ornare. Aliquam erat
              massa, mattis eget nibh vulputate, aliquet congue ante. Quisque
              pretium mattis facilisis. Nunc ac ultrices quam, sit amet mollis
              leo. Maecenas fermentum magna quis quam interdum dictum.
              Pellentesque pretium lacinia ex.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
