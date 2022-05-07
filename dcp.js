// call deploy to check
async function deploy() {
  // document.getElementById("output").innerHTML = "";
  /* INPUT SET */
  const els = document.querySelectorAll("*[href]");

  let inputSet = [];
  for(let i = 0; i < els.length; i++) {  // array of URLs to check
    if(!inputSet.includes(els[i].href)) {
      inputSet.push(els[i].href);
    }
  }

  /* WORK FUNCTION */
  function workFunction(link) {
    progress();
    return true;  // TODO: MAKE REQUEST AND RETURN RESULT HERE!!!
  }

  /* COMPUTE.FOR */ // init for job to be done
  let job = dcp.compute.for(inputSet, workFunction);
  job.public.name = 'RU-Safe Checking';

  /* COMPUTE GROUP */ // only gives work to systems on the network below, for example at
  job.computeGroups = [
    {joinKey: 'hackathon', joinSecret: 'dcp2022'}
  ];
;
  /* EVENTS */ // for debugging / logging
  job.on('readystatechange', rs => console.log('! readystate', rs));
  job.on('result', (ev) => {
    console.log(`! received result: ${ev.result}`);
    document.getElementById("output").appendChild(document.createTextNode(ev.result+'-'));
  });

  /* JOB.EXEC */ // sends the job out, waiting for results (results are in the same order as input; ['a', 'b', 'c'] >> upperCase gives ['A', 'B', 'C'])
  let resultSet = await job.exec();
  console.log(Array.from(resultSet).join(''));
  console.log('! Job complete');
}

deploy();
