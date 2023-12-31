document.addEventListener("DOMContentLoaded", function() {
    const sketchList = [
      { name: "Random Points", url: "sketch1/index.html" },
      { name: "HSLuv Color Generator", url: "hsluvColorGenerator/index.html" },
      { name: "Procedural Geometric Grid", url: "ProceduralGeometricGrid/index.html" },
      { name: "Color Interactions", url: "ColorInteractions/index.html" },
      

      // Add more sketches here
    ];
  
    const ul = document.getElementById("sketch-list");
  
    sketchList.forEach(sketch => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.textContent = sketch.name;
      a.href = sketch.url;
      li.appendChild(a);
      ul.appendChild(li);
    });
  });
  