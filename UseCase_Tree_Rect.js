
const data = {
  "name": "PRESENT",
  "value": 10,
  "type": "black",
  "level": "black",
  "children": [
    {
      "name": "Production",
      "value": 10,
      "type": "black",
      "level": "gray",
      "children": [
        {
          "name": "Sortiermaschinen (Messfeld / Binder)",
          "value": 7.5,
          "type": "orange",
          "level": "purple",
          "comment": '<b> Sortiermaschinen (Messfeld / Binder) </b> <br>' +
            '<li> <b> 18.10. </b> Erstes Meeting mit Binder. Vermutlich sehr viele Daten, keine klassische Zeitreihe.' +
            '<li> <b> 14.11. </b>    GG bittet um Beispieldatensatz </li> ' +
            '<li> <b> 09.01. </b>    Michele fragt bei Binder bzgl. Besuch an. </li> '
        },
   
        {
          "name": 'Produktionsanlagen & - qualität (Dankl+partner, RHI)',
          "value": 7.5,
          "type": "red",
          "level": "purple",
          "comment": '<b>Produktionsanlagen & - qualität </b> (Anton A., RHI)' +
            '<li> Ende Nov. Termin (Anton A. + RHI). </li>' +
            '<li> <b> 09.01. </b> Anton A. noch in Diskussion mit RHI </li> '
            
        }
      ]
    },
    {
      "name": "Buildings",
      "value": 10,
      "type": "black",
      "level": "gray",
      "children": [
        {
          "name": "Energie und Betrieb",
          "value": 7.5,
          "type": "green",
          "level": "blue",
          "comment": ' none ',
          "children": [
            {
              "name": "Stromerzeugungsprognose (Open Data / TUG Bachelorarbeit)",
              "value": 7.5,
              "type": "green",
              "level": "blue",
              "comment": '- Ursprünglich von Flughafen Wien vorgeschlagen, Daten allerdings nicht verfügbar. <br> - Bachelorarbeit @ TUG mit open access data. ' 
              
            },
            {
              "name": "Rolltreppe (Flughafen Wien)",
              "value": 7.5,
              "type": "Orange",
              "level": "blue",
              "comment": '- Daten wurden von Flughafen Wien zugesichert. <br> - Next: Wann kommen welche Daten? ' + 
              '<li> <b> 09.01. </b> Sensoren sind noch nicht verbaut, evtl. anderes predictive Maintenance UC von VIE. </li> '
            },
          ]
        },
        {
          "name": "Raumklima und Lüftung",
          "value": 7.5,
          "type": "green",
          "level": "blue",
          "comment": ' ',
          "children": [
            {
              "name": "Raumklima AirQ (A0Dev)",
              "value": 7.5,
              "type": "green",
              "level": "blue",
              "comment": '- 3 Geräte in Wien, Graz und Innsbruck vorhanden, Daten werden aufgenommen.<br>- Daten TUG sind Teil einer Masterarbeit. '
            },
            {
              "name": "Luftzirkulationsgerät  (Dankl+partner)",
              "value": 7.5,
              "type": "red",
              "level": "purple",
              "comment": 'Anfrage ausgeschickt. ' +
              '<li> <b> 09.01. </b>  </li> '
              
            },
          ]
        }
      ]
    },
    {
      "name": "Health",
      "value": 10,
      "type": "black",
      "level": "gray",
      "children": [
        {
          "name": "Strom/Netzwerk und Resourcenplanung (KPC & Solgenium)",
          "value": 7.5,
          "type": "orange",
          "level": "yellow",
          "comment": '- Beispieldaten  verfügbar, eventuell synthetisch weiter ausbauen. <br> - Masterarbeit auf den Daten @TUG. <br> - 14.11. Zusammenlegung von Patientenfluss & Personenampel. '+
          '<li> <b> 09.01. </b> Datenverfügbarkeit?? </li> '
        },
        {
          "name": "Steuerung & Interaktion (BHS)",
          "value": 7.5,
          "type": "orange",
          "level": "yellow",
          "comment": 'unstrukturierte log files available, Strukturierung derzeit bei BHS in Arbeit. <br> - logfile STrukturierung komplex, Konsortium wartet. '
        }
      ]
    },
    {
      "name": "Misc.",
      "value": 10,
      "type": "black",
      "level": "gray",
      "comment": "All the uses cases that have been talked about once but not further specified.",
      "children": [
        {
          "name": " TBD (Messfeld / Fresenius)",
          "value": 7.5,
          "type": "red",
          "level": "purple",
          "comment": '<b> TBD (Messfeld / Fresenius) </b>' +
            '<li> <b> 3.10.</b> Messfeld will Termin mit Fresenius ausmachen. </li>' +
            '<li> <b> 09.01.24:</b> Daten werden innerhalb des Projekts nicht verfügbar sein, UC closed.'
        },
        {
          "name": "langlebige Anlagen, Wasserkraft 30-40 Jahre (Andreas D., SBG AG)",
          "value": 7.5,
          "type": "red",
          "level": "purple",
          "comment": '<li> <br> 09.01.24: Noch im Gespräch mit SBG AG, ob Daten verfügbar sind und, ob sie mitmachen wollen. </br> </li>'
        },
        {
          "name": "Pumpen/Turbinen/Filtersysteme  (Anton A., Andritz)",
          "value": 7.5,
          "type": "red",
          "level": "purple",
          "comment": '<br> 09.01.24:</br> Im Gespräch, ob es ein UC wird!'
        },
        {
          "name": "Autonomie Nutzfahrzeuge (ARTI)",
          "value": 7.5,
          "type": "red",
          "level": "purple",
          "comment": 'Wurde nur einmal erwähnt, dann nie wieder besprochen.'
        },
        {
          "name": "Prozesstechnik / Einkaufsplanung (Benjamin B.)",
          "value": 7.5,
          "type": "red",
          "level": "purple",
          "comment": 'Wurde nur einmal erwähnt, dann nie wieder besprochen.'
        },
        {
          "name": "Energieeinsparung Heiz- u. Kühlsysteme (Roman B.)",
          "value": 7.5,
          "type": "red",
          "level": "blue",
          "comment": 'Wurde nur einmal erwähnt, dann nie wieder besprochen.'
        }

      ]
    }
  ]
};

const jsonData = JSON.stringify(data, null, 2);


/////////////////// save as JSON ////////////////////////////////
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

  
const margin = {top: 0, right: 330, bottom: 50, left: 50},
      width  = 1000 - margin.left - margin.right,
      height = 800 - margin.top - margin.bottom;

const treemap = d3.tree().size([height, width]);

let nodes = d3.hierarchy(data, d => d.children);
nodes = treemap(nodes);

const svg = d3.select("#useCaseTree").append("svg")
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

        
const node = g.selectAll(".node")
    .data(nodes.descendants())
    .enter().append("g")
    .attr("class", d => "node" + (d.children ? " node--internal" : " node--leaf"))
    .attr("transform", d => "translate(" + d.y + "," + d.x + ")")
    .on('mouseover', function (d, i) {
        const tooltip = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        tooltip.transition()
            .duration(200)
            .style("opacity", .9);

        tooltip.html(d.data.comment)
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY + 20) + "px");
    })
    .on('mouseout', function (d, i) {
       
        d3.select(".tooltip").remove();
    });

node.append("rect")
  .attr("x", d => d.data.value-10)
  .attr("y", d => d.data.value-22)
  .attr('width', 25) //400
  .attr('height', 25)
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

node.append("text")
  .attr("dy", "-1.2em") 
  .attr("dx", "-4.0em") 
  .attr("x", d => d.children ? (d.data.value + 30) : + 90)
  .attr("y", d => d.children ? (d.data.value - 15) : 20)
  .text(d => d.data.name) 
  .call(wrapText, 100); 




