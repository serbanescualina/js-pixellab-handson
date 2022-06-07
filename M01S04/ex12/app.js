var globalVariable = `Ma aflu in contextul global`;

function contextTest() {
  var localVariable = `ma aflu in contextul local`;
  var globalVariable = `Nu ma aflu in contextul `;

  console.log(globalVariable);
  console.log(localVariable);
  console.log(noVariable);
}

contextTest();
