

const data = {
  "name": "PRESENT",
  "value": 10,
  "type": "black",
  "level": "black",
  "children": [
    {
      "name": "UC Maintenance",
      "value": 10,
      "type": "black",
      "level": "gray",
      "children": [
        {
          "name": "Rolltreppe (Flughafen Wien)",
          "value": 7.5,
          "type": "Orange",
          "level": "blue",
          "comment": 'Here is a comment Id like to add' 
        },
        {
          "name": "Sortiermaschinen (Messfeld / Binder)",
          "value": 7.5,
          "type": "orange",
          "level": "purple",
          "comment": 'Here is a comment Id like to add' 
        },
        {
        "name": " XXX (Messfeld / Fresenius)",
        "value": 7.5,
        "type": "orange",
        "level": "purple",
        "comment": 'Here is a comment Id like to add' 
      },
        {
          "name": "Produktionsanlagen & - qualität (Anton A.)",
          "value": 7.5,
          "type": "red",
          "level": "purple",
          "comment": 'Here is a comment Id like to add' 
        },
        {
          "name": "langlebige Anlagen, Wasserkraft 30-40 Jahre (Andreas D.)",
          "value": 7.5,
          "type": "red",
          "level": "purple",
          "comment": 'Here is a comment Id like to add' 
        },
        {
          "name": "kurzlebige Anlagen, <10 Jahre (Andreas D.)",
          "value": 7.5,
          "type": "red",
          "level": "purple",
          "comment": 'Here is a comment Id like to add' 
        },
        {
          "name": "Autonomie Nutzfahrzeuge (ARTI)",
          "value": 7.5,
          "type": "red",
          "level": "purple",
          "comment": 'Here is a comment Id like to add' 
        },
        {
          "name": "Prozesstechnik / Einkaufsplanung (Benjamin B.)",
          "value": 7.5,
          "type": "red",
          "level": "purple",
          "comment": 'Here is a comment Id like to add' 
        }
      ]
    },
    {
      "name": "UC Energie",
      "value": 10,
      "type": "black",
      "level": "gray",
      "children": [
          {
              "name": "Energieerzeugung",
              "value": 5, 
              "type": "black",
              "level": "gray",
              "children": [
                {
                  "name": "Stromerzeugungsprognose (Open Data / TUG Bachelorarbeit)",
                  "value": 7.5, 
                  "type": "green",
                  "level": "blue",
                  "comment": 'Here is a comment Id like to add' 
                }
              ]
      },
      {
        "name": "Energieverbrauch",
        "value": 5, 
        "type": "black",
        "level": "gray",
        "children": [
          {
            "name": "Energieeinsparung Heiz- u. Kühlsysteme (Roman B.)",
            "value": 7.5, 
            "type": "red",
            "level": "blue",
            "comment": 'Here is a comment Id like to add' 
          },
          {
            "name": "Raumklima AirQ(A0Dev)",
            "value": 7.5, 
            "type": "green",
            "level": "blue",
            "comment": 'Here is a comment Id like to add' 
          },
        ]
}
      ]
    },
    {
      "name": "UC Health",
      "value": 10,
      "type": "black",
      "level": "gray",
      "children": [
        {
          "name": "Patientenfluss / Auslastung (KPC)",
          "value": 7.5,
          "type": "orange",
          "level": "yellow",
          "comment": 'Here is a comment Id like to add' 
        },
        {
          "name": "Personenampel (Solgenium)",
          "value": 7.5,
          "type": "orange",
          "level": "yellow",
          "comment": 'Here is a comment Id like to add' 
        },
      ]
    },
    {
      "name": "UC Robotic",
      "value": 10,
      "type": "black",
      "level": "gray",
      "children": [
        {
          "name": "Chirurgieroboter (BHS)",
          "value": 7.5,
          "type": "orange",
          "level": "yellow",
          "comment": 'Here is a comment Id like to add' 
        }
      ]
    }
  ] 
}; 
const jsonData = JSON.stringify(data, null, 2);


// save as JSON ////////////////////////////////
// const fs = require('fs');
// try {
//   fs.writeFileSync('data.json', jsonData);
//   console.log('JSON data has been written to data.json');
// } catch (err) {
//   console.error('Error writing JSON file:', err);
// }

// let url = 'https://raw.githubusercontent.com/theBrebb/UseCase_Trees/main/data.json'

// d3.json(url).then( function(data){
//    //console.log("here's the data: ", data)

  
const margin = {top: 0, right: 350, bottom: 50, left: 100},
      width  = 1000 - margin.left - margin.right,
      height = 800 - margin.top - margin.bottom;

const treemap = d3.tree().size([height, width]);

let nodes = d3.hierarchy(data, d => d.children);
nodes = treemap(nodes);

const svg = d3.select("@useCaseTree").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom),
     
g = svg.append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

const link = g.selectAll(".link")
    .data( nodes.descendants().slice(1))
    .enter().append("path")
    .attr("class", "link")
    .style("stroke", d => d.data.level)
    .attr("d", d => {
        return "M" + d.y + "," + d.x
          + "C" + (d.y + d.parent.y) / 2 + "," + d.x
          + " " + (d.y + d.parent.y) / 2 + "," + d.parent.x
          + " " + d.parent.y + "," + d.parent.x;
        });

        
// adds each node as a group
const node = g.selectAll(".node")
    .data(nodes.descendants())
    .enter().append("g")
    .attr("class", d => "node" + (d.children ? " node--internal" : " node--leaf"))
    .attr("transform", d => "translate(" + d.y + "," + d.x + ")")
    .on('mouseover', function (d,i){
      
    });

// adds the circle to the node
node.append("circle")
  .attr("r", d => d.data.value)
  .style("stroke", d => d.data.type)
  .style("fill", d => d.data.level);
  

  function wrapText(text, width) {
    text.each(function () {
      const node = d3.select(this);
      const words = node.text().split(/\s+/).reverse();
      const lineHeight = 2.8;
      const x = node.attr("x");
      const y = node.attr("y");
      const dy = parseFloat(node.attr("dy"));
      let line = [];
      let lineNumber = 0;
      let tspan = node.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");
  
      while (words.length) {
        const word = words.pop();
        line.push(word);
        tspan.text(line.join(" "));
  
        if (line.join(" ").length > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = node
            .append("tspan")
            .attr("x", x)
            .attr("y", y)
            .attr("dy", ++lineNumber * lineHeight + dy +"em")
            .text(word);
        }
      }
    });
  }

// adds the text to the node with line breaks on the right side
node.append("text")
  .attr("dy", "-1.2em") 
  .attr("dx", "-4.0em") 
  .attr("x", d => d.children ? (d.data.value - 00) : 60)
  .attr("y", d => d.children ? (d.data.value - 12) : 20)
  //.style("text-anchor", d => d.children ? "start" : "end") // Updated text-anchor for main text element
  .text(d => d.data.name) // Set initial text for main text element
  //.call(wrapText, 35); // 100 is the desired width for the text before wrapping




// }).catch(error => {
//   console.log("error fetching url", url);
// });