// Fetch data from the JSON file
fetch('../data/kelas.json')
  .then(response => response.json())
  .then(data => {
    const containerClass = document.querySelector('.container-class');
    let firstClass = {};
    let secondClass = {};
    let thirdClass = {};

    data.kelas.forEach(kelas => {
        
        if(kelas.id===1){
          firstClass=kelas
        }else if(kelas.id===2){
          secondClass=kelas
        }else{
          thirdClass=kelas
        }

        // Notifications
      const notif=document.querySelector('.notif');
      notif.innerHTML=data.kelas.length
    });
    const todayClass=document.createElement('div');
    todayClass.classList.add('grid','grid-cols-2','justify-between','gap-4','w-96', 'lg:w-full','mt-3','today-class');
    const first=`
      <div class="bg-primary rounded-lg p-4 lesson-1 grid justify-between first">
            <span>Saat Ini</span>
            <h2 class="text-2xl text-white mt-1 mb-3">${firstClass.nama_mata_kuliah}</h2>
            <div class="time grid grid-row-1 grid-flow-col">
                <img src="/images/time.svg" alt="" srcset="" >
                <span class="col-span-6 text-white">${firstClass.waktu.mulai} ~ ${firstClass.waktu.selesai}</span>
            </div>
            <div class="room grid grid-row-1 grid-flow-col">
                <img src="/images/room.svg" alt="" srcset="" >
                <span class="col-span-7 text-white">${firstClass.tempat}</span>
            </div>
            <div class="people grid grid-row-1 grid-flow-col">
                <img src="/images/people.svg" alt="" srcset="" >
                <span class="col-span-6 text-white">${firstClass.nama_dosen}</span>
            </div>
      </div>
    `;
    const second=`
      <div class="bg-gray-600 rounded-lg p-4 lesson-2 grid justify-between second">
          <span>Selanjutnya</span>
          <h2 class="text-2xl text-white mt-1 mb-3">${secondClass.nama_mata_kuliah}</h2>
          <div class="time grid grid-row-1 grid-flow-col">
              <img src="/images/time.svg" alt="" srcset="" >
              <span class="col-span-6 text-white">${secondClass.waktu.mulai} ~ ${secondClass.waktu.selesai}</span>
          </div>
          <div class="room grid grid-row-1 grid-flow-col">
              <img src="/images/room.svg" alt="" srcset="" >
              <span class="col-span-7 text-white">${secondClass.tempat}</span>
          </div>
          <div class="people grid grid-row-1 grid-flow-col">
              <img src="/images/people.svg" alt="" srcset="" >
              <span class="col-span-6 text-white">${secondClass.nama_dosen}</span>
          </div>
      </div>
    `
    todayClass.innerHTML=`
      ${first}
      ${second}
    `;
    containerClass.appendChild(todayClass);


    // Event Click
    const previousClass=document.querySelector('.previous-class');
    const nextClass=document.querySelector('.next-class');
    // Previous
    previousClass.addEventListener('click',()=>{
      const todayClassContainer=document.querySelector('.today-class');
      const lesson1=todayClassContainer.querySelector('.lesson-1');
      const lesson2=todayClassContainer.querySelector('.lesson-2');
      if(lesson1.classList.contains('bg-primary')){
        todayClassContainer.innerHTML=`
          <div class="bg-gray-600 rounded-lg p-4 lesson-1 grid justify-between third">
              <span>Selanjutnya</span>
              <h2 class="text-2xl text-white mt-1 mb-3">${thirdClass.nama_mata_kuliah}</h2>
              <div class="time grid grid-row-1 grid-flow-col">
                  <img src="/images/time.svg" alt="" srcset="" >
                  <span class="col-span-6 text-white">${thirdClass.waktu.mulai} ~ ${thirdClass.waktu.selesai}</span>
              </div>
              <div class="room grid grid-row-1 grid-flow-col">
                  <img src="/images/room.svg" alt="" srcset="" >
                  <span class="col-span-7 text-white">${thirdClass.tempat}</span>
              </div>
              <div class="people grid grid-row-1 grid-flow-col">
                  <img src="/images/people.svg" alt="" srcset="" >
                  <span class="col-span-6 text-white">${thirdClass.nama_dosen}</span>
              </div>
          </div>
          <div class="bg-primary rounded-lg p-4 lesson-2 grid justify-between first">
            <span>Saat Ini</span>
            <h2 class="text-2xl text-white mt-1 mb-3">${firstClass.nama_mata_kuliah}</h2>
            <div class="time grid grid-row-1 grid-flow-col">
                <img src="/images/time.svg" alt="" srcset="" >
                <span class="col-span-6 text-white">${firstClass.waktu.mulai} ~ ${firstClass.waktu.selesai}</span>
            </div>
            <div class="room grid grid-row-1 grid-flow-col">
                <img src="/images/room.svg" alt="" srcset="" >
                <span class="col-span-7 text-white">${firstClass.tempat}</span>
            </div>
            <div class="people grid grid-row-1 grid-flow-col">
                <img src="/images/people.svg" alt="" srcset="" >
                <span class="col-span-6 text-white">${firstClass.nama_dosen}</span>
            </div>
          </div>
        `
      }else if(lesson2.classList.contains('bg-primary')){
        todayClassContainer.innerHTML=`
          <div class="bg-gray-600 rounded-lg p-4 lesson-1 grid justify-between second">
          <span>Selanjutnya</span>
          <h2 class="text-2xl text-white mt-1 mb-3">${secondClass.nama_mata_kuliah}</h2>
          <div class="time grid grid-row-1 grid-flow-col">
              <img src="/images/time.svg" alt="" srcset="" >
              <span class="col-span-6 text-white">${secondClass.waktu.mulai} ~ ${secondClass.waktu.selesai}</span>
          </div>
          <div class="room grid grid-row-1 grid-flow-col">
              <img src="/images/room.svg" alt="" srcset="" >
              <span class="col-span-7 text-white">${secondClass.tempat}</span>
          </div>
          <div class="people grid grid-row-1 grid-flow-col">
              <img src="/images/people.svg" alt="" srcset="" >
              <span class="col-span-6 text-white">${secondClass.nama_dosen}</span>
          </div>
          </div>
          <div class="bg-gray-600 rounded-lg p-4 lesson-2 grid justify-between third">
          <span>Selanjutnya</span>
          <h2 class="text-2xl text-white mt-1 mb-3">${thirdClass.nama_mata_kuliah}</h2>
          <div class="time grid grid-row-1 grid-flow-col">
              <img src="/images/time.svg" alt="" srcset="" >
              <span class="col-span-6 text-white">${thirdClass.waktu.mulai} ~ ${thirdClass.waktu.selesai}</span>
          </div>
          <div class="room grid grid-row-1 grid-flow-col">
              <img src="/images/room.svg" alt="" srcset="" >
              <span class="col-span-7 text-white">${thirdClass.tempat}</span>
          </div>
          <div class="people grid grid-row-1 grid-flow-col">
              <img src="/images/people.svg" alt="" srcset="" >
              <span class="col-span-6 text-white">${thirdClass.nama_dosen}</span>
          </div>
      </div>
          
        `
      }else{
        todayClassContainer.innerHTML=`
          <div class="bg-primary rounded-lg p-4 lesson-1 grid justify-between first">
            <span>Saat Ini</span>
            <h2 class="text-2xl text-white mt-1 mb-3">${firstClass.nama_mata_kuliah}</h2>
            <div class="time grid grid-row-1 grid-flow-col">
                <img src="/images/time.svg" alt="" srcset="" >
                <span class="col-span-6 text-white">${firstClass.waktu.mulai} ~ ${firstClass.waktu.selesai}</span>
            </div>
            <div class="room grid grid-row-1 grid-flow-col">
                <img src="/images/room.svg" alt="" srcset="" >
                <span class="col-span-7 text-white">${firstClass.tempat}</span>
            </div>
            <div class="people grid grid-row-1 grid-flow-col">
                <img src="/images/people.svg" alt="" srcset="" >
                <span class="col-span-6 text-white">${firstClass.nama_dosen}</span>
            </div>
      </div>
          <div class="bg-gray-600 rounded-lg p-4 lesson-2 grid justify-between second">
          <span>Selanjutnya</span>
          <h2 class="text-2xl text-white mt-1 mb-3">${secondClass.nama_mata_kuliah}</h2>
          <div class="time grid grid-row-1 grid-flow-col">
              <img src="/images/time.svg" alt="" srcset="" >
              <span class="col-span-6 text-white">${secondClass.waktu.mulai} ~ ${secondClass.waktu.selesai}</span>
          </div>
          <div class="room grid grid-row-1 grid-flow-col">
              <img src="/images/room.svg" alt="" srcset="" >
              <span class="col-span-7 text-white">${secondClass.tempat}</span>
          </div>
          <div class="people grid grid-row-1 grid-flow-col">
              <img src="/images/people.svg" alt="" srcset="" >
              <span class="col-span-6 text-white">${secondClass.nama_dosen}</span>
          </div>
      </div>
        `
      }
      
    });
    // Next 
    nextClass.addEventListener('click',()=>{
      const todayClassContainer=document.querySelector('.today-class');
      const lesson1=todayClassContainer.querySelector('.lesson-1');
      const lesson2=todayClassContainer.querySelector('.lesson-2');
      if(lesson1.classList.contains('bg-primary')){
        todayClassContainer.innerHTML=`
          <div class="bg-gray-600 rounded-lg p-4 lesson-1 grid justify-between second">
            <span>Selanjutnya</span>
            <h2 class="text-2xl text-white mt-1 mb-3">${secondClass.nama_mata_kuliah}</h2>
            <div class="time grid grid-row-1 grid-flow-col">
                <img src="/images/time.svg" alt="" srcset="" >
                <span class="col-span-6 text-white">${secondClass.waktu.mulai} ~ ${secondClass.waktu.selesai}</span>
            </div>
            <div class="room grid grid-row-1 grid-flow-col">
                <img src="/images/room.svg" alt="" srcset="" >
                <span class="col-span-7 text-white">${secondClass.tempat}</span>
            </div>
            <div class="people grid grid-row-1 grid-flow-col">
                <img src="/images/people.svg" alt="" srcset="" >
                <span class="col-span-6 text-white">${secondClass.nama_dosen}</span>
            </div>
          </div>
          <div class="bg-gray-600 rounded-lg p-4 lesson-2 grid justify-between third">
              <span>Selanjutnya</span>
              <h2 class="text-2xl text-white mt-1 mb-3">${thirdClass.nama_mata_kuliah}</h2>
              <div class="time grid grid-row-1 grid-flow-col">
                  <img src="/images/time.svg" alt="" srcset="" >
                  <span class="col-span-6 text-white">${thirdClass.waktu.mulai} ~ ${thirdClass.waktu.selesai}</span>
              </div>
              <div class="room grid grid-row-1 grid-flow-col">
                  <img src="/images/room.svg" alt="" srcset="" >
                  <span class="col-span-7 text-white">${thirdClass.tempat}</span>
              </div>
              <div class="people grid grid-row-1 grid-flow-col">
                  <img src="/images/people.svg" alt="" srcset="" >
                  <span class="col-span-6 text-white">${thirdClass.nama_dosen}</span>
              </div>
          </div>
        `
      }else if(lesson2.classList.contains('bg-primary')){
        todayClassContainer.innerHTML=`
          <div class="bg-primary rounded-lg p-4 lesson-1 grid justify-between first">
            <span>Saat Ini</span>
            <h2 class="text-2xl text-white mt-1 mb-3">${firstClass.nama_mata_kuliah}</h2>
            <div class="time grid grid-row-1 grid-flow-col">
                <img src="/images/time.svg" alt="" srcset="" >
                <span class="col-span-6 text-white">${firstClass.waktu.mulai} ~ ${firstClass.waktu.selesai}</span>
            </div>
            <div class="room grid grid-row-1 grid-flow-col">
                <img src="/images/room.svg" alt="" srcset="" >
                <span class="col-span-7 text-white">${firstClass.tempat}</span>
            </div>
            <div class="people grid grid-row-1 grid-flow-col">
                <img src="/images/people.svg" alt="" srcset="" >
                <span class="col-span-6 text-white">${firstClass.nama_dosen}</span>
            </div>
          </div>
          <div class="bg-gray-600 rounded-lg p-4 lesson-2 grid justify-between second">
            <span>Selanjutnya</span>
            <h2 class="text-2xl text-white mt-1 mb-3">${secondClass.nama_mata_kuliah}</h2>
            <div class="time grid grid-row-1 grid-flow-col">
                <img src="/images/time.svg" alt="" srcset="" >
                <span class="col-span-6 text-white">${secondClass.waktu.mulai} ~ ${secondClass.waktu.selesai}</span>
            </div>
            <div class="room grid grid-row-1 grid-flow-col">
                <img src="/images/room.svg" alt="" srcset="" >
                <span class="col-span-7 text-white">${secondClass.tempat}</span>
            </div>
            <div class="people grid grid-row-1 grid-flow-col">
                <img src="/images/people.svg" alt="" srcset="" >
                <span class="col-span-6 text-white">${secondClass.nama_dosen}</span>
            </div>
          </div>
          
          
        `
      }else{
        todayClassContainer.innerHTML=`
          <div class="bg-gray-600 rounded-lg p-4 lesson-1 grid justify-between third">
          <span>Selanjutnya</span>
          <h2 class="text-2xl text-white mt-1 mb-3">${thirdClass.nama_mata_kuliah}</h2>
          <div class="time grid grid-row-1 grid-flow-col">
              <img src="/images/time.svg" alt="" srcset="" >
              <span class="col-span-6 text-white">${thirdClass.waktu.mulai} ~ ${thirdClass.waktu.selesai}</span>
          </div>
          <div class="room grid grid-row-1 grid-flow-col">
              <img src="/images/room.svg" alt="" srcset="" >
              <span class="col-span-7 text-white">${thirdClass.tempat}</span>
          </div>
          <div class="people grid grid-row-1 grid-flow-col">
              <img src="/images/people.svg" alt="" srcset="" >
              <span class="col-span-6 text-white">${thirdClass.nama_dosen}</span>
          </div>
          </div>
          <div class="bg-primary rounded-lg p-4 lesson-2 grid justify-between first">
            <span>Saat Ini</span>
            <h2 class="text-2xl text-white mt-1 mb-3">${firstClass.nama_mata_kuliah}</h2>
            <div class="time grid grid-row-1 grid-flow-col">
                <img src="/images/time.svg" alt="" srcset="" >
                <span class="col-span-6 text-white">${firstClass.waktu.mulai} ~ ${firstClass.waktu.selesai}</span>
            </div>
            <div class="room grid grid-row-1 grid-flow-col">
                <img src="/images/room.svg" alt="" srcset="" >
                <span class="col-span-7 text-white">${firstClass.tempat}</span>
            </div>
            <div class="people grid grid-row-1 grid-flow-col">
                <img src="/images/people.svg" alt="" srcset="" >
                <span class="col-span-6 text-white">${firstClass.nama_dosen}</span>
            </div>
        `
      }
    });


    // Notifikasi
    

  })
  .catch(error => console.error('Error fetching data:', error));



//