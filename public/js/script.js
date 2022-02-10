var hbg = document.getElementById('hbg');
var navbr = document.getElementById('navbr');
var bgprof = document.getElementById('bg-profile');
var hidn = document.querySelectorAll('#hdn');
hbg.addEventListener('click', function () {
    console.log('masuk');
    navbr.classList.toggle('w-52');
    navbr.classList.toggle('w-16');

    bgprof.classList.toggle('bg-slate-600');
    hidn.forEach(v =>{
        v.classList.toggle('hidden');
    })

});