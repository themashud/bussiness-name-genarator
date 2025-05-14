    let adjectives = {
      1: "Elite",
      2: "Smart",
      3: "Urban",
      4: "Modern",
      5: "Prime",
      6: "NextGen",
      7: "Visionary",
      8: "Dynamic",
      9: "Digital",
      10: "Quantum"
    };

    let shop = {
      1: "Tech",
      2: "Foods",
      3: "Mart",
      4: "Solutions",
      5: "Studios",
      6: "Works",
      7: "Clothing",
      8: "Electro",
      9: "Gadgets",
      10: "Wellness"
    };

    let another = {
      1: "Labs",
      2: "Hub",
      3: "Studio",
      4: "Nation",
      5: "Co",
      6: "Zone",
      7: "Point",
      8: "Empire",
      9: "House",
      10: "Group"
    };

    function generateName() {
      let var1 = Math.floor(Math.random() * 10 + 1);
      let var2 = Math.floor(Math.random() * 10 + 1);
      let var3 = Math.floor(Math.random() * 10 + 1);

      let name = `${adjectives[var1]} ${shop[var2]} ${another[var3]}`;
      document.getElementById("name").innerText = name;
    }