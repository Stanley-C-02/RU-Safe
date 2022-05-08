async function deploy() {
  const els = document.querySelectorAll("<REPLACE_WITH_Endpoint>");
  const promises = [];
  for (const el of els) {
    promises.push(fetch(el.href, { method: "GET" }));
  }

  const responses = await Promise.all(promises);
  for (const response of responses) {
    console.log(response);
  }
}

  function progress() {
    document.getElementById("progress").innerHTML = "Loading...";
  }

  function work() {
    var link = document.getElementById("url").innerHTML;
    workFunction(link);
  }

  let inputSet = [];
  for(let i = 0; i < els.length; i++) {  
    inputSet.push(els[i].href);
  }
    if(!inputSet.includes(els[i].href)) {
      inputSet.push(els[i].href);
    }
  }

  function workFunction(link) {
    progress();
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      mode: "no-cors",
    };
    fetch(link, requestOptions)
      .then((response) => response.json())
      .then(
        (result) => {
          if(result.summary) {
            document.getElementById("summary").innerHTML = result.summary;
          } else {
            document.getElementById("summary").innerHTML = "No summary found";
          }
        }
      )
    return true; 
  }

  let job = dcp.compute.for(inputSet, workFunction);
  job.public.name = 'RU-Safe Checking';

  job.computeGroups = [
    {joinKey: 'hackathon', joinSecret: 'dcp2022'}
  ];
;
  job.on('readystatechange', rs => console.log('! readystate', rs));
  
  job.on('result', (ev) => {
    console.log(`! received result: ${ev.result}`);
    document.getElementById("output").appendChild(document.createTextNode(ev.result+'-'));
  });

  let resultSet = await job.exec();
  console.log(Array.from(resultSet).join(''));
  console.log('working!');
}

deploy();
