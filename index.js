document.addEventListener("DOMContentLoaded", function() {
    const sketchList = [
      { name: "Sketch 1", url: "sketch1/index.html" },
      { name: "HSLuv Color Generator", url: "hsluvColorGenerator/index.html" },
      { name: "Sketch 3", url: "sketch2/index.html" },
      

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
  