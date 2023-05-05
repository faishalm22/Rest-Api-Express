function skalaHardskill(himpunan1, himpunan2){
    let skala = 0;
    let irisan_himpunan = himpunan1.filter(x => himpunan2.includes(x));
   // console.log(irisanFramework.length);
    if (irisan_himpunan.length==0) skala = 1
    else if(irisan_himpunan.length==himpunan2.length) skala = 5
    else skala = 3;
  
    return skala;
}
  
function skalaPersonal(talent, req){
    let skala = 0;
  
    if (talent==req) skala = 5
    else skala = 3;
  
    return skala;
}
  
function pembobotanGap(skalaNilai){
  const profileReq = 5;
  let selisih_gap = skalaNilai[prop] - profileReq;

  return selisih_gap;
}

function nilaiCoreFactor(){

}

function nilaiSecondaryFactor(){

}

function profileMatching(skalaNilai){
    //sanchez v
    //framework v
    //database v
    //role
    //lama bekerja
    //gender
    //umur
    //gap = talent - req
    const pemetaanGap = {};
    //pemetaanGap['nama'] = skalaNilai['nama'];
    for (let prop in skalaNilai) {
      if (typeof skalaNilai[prop] == 'string'){
        pemetaanGap[prop] = skalaNilai[prop];
      } 
      else {
        pemetaanGap[prop] = pembobotanGap(skalaNilai[prop]);
      }
    }
    nilaiCoreFactor();
    nilaiSecondaryFactor();
    console.log('profile matching');
  console.log(pemetaanGap);
}

module.exports = {
    skalaHardskill,
    skalaPersonal,
    profileMatching
};