var globalVariable = 'Ma aflu in contextul global';

if (true) {
  var localVariable = `ma aflu in contextul local`;
  var globalVariable = 'Nu ma aflu in contextul global';

  console.log(globalVariable);
  console.log(localVariable);
}
