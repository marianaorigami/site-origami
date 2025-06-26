const GeometricBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primeira imagem - canto superior direito - maior */}
      <div className="absolute top-10 right-10 w-96 h-96 opacity-20 animate-swing">
        <img 
          src="/background/icon_animated.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Segunda imagem - canto inferior esquerdo */}
      <div className="absolute bottom-56 left-10 w-72 h-80 opacity-15 animate-swing" style={{ animationDelay: '2s' }}>
        <img 
          src="/background/icon_animated.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default GeometricBackground;
